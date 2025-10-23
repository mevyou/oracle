import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

export interface FootballAPIConfig {
  apiKey: string;
  baseURL: string;
  host: string;
}

export interface FootballAPIError {
  message: string;
  status?: number;
  errors?: string[];
}

/**
 * Football API Client
 * Handles all HTTP requests to the API-Football API
 */
export class FootballAPIClient {
  private client: AxiosInstance;
  private config: FootballAPIConfig;

  constructor(config: FootballAPIConfig) {
    this.config = config;
    
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: 10000,
      headers: {
        'x-rapidapi-key': config.apiKey,
        'x-rapidapi-host': config.host
      }
    });

    // Request interceptor for logging
    this.client.interceptors.request.use(
      (config) => {
        console.log(`[Football API] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('[Football API] Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => {
        console.log(`[Football API] Response: ${response.status} - ${response.config.url}`);
        return response;
      },
      (error: AxiosError) => {
        this.handleError(error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Make a GET request to the Football API
   */
  async get<T = any>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      const response = await this.client.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw this.formatError(error as AxiosError);
    }
  }

  /**
   * Handle API errors
   */
  private handleError(error: AxiosError): void {
    if (error.response) {
      // Server responded with error
      console.error(`[Football API] Error ${error.response.status}:`, error.response.data);
      
      // Handle rate limiting
      if (error.response.status === 429) {
        console.error('[Football API] Rate limit exceeded');
      }
    } else if (error.request) {
      // Request made but no response
      console.error('[Football API] No response received:', error.message);
    } else {
      // Request setup error
      console.error('[Football API] Request setup error:', error.message);
    }
  }

  /**
   * Format error for consistent error handling
   */
  private formatError(error: AxiosError): FootballAPIError {
    if (error.response) {
      const data: any = error.response.data;
      return {
        message: data.message || 'Football API Error',
        status: error.response.status,
        errors: data.errors || []
      };
    }
    
    return {
      message: error.message || 'Unknown error occurred',
      status: 500
    };
  }

  /**
   * Get remaining API requests (from response headers)
   */
  getRateLimitInfo(): { limit?: string; remaining?: string } {
    return {
      limit: undefined,
      remaining: undefined
    };
  }
}

// Create singleton instance
let footballAPIClient: FootballAPIClient | null = null;

export function getFootballAPIClient(): FootballAPIClient {
  if (!footballAPIClient) {
    const apiKey = process.env.FOOTBALL_API_KEY || '';
    const baseURL = process.env.FOOTBALL_API_URL || 'https://v3.football.api-sports.io';
    const host = process.env.FOOTBALL_API_HOST || 'v3.football.api-sports.io';

    if (!apiKey) {
      console.warn('[Football API] No API key configured. Set FOOTBALL_API_KEY in environment variables.');
    }

    footballAPIClient = new FootballAPIClient({
      apiKey,
      baseURL,
      host
    });
  }

  return footballAPIClient;
}

