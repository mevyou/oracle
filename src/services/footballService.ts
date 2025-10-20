import { getFootballAPIClient } from '../utils/footballApiClient';
import { cache } from '../utils/cache';

export interface Team {
  id: number;
  name: string;
  code?: string;
  country?: string;
  founded?: number;
  national?: boolean;
  logo?: string;
}

export interface Fixture {
  fixture: {
    id: number;
    referee?: string;
    timezone: string;
    date: string;
    timestamp: number;
    status: {
      long: string;
      short: string;
      elapsed?: number;
    };
    venue?: {
      id?: number;
      name?: string;
      city?: string;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag?: string;
    season: number;
    round?: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner?: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner?: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}

export interface MatchSearchParams {
  team1: string;
  team2?: string;
  date?: string; // YYYY-MM-DD
  league?: number;
  season?: number;
}

export interface FootballResponse<T> {
  get: string;
  parameters: Record<string, any>;
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: T;
}

/**
 * Football Service
 * Handles all football data operations with caching
 */
export class FootballService {
  private client = getFootballAPIClient();

  /**
   * Search for a team by name
   */
  async searchTeam(teamName: string): Promise<Team | null> {
    const cacheKey = `team:${teamName.toLowerCase()}`;
    const cached = cache.get<Team>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for team: ${teamName}`);
      return cached;
    }

    try {
      const response = await this.client.get<FootballResponse<Team[]>>('/teams', {
        search: teamName
      });

      if (response.response && response.response.length > 0) {
        const team = response.response[0];
        cache.set(cacheKey, team, 86400); // Cache for 24 hours
        return team;
      }

      return null;
    } catch (error) {
      console.error(`[Football Service] Error searching team "${teamName}":`, error);
      throw error;
    }
  }

  /**
   * Get fixtures between two teams (Head-to-Head)
   */
  async getHeadToHead(team1Id: number, team2Id: number, last: number = 10): Promise<Fixture[]> {
    const cacheKey = `h2h:${team1Id}-${team2Id}:last${last}`;
    const cached = cache.get<Fixture[]>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for H2H: ${team1Id} vs ${team2Id}`);
      return cached;
    }

    try {
      const response = await this.client.get<FootballResponse<Fixture[]>>('/fixtures/headtohead', {
        h2h: `${team1Id}-${team2Id}`,
        last
      });

      const fixtures = response.response || [];
      cache.set(cacheKey, fixtures, 3600); // Cache for 1 hour
      return fixtures;
    } catch (error) {
      console.error(`[Football Service] Error getting H2H for teams ${team1Id} vs ${team2Id}:`, error);
      throw error;
    }
  }

