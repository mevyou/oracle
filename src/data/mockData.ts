import { GameResult } from '../utils/providerHooks';
import { v4 as uuidv4 } from 'uuid';

export interface ThreePartyGameResult extends GameResult {
  requestId: string;
  player1: string;
  player2: string;
  arbitrator: string;
  arbitratorVerdict: {
    decision: 'player1_wins' | 'player2_wins' | 'draw' | 'dispute';
    reasoning: string;
    confidence: number; // 0-100
    evidence?: any[]; // Dynamic evidence array - can contain strings, objects, URLs, etc.
    timestamp: Date;
  };
  gameDetails: {
    gameType: string;
    rules: string[];
    duration: number; // in minutes
    stakes: number;
  };
}

export const mockGameResults: ThreePartyGameResult[] = [
  {
    requestId: uuidv4(),
    gameId: '2',
    status: 'completed',
    outcome: 'win',
    winner: 'Player1',
    loser: 'Player2',
    player1: 'Player1',
    player2: 'Player2',
    arbitrator: 'Arbitrator_Alpha',
    arbitratorVerdict: {
      decision: 'player1_wins',
      reasoning: 'Player1 demonstrated superior strategy and achieved the objective within the time limit',
      confidence: 95,
      evidence: [
        'screenshot_final_position.png',
        {
          type: 'image',
          url: 'https://evidence.example.com/game2/final_position.jpg',
          description: 'Final game state showing Player1 victory',
          timestamp: '2024-01-15T10:30:00Z'
        },
        {
          type: 'video',
          url: 'https://evidence.example.com/game2/replay.mp4',
          description: 'Full game replay',
          duration: 1200,
          highlights: [45, 120, 300, 450]
        },
        {
          type: 'performance_data',
          metrics: {
            player1_score: 3,
            player2_score: 1,
            completion_time: 1500,
            moves_count: 45,
            efficiency_rating: 0.92
          }
        },
        'rule_violation_check_passed'
      ],
      timestamp: new Date('2024-01-15T10:35:00Z')
    },
    score: { player1: 3, player2: 1 },
    timestamp: new Date('2024-01-15T10:30:00Z'),
    provider: 'football_bet_provider',
    gameDetails: {
      gameType: 'Strategic Conquest',
      rules: ['No cheating', 'Time limit: 30 minutes', 'Best of 5 rounds'],
      duration: 25,
      stakes: 100
    }
  },
  {
    requestId: uuidv4(),
    gameId: '3',
    status: 'completed',
    outcome: 'draw',
    player1: 'PlayerA',
    player2: 'PlayerB',
    arbitrator: 'Arbitrator_Beta',
    arbitratorVerdict: {
      decision: 'draw',
      reasoning: 'Both players performed equally well, no clear winner could be determined',
      confidence: 88,
      evidence: [
        {
          type: 'audio',
          url: 'https://evidence.example.com/game3/arbitrator_decision.mp3',
          description: 'Arbitrator voice recording explaining the draw decision',
          duration: 180
        },
        {
          type: 'document',
          url: 'https://evidence.example.com/game3/performance_report.pdf',
          description: 'Detailed performance analysis report',
          pages: 12,
          generated_by: 'AI_Analysis_System'
        },
        {
          type: 'api_response',
          data: {
            fairness_score: 0.94,
            balance_rating: 'excellent',
            skill_difference: 0.02,
            recommended_decision: 'draw'
          },
          source: 'GameBalanceAPI'
        },
        'manual_review_completed'
      ],
      timestamp: new Date('2024-01-15T11:05:00Z')
    },
    score: { player1: 2, player2: 2 },
    timestamp: new Date('2024-01-15T11:00:00Z'),
    provider: 'prediction_market_provider',
    gameDetails: {
      gameType: 'Tactical Battle',
      rules: ['Respect opponents', 'No external help', 'Complete all objectives'],
      duration: 45,
      stakes: 150
    }
  },
  {
    requestId: uuidv4(),
    gameId: '4',
    status: 'pending',
    outcome: 'draw',
    player1: 'PlayerX',
    player2: 'PlayerY',
    arbitrator: 'Arbitrator_Gamma',
    arbitratorVerdict: {
      decision: 'dispute',
      reasoning: 'Game is still in progress, awaiting final moves from both players',
      confidence: 0,
      evidence: [
        {
          type: 'live_stream',
          url: 'https://stream.example.com/game4/live',
          description: 'Live game stream',
          viewers: 1247,
          uptime: 1800
        },
        {
          type: 'game_state',
          data: {
            current_round: 3,
            player1_moves: 15,
            player2_moves: 14,
            time_remaining: 420,
            last_action: '2024-01-15T11:28:30Z'
          },
          snapshot_id: 'game4_snapshot_001'
        },
        {
          type: 'chat_log',
          url: 'https://evidence.example.com/game4/chat.json',
          message_count: 89,
          last_message: 'PlayerX: Making my final move now...'
        }
      ],
      timestamp: new Date('2024-01-15T11:30:00Z')
    },
    timestamp: new Date('2024-01-15T11:30:00Z'),
    provider: 'ludo_provider',
    gameDetails: {
      gameType: 'Real-time Strategy',
      rules: ['Live gameplay', 'No pausing', 'Winner takes all'],
      duration: 60,
      stakes: 200
    }
  },
  {
    requestId: uuidv4(),
    gameId: '5',
    status: 'completed',
    outcome: 'win',
    winner: 'Player3',
    loser: 'Player4',
    player1: 'Player3',
    player2: 'Player4',
    arbitrator: 'Arbitrator_Delta',
    arbitratorVerdict: {
      decision: 'player1_wins',
      reasoning: 'Player3 executed flawless strategy and completed all objectives first',
      confidence: 98,
      evidence: ['victory_screenshot', 'objective_completion_timestamps', 'strategy_analysis'],
      timestamp: new Date('2024-01-15T12:05:00Z')
    },
    score: { player1: 4, player2: 2 },
    timestamp: new Date('2024-01-15T12:00:00Z'),
    provider: 'basketball_provider',
    gameDetails: {
      gameType: 'Speed Challenge',
      rules: ['Fastest wins', 'No shortcuts', 'Document everything'],
      duration: 15,
      stakes: 75
    }
  },
  {
    requestId: uuidv4(),
    gameId: '6',
    status: 'cancelled',
    outcome: 'draw',
    player1: 'PlayerM',
    player2: 'PlayerN',
    arbitrator: 'Arbitrator_Epsilon',
    arbitratorVerdict: {
      decision: 'dispute',
      reasoning: 'Game cancelled due to technical issues, refund issued to both players',
      confidence: 100,
      evidence: ['technical_logs', 'system_error_report', 'refund_confirmation'],
      timestamp: new Date('2024-01-15T12:35:00Z')
    },
    timestamp: new Date('2024-01-15T12:30:00Z'),
    provider: 'cricket_provider',
    gameDetails: {
      gameType: 'Technical Challenge',
      rules: ['System stability required', 'Fair play mandatory', 'Technical issues = refund'],
      duration: 30,
      stakes: 50
    }
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

export const getMockGameResult = (gameId: string): ThreePartyGameResult | null => {
  return mockGameResults.find(game => game.gameId === gameId) || null;
};

export const getAllMockGameResults = (): ThreePartyGameResult[] => {
  return mockGameResults;
};

export const generateRequestId = (): string => {
  return uuidv4();
};

export const generateGameId = (): string => {
  return uuidv4();
};