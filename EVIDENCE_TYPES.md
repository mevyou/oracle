# 🎮 Dynamic Evidence System Documentation

## Overview
The Three-Party Game Results System now supports a completely dynamic evidence array that can contain any type of data - strings, objects, URLs, multimedia, or any custom structure.

## Evidence Array Structure
```typescript
evidence?: any[] // Dynamic evidence - accepts any type
```

## Supported Evidence Types

### 1. **Simple Strings**
```json
"rule_violation_check_passed"
"screenshot_final_position.png"
"manual_review_completed"
```

### 2. **Image Evidence**
```json
{
  "type": "image",
  "url": "https://evidence.example.com/game2/final_position.jpg",
  "description": "Final game state showing Player1 victory",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### 3. **Video Evidence**
```json
{
  "type": "video",
  "url": "https://evidence.example.com/game2/replay.mp4",
  "description": "Full game replay",
  "duration": 1200,
  "highlights": [45, 120, 300, 450]
}
```

### 4. **Audio Evidence**
```json
{
  "type": "audio",
  "url": "https://evidence.example.com/game3/arbitrator_decision.mp3",
  "description": "Arbitrator voice recording explaining the draw decision",
  "duration": 180
}
```

### 5. **Document Evidence**
```json
{
  "type": "document",
  "url": "https://evidence.example.com/game3/performance_report.pdf",
  "description": "Detailed performance analysis report",
  "pages": 12,
  "generated_by": "AI_Analysis_System"
}
```

### 6. **Performance Data**
```json
{
  "type": "performance_data",
  "metrics": {
    "player1_score": 3,
    "player2_score": 1,
    "completion_time": 1500,
    "moves_count": 45,
    "efficiency_rating": 0.92
  }
}
```

### 7. **API Response Data**
```json
{
  "type": "api_response",
  "data": {
    "fairness_score": 0.94,
    "balance_rating": "excellent",
    "skill_difference": 0.02,
    "recommended_decision": "draw"
  },
  "source": "GameBalanceAPI"
}
```

### 8. **Live Stream Evidence**
```json
{
  "type": "live_stream",
  "url": "https://stream.example.com/game4/live",
  "description": "Live game stream",
  "viewers": 1247,
  "uptime": 1800
}
```

### 9. **Game State Snapshots**
```json
{
  "type": "game_state",
  "data": {
    "current_round": 3,
    "player1_moves": 15,
    "player2_moves": 14,
    "time_remaining": 420,
    "last_action": "2024-01-15T11:28:30Z"
  },
  "snapshot_id": "game4_snapshot_001"
}
```

### 10. **Chat/Communication Logs**
```json
{
  "type": "chat_log",
  "url": "https://evidence.example.com/game4/chat.json",
  "message_count": 89,
  "last_message": "PlayerX: Making my final move now..."
}
```

### 11. **Blockchain Evidence**
```json
{
  "type": "blockchain_proof",
  "transaction_hash": "0x1234567890abcdef...",
  "block_number": 18543210,
  "verified": true
}
```

### 12. **Custom Objects**
```json
{
  "type": "custom_analysis",
  "algorithm": "NeuralNetwork_v2.1",
  "confidence_score": 0.96,
  "factors": {
    "skill_difference": 0.15,
    "luck_factor": 0.03,
    "strategy_quality": 0.89
  },
  "recommendation": "player1_wins"
}
```

## Real-World Examples

### Football Betting Evidence
```json
{
  "type": "match_highlights",
  "url": "https://sports.example.com/match/12345/highlights.mp4",
  "goals": [
    {"minute": 23, "player": "Messi", "team": "Barcelona"},
    {"minute": 67, "player": "Ronaldo", "team": "Real Madrid"}
  ],
  "referee_decisions": ["penalty_awarded_45min", "red_card_78min"]
}
```

### Poker Game Evidence
```json
{
  "type": "hand_history",
  "data": {
    "hand_id": "POKER_12345",
    "cards": ["AS", "KH", "QD", "JC", "10S"],
    "players": ["Player1", "Player2"],
    "final_pot": 2500,
    "winner": "Player1"
  },
  "verification": "blockchain_verified"
}
```

### Esports Evidence
```json
{
  "type": "replay_file",
  "url": "https://esports.example.com/replays/game_789.sc2replay",
  "game_version": "4.13.1",
  "map": "King's Cove",
  "duration": 1847,
  "analysis_results": {
    "apm_player1": 180,
    "apm_player2": 165,
    "macro_score": 0.92
  }
}
```

## Usage Guidelines

1. **Flexibility**: The evidence array accepts any data type - be creative!
2. **Consistency**: Use consistent field names within similar evidence types
3. **Descriptions**: Always include meaningful descriptions for clarity
4. **URLs**: Use HTTPS URLs for external resources
5. **Timestamps**: Include timestamps for time-sensitive evidence
6. **Validation**: The system validates the structure but accepts any content

## API Examples

### Creating Game with Mixed Evidence
```bash
POST /api/results
Content-Type: application/json

{
  "gameId": "game-123",
  "player1": "Alice",
  "player2": "Bob", 
  "arbitrator": "Charlie",
  "arbitratorVerdict": {
    "decision": "player1_wins",
    "reasoning": "Alice won based on evidence",
    "confidence": 95,
    "evidence": [
      "score_sheet.pdf",
      {
        "type": "video",
        "url": "https://example.com/replay.mp4",
        "description": "Game replay"
      },
      {
        "type": "custom_data",
        "any_field": "any_value",
        "complex_object": {"nested": true}
      }
    ],
    "timestamp": "2024-01-15T12:00:00Z"
  }
}
```

The system is completely flexible - store whatever evidence you need!
