import xaiApiClient from '../utils/xaiApiClient';
import { cache } from '../utils/cache';
import { XAIResponse, ResearchRequest, ResearchResult } from '../types/aggregator';

export class XaiService {
  private client = xaiApiClient;

  /**
   * Use xAI with agentic tool calling for comprehensive research
   * @param request - Research request object
   * @returns Promise<ResearchResult>
   */
  async researchWithAgenticTools(request: ResearchRequest): Promise<ResearchResult> {
    const cacheKey = `xai_research:${JSON.stringify(request)}`;
    const cached = cache.get<ResearchResult>(cacheKey);
    
    if (cached) {
      console.log(`[xAI Service] Cache hit for research: ${request.topic}`);
      return cached;
    }

    try {
      const startTime = Date.now();
      
      // Build the research prompt based on the request
      const systemPrompt = this.buildSystemPrompt(request);
      const userPrompt = this.buildUserPrompt(request);

      // Configure tools for agentic research
      const tools = [
        { type: 'web_search' },
        { type: 'x_search' },
        { type: 'code_interpreter' }
      ];

      // Add search filters if specified
      const toolConfig: any = {};
      if (request.searchFilters) {
        if (request.searchFilters.dateRange) {
          toolConfig.from_date = request.searchFilters.dateRange.start;
          toolConfig.to_date = request.searchFilters.dateRange.end;
        }
        if (request.searchFilters.language) {
          toolConfig.lang = request.searchFilters.language;
        }
      }

      const response = await this.client.post<XAIResponse>('/v1/responses', {
        model: 'grok-4-fast',
        input: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        tools: tools.map(tool => ({ ...tool, ...toolConfig })),
        temperature: 0.3, // Lower temperature for more consistent results
        max_tokens: 2000
      });

      const researchTime = Date.now() - startTime;
      
      // Parse the AI response to extract outcome and reasoning
      const result = this.parseAIResponse(response.data, request, researchTime);
      
      // Cache for 1 hour (research results can be cached for a while)
      cache.set(cacheKey, result, 3600);
      
      return result;
    } catch (error) {
      console.error('[xAI Service] Error in agentic research:', error);
      throw error;
    }
  }

  /**
   * Use xAI for simple chat completion without tools
   * @param prompt - User prompt
   * @param systemPrompt - System prompt
   * @returns Promise<string>
   */
  async simpleCompletion(prompt: string, systemPrompt?: string): Promise<string> {
    const cacheKey = `xai_simple:${prompt}:${systemPrompt || 'default'}`;
    const cached = cache.get<string>(cacheKey);
    
    if (cached) {
      console.log(`[xAI Service] Cache hit for simple completion`);
      return cached;
    }

    try {
      const messages: any[] = [
        { role: 'user', content: prompt }
      ];

      if (systemPrompt) {
        messages.unshift({ role: 'system', content: systemPrompt });
      }

      const response = await this.client.post<XAIResponse>('/v1/chat/completions', {
        model: 'grok-4',
        messages,
        temperature: 0.7,
        max_tokens: 1000
      });

      const result = response.data.choices[0].message.content;
      
      // Cache for 30 minutes
      cache.set(cacheKey, result, 1800);
      
      return result;
    } catch (error) {
      console.error('[xAI Service] Error in simple completion:', error);
      throw error;
    }
  }

  /**
   * Use xAI with structured output for consistent response format
   * @param prompt - User prompt
   * @param schema - JSON schema for structured output
   * @returns Promise<any>
   */
  async structuredCompletion(prompt: string, schema: any): Promise<any> {
    const cacheKey = `xai_structured:${prompt}:${JSON.stringify(schema)}`;
    const cached = cache.get<any>(cacheKey);
    
    if (cached) {
      console.log(`[xAI Service] Cache hit for structured completion`);
      return cached;
    }

    try {
      const response = await this.client.post<XAIResponse>('/v1/chat/completions', {
        model: 'grok-4',
        messages: [
          { role: 'system', content: 'You are a helpful AI assistant that provides structured responses.' },
          { role: 'user', content: prompt }
        ],
        response_format: {
          type: 'json_schema',
          json_schema: {
            name: 'structured_response',
            schema: schema,
            strict: true
          }
        },
        temperature: 0.3,
        max_tokens: 1500
      });

      const result = JSON.parse(response.data.choices[0].message.content);
      
      // Cache for 1 hour
      cache.set(cacheKey, result, 3600);
      
      return result;
    } catch (error) {
      console.error('[xAI Service] Error in structured completion:', error);
      throw error;
    }
  }

  /**
   * Build system prompt for research requests
   */
  private buildSystemPrompt(request: ResearchRequest): string {
    let prompt = `You are an expert research assistant specializing in real-time information gathering and analysis. Your task is to research the given topic and provide a conclusive outcome with detailed reasoning.

Key capabilities:
- Search the web for current information
- Search X (Twitter) for real-time social media insights
- Execute code for data analysis and calculations using code interpreter
- Provide structured, evidence-based conclusions

Research Guidelines:
1. Use multiple sources to verify information
2. Prioritize recent, authoritative sources
3. Consider both traditional media and social media perspectives
4. Provide clear reasoning for your conclusions
5. Include confidence levels for your assessments`;

    if (request.outcomeType === 'yes_no') {
      prompt += `\n\nFor this request, provide a YES or NO answer with clear reasoning.`;
    } else if (request.outcomeType === 'multiple_choice') {
      prompt += `\n\nFor this request, select from the provided options and explain your choice.`;
    } else {
      prompt += `\n\nFor this request, provide a comprehensive analysis and conclusion.`;
    }

    return prompt;
  }

