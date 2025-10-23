"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballAPIClient = void 0;
exports.getFootballAPIClient = getFootballAPIClient;
const axios_1 = __importDefault(require("axios"));
/**
 * Football API Client
 * Handles all HTTP requests to the API-Football API
 */
class FootballAPIClient {
    constructor(config) {
        this.config = config;
        this.client = axios_1.default.create({
            baseURL: config.baseURL,
            timeout: 10000,
            headers: {
                'x-rapidapi-key': config.apiKey,
                'x-rapidapi-host': config.host
            }
        });
        // Request interceptor for logging
        this.client.interceptors.request.use((config) => {
            console.log(`[Football API] ${config.method?.toUpperCase()} ${config.url}`);
            return config;
        }, (error) => {
            console.error('[Football API] Request Error:', error);
            return Promise.reject(error);
        });
        // Response interceptor for error handling
        this.client.interceptors.response.use((response) => {
            console.log(`[Football API] Response: ${response.status} - ${response.config.url}`);
            return response;
        }, (error) => {
            this.handleError(error);
            return Promise.reject(error);
        });
    }
    /**
     * Make a GET request to the Football API
     */
    async get(endpoint, params) {
        try {
            const response = await this.client.get(endpoint, { params });
            return response.data;
        }
        catch (error) {
            throw this.formatError(error);
        }
    }
    /**
     * Handle API errors
     */
    handleError(error) {
        if (error.response) {
            // Server responded with error
            console.error(`[Football API] Error ${error.response.status}:`, error.response.data);
            // Handle rate limiting
            if (error.response.status === 429) {
                console.error('[Football API] Rate limit exceeded');
            }
        }
        else if (error.request) {
            // Request made but no response
            console.error('[Football API] No response received:', error.message);
        }
        else {
            // Request setup error
            console.error('[Football API] Request setup error:', error.message);
        }
    }
    /**
     * Format error for consistent error handling
     */
    formatError(error) {
        if (error.response) {
            const data = error.response.data;
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
    getRateLimitInfo() {
        return {
            limit: undefined,
            remaining: undefined
        };
    }
}
exports.FootballAPIClient = FootballAPIClient;
// Create singleton instance
let footballAPIClient = null;
function getFootballAPIClient() {
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
