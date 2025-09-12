"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerManager = exports.ProviderManager = exports.ProviderHook = void 0;
const axios_1 = __importDefault(require("axios"));
class ProviderHook {
    constructor(config) {
        this.config = config;
    }
    async fetchGameResult(gameId) {
        try {
            if (this.config.type === 'api') {
                return await this.fetchFromAPI(gameId);
            }
            else {
                return await this.fetchFromWebhook(gameId);
            }
        }
        catch (error) {
            throw new Error(`Provider fetch failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    async fetchFromAPI(gameId) {
        const response = await (0, axios_1.default)({
            method: 'GET',
            url: `${this.config.url}/games/${gameId}`,
            headers: this.config.headers,
            timeout: this.config.timeout || 10000,
        });
        return this.transformResponse(response.data, gameId);
    }
    async fetchFromWebhook(gameId) {
        const response = await (0, axios_1.default)({
            method: 'POST',
            url: this.config.url,
            headers: {
                'Content-Type': 'application/json',
                ...this.config.headers,
            },
            data: { gameId },
            timeout: this.config.timeout || 10000,
        });
        return this.transformResponse(response.data, gameId);
    }
    transformResponse(data, gameId) {
        return {
            gameId,
            status: data.status || 'completed',
            outcome: data.outcome || 'draw',
            winner: data.winner,
            loser: data.loser,
            score: data.score,
            timestamp: new Date(data.timestamp || Date.now()),
            provider: data.provider || 'unknown',
        };
    }
}
exports.ProviderHook = ProviderHook;
class ProviderManager {
    constructor() {
        this.providers = new Map();
    }
    registerProvider(name, config) {
        this.providers.set(name, new ProviderHook(config));
    }
    async fetchFromProvider(providerName, gameId) {
        const provider = this.providers.get(providerName);
        if (!provider) {
            throw new Error(`Provider '${providerName}' not found`);
        }
        return await provider.fetchGameResult(gameId);
    }
    getAvailableProviders() {
        return Array.from(this.providers.keys());
    }
}
exports.ProviderManager = ProviderManager;
exports.providerManager = new ProviderManager();