  /**
   * Build user prompt for research requests
   */
  private buildUserPrompt(request: ResearchRequest): string {
    let prompt = `Please research the following topic and provide a conclusive outcome: "${request.topic}"`;

    if (request.outcomeType === 'multiple_choice' && request.options) {
      prompt += `\n\nPlease select from these options: ${request.options.join(', ')}`;
    }

    if (request.maxResults) {
      prompt += `\n\nLimit your research to approximately ${request.maxResults} key findings.`;
    }

    prompt += `\n\nProvide your research findings, reasoning, and final conclusion. Include confidence level (0-100%) and cite your sources.`;

    return prompt;
  }

  /**
   * Parse AI response to extract structured result
   */
  private parseAIResponse(response: XAIResponse, request: ResearchRequest, researchTime: number): ResearchResult {
    const content = response.choices[0].message.content;
    
    // Extract outcome and reasoning from the AI response
    const outcome = this.extractOutcome(content, request);
    const reasoning = this.extractReasoning(content);
    const confidence = this.extractConfidence(content);
    
    // Build sources from citations and tool usage
    const sources = this.buildSources(response);
    
    return {
      topic: request.topic,
      outcome,
      confidence,
      reasoning,
      sources,
      metadata: {
        research_time: researchTime,
        sources_analyzed: sources.length,
        ai_model_used: response.model,
        search_queries_used: this.extractSearchQueries(response)
      }
    };
  }

  /**
   * Extract outcome from AI response
   */
  private extractOutcome(content: string, request: ResearchRequest): string {
    if (request.outcomeType === 'yes_no') {
      const yesMatch = content.match(/\b(YES|Yes|yes)\b/);
      const noMatch = content.match(/\b(NO|No|no)\b/);
      
      if (yesMatch) return 'YES';
      if (noMatch) return 'NO';
    }
    
    // For other cases, extract the main conclusion
    const conclusionMatch = content.match(/conclusion[:\s]*(.+?)(?:\n|$)/i);
    if (conclusionMatch) {
      return conclusionMatch[1].trim();
    }
    
    // Fallback: return first sentence or paragraph
    const sentences = content.split(/[.!?]+/);
    return sentences[0]?.trim() || content.substring(0, 200);
  }

  /**
   * Extract reasoning from AI response
   */
  private extractReasoning(content: string): string {
    const reasoningMatch = content.match(/reasoning[:\s]*(.+?)(?:\n\n|$)/i);
    if (reasoningMatch) {
      return reasoningMatch[1].trim();
    }
    
    // Fallback: return the full content as reasoning
    return content;
  }

  /**
   * Extract confidence level from AI response
   */
  private extractConfidence(content: string): number {
    const confidenceMatch = content.match(/confidence[:\s]*(\d+)%/i);
    if (confidenceMatch) {
      return parseInt(confidenceMatch[1]);
    }
    
    // Look for other confidence indicators
    const highConfidence = content.match(/\b(high|very high|extremely confident)\b/i);
    const mediumConfidence = content.match(/\b(medium|moderate|somewhat confident)\b/i);
    const lowConfidence = content.match(/\b(low|uncertain|not confident)\b/i);
    
    if (highConfidence) return 85;
    if (mediumConfidence) return 65;
    if (lowConfidence) return 35;
    
    return 70; // Default confidence
  }

  /**
   * Build sources from response citations and tool usage
   */
  private buildSources(response: XAIResponse): Array<{
    type: 'x_post' | 'web_article' | 'ai_analysis';
    title: string;
    url?: string;
    content: string;
    relevance_score: number;
    timestamp: string;
  }> {
    const sources: any[] = [];
    
    // Add citations as sources
    if (response.citations) {
      response.citations.forEach((url, index) => {
        sources.push({
          type: url.includes('x.com') || url.includes('twitter.com') ? 'x_post' : 'web_article',
          title: `Source ${index + 1}`,
          url,
          content: `Referenced in research`,
          relevance_score: 0.8,
          timestamp: new Date().toISOString()
        });
      });
    }
    
    // Add AI analysis as a source
    sources.push({
      type: 'ai_analysis',
      title: 'AI Analysis',
      content: response.choices[0].message.content,
      relevance_score: 1.0,
      timestamp: new Date().toISOString()
    });
    
    return sources;
  }

  /**
   * Extract search queries from tool calls
   */
  private extractSearchQueries(response: XAIResponse): string[] {
    const queries: string[] = [];
    
    if (response.tool_calls) {
      response.tool_calls.forEach(call => {
        if (call.function.name === 'web_search' || call.function.name === 'x_search') {
          try {
            const args = JSON.parse(call.function.arguments);
            if (args.query) {
              queries.push(args.query);
            }
          } catch (error) {
            console.warn('Error parsing tool call arguments:', error);
          }
        }
      });
    }
    
    return queries;
  }
}
