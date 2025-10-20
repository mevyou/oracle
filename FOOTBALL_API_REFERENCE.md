# Football API - Complete Reference

## Base URL
```
http://localhost:3000/api/football
```

---

## 🏷️ Endpoints Overview

| # | Endpoint | Purpose |
|---|----------|---------|
| 1 | `GET /teams/search` | Find a team by name |
| 2 | `GET /matches/find` | **Find match between teams** ⭐ |
| 3 | `GET /matches/h2h` | Head-to-head history |
| 4 | `GET /fixtures/team` | Team's fixtures |
| 5 | `GET /fixtures/date` | Fixtures on a date |
| 6 | `GET /fixtures/live` | Live matches |
| 7 | `GET /fixtures/:id` | Fixture by ID |
| 8 | `GET /predictions/:id` | Match prediction |
| 9 | `GET /statistics/:id` | Match statistics |

---

## 📖 Detailed Endpoint Reference

### 1️⃣ Search Team

Find a team by name.

**Endpoint:**
```
GET /api/football/teams/search
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | ✅ Yes | Team name to search for |

**Example Request:**
```bash
curl "http://localhost:3000/api/football/teams/search?name=Barcelona"
```

**Success Response (200):**
```json
{
  "success": true,
  "team": {
    "id": 529,
    "name": "Barcelona",
    "code": "BAR",
    "country": "Spain",
    "founded": 1899,
    "national": false,
    "logo": "https://media.api-sports.io/football/teams/529.png"
  }
}
```

**Error Response (404):**
```json
{
  "error": "Team not found",
  "searched": "BarcelonXYZ"
}
```

---

### 2️⃣ Find Match ⭐ (MAIN ENDPOINT)

Find a match between two teams, with optional date filtering.

**Endpoint:**
```
GET /api/football/matches/find
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team1` | string | ✅ Yes | First team name |
| `team2` | string | ❌ No | Second team name |
| `date` | string | ❌ No | Match date (YYYY-MM-DD) |
| `league` | number | ❌ No | League ID |
| `season` | number | ❌ No | Season (YYYY) |

**Behavior:**
- **No date:** Returns most recent OR upcoming match
- **With date:** Returns exact match on that date
- **One team only:** Returns latest match for that team

**Example Requests:**
```bash
# Latest match between two teams
curl "http://localhost:3000/api/football/matches/find?team1=Bayern Munich&team2=Liverpool"

# Match on specific date
curl "http://localhost:3000/api/football/matches/find?team1=Real Madrid&team2=Barcelona&date=2024-03-17"

# Latest match for one team
curl "http://localhost:3000/api/football/matches/find?team1=Chelsea"
```

**Success Response (200):**
```json
{
  "success": true,
  "match": {
    "fixture": {
      "id": 215662,
      "referee": "M. Oliver",
      "timezone": "UTC",
      "date": "2024-03-15T20:00:00+00:00",
      "timestamp": 1710532800,
      "status": {
        "long": "Match Finished",
        "short": "FT",
        "elapsed": 90
      },
      "venue": {
        "id": 700,
        "name": "Allianz Arena",
        "city": "München"
      }
    },
    "league": {
      "id": 2,
      "name": "UEFA Champions League",
      "country": "World",
      "logo": "https://media.api-sports.io/football/leagues/2.png",
      "season": 2023,
      "round": "Round of 16"
    },
    "teams": {
      "home": {
        "id": 157,
        "name": "Bayern Munich",
        "logo": "https://media.api-sports.io/football/teams/157.png",
        "winner": true
      },
      "away": {
        "id": 40,
        "name": "Liverpool",
        "logo": "https://media.api-sports.io/football/teams/40.png",
        "winner": false
      }
    },
    "goals": {
      "home": 2,
      "away": 1
    },
    "score": {
      "halftime": { "home": 1, "away": 0 },
      "fulltime": { "home": 2, "away": 1 },
      "extratime": { "home": null, "away": null },
      "penalty": { "home": null, "away": null }
    }
  }
}
```

---

### 3️⃣ Head-to-Head

Get historical matches between two teams.

**Endpoint:**
```
GET /api/football/matches/h2h
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team1` | string | ✅ Yes | First team name |
| `team2` | string | ✅ Yes | Second team name |
| `last` | number | ❌ No | Number of recent matches (default: 10) |

**Example Request:**
```bash
curl "http://localhost:3000/api/football/matches/h2h?team1=Chelsea&team2=Arsenal&last=5"
```

**Success Response (200):**
```json
{
  "success": true,
  "teams": {
    "team1": { "id": 49, "name": "Chelsea", ... },
    "team2": { "id": 42, "name": "Arsenal", ... }
  },
  "matches": [
    { /* match 1 */ },
    { /* match 2 */ },
    { /* match 3 */ }
  ],
  "total": 3
}
```

---

### 4️⃣ Team Fixtures

Get upcoming or past fixtures for a team.

**Endpoint:**
```
GET /api/football/fixtures/team
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | ✅ Yes | Team name |
| `date` | string | ❌ No | Specific date (YYYY-MM-DD) |
| `season` | number | ❌ No | Season year |
| `last` | number | ❌ No | Last N fixtures |
| `next` | number | ❌ No | Next N fixtures |
| `from` | string | ❌ No | Start date (YYYY-MM-DD) |
| `to` | string | ❌ No | End date (YYYY-MM-DD) |

