import xApiClient from '../utils/xApiClient';
import { cache } from '../utils/cache';
import { XSearchResponse, SearchQuery, XTweet, XUser } from '../types/aggregator';

export class XApiService {
  private client = xApiClient;

  /**
   * Search for recent tweets using X API v2
   * @param query - Search query object
   * @returns Promise<XSearchResponse>
   */
  async searchRecentTweets(query: SearchQuery): Promise<XSearchResponse> {
    const cacheKey = `x_recent_search:${JSON.stringify(query)}`;
    const cached = cache.get<XSearchResponse>(cacheKey);
    
    if (cached) {
      console.log(`[X API Service] Cache hit for recent search: ${query.query}`);
      return cached;
    }

    try {
      const params: any = {
        query: query.query,
        max_results: query.max_results || 10,
        'tweet.fields': (query.tweet_fields || ['created_at', 'public_metrics', 'context_annotations']).join(','),
        'user.fields': (query.user_fields || ['username', 'name', 'verified', 'public_metrics']).join(','),
        expansions: (query.expansions || ['author_id']).join(',')
      };

      if (query.start_time) {
        params.start_time = query.start_time;
      }
      if (query.end_time) {
        params.end_time = query.end_time;
      }
      if (query.lang) {
        params.lang = query.lang;
      }

      const response = await this.client.get<XSearchResponse>('/2/tweets/search/recent', { params });
      
      // Cache for 5 minutes (recent tweets change frequently)
      cache.set(cacheKey, response.data, 300);
      
      return response.data;
    } catch (error) {
      console.error('[X API Service] Error searching recent tweets:', error);
      throw error;
    }
  }

  /**
   * Search for tweets in full archive (requires Academic Research access)
   * @param query - Search query object
   * @returns Promise<XSearchResponse>
   */
  async searchFullArchiveTweets(query: SearchQuery): Promise<XSearchResponse> {
    const cacheKey = `x_archive_search:${JSON.stringify(query)}`;
    const cached = cache.get<XSearchResponse>(cacheKey);
    
    if (cached) {
      console.log(`[X API Service] Cache hit for archive search: ${query.query}`);
      return cached;
    }

    try {
      const params: any = {
        query: query.query,
        max_results: query.max_results || 10,
        'tweet.fields': (query.tweet_fields || ['created_at', 'public_metrics', 'context_annotations']).join(','),
        'user.fields': (query.user_fields || ['username', 'name', 'verified', 'public_metrics']).join(','),
        expansions: (query.expansions || ['author_id']).join(',')
      };

      if (query.start_time) {
        params.start_time = query.start_time;
      }
      if (query.end_time) {
        params.end_time = query.end_time;
      }
      if (query.lang) {
        params.lang = query.lang;
      }

      const response = await this.client.get<XSearchResponse>('/2/tweets/search/all', { params });
      
      // Cache for 1 hour (archive data changes less frequently)
      cache.set(cacheKey, response.data, 3600);
      
      return response.data;
    } catch (error) {
      console.error('[X API Service] Error searching archive tweets:', error);
      throw error;
    }
  }

  /**
   * Get tweet by ID
   * @param tweetId - Tweet ID
   * @param expansions - Additional data to include
   * @returns Promise<XTweet>
   */
  async getTweetById(tweetId: string, expansions: string[] = ['author_id']): Promise<XTweet> {
    const cacheKey = `x_tweet:${tweetId}:${expansions.join(',')}`;
    const cached = cache.get<XTweet>(cacheKey);
    
    if (cached) {
      console.log(`[X API Service] Cache hit for tweet: ${tweetId}`);
      return cached;
    }

    try {
      const params: any = {
        'tweet.fields': 'created_at,public_metrics,context_annotations',
        'user.fields': 'username,name,verified,public_metrics',
        expansions: expansions.join(',')
      };

      const response = await this.client.get<{ data: XTweet }>(`/2/tweets/${tweetId}`, { params });
      
      // Cache for 1 hour
      cache.set(cacheKey, response.data.data, 3600);
      
      return response.data.data;
    } catch (error) {
      console.error('[X API Service] Error getting tweet by ID:', error);
      throw error;
    }
  }

  /**
   * Get user by ID or username
   * @param identifier - User ID or username
   * @param byUsername - Whether to search by username instead of ID
   * @returns Promise<XUser>
   */
  async getUserById(identifier: string, byUsername: boolean = false): Promise<XUser> {
    const cacheKey = `x_user:${identifier}:${byUsername}`;
    const cached = cache.get<XUser>(cacheKey);
    
    if (cached) {
      console.log(`[X API Service] Cache hit for user: ${identifier}`);
      return cached;
    }

    try {
      const params: any = {
        'user.fields': 'username,name,description,verified,public_metrics,created_at'
      };

      const endpoint = byUsername ? `/2/users/by/username/${identifier}` : `/2/users/${identifier}`;
      const response = await this.client.get<{ data: XUser }>(endpoint, { params });
      
      // Cache for 1 hour
      cache.set(cacheKey, response.data.data, 3600);
      
      return response.data.data;
    } catch (error) {
      console.error('[X API Service] Error getting user:', error);
      throw error;
    }
  }

  /**
   * Search for users by query
   * @param query - Search query
   * @param maxResults - Maximum number of results
   * @returns Promise<XUser[]>
   */
  async searchUsers(query: string, maxResults: number = 10): Promise<XUser[]> {
    const cacheKey = `x_user_search:${query}:${maxResults}`;
    const cached = cache.get<XUser[]>(cacheKey);
    
    if (cached) {
      console.log(`[X API Service] Cache hit for user search: ${query}`);
      return cached;
    }

    try {
      const params: any = {
        query,
        max_results: maxResults,
        'user.fields': 'username,name,description,verified,public_metrics,created_at'
      };

      const response = await this.client.get<{ data: XUser[] }>('/2/users/search', { params });
      
      // Cache for 30 minutes
      cache.set(cacheKey, response.data.data, 1800);
      
      return response.data.data;
    } catch (error) {
      console.error('[X API Service] Error searching users:', error);
      throw error;
    }
  }

  /**
   * Get trending topics (if available)
   * @param woeid - Where On Earth ID (default: 1 for worldwide)
   * @returns Promise<any>
   */
  async getTrendingTopics(woeid: number = 1): Promise<any> {
    const cacheKey = `x_trends:${woeid}`;
    const cached = cache.get<any>(cacheKey);
    
    if (cached) {
      console.log(`[X API Service] Cache hit for trends: ${woeid}`);
      return cached;
    }

    try {
      const response = await this.client.get(`/1.1/trends/place.json?id=${woeid}`);
      
      // Cache for 15 minutes
      cache.set(cacheKey, response.data, 900);
      
      return response.data;
    } catch (error) {
      console.error('[X API Service] Error getting trending topics:', error);
      throw error;
    }
  }
}
