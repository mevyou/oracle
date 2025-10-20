# Football API Integration Guide

## Overview

This backend integrates with the **API-Football** service to provide comprehensive football/soccer data for your betting oracle system. The integration supports dynamic team searches, match finding, head-to-head analysis, predictions, and live match data.

## Features

✅ **Team Search** - Find teams by name  
✅ **Match Finding** - Find matches between teams with optional date filtering  
✅ **Head-to-Head** - Historical matches between two teams  
✅ **Fixtures** - Get matches by team, date, or live status  
✅ **Predictions** - AI-powered match predictions  
✅ **Statistics** - Detailed match statistics  
✅ **Caching** - Intelligent caching to optimize API usage  

## Setup

### 1. Get API Key

You can subscribe to API-Football through two providers:

#### Option A: Direct Subscription (Recommended)
1. Visit [https://dashboard.api-football.com](https://dashboard.api-football.com)
2. Sign up for an account
3. Choose a plan (Free tier: 100 requests/day)
4. Copy your API key

#### Option B: RapidAPI
1. Visit [https://rapidapi.com/api-sports/api/api-football](https://rapidapi.com/api-sports/api/api-football)
2. Subscribe to a plan
3. Use RapidAPI key

### 2. Configure Environment

Copy the environment template:
```bash
cp env.template .env
```

Update your `.env` file:
```env
FOOTBALL_API_KEY=your_api_key_here
FOOTBALL_API_URL=https://v3.football.api-sports.io
FOOTBALL_API_HOST=v3.football.api-sports.io
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Server

```bash
npm run dev
```

## API Endpoints

### 1. Search for a Team

Find a team by name:

```http
GET /api/football/teams/search?name={team_name}
```

**Example:**
```bash
curl http://localhost:3000/api/football/teams/search?name=Manchester United
```

**Response:**
```json
{
  "success": true,
  "team": {
    "id": 33,
    "name": "Manchester United",
    "code": "MUN",
    "country": "England",
    "founded": 1878,
    "logo": "https://media.api-sports.io/football/teams/33.png"
  }
}
```

---

### 2. Find a Match

Find a match between teams (with or without date):

```http
GET /api/football/matches/find?team1={team1}&team2={team2}&date={YYYY-MM-DD}
```

**Examples:**

```bash
# Find latest/upcoming match between two teams
curl "http://localhost:3000/api/football/matches/find?team1=Bayern Munich&team2=Liverpool"

# Find match on specific date
curl "http://localhost:3000/api/football/matches/find?team1=Bayern Munich&team2=Liverpool&date=2024-01-15"

# Find latest match for a single team
curl "http://localhost:3000/api/football/matches/find?team1=Real Madrid"
```

**Response:**
```json
{
  "success": true,
  "match": {
    "fixture": {
      "id": 215662,
      "date": "2024-01-15T20:00:00+00:00",
      "timestamp": 1705348800,
      "status": {
        "long": "Match Finished",
        "short": "FT",
        "elapsed": 90
      },
      "venue": {
        "name": "Allianz Arena",
        "city": "München"
      }
    },
    "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "season": 2023
    },
    "teams": {
      "home": {
        "id": 157,
        "name": "Bayern Munich",
        "logo": "https://...",
        "winner": true
      },
      "away": {
        "id": 40,
        "name": "Liverpool",
        "logo": "https://...",
        "winner": false
      }
    },
    "goals": {
      "home": 2,
      "away": 1
    },
    "score": {
      "halftime": { "home": 1, "away": 0 },
      "fulltime": { "home": 2, "away": 1 }
    }
  }
}
```

---

### 3. Get Head-to-Head Matches

Get historical matches between two teams:

```http
GET /api/football/matches/h2h?team1={team1}&team2={team2}&last={number}
```

**Example:**
```bash
curl "http://localhost:3000/api/football/matches/h2h?team1=Real Madrid&team2=Barcelona&last=5"
```

**Response:**
```json
{
  "success": true,
  "teams": {
    "team1": { "id": 541, "name": "Real Madrid", ... },
    "team2": { "id": 529, "name": "Barcelona", ... }
  },
  "matches": [
    { /* match 1 */ },
    { /* match 2 */ },
    { /* match 3 */ },
    { /* match 4 */ },
    { /* match 5 */ }
  ],
  "total": 5
}
```

---

### 4. Get Team Fixtures

Get upcoming or recent matches for a team:

```http
GET /api/football/fixtures/team?name={team}&next={number}
GET /api/football/fixtures/team?name={team}&last={number}
GET /api/football/fixtures/team?name={team}&date={YYYY-MM-DD}
```

**Examples:**
```bash
# Get next 5 fixtures
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&next=5"

# Get last 10 fixtures
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&last=10"

# Get fixtures on specific date
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&date=2024-01-20"

# Get fixtures in date range
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&from=2024-01-01&to=2024-01-31"
```

---

### 5. Get Fixtures by Date

Get all fixtures on a specific date:

```http
GET /api/football/fixtures/date?date={YYYY-MM-DD}&league={league_id}
```

**Example:**
```bash
# All fixtures on date
curl "http://localhost:3000/api/football/fixtures/date?date=2024-01-15"

# Fixtures for specific league
curl "http://localhost:3000/api/football/fixtures/date?date=2024-01-15&league=39"
```

---

### 6. Get Live Fixtures

Get currently live matches:

```http
GET /api/football/fixtures/live?league={league_id}
```

**Examples:**
```bash
# All live fixtures
curl http://localhost:3000/api/football/fixtures/live

# Live fixtures for specific league (e.g., Premier League = 39)
curl http://localhost:3000/api/football/fixtures/live?league=39
```

---

### 7. Get Fixture by ID

Get detailed information about a specific fixture:

```http
GET /api/football/fixtures/{id}
```

**Example:**
```bash
curl http://localhost:3000/api/football/fixtures/215662
```

---

### 8. Get Match Prediction

Get AI-powered prediction for a match:

```http
GET /api/football/predictions/{fixture_id}
```

**Example:**
```bash
curl http://localhost:3000/api/football/predictions/215662
```

**Response:**
```json
{
  "success": true,
  "prediction": {
    "predictions": {
      "winner": {
        "id": 157,
        "name": "Bayern Munich",
        "comment": "Win or draw"
      },
      "win_or_draw": true,
      "under_over": "-3.5",
      "goals": {
        "home": "-2.5",
        "away": "-1.5"
      },
      "advice": "Bayern Munich to win",
      "percent": {
        "home": "60%",
        "draw": "25%",
        "away": "15%"
      }
    },
    "comparison": {
      "form": { "home": "75%", "away": "25%" },
      "att": { "home": "60%", "away": "40%" },
      "def": { "home": "55%", "away": "45%" }
    }
  }
}
```

---

### 9. Get Fixture Statistics

Get detailed match statistics:

```http
GET /api/football/statistics/{fixture_id}
```

**Example:**
```bash
curl http://localhost:3000/api/football/statistics/215662
```

## Use Cases for Betting Oracle

### Use Case 1: Latest Match Between Two Teams

```javascript
// Frontend request
const response = await fetch(
  'http://localhost:3000/api/football/matches/find?team1=Bayern Munich&team2=Liverpool'
);
const data = await response.json();

// Use match data for oracle
const matchResult = {
  homeTeam: data.match.teams.home.name,
  awayTeam: data.match.teams.away.name,
  homeScore: data.match.goals.home,
  awayScore: data.match.goals.away,
  winner: data.match.teams.home.winner ? 'home' : 'away',
  matchDate: data.match.fixture.date
};
```

### Use Case 2: Specific Match by Date

```javascript
// User specifies teams and date
const response = await fetch(
  'http://localhost:3000/api/football/matches/find?' +
  'team1=Real Madrid&team2=Barcelona&date=2024-03-17'
);
const data = await response.json();

// Oracle verifies bet outcome
if (data.match.fixture.status.short === 'FT') {
  // Match is finished, get result
  const result = data.match.goals;
  // Settle bets...
}
```

### Use Case 3: Upcoming Matches for Bet Creation

```javascript
// Get upcoming matches for a team
const response = await fetch(
  'http://localhost:3000/api/football/fixtures/team?name=Liverpool&next=10'
);
const data = await response.json();

// Create betting markets for upcoming matches
data.fixtures.forEach(fixture => {
  if (fixture.fixture.status.short === 'NS') {
    // Match not started - create bet
    createBettingMarket({
      homeTeam: fixture.teams.home.name,
      awayTeam: fixture.teams.away.name,
      matchDate: fixture.fixture.date,
      fixtureId: fixture.fixture.id
    });
  }
});
```

### Use Case 4: Live Match Updates

```javascript
// Poll for live matches
setInterval(async () => {
  const response = await fetch(
    'http://localhost:3000/api/football/fixtures/live'
  );
  const data = await response.json();
  
  // Update oracle with live scores
  data.fixtures.forEach(fixture => {
    updateLiveScore({
      fixtureId: fixture.fixture.id,
      homeScore: fixture.goals.home,
      awayScore: fixture.goals.away,
      status: fixture.fixture.status.short,
      elapsed: fixture.fixture.status.elapsed
    });
  });
}, 60000); // Every minute
```

### Use Case 5: Match Prediction for Betting Odds

```javascript
// Get prediction for upcoming match
const fixtureId = 215662;
const response = await fetch(
  `http://localhost:3000/api/football/predictions/${fixtureId}`
);
const data = await response.json();

// Use prediction for odds calculation
const odds = calculateOdds({
  homeWinProbability: parseInt(data.prediction.predictions.percent.home),
  drawProbability: parseInt(data.prediction.predictions.percent.draw),
  awayWinProbability: parseInt(data.prediction.predictions.percent.away)
});
```

## Caching Strategy

The system implements intelligent caching to optimize API usage:

| Data Type | Cache Duration | Reason |
|-----------|---------------|--------|
| Team Search | 24 hours | Teams rarely change |
| H2H Matches | 1 hour | Historical data |
| Team Fixtures | 15 minutes | Schedules can change |
| Live Fixtures | 1 minute | Rapid updates needed |
| Predictions | 1 hour | Updated periodically |
| Statistics | 10 minutes | Real-time insights |

## Rate Limiting

### Free Plan Limits
- **100 requests/day**
- **10 requests/minute**

### Recommendations
1. **Use caching** - The system caches responses automatically
2. **Batch requests** - Get multiple fixtures in one call when possible
3. **Schedule updates** - Don't poll live data too frequently
4. **Upgrade plan** - For production use, consider paid plans

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error message",
  "details": "Additional information"
}
```

Common HTTP status codes:
- `200` - Success
- `400` - Bad request (missing/invalid parameters)
- `404` - Resource not found
- `429` - Rate limit exceeded
- `500` - Server error

## Testing

### Test Team Search
```bash
curl "http://localhost:3000/api/football/teams/search?name=Arsenal"
```

### Test Match Find
```bash
curl "http://localhost:3000/api/football/matches/find?team1=Chelsea&team2=Arsenal"
```

### Test Live Fixtures
```bash
curl "http://localhost:3000/api/football/fixtures/live"
```

## Important Notes

1. **Team Names**: Use full team names for best results (e.g., "Manchester United" not "Man Utd")
2. **Date Format**: Always use YYYY-MM-DD format
3. **Match Status**: Check `fixture.status.short` for match state (NS=Not Started, 1H=First Half, FT=Full Time, etc.)
4. **Fixture IDs**: Store fixture IDs in your database for quick lookups
5. **Cache Warming**: Pre-fetch popular teams/matches during off-peak hours

## League IDs (Common)

| League | ID |
|--------|-----|
| Premier League (England) | 39 |
| La Liga (Spain) | 140 |
| Bundesliga (Germany) | 78 |
| Serie A (Italy) | 135 |
| Ligue 1 (France) | 61 |
| Champions League | 2 |
| Europa League | 3 |
| World Cup | 1 |

## Support

- **API Documentation**: [https://www.api-football.com/documentation-v3](https://www.api-football.com/documentation-v3)
- **Dashboard**: [https://dashboard.api-football.com](https://dashboard.api-football.com)
- **Status**: Check API status at the dashboard

## Next Steps

1. **Set up MongoDB** - For storing match results permanently
2. **Add Webhooks** - For real-time match updates (premium feature)
3. **Implement Queue** - For managing API rate limits
4. **Add More Sports** - API-Football also covers Basketball, Hockey, etc.
5. **Build Analytics** - Track popular matches and teams

---

**Happy Betting! ⚽**