**Example Requests:**
```bash
# Next 5 fixtures
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&next=5"

# Last 10 fixtures
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&last=10"

# Fixtures in date range
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&from=2024-01-01&to=2024-01-31"
```

---

### 5️⃣ Fixtures by Date

Get all fixtures on a specific date.

**Endpoint:**
```
GET /api/football/fixtures/date
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date` | string | ✅ Yes | Date (YYYY-MM-DD) |
| `league` | number | ❌ No | Filter by league ID |

**Example Request:**
```bash
curl "http://localhost:3000/api/football/fixtures/date?date=2024-01-20&league=39"
```

---

### 6️⃣ Live Fixtures

Get currently live matches.

**Endpoint:**
```
GET /api/football/fixtures/live
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `league` | number | ❌ No | Filter by league ID |

**Example Request:**
```bash
# All live matches
curl "http://localhost:3000/api/football/fixtures/live"

# Live matches in Premier League
curl "http://localhost:3000/api/football/fixtures/live?league=39"
```

---

### 7️⃣ Get Fixture by ID

Get detailed information about a specific fixture.

**Endpoint:**
```
GET /api/football/fixtures/:id
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | number | ✅ Yes | Fixture ID (in URL path) |

**Example Request:**
```bash
curl "http://localhost:3000/api/football/fixtures/215662"
```

---

### 8️⃣ Match Prediction

Get AI-powered prediction for a match.

**Endpoint:**
```
GET /api/football/predictions/:id
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | number | ✅ Yes | Fixture ID (in URL path) |

**Example Request:**
```bash
curl "http://localhost:3000/api/football/predictions/215662"
```

**Success Response (200):**
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
      "def": { "home": "55%", "away": "45%" },
      "total": { "home": "63%", "away": "37%" }
    }
  }
}
```

---

### 9️⃣ Match Statistics

Get detailed match statistics.

**Endpoint:**
```
GET /api/football/statistics/:id
```

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | number | ✅ Yes | Fixture ID (in URL path) |

**Example Request:**
```bash
curl "http://localhost:3000/api/football/statistics/215662"
```

**Success Response (200):**
```json
{
  "success": true,
  "statistics": [
    {
      "team": {
        "id": 157,
        "name": "Bayern Munich",
        "logo": "https://..."
      },
      "statistics": [
        { "type": "Shots on Goal", "value": 8 },
        { "type": "Shots off Goal", "value": 5 },
        { "type": "Total Shots", "value": 13 },
        { "type": "Ball Possession", "value": "65%" },
        { "type": "Corner Kicks", "value": 7 },
        { "type": "Offsides", "value": 2 },
        { "type": "Fouls", "value": 12 },
        { "type": "Yellow Cards", "value": 2 },
        { "type": "Red Cards", "value": 0 }
      ]
    },
    {
      "team": {
        "id": 40,
        "name": "Liverpool",
        "logo": "https://..."
      },
      "statistics": [ /* ... */ ]
    }
  ]
}
```

---

## 🎯 Common Use Cases

### Use Case 1: Settle a Bet

```javascript
// User bet on "Bayern Munich to beat Liverpool"
const match = await fetch(
  'http://localhost:3000/api/football/matches/find?team1=Bayern Munich&team2=Liverpool'
).then(r => r.json());

// Check result
const winner = match.match.teams.home.winner 
  ? match.match.teams.home.name 
  : match.match.teams.away.name;

if (winner === 'Bayern Munich') {
  // User won the bet
  payoutBet();
}
```

### Use Case 2: Create Betting Market

```javascript
// Get upcoming matches
const fixtures = await fetch(
  'http://localhost:3000/api/football/fixtures/team?name=Liverpool&next=10'
).then(r => r.json());

// Create betting markets for each match
fixtures.fixtures.forEach(fixture => {
  if (fixture.fixture.status.short === 'NS') {
    createBettingMarket({
      fixtureId: fixture.fixture.id,
      homeTeam: fixture.teams.home.name,
      awayTeam: fixture.teams.away.name,
      matchDate: fixture.fixture.date,
      league: fixture.league.name
    });
  }
});
```

### Use Case 3: Live Score Updates

```javascript
// Check live matches every minute
setInterval(async () => {
  const live = await fetch(
    'http://localhost:3000/api/football/fixtures/live'
  ).then(r => r.json());
  
  live.fixtures.forEach(match => {
    updateLiveScore({
      fixtureId: match.fixture.id,
      homeScore: match.goals.home,
      awayScore: match.goals.away,
      status: match.fixture.status.short,
      elapsed: match.fixture.status.elapsed
    });
  });
}, 60000);
```

---

## 🔢 Match Status Codes

