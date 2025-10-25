# X & xAI Aggregator System

A comprehensive research and outcome prediction system that combines X (Twitter) API and xAI (Grok) to provide real-time, AI-powered research on any topic for betting and decision-making applications.

## Overview

The Aggregator System is designed to accept any topic or prompt from the frontend, research it using real-time data from X (Twitter) and web sources, and return a conclusive outcome with detailed reasoning. This is perfect for betting systems, decision support, and real-time information gathering.

## Key Features

- **Real-time Research**: Uses X API to gather current social media insights
- **AI-Powered Analysis**: Leverages xAI (Grok) with agentic tool calling for comprehensive research
- **Multiple Outcome Types**: Supports yes/no, multiple choice, and open-ended responses
- **Intelligent Caching**: Reduces API costs with smart caching strategies
- **Source Attribution**: Provides detailed source information and confidence levels
- **Flexible Filtering**: Date ranges, language filters, and engagement thresholds

## Architecture

```
Frontend Request → Aggregator Service → [X API + xAI API] → Research Result
```

### Components

1. **X API Service** (`src/services/xApiService.ts`)
   - Searches recent tweets
   - Accesses full archive (with Academic Research access)
   - Retrieves user information
   - Gets trending topics

2. **xAI Service** (`src/services/xaiService.ts`)
   - Agentic tool calling with web search, X search, and code execution
   - Simple chat completions
   - Structured output generation
   - Research analysis and outcome prediction

3. **Aggregator Service** (`src/services/aggregatorService.ts`)
   - Main orchestration layer
   - Combines X and xAI capabilities
   - Handles different research types
   - Manages caching and optimization

## API Endpoints

### Base URL: `/api/aggregator`

#### 1. Main Research Endpoint
**POST** `/research`

Research any topic and get a conclusive outcome.

**Request Body:**
```json
{
  "topic": "Did Chelsea win against Liverpool?",
  "outcomeType": "yes_no",
  "maxResults": 10,
  "includeSources": true,
  "searchFilters": {
    "dateRange": {
      "start": "2024-01-01",
      "end": "2024-01-07"
    },
    "language": "en",
    "verifiedOnly": false,
    "minEngagement": 10
  }
}
```

**Response:**
```json
{
  "success": true,
  "result": {
    "topic": "Did Chelsea win against Liverpool?",
    "outcome": "YES",
    "confidence": 85,
    "reasoning": "Based on recent match data and social media reports...",
    "sources": [
      {
        "type": "x_post",
        "title": "Match Result Tweet",
        "url": "https://x.com/status/1234567890",
        "content": "Chelsea defeats Liverpool 2-1 in today's match",
        "relevance_score": 0.95,
        "timestamp": "2024-01-15T15:30:00Z"
      }
    ],
    "metadata": {
      "research_time": 2500,
      "sources_analyzed": 15,
      "ai_model_used": "grok-4-fast",
      "search_queries_used": ["Chelsea Liverpool match result", "Premier League today"]
    }
  },
  "request_id": "req_1705320600000_abc123def"
}
```

#### 2. Quick Research
**GET** `/quick?topic=...`

Quick yes/no research for simple questions.

**Example:**
```
GET /api/aggregator/quick?topic=Is%20Apple%20stock%20going%20up?
```

#### 3. Multiple Choice Research
**POST** `/options`

Research with predefined options.

**Request Body:**
```json
{
  "topic": "Who won the latest football match?",
  "options": ["Team A", "Team B", "Draw"]
}
```

#### 4. Date Range Research
**POST** `/date-range`

Research with specific date filters.

**Request Body:**
```json
{
  "topic": "What happened in the stock market last week?",
  "startDate": "2024-01-01",
  "endDate": "2024-01-07"
}
```

#### 5. Manual Research (Fallback)
**POST** `/manual`

Manual data collection method when agentic tools are unavailable.

#### 6. Health Check
**GET** `/health`

Check the status of all services.

#### 7. Research Statistics
**GET** `/stats`

Get usage statistics and performance metrics.

#### 8. Examples
**GET** `/examples`

Get example requests for different research types.

## Configuration

### Environment Variables

Add these to your `.env` file:

```env
# X API Configuration (Twitter API v2)
X_API_KEY=your_x_api_key_here
X_API_URL=https://api.twitter.com

# xAI API Configuration (Grok AI)
XAI_API_KEY=your_xai_api_key_here
XAI_API_URL=https://api.x.ai
```

### API Key Setup

