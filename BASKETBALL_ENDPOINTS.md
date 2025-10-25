# Basketball API Endpoints

This document provides a comprehensive overview of all basketball-related endpoints available in the Oracle Betting Backend.

## Base URL
All basketball endpoints are prefixed with `/api/basketball`

## Available Endpoints

### 1. Countries
**GET** `/api/basketball/countries`

Get all countries available for basketball.

**Query Parameters:**
- `id` (integer): Filter by country ID
- `name` (string): Filter by country name
- `code` (string): Filter by country code (2 characters)
- `search` (string): Search countries by name (minimum 3 characters)

**Example:**
```bash
GET /api/basketball/countries?search=USA
```

**Response:**
```json
{
  "success": true,
  "countries": [
    {
      "id": 5,
      "name": "USA",
      "code": "US",
      "flag": "https://media.api-football.com/flags/us.svg"
    }
  ],
  "total": 1,
  "filters": {
    "id": "all",
    "name": "all", 
    "code": "all",
    "search": "USA"
  },
  "note": "Returns all countries available for basketball teams and leagues."
}
```

### 2. Teams by Country
**GET** `/api/basketball/teams/country/:countryId`

Get basketball teams for a specific country.

**Path Parameters:**
- `countryId` (integer): Country ID

**Query Parameters:**
- `league` (integer): Filter by league ID
- `season` (string): Filter by season (e.g., "2023-2024")
- `search` (string): Search teams by name

**Example:**
```bash
GET /api/basketball/teams/country/5?season=2023-2024
```

**Response:**
```json
{
  "success": true,
  "teams": [
    {
      "id": 139,
      "name": "Denver Nuggets",
      "national": false,
      "logo": null,
      "country": {
        "id": 5,
        "name": "USA",
        "code": "US",
        "flag": "https://media.api-football.com/flags/us.svg"
      }
    }
  ],
  "total": 1,
  "countryId": 5,
  "filters": {
    "league": "all",
    "season": "2023-2024",
    "search": "all"
  },
  "note": "Returns basketball teams for country ID 5."
}
```

### 3. Live Games
**GET** `/api/basketball/games/live`

Get currently live basketball games.

**Example:**
```bash
GET /api/basketball/games/live
```

**Response:**
```json
{
  "success": true,
  "games": [
    {
      "id": 1911,
      "date": "2024-01-15T20:00:00+00:00",
      "time": "20:00",
      "timestamp": 1705344000,
      "timezone": "UTC",
      "stage": null,
      "week": null,
      "venue": null,
      "status": {
        "long": "Quarter 2",
        "short": "Q2",
        "timer": "12:34"
      },
      "league": {
        "id": 12,
        "name": "NBA",
        "type": "League",
        "season": "2023-2024",
        "logo": null
      },
      "country": {
        "id": 5,
        "name": "USA",
        "code": "US",
        "flag": "https://media.api-football.com/flags/us.svg"
      },
      "teams": {
        "home": {
          "id": 134,
          "name": "Brooklyn Nets",
          "logo": null
        },
        "away": {
          "id": 157,
          "name": "Sacramento Kings",
          "logo": null
        }
      },
      "scores": {
        "home": {
          "quarter_1": 26,
          "quarter_2": 30,
          "quarter_3": null,
          "quarter_4": null,
          "over_time": null,
          "total": 56
        },
        "away": {
          "quarter_1": 23,
          "quarter_2": 26,
          "quarter_3": null,
          "quarter_4": null,
          "over_time": null,
          "total": 49
        }
      }
    }
  ],
  "total": 1,
  "status": "live",
  "note": "Returns currently live basketball games. Games are updated every 15 seconds."
}
```

### 4. Games by Date
**GET** `/api/basketball/games/date/:date`

Get basketball games for a specific date.

**Path Parameters:**
- `date` (string): Date in YYYY-MM-DD format

**Query Parameters:**
- `league` (integer): Filter by league ID
- `season` (string): Filter by season
- `team` (integer): Filter by team ID
- `timezone` (string): Timezone (e.g., "Europe/London")

**Example:**
```bash
GET /api/basketball/games/date/2024-01-15?league=12
```

### 5. Games by Season
**GET** `/api/basketball/games/season/:season`

Get basketball games for a specific season.

**Path Parameters:**
- `season` (string): Season (e.g., "2023-2024")

**Query Parameters:**
- `league` (integer): Filter by league ID
- `team` (integer): Filter by team ID
- `date` (string): Filter by specific date

**Example:**
```bash
GET /api/basketball/games/season/2023-2024?league=12
```

### 6. Today's Games
**GET** `/api/basketball/games/today`

Get today's basketball games (convenience endpoint).

**Query Parameters:**
- `league` (integer): Filter by league ID
- `season` (string): Filter by season
- `team` (integer): Filter by team ID
- `timezone` (string): Timezone