| Code | Long | Type | Description |
|------|------|------|-------------|
| `TBD` | Time To Be Defined | Scheduled | Date/time not confirmed |
| `NS` | Not Started | Scheduled | Scheduled match |
| `1H` | First Half | Live | First half in play |
| `HT` | Halftime | Live | Half-time break |
| `2H` | Second Half | Live | Second half in play |
| `ET` | Extra Time | Live | Extra time |
| `P` | Penalty | Live | Penalty shootout |
| `FT` | Match Finished | Finished | Finished (regular time) |
| `AET` | After Extra Time | Finished | Finished (extra time) |
| `PEN` | Penalties | Finished | Finished (penalties) |
| `PST` | Postponed | Postponed | Rescheduled |
| `CANC` | Cancelled | Cancelled | Match cancelled |
| `ABD` | Abandoned | Abandoned | Match abandoned |

---

## 🏆 Common League IDs

| League | ID |
|--------|-----|
| **England** |
| Premier League | 39 |
| Championship | 40 |
| FA Cup | 45 |
| **Spain** |
| La Liga | 140 |
| Copa del Rey | 143 |
| **Germany** |
| Bundesliga | 78 |
| DFB Pokal | 81 |
| **Italy** |
| Serie A | 135 |
| Coppa Italia | 137 |
| **France** |
| Ligue 1 | 61 |
| Coupe de France | 66 |
| **Europe** |
| Champions League | 2 |
| Europa League | 3 |
| Europa Conference League | 848 |
| **International** |
| World Cup | 1 |
| European Championship | 4 |

---

## 🔄 Response Format

All successful responses follow this structure:

```typescript
{
  success: true,
  [data_key]: { /* data */ },  // "match", "fixtures", "team", etc.
  total?: number               // Count (when applicable)
}
```

Error responses:

```typescript
{
  error: string,              // Error message
  example?: string,           // Usage example
  searched?: string,          // What was searched (if applicable)
  params?: object            // Parameters that caused error
}
```

---

## ⚠️ Error Codes

| Code | Meaning | Solution |
|------|---------|----------|
| `400` | Bad Request | Check required parameters |
| `404` | Not Found | Team/match doesn't exist or wrong name |
| `429` | Rate Limit | Wait 1 minute or upgrade plan |
| `500` | Server Error | Check server logs |

---

## 💾 Caching Information

The system automatically caches responses:

| Data Type | Cache Duration | Can Clear? |
|-----------|---------------|-----------|
| Team Search | 24 hours | ❌ Auto-expires |
| H2H Matches | 1 hour | ❌ Auto-expires |
| Team Fixtures | 15 minutes | ❌ Auto-expires |
| Live Fixtures | 1 minute | ❌ Auto-expires |
| Predictions | 1 hour | ❌ Auto-expires |
| Statistics | 10 minutes | ❌ Auto-expires |

**Note:** Cache is in-memory and resets when server restarts.

---

## 📊 Rate Limits

### Free Plan
- **100 requests/day**
- **10 requests/minute**

### Response Headers
Every response includes:
- `x-ratelimit-requests-limit` - Daily limit
- `x-ratelimit-requests-remaining` - Requests left today

### Optimization Tips
1. Use the cache (automatic)
2. Store team IDs in your database
3. Batch requests when possible
4. Don't poll live matches more than once per minute

---

## 🧪 Testing

### Run Test Suite
```bash
node test-football-api.js
```

### Manual Testing
```bash
# Test search
curl "http://localhost:3000/api/football/teams/search?name=Liverpool"

# Test find match
curl "http://localhost:3000/api/football/matches/find?team1=Bayern Munich&team2=Liverpool"

# Test live matches
curl "http://localhost:3000/api/football/fixtures/live"
```

---

## 🔗 Related Documentation

- **Quick Start:** `FOOTBALL_QUICK_START.md`
- **Integration Guide:** `FOOTBALL_API_INTEGRATION.md`
- **Code Examples:** `examples/football-usage-examples.ts`
- **Test Script:** `test-football-api.js`

---

## 🎓 Advanced Usage

### TypeScript Interface

```typescript
interface MatchFindParams {
  team1: string;
  team2?: string;
  date?: string;
  league?: number;
  season?: number;
}

interface MatchResponse {
  success: boolean;
  match: Fixture;
}

// Usage
const params: MatchFindParams = {
  team1: 'Real Madrid',
  team2: 'Barcelona',
  date: '2024-03-17'
};

const response = await fetch(
  `${API_BASE}/matches/find?${new URLSearchParams(params as any)}`
);
const data: MatchResponse = await response.json();
```

---

## 🛡️ Best Practices

1. **Always check match status** before settling bets
2. **Store fixture IDs** for quick lookups
3. **Use date parameters** for specific matches
4. **Handle 404 errors** gracefully (match might not exist)
5. **Respect rate limits** - use caching
6. **Validate team names** on frontend before API call
7. **Use live endpoint** sparingly (max once per minute)

---

**For support and issues, refer to:**
- API-Football Dashboard: https://dashboard.api-football.com
- API Documentation: https://www.api-football.com/documentation-v3

