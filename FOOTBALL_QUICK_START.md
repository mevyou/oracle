# Football API - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Get Your API Key

Visit [API-Football Dashboard](https://dashboard.api-football.com) and sign up for a free account (100 requests/day).

### Step 2: Configure Environment

Create a `.env` file in the project root:

```env
# Copy from env.template
FOOTBALL_API_KEY=your_actual_api_key_here
FOOTBALL_API_URL=https://v3.football.api-sports.io
FOOTBALL_API_HOST=v3.football.api-sports.io

# MongoDB (for user profiles)
DATABASE_URL=mongodb://localhost:27017/oracle_db

# Server
PORT=3000
NODE_ENV=development
```

### Step 3: Install & Run

```bash
npm install
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 3000
📡 API endpoints available at:
   - http://localhost:3000/api/football (Football data)
⚽ Football data from API-Football
```

## 📝 Common Use Cases

### 1. Find Latest Match Between Two Teams

**Use Case:** User wants to bet on "Bayern Munich vs Liverpool"

```bash
curl "http://localhost:3000/api/football/matches/find?team1=Bayern Munich&team2=Liverpool"
```

**Oracle Use:** Get the most recent match result to settle bets.

---

### 2. Find Match on Specific Date

**Use Case:** User specifies exact match date

```bash
curl "http://localhost:3000/api/football/matches/find?team1=Real Madrid&team2=Barcelona&date=2024-03-17"
```

**Oracle Use:** Verify outcome of a specific match for bet settlement.

---

### 3. Get Upcoming Matches

**Use Case:** Create new betting markets

```bash
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&next=5"
```

**Oracle Use:** Display upcoming matches users can bet on.

---

### 4. Check Live Scores

**Use Case:** Live betting updates

```bash
curl "http://localhost:3000/api/football/fixtures/live"
```

**Oracle Use:** Real-time score updates for in-play betting.

---

### 5. Head-to-Head Analysis

**Use Case:** Historical performance data

```bash
curl "http://localhost:3000/api/football/matches/h2h?team1=Chelsea&team2=Arsenal&last=10"
```

**Oracle Use:** Show historical stats to bettors.

## 🎯 Frontend Integration Examples

### React Example

```typescript
// services/footballApi.ts
export class FootballAPI {
  private baseUrl = 'http://localhost:3000/api/football';
  
  async findMatch(team1: string, team2?: string, date?: string) {
    const params = new URLSearchParams({ team1 });
    if (team2) params.append('team2', team2);
    if (date) params.append('date', date);
    
    const response = await fetch(`${this.baseUrl}/matches/find?${params}`);
    return response.json();
  }
  
  async getLiveMatches() {
    const response = await fetch(`${this.baseUrl}/fixtures/live`);
    return response.json();
  }
  
  async getUpcomingMatches(teamName: string, count: number = 5) {
    const response = await fetch(
      `${this.baseUrl}/fixtures/team?name=${teamName}&next=${count}`
    );
    return response.json();
  }
}

export const footballAPI = new FootballAPI();
```

### Usage in Component

```typescript
import { footballAPI } from './services/footballApi';

function BettingComponent() {
  const [match, setMatch] = useState(null);
  
  const handleFindMatch = async () => {
    const result = await footballAPI.findMatch(
      'Bayern Munich',
      'Liverpool',
      '2024-03-15'
    );
    
    if (result.success) {
      setMatch(result.match);
      // Use match data for betting
      createBet({
        homeTeam: result.match.teams.home.name,
        awayTeam: result.match.teams.away.name,
        homeScore: result.match.goals.home,
        awayScore: result.match.goals.away,
        winner: result.match.teams.home.winner ? 'home' : 'away'
      });
    }
  };
  
  return (
    <div>
      <button onClick={handleFindMatch}>Find Match</button>
      {match && (
        <div>
          <h3>{match.teams.home.name} vs {match.teams.away.name}</h3>
          <p>Score: {match.goals.home} - {match.goals.away}</p>
          <p>Date: {new Date(match.fixture.date).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
```

## 🔥 Smart Features

### 1. Intelligent Team Name Matching

The API automatically finds teams even with partial names:

```bash
# All of these work:
curl "http://localhost:3000/api/football/teams/search?name=Manchester United"
curl "http://localhost:3000/api/football/teams/search?name=Man Utd"
curl "http://localhost:3000/api/football/teams/search?name=United"
```

### 2. Automatic Date Detection

**No date specified** → Returns most recent OR upcoming match:
```bash
curl "http://localhost:3000/api/football/matches/find?team1=Liverpool&team2=Arsenal"
```

**With date** → Returns exact match on that date:
```bash
curl "http://localhost:3000/api/football/matches/find?team1=Liverpool&team2=Arsenal&date=2024-01-20"
```

### 3. Built-in Caching

Responses are automatically cached to save API calls:
- Teams: 24 hours
- Fixtures: 15 minutes
- Live matches: 1 minute
- Predictions: 1 hour

### 4. Match Status Detection

Automatically determines if a match is:
- **NS** - Not Started (upcoming)
- **1H** - First Half (live)
- **HT** - Half Time
- **2H** - Second Half (live)
- **FT** - Full Time (finished)
- **PST** - Postponed
- **CANC** - Cancelled

## 📊 Response Structure

All successful responses follow this format:

```json
{
  "success": true,
  "match": { /* match data */ },  // or "fixtures", "team", etc.
  "total": 5  // count of results (when applicable)
}
```

Error responses:

```json
{
  "error": "Error message",
  "example": "Correct usage example"
}
```

## 🎮 Testing the Integration

### Test 1: Search Team
```bash
curl "http://localhost:3000/api/football/teams/search?name=Barcelona"
```

Expected: Team information with ID, logo, etc.

### Test 2: Find Match
```bash
curl "http://localhost:3000/api/football/matches/find?team1=Real Madrid&team2=Barcelona"
```

Expected: Most recent El Clásico match

### Test 3: Live Matches
```bash
curl "http://localhost:3000/api/football/fixtures/live"
```

Expected: Currently live matches (empty array if no live matches)

### Test 4: Upcoming Fixtures
```bash
curl "http://localhost:3000/api/football/fixtures/team?name=Liverpool&next=3"
```

Expected: Next 3 Liverpool fixtures

## 🛠️ Troubleshooting

### "No API key configured"
**Solution:** Make sure `FOOTBALL_API_KEY` is set in your `.env` file

### "Team not found"
**Solution:** Try using the full team name (e.g., "Manchester United" instead of "Man U")

### "No match found"
**Solution:** 
- Check team names are correct
- Try without the date parameter first
- Verify the teams actually played each other recently

### Rate Limit Exceeded
**Solution:** 
- Wait for rate limit to reset (1 minute for per-minute limit)
- Upgrade your API plan
- Leverage caching by making similar requests

## 💡 Pro Tips

1. **Cache Team IDs** - Store team IDs in your database to avoid repeated searches
2. **Batch Requests** - Get multiple fixtures at once instead of one by one
3. **Use Date Ranges** - Fetch fixtures for a week at a time
4. **Schedule Updates** - Update match results once daily, not on every request
5. **Store Fixture IDs** - Save fixture IDs when creating bets for quick lookups

## 📈 Scaling for Production

### 1. Add Redis Caching

```typescript
import Redis from 'ioredis';

const redis = new Redis();

// Cache in Redis instead of memory
await redis.setex(`match:${id}`, 3600, JSON.stringify(match));
```

### 2. Add Request Queue

```typescript
import Queue from 'bull';

const footballQueue = new Queue('football-api');

footballQueue.process(async (job) => {
  return await footballService.findMatch(job.data);
});
```

### 3. Webhook Integration (Premium Feature)

Subscribe to webhooks for instant updates instead of polling.

## 🔗 Useful Resources

- **Full API Documentation:** See `FOOTBALL_API_INTEGRATION.md`
- **MongoDB Setup:** See `MONGODB_SETUP.md`
- **API-Football Docs:** https://www.api-football.com/documentation-v3
- **Dashboard:** https://dashboard.api-football.com

## ✅ Next Steps

1. ✅ API is configured and running
2. ⏳ Test all endpoints
3. ⏳ Integrate with your frontend
4. ⏳ Store results in MongoDB
5. ⏳ Create betting logic based on match results
6. ⏳ Deploy to production

---

**Ready to start building your betting oracle! ⚽🎲**

