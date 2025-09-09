import { GameResult } from '../utils/providerHooks';

export const mockGameResults: GameResult[] = [
  {
    gameId: '2',
    status: 'completed',
    outcome: 'win',
    winner: 'Player1',
    loser: 'Player2',
    score: { player1: 3, player2: 1 },
    timestamp: new Date('2024-01-15T10:30:00Z'),
    provider: 'football_bet_provider'
  },
  {
    gameId: '3',
    status: 'completed',
    outcome: 'draw',
    score: { player1: 2, player2: 2 },
    timestamp: new Date('2024-01-15T11:00:00Z'),
    provider: 'prediction_market_provider'
  },
  {
    gameId: '4',
    status: 'pending',
    outcome: 'draw',
    timestamp: new Date('2024-01-15T11:30:00Z'),
    provider: 'ludo_provider'
  },
  {
    gameId: '5',
    status: 'completed',
    outcome: 'win',
    winner: 'Player3',
    loser: 'Player4',
    score: { player1: 4, player2: 2 },
    timestamp: new Date('2024-01-15T12:00:00Z'),
    provider: 'basketball_provider'
  },
  {
    gameId: '6',
    status: 'cancelled',
    outcome: 'draw',
    timestamp: new Date('2024-01-15T12:30:00Z'),
    provider: 'cricket_provider'
  }
];

export const mockProviders = [
  {
    name: 'mock-api',
    type: 'api' as const,
    url: 'https://mock-api.example.com',
    headers: { 
      'Authorization': 'Bearer mock-token',
      'Content-Type': 'application/json'
    }
  },
  {
    name: 'mock-webhook',
    type: 'webhook' as const,
    url: 'https://mock-webhook.example.com/game-results',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer mock-token'
    }
  }
];

export const getMockGameResult = (gameId: string): GameResult | null => {
  return mockGameResults.find(game => game.gameId === gameId) || null;
};

export const getAllMockGameResults = (): GameResult[] => {
  return mockGameResults;
};