1. **X API Key**:
   - Visit [Twitter Developer Portal](https://developer.twitter.com)
   - Create a new app
   - Generate API keys with read permissions
   - Note: Academic Research access required for full archive search

2. **xAI API Key**:
   - Visit [xAI Console](https://console.x.ai)
   - Create an account and add credits
   - Generate an API key
   - Note: Requires credits for usage

## Usage Examples

### Example 1: Sports Match Result
```bash
curl -X POST http://localhost:3000/api/aggregator/research \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Did Chelsea win against Liverpool?",
    "outcomeType": "yes_no",
    "maxResults": 10
  }'
```

### Example 2: Stock Market Analysis
```bash
curl -X POST http://localhost:3000/api/aggregator/research \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Is Apple stock going up?",
    "outcomeType": "yes_no",
    "searchFilters": {
      "dateRange": {
        "start": "2024-01-01",
        "end": "2024-01-15"
      }
    }
  }'
```

### Example 3: Multiple Choice Research
```bash
curl -X POST http://localhost:3000/api/aggregator/options \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "What is the current market sentiment?",
    "options": ["Bullish", "Bearish", "Sideways", "Uncertain"]
  }'
```

### Example 4: Quick Research
```bash
curl "http://localhost:3000/api/aggregator/quick?topic=Is%20Bitcoin%20price%20rising?"
```

## Research Types

### 1. Yes/No Questions
Perfect for binary outcomes:
- "Did Chelsea win against Liverpool?"
- "Is Apple stock going up?"
- "Did the event happen?"

### 2. Multiple Choice
When you have predefined options:
- "Who won the match?" → ["Team A", "Team B", "Draw"]
- "What's the market trend?" → ["Bullish", "Bearish", "Sideways"]

### 3. Open-Ended Analysis
For comprehensive research:
- "What are the latest AI developments?"
- "How is the economy performing?"
- "What happened in the news today?"

## Advanced Features

### Search Filters
- **Date Range**: Limit research to specific time periods
- **Language**: Filter by language (e.g., "en", "es", "fr")
- **Verified Only**: Only consider verified accounts
- **Minimum Engagement**: Filter by likes, retweets, etc.

### Caching Strategy
- **Recent Tweets**: 5 minutes cache
- **Archive Data**: 1 hour cache
- **AI Analysis**: 1 hour cache
- **User Data**: 1 hour cache

### Error Handling
- Graceful fallbacks when APIs are unavailable
- Manual research mode when agentic tools fail
- Comprehensive error messages and logging

## Performance Considerations

### Rate Limits
- **X API**: 300 requests per 15 minutes (recent search)
- **xAI API**: Based on your plan and credits
- **Caching**: Reduces API calls by 80-90%

### Optimization Tips
1. Use appropriate `maxResults` (5-15 for most cases)
2. Enable caching for repeated queries
3. Use date filters to limit search scope
4. Consider manual research for simple queries

## Monitoring and Debugging

### Health Check
```bash
curl http://localhost:3000/api/aggregator/health
```

### Statistics
```bash
curl http://localhost:3000/api/aggregator/stats
```

### Logs
Check console output for:
- API request/response logs
- Cache hit/miss information
- Error details and stack traces

## Integration with Betting Systems

The aggregator is designed for betting and decision-making applications:

1. **Real-time Outcomes**: Get current information for betting decisions
2. **Confidence Levels**: Understand the reliability of predictions
3. **Source Attribution**: Verify information sources
4. **Multiple Perspectives**: Combine social media and web data
5. **Flexible Queries**: Support any topic or question format

## Troubleshooting

### Common Issues

1. **API Key Errors**
   - Verify keys are correctly set in environment
   - Check API key permissions and quotas
   - Ensure credits are available for xAI

2. **Rate Limit Exceeded**
   - Implement request queuing
   - Use caching more aggressively
   - Consider upgrading API plans

3. **No Results Found**
   - Try broader search terms
   - Adjust date ranges
   - Check if topic is too specific

4. **Slow Responses**
   - Reduce `maxResults`
   - Use date filters
   - Enable caching

### Debug Mode
Set `NODE_ENV=development` for detailed logging.

## Future Enhancements

- [ ] Web search integration (Google Custom Search)
- [ ] Additional AI models (GPT-4, Claude)
- [ ] Real-time streaming responses
- [ ] Custom model fine-tuning
- [ ] Advanced analytics dashboard
- [ ] Webhook notifications
- [ ] Batch processing capabilities

## Support

For issues and questions:
1. Check the health endpoint
2. Review console logs
3. Verify API keys and quotas
4. Test with simple examples first

The aggregator system provides a powerful foundation for real-time research and decision-making, combining the best of social media insights and AI analysis.