**Example:**
```bash
GET /api/basketball/games/today?league=12
```

### 7. Current Season Games
**GET** `/api/basketball/games/current-season`

Get games for the current season (convenience endpoint).

**Query Parameters:**
- `league` (integer): Filter by league ID
- `team` (integer): Filter by team ID
- `date` (string): Filter by specific date

**Example:**
```bash
GET /api/basketball/games/current-season?league=12
```

### 8. Head-to-Head Matches
**GET** `/api/basketball/games/h2h/:team1Id/:team2Id`

Get head-to-head matches between two teams.

**Path Parameters:**
- `team1Id` (integer): First team ID
- `team2Id` (integer): Second team ID

**Query Parameters:**
- `date` (string): Filter by date
- `league` (integer): Filter by league ID
- `season` (string): Filter by season
- `timezone` (string): Timezone

**Example:**
```bash
GET /api/basketball/games/h2h/134/157?season=2023-2024
```

**Response:**
```json
{
  "success": true,
  "games": [
    {
      "id": 2003,
      "date": "2024-01-15T20:00:00+00:00",
      "time": "20:00",
      "timestamp": 1705344000,
      "timezone": "UTC",
      "stage": null,
      "week": null,
      "venue": null,
      "status": {
        "long": "Game Finished",
        "short": "FT",
        "timer": null
      },
      "league": {
        "id": 12,
        "name": "NBA",
        "type": "League",
        "season": "2023-2024",
        "logo": null
      },
      "country": {
        "id": 5,
        "name": "USA",
        "code": "US",
        "flag": "https://media.api-football.com/flags/us.svg"
      },
      "teams": {
        "home": {
          "id": 134,
          "name": "Brooklyn Nets",
          "logo": null
        },
        "away": {
          "id": 157,
          "name": "Sacramento Kings",
          "logo": null
        }
      },
      "scores": {
        "home": {
          "quarter_1": 26,
          "quarter_2": 30,
          "quarter_3": 30,
          "quarter_4": 30,
          "over_time": null,
          "total": 116
        },
        "away": {
          "quarter_1": 23,
          "quarter_2": 26,
          "quarter_3": 21,
          "quarter_4": 27,
          "over_time": null,
          "total": 97
        }
      }
    }
  ],
  "total": 1,
  "teams": {
    "team1": 134,
    "team2": 157
  },
  "filters": {
    "date": "all",
    "league": "all",
    "season": "2023-2024",
    "timezone": "UTC"
  },
  "note": "Returns head-to-head matches between team 134 and team 157."
}
```

### 9. Seasons
**GET** `/api/basketball/seasons`

Get all available basketball seasons.

**Example:**
```bash
GET /api/basketball/seasons
```

**Response:**
```json
{
  "success": true,
  "seasons": [
    {
      "season": "2015-2016",
      "start": "",
      "end": ""
    },
    {
      "season": "2023-2024",
      "start": "",
      "end": ""
    }
  ],
  "total": 8,
  "note": "Returns all available basketball seasons."
}
```

### 10. Leagues by Country
**GET** `/api/basketball/leagues/country/:countryId`

Get basketball leagues for a specific country.

**Path Parameters:**
- `countryId` (integer): Country ID

**Query Parameters:**
- `season` (string): Filter by season
- `type` (string): Filter by league type ("league" or "cup")

**Example:**
```bash
GET /api/basketball/leagues/country/5?season=2023-2024
```

## Game Status Codes

Basketball games can have the following status codes:

- `NS`: Not Started
- `Q1`: Quarter 1 (In Play)
- `Q2`: Quarter 2 (In Play)
- `Q3`: Quarter 3 (In Play)
- `Q4`: Quarter 4 (In Play)
- `OT`: Over Time (In Play)
- `BT`: Break Time (In Play)
- `HT`: Halftime (In Play)
- `FT`: Game Finished
- `AOT`: After Over Time (Game Finished)
- `POST`: Game Postponed
- `CANC`: Game Cancelled
- `SUSP`: Game Suspended
- `AWD`: Game Awarded
- `ABD`: Game Abandoned

## Caching

All endpoints implement intelligent caching:
- **Countries**: 24 hours (countries don't change frequently)
- **Teams**: 1 hour (teams don't change frequently)
- **Live Games**: 2 minutes (live games change frequently)
- **Regular Games**: 1-2 hours (depending on endpoint)
- **Seasons**: 24 hours (seasons don't change frequently)

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Rate Limiting

The basketball API respects the rate limits of the underlying API-Sports service. Caching is implemented to minimize API calls and improve performance.

## Authentication

Make sure to set the `BASKETBALL_API_KEY` environment variable with your API-Sports key. The service will fall back to `FOOTBALL_API_KEY` if `BASKETBALL_API_KEY` is not set.
