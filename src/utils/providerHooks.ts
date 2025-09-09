import axios, { AxiosResponse } from 'axios';

export interface GameResult {
  gameId: string;
  status: 'completed' | 'pending' | 'cancelled';
  outcome: 'win' | 'lose' | 'draw';
  winner?: string;
  loser?: string;
  score?: {
    player1: number;
    player2: number;
  };
  timestamp: Date;
  provider: string;
}

export interface ProviderConfig {
  type: 'api' | 'webhook';
  url: string;
  headers?: Record<string, string>;
  timeout?: number;
}

export class ProviderHook {
  private config: ProviderConfig;

  constructor(config: ProviderConfig) {
    this.config = config;
  }

  async fetchGameResult(gameId: string): Promise<GameResult> {
    try {
      if (this.config.type === 'api') {
        return await this.fetchFromAPI(gameId);
      } else {
        return await this.fetchFromWebhook(gameId);
      }
    } catch (error) {
      throw new Error(`Provider fetch failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private async fetchFromAPI(gameId: string): Promise<GameResult> {
    const response: AxiosResponse = await axios({
      method: 'GET',
      url: `${this.config.url}/games/${gameId}`,
      headers: this.config.headers,
      timeout: this.config.timeout || 10000,
    });

    return this.transformResponse(response.data, gameId);
  }

  private async fetchFromWebhook(gameId: string): Promise<GameResult> {
    const response: AxiosResponse = await axios({
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

  private transformResponse(data: any, gameId: string): GameResult {
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

export class ProviderManager {
  private providers: Map<string, ProviderHook> = new Map();

  registerProvider(name: string, config: ProviderConfig): void {
    this.providers.set(name, new ProviderHook(config));
  }

  async fetchFromProvider(providerName: string, gameId: string): Promise<GameResult> {
    const provider = this.providers.get(providerName);
    if (!provider) {
      throw new Error(`Provider '${providerName}' not found`);
    }
    return await provider.fetchGameResult(gameId);
  }

  getAvailableProviders(): string[] {
    return Array.from(this.providers.keys());
  }
}

export const providerManager = new ProviderManager();
