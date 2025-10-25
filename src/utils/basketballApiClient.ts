import axios, { AxiosInstance } from 'axios';

/**
 * Basketball API Client Configuration
 * Based on API-Sports Basketball API v1
 */
export function getBasketballAPIClient(): AxiosInstance {
  const apiKey = process.env.BASKETBALL_API_KEY || process.env.FOOTBALL_API_KEY;
  const apiHost = process.env.BASKETBALL_API_HOST || 'v1.basketball.api-sports.io';
  const apiUrl = process.env.BASKETBALL_API_URL || 'https://v1.basketball.api-sports.io';

  if (!apiKey) {
    throw new Error('BASKETBALL_API_KEY or FOOTBALL_API_KEY environment variable is required');
  }

  const client = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost,
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor for logging
  client.interceptors.request.use(
    (config) => {
      console.log(`[Basketball API] ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => {
      console.error('[Basketball API] Request error:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor for error handling
  client.interceptors.response.use(
    (response) => {
      console.log(`[Basketball API] Response: ${response.status} ${response.statusText}`);
      return response;
    },
    (error) => {
      console.error('[Basketball API] Response error:', error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  return client;
}