  /**
   * Get fixtures by team
   */
  async getFixturesByTeam(teamId: number, options?: {
    date?: string;
    season?: number;
    last?: number;
    next?: number;
    from?: string;
    to?: string;
  }): Promise<Fixture[]> {
    const cacheKey = `fixtures:team:${teamId}:${JSON.stringify(options)}`;
    const cached = cache.get<Fixture[]>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for team fixtures: ${teamId}`);
      return cached;
    }

    try {
      const params: any = { team: teamId };
      if (options?.date) params.date = options.date;
      if (options?.season) params.season = options.season;
      if (options?.last) params.last = options.last;
      if (options?.next) params.next = options.next;
      if (options?.from) params.from = options.from;
      if (options?.to) params.to = options.to;

      const response = await this.client.get<FootballResponse<Fixture[]>>('/fixtures', params);

      const fixtures = response.response || [];
      cache.set(cacheKey, fixtures, 900); // Cache for 15 minutes
      return fixtures;
    } catch (error) {
      console.error(`[Football Service] Error getting fixtures for team ${teamId}:`, error);
      throw error;
    }
  }

  /**
   * Get fixtures by date
   */
  async getFixturesByDate(date: string, league?: number): Promise<Fixture[]> {
    const cacheKey = `fixtures:date:${date}:league${league || 'all'}`;
    const cached = cache.get<Fixture[]>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for date fixtures: ${date}`);
      return cached;
    }

    try {
      const params: any = { date };
      if (league) params.league = league;

      const response = await this.client.get<FootballResponse<Fixture[]>>('/fixtures', params);

      const fixtures = response.response || [];
      cache.set(cacheKey, fixtures, 900); // Cache for 15 minutes
      return fixtures;
    } catch (error) {
      console.error(`[Football Service] Error getting fixtures for date ${date}:`, error);
      throw error;
    }
  }

  /**
   * Get live fixtures
   */
  async getLiveFixtures(league?: number): Promise<Fixture[]> {
    const cacheKey = `fixtures:live:league${league || 'all'}`;
    const cached = cache.get<Fixture[]>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for live fixtures`);
      return cached;
    }

    try {
      const params: any = { live: league ? `${league}` : 'all' };

      const response = await this.client.get<FootballResponse<Fixture[]>>('/fixtures', params);

      const fixtures = response.response || [];
      cache.set(cacheKey, fixtures, 60); // Cache for 1 minute (live data changes frequently)
      return fixtures;
    } catch (error) {
      console.error(`[Football Service] Error getting live fixtures:`, error);
      throw error;
    }
  }

  /**
   * Get fixture by ID
   */
  async getFixtureById(fixtureId: number): Promise<Fixture | null> {
    const cacheKey = `fixture:${fixtureId}`;
    const cached = cache.get<Fixture>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for fixture: ${fixtureId}`);
      return cached;
    }

    try {
      const response = await this.client.get<FootballResponse<Fixture[]>>('/fixtures', {
        id: fixtureId
      });

      if (response.response && response.response.length > 0) {
        const fixture = response.response[0];
        cache.set(cacheKey, fixture, 600); // Cache for 10 minutes
        return fixture;
      }

      return null;
    } catch (error) {
      console.error(`[Football Service] Error getting fixture ${fixtureId}:`, error);
      throw error;
    }
  }

  /**
   * Find match between two teams
   * This is the main method for the betting oracle
   */
  async findMatch(params: MatchSearchParams): Promise<Fixture | null> {
    try {
      // First, search for both teams
      console.log(`[Football Service] Searching for match: ${params.team1} vs ${params.team2 || 'any'}`);
      
      const team1 = await this.searchTeam(params.team1);
      if (!team1) {
        throw new Error(`Team not found: ${params.team1}`);
      }

      // If second team is provided, search for it
      let team2: Team | null = null;
      if (params.team2) {
        team2 = await this.searchTeam(params.team2);
        if (!team2) {
          throw new Error(`Team not found: ${params.team2}`);
        }
      }

      // If both teams and date provided, search for H2H
      if (team2) {
        const h2hMatches = await this.getHeadToHead(team1.id, team2.id, params.date ? 20 : 5);
        
        // If date is provided, filter by date
        if (params.date) {
          const targetDate = new Date(params.date).toISOString().split('T')[0];
          const matchOnDate = h2hMatches.find(fixture => {
            const fixtureDate = new Date(fixture.fixture.date).toISOString().split('T')[0];
            return fixtureDate === targetDate;
          });
          
          if (matchOnDate) {
            return matchOnDate;
          }
        }

        // Return most recent match
        if (h2hMatches.length > 0) {
          return h2hMatches[0];
        }

        // If no H2H found, try to find upcoming match
        const team1Fixtures = await this.getFixturesByTeam(team1.id, { next: 10 });
        const upcomingMatch = team1Fixtures.find(fixture => 
          fixture.teams.away.id === team2.id || fixture.teams.home.id === team2.id
        );

        if (upcomingMatch) {
          return upcomingMatch;
        }

        return null;
      }

      // If only one team, get recent or upcoming match
      const fixtures = await this.getFixturesByTeam(team1.id, {
        date: params.date,
        last: params.date ? undefined : 1,
        next: params.date ? undefined : 1
      });

      return fixtures.length > 0 ? fixtures[0] : null;
    } catch (error) {
      console.error('[Football Service] Error finding match:', error);
      throw error;
    }
  }

  /**
   * Get match prediction
   */
  async getMatchPrediction(fixtureId: number): Promise<any> {
    const cacheKey = `prediction:${fixtureId}`;
    const cached = cache.get<any>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for prediction: ${fixtureId}`);
      return cached;
    }

    try {
      const response = await this.client.get<FootballResponse<any>>('/predictions', {
        fixture: fixtureId
      });

      if (response.response && response.response.length > 0) {
        const prediction = response.response[0];
        cache.set(cacheKey, prediction, 3600); // Cache for 1 hour
        return prediction;
      }

      return null;
    } catch (error) {
      console.error(`[Football Service] Error getting prediction for fixture ${fixtureId}:`, error);
      throw error;
    }
  }

  /**
   * Get fixture statistics
   */
  async getFixtureStatistics(fixtureId: number): Promise<any> {
    const cacheKey = `statistics:${fixtureId}`;
    const cached = cache.get<any>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for statistics: ${fixtureId}`);
      return cached;
    }

    try {
      const response = await this.client.get<FootballResponse<any>>('/fixtures/statistics', {
        fixture: fixtureId
      });

      const statistics = response.response || [];
      cache.set(cacheKey, statistics, 600); // Cache for 10 minutes
      return statistics;
    } catch (error) {
      console.error(`[Football Service] Error getting statistics for fixture ${fixtureId}:`, error);
      throw error;
    }
  }
}

// Create singleton instance
export const footballService = new FootballService();

