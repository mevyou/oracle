import { XApiService } from './xApiService';
import { XaiService } from './xaiService';
import { cache } from '../utils/cache';
import { 
  ResearchRequest, 
  ResearchResult, 
  AggregatorResponse, 
  XSearchResponse,
  WebSearchResult,
  XSearchResult 
} from '../types/aggregator';

export class AggregatorService {
  private xApiService: XApiService;
  private xaiService: XaiService;

  constructor() {
    this.xApiService = new XApiService();
    this.xaiService = new XaiService();
  }

  /**
   * Main method to research any topic and return conclusive outcome
   * @param request - Research request
   * @returns Promise<AggregatorResponse>
   */
  async researchTopic(request: ResearchRequest): Promise<AggregatorResponse> {
    try {
      console.log(`[Aggregator Service] Starting research for topic: ${request.topic}`);
      
      // Use xAI with agentic tools for comprehensive research
      const result = await this.xaiService.researchWithAgenticTools(request);
      
      console.log(`[Aggregator Service] Research completed for topic: ${request.topic}`);
      
      return {
        success: true,
        result,
        request_id: this.generateRequestId()
      };
    } catch (error) {
      console.error('[Aggregator Service] Error in research:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Research topic with manual data collection (fallback method)
   * @param request - Research request
   * @returns Promise<AggregatorResponse>
   */
  async researchTopicManual(request: ResearchRequest): Promise<AggregatorResponse> {
    try {
      console.log(`[Aggregator Service] Starting manual research for topic: ${request.topic}`);
      
      const startTime = Date.now();
      
      // Collect data from multiple sources
      const [xData, webData] = await Promise.allSettled([
        this.collectXData(request),
        this.collectWebData(request)
      ]);
      
      // Combine all data
      const xResults = xData.status === 'fulfilled' ? xData.value : [];
      const webResults = webData.status === 'fulfilled' ? webData.value : [];
      
      // Transform sources to match the expected format
      const allSources = [
        ...xResults.map(xResult => ({
          type: 'x_post' as const,
          title: `Tweet by @${xResult.user?.username || 'unknown'}`,
          url: `https://twitter.com/${xResult.user?.username || 'unknown'}/status/${xResult.tweet.id}`,
          content: xResult.tweet.text,
          relevance_score: xResult.relevance_score,
          timestamp: xResult.tweet.created_at
        })),
        ...webResults.map(webResult => ({
          type: 'web_article' as const,
          title: webResult.title,
          url: webResult.url,
          content: webResult.snippet,
          relevance_score: 0.8, // Default relevance for web results
          timestamp: webResult.published_date || new Date().toISOString()
        }))
      ];
      
      // Use xAI to analyze the collected data
      const analysis = await this.analyzeCollectedData(request, allSources);
      
      const researchTime = Date.now() - startTime;
      
      const result: ResearchResult = {
        topic: request.topic,
        outcome: analysis.outcome,
        confidence: analysis.confidence,
        reasoning: analysis.reasoning,
        sources: allSources,
        metadata: {
          research_time: researchTime,
          sources_analyzed: allSources.length,
          ai_model_used: 'grok-4',
          search_queries_used: [request.topic]
        }
      };
      
      console.log(`[Aggregator Service] Manual research completed for topic: ${request.topic}`);
      
      return {
        success: true,
        result,
        request_id: this.generateRequestId()
      };
    } catch (error) {
      console.error('[Aggregator Service] Error in manual research:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Quick research for simple yes/no questions
   * @param topic - Research topic
   * @returns Promise<AggregatorResponse>
   */
  async quickResearch(topic: string): Promise<AggregatorResponse> {
    const request: ResearchRequest = {
      topic,
      outcomeType: 'yes_no',
      maxResults: 5,
      includeSources: true
    };
    
    return this.researchTopic(request);
  }

  /**
   * Research with multiple choice options
   * @param topic - Research topic
   * @param options - Available options
   * @returns Promise<AggregatorResponse>
   */
  async researchWithOptions(topic: string, options: string[]): Promise<AggregatorResponse> {
    const request: ResearchRequest = {
      topic,
      outcomeType: 'multiple_choice',
      options,
      maxResults: 10,
      includeSources: true
    };
    
    return this.researchTopic(request);
  }

  /**
   * Research with date range filter
   * @param topic - Research topic
   * @param startDate - Start date (YYYY-MM-DD)
   * @param endDate - End date (YYYY-MM-DD)
   * @returns Promise<AggregatorResponse>
   */
  async researchWithDateRange(topic: string, startDate: string, endDate: string): Promise<AggregatorResponse> {
    const request: ResearchRequest = {
      topic,
      outcomeType: 'open_ended',
      maxResults: 15,
      includeSources: true,
      searchFilters: {
        dateRange: { start: startDate, end: endDate }
      }
    };
    
    return this.researchTopic(request);
  }

  /**
   * Collect data from X (Twitter)
   */
  private async collectXData(request: ResearchRequest): Promise<XSearchResult[]> {
    try {
      const searchQuery = this.buildXSearchQuery(request);
      const response = await this.xApiService.searchRecentTweets(searchQuery);
      
      if (!response.data) return [];
      
      return response.data.map(tweet => ({
        tweet,
        user: response.includes?.users?.find(user => user.id === tweet.author_id),
        relevance_score: this.calculateRelevanceScore(tweet.text, request.topic)
      }));
    } catch (error) {
      console.error('[Aggregator Service] Error collecting X data:', error);
      return [];
    }
  }

  /**
   * Collect data from web search (placeholder - would need web search API)
   */
  private async collectWebData(request: ResearchRequest): Promise<WebSearchResult[]> {
    // This would integrate with a web search API like Google Custom Search
    // For now, return empty array as placeholder
    console.log('[Aggregator Service] Web search not implemented yet');
    return [];
  }

  /**
   * Analyze collected data using xAI
   */
  private async analyzeCollectedData(request: ResearchRequest, sources: any[]): Promise<{
    outcome: string;
    confidence: number;
    reasoning: string;
  }> {
    const dataSummary = this.summarizeCollectedData(sources);
    
    const prompt = `Based on the following data about "${request.topic}", provide a conclusive analysis:

${dataSummary}

Please provide:
1. A clear outcome/conclusion
2. Your confidence level (0-100%)
3. Detailed reasoning for your conclusion

${request.outcomeType === 'yes_no' ? 'Answer with YES or NO.' : ''}
${request.outcomeType === 'multiple_choice' && request.options ? 
  `Select from these options: ${request.options.join(', ')}` : ''}`;

    const response = await this.xaiService.simpleCompletion(prompt);
    
    return this.parseAnalysisResponse(response);
  }

  /**
   * Build X search query from research request
   */
  private buildXSearchQuery(request: ResearchRequest): any {
    const query: any = {
      query: request.topic,
      max_results: request.maxResults || 10,
      tweet_fields: ['created_at', 'public_metrics', 'context_annotations', 'lang'],
      user_fields: ['username', 'name', 'verified', 'public_metrics'],
      expansions: ['author_id']
    };

    if (request.searchFilters?.dateRange) {
      query.start_time = request.searchFilters.dateRange.start;
      query.end_time = request.searchFilters.dateRange.end;
    }

    if (request.searchFilters?.language) {
      query.lang = request.searchFilters.language;
    }

    return query;
  }

  /**
   * Calculate relevance score for a tweet
   */
  private calculateRelevanceScore(text: string, topic: string): number {
    const topicWords = topic.toLowerCase().split(' ');
    const textWords = text.toLowerCase().split(' ');
    
    const matches = topicWords.filter(word => 
      textWords.some(textWord => textWord.includes(word))
    ).length;
    
    return Math.min(matches / topicWords.length, 1.0);
  }

  /**
   * Summarize collected data for AI analysis
   */
  private summarizeCollectedData(sources: any[]): string {
    return sources.map((source, index) => {
      if (source.tweet) {
        return `Tweet: "${source.tweet.text}" (Relevance: ${(source.relevance_score * 100).toFixed(1)}%)`;
      } else if (source.title) {
        return `Web Article: "${source.title}" - ${source.snippet}`;
      }
      return `Source ${index + 1}: ${JSON.stringify(source)}`;
    }).join('\n\n');
  }

  /**
   * Parse AI analysis response
   */
  private parseAnalysisResponse(response: string): {
    outcome: string;
    confidence: number;
    reasoning: string;
  } {
    // Extract outcome
    const yesMatch = response.match(/\b(YES|Yes|yes)\b/);
    const noMatch = response.match(/\b(NO|No|no)\b/);
    let outcome = response.substring(0, 200); // Default to first part
    
    if (yesMatch) outcome = 'YES';
    else if (noMatch) outcome = 'NO';
    
    // Extract confidence
    const confidenceMatch = response.match(/confidence[:\s]*(\d+)%/i);
    const confidence = confidenceMatch ? parseInt(confidenceMatch[1]) : 70;
    
    return {
      outcome,
      confidence,
      reasoning: response
    };
  }

  /**
   * Generate unique request ID
   */
  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get research statistics
   */
  async getResearchStats(): Promise<{
    total_requests: number;
    success_rate: number;
    average_research_time: number;
    most_researched_topics: string[];
  }> {
    // This would typically come from a database
    // For now, return mock data
    return {
      total_requests: 0,
      success_rate: 0,
      average_research_time: 0,
      most_researched_topics: []
    };
  }

  /**
   * Validate research request
   */
  private validateRequest(request: ResearchRequest): string[] {
    const errors: string[] = [];
    
    if (!request.topic || request.topic.trim().length === 0) {
      errors.push('Topic is required');
    }
    
    if (request.topic && request.topic.length > 500) {
      errors.push('Topic must be less than 500 characters');
    }
    
    if (request.maxResults && (request.maxResults < 1 || request.maxResults > 100)) {
      errors.push('Max results must be between 1 and 100');
    }
    
    if (request.outcomeType === 'multiple_choice' && (!request.options || request.options.length === 0)) {
      errors.push('Options are required for multiple choice outcome type');
    }
    
    return errors;
  }
}
