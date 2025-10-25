// X API Types
export interface XTweet {
  id: string;
  text: string;
  created_at: string;
  author_id?: string;
  public_metrics?: {
    retweet_count: number;
    like_count: number;
    reply_count: number;
    quote_count: number;
  };
  context_annotations?: Array<{
    domain: {
      id: string;
      name: string;
      description: string;
    };
    entity: {
      id: string;
      name: string;
      description: string;
    };
  }>;
}

export interface XUser {
  id: string;
  username: string;
  name: string;
  description?: string;
  verified?: boolean;
  public_metrics?: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
  };
}

export interface XSearchResponse {
  data?: XTweet[];
  meta?: {
    result_count: number;
    newest_id?: string;
    oldest_id?: string;
    next_token?: string;
  };
  includes?: {
    users?: XUser[];
  };
}

// xAI API Types
export interface XAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
      reasoning_content?: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    prompt_tokens_details?: {
      text_tokens: number;
      audio_tokens: number;
      image_tokens: number;
      cached_tokens: number;
    };
    completion_tokens_details?: {
      reasoning_tokens: number;
      audio_tokens: number;
      accepted_prediction_tokens: number;
      rejected_prediction_tokens: number;
    };
    num_sources_used?: number;
  };
  citations?: string[];
  tool_calls?: Array<{
    id: string;
    function: {
      name: string;
      arguments: string;
    };
  }>;
  server_side_tool_usage?: Record<string, number>;
}

// Aggregator Types
export interface ResearchRequest {
  topic: string;
  outcomeType?: 'yes_no' | 'multiple_choice' | 'open_ended';
  options?: string[];
  maxResults?: number;
  includeSources?: boolean;
  searchFilters?: {
    dateRange?: {
      start: string;
      end: string;
    };
    language?: string;
    verifiedOnly?: boolean;
    minEngagement?: number;
  };
}

export interface ResearchResult {
  topic: string;
  outcome: string;
  confidence: number;
  reasoning: string;
  sources: Array<{
    type: 'x_post' | 'web_article' | 'ai_analysis';
    title: string;
    url?: string;
    content: string;
    relevance_score: number;
    timestamp: string;
  }>;
  metadata: {
    research_time: number;
    sources_analyzed: number;
    ai_model_used: string;
    search_queries_used: string[];
  };
}

export interface AggregatorResponse {
  success: boolean;
  result?: ResearchResult;
  error?: string;
  request_id?: string;
}

// Search Types
export interface SearchQuery {
  query: string;
  max_results?: number;
  start_time?: string;
  end_time?: string;
  lang?: string;
  tweet_fields?: string[];
  user_fields?: string[];
  expansions?: string[];
}

export interface WebSearchResult {
  title: string;
  url: string;
  snippet: string;
  published_date?: string;
  domain: string;
}

export interface XSearchResult {
  tweet: XTweet;
  user?: XUser;
  relevance_score: number;
}
