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
   * Search for teams by name (returns all matches)
   * Frontend should display these for user selection
   */
  async searchTeams(teamName: string): Promise<Team[]> {
    const cacheKey = `teams:${teamName.toLowerCase()}`;
    const cached = cache.get<Team[]>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for teams: ${teamName}`);
      return cached;
    }

    try {
      const response = await this.client.get<FootballResponse<Team[]>>('/teams', {
        search: teamName
      });

      const teams = response.response || [];
      cache.set(cacheKey, teams, 86400); // Cache for 24 hours
      return teams;
    } catch (error) {
      console.error(`[Football Service] Error searching teams "${teamName}":`, error);
      throw error;
    }
  }

  /**
   * Search for a single team by name (smart selection)
   * Prioritizes main team over B teams, U23, etc.
   */
  async searchTeam(teamName: string): Promise<Team | null> {
    const teams = await this.searchTeams(teamName);
    
    if (teams.length === 0) {
      return null;
    }

    // Smart selection: Prioritize main team
    // Filter out B teams, U23, U21, U18, Women's teams
    const mainTeam = teams.find(team => {
      const name = team.name.toLowerCase();
      return !name.includes(' b') && 
             !name.includes(' u23') && 
             !name.includes(' u21') && 
             !name.includes(' u18') &&
             !name.includes(' w') &&
             !name.endsWith('b') &&
             team.founded !== null; // Main teams usually have founding date
    });

    return mainTeam || teams[0]; // Fallback to first if no main team found
  }

  /**
   * Get team by ID (direct, no ambiguity)
   */
  async getTeamById(teamId: number): Promise<Team | null> {
    const cacheKey = `team:id:${teamId}`;
    const cached = cache.get<Team>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for team ID: ${teamId}`);
      return cached;
    }

    try {
      const response = await this.client.get<FootballResponse<Team[]>>('/teams', {
        id: teamId
      });

      if (response.response && response.response.length > 0) {
        const team = response.response[0];
        cache.set(cacheKey, team, 86400); // Cache for 24 hours
        return team;
      }

      return null;
    } catch (error) {
      console.error(`[Football Service] Error getting team by ID ${teamId}:`, error);
      throw error;
    }
  }

  /**
   * Get all teams from around the world
   * This fetches teams from all countries and leagues
   */
  async getAllTeams(options?: {
    page?: number;
    limit?: number;
    country?: string;
    league?: number;
    season?: number;
  }): Promise<{
    teams: Team[];
    total: number;
    page: number;
    hasMore: boolean;
  }> {
    const cacheKey = `all_teams:${JSON.stringify(options || {})}`;
    const cached = cache.get<{
      teams: Team[];
      total: number;
      page: number;
      hasMore: boolean;
    }>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for all teams`);
      return cached;
    }

    try {
      console.log(`[Football Service] Fetching all teams from around the world`);
      
      // Build query parameters
      const params: any = {};
      
      if (options?.country) {
        params.country = options.country;
      }
      
      if (options?.league) {
        params.league = options.league;
      }
      
      if (options?.season) {
        params.season = options.season;
      }

      const response = await this.client.get<FootballResponse<Team[]>>('/teams', params);

      const teams = response.response || [];
      const total = response.paging?.total || teams.length;
      const currentPage = response.paging?.current || 1;
      const hasMore = currentPage < (response.paging?.total || 1);

      const result = {
        teams,
        total,
        page: currentPage,
        hasMore
      };

      // Cache for 1 hour (teams don't change frequently)
      cache.set(cacheKey, result, 3600);
      
      return result;
    } catch (error) {
      console.error(`[Football Service] Error fetching all teams:`, error);
      throw error;
    }
  }

  /**
   * Get all countries available for teams
   * Returns list of countries with their codes and flags
   */
  async getAllCountries(): Promise<{
    countries: Array<{
      name: string;
      code: string;
      flag: string;
    }>;
    total: number;
  }> {
    const cacheKey = 'all_countries';
    const cached = cache.get<{
      countries: Array<{
        name: string;
        code: string;
        flag: string;
      }>;
      total: number;
    }>(cacheKey);
    
    if (cached) {
      console.log(`[Football Service] Cache hit for all countries`);
      return cached;
    }

    try {
      console.log(`[Football Service] Fetching all countries`);
      
      const response = await this.client.get<FootballResponse<Array<{
        name: string;
        code: string;
        flag: string;
      }>>>('/teams/countries');

      const countries = response.response || [];
      const total = response.paging?.total || countries.length;

      const result = {
        countries,
        total
      };

      // Cache for 24 hours (countries don't change frequently)
      cache.set(cacheKey, result, 86400);
      
      return result;
    } catch (error) {
      console.error(`[Football Service] Error fetching all countries:`, error);
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
   * Find match between two teams using IDs (recommended for accuracy)
   */
  async findMatchByIds(team1Id: number, team2Id: number, options?: {
    date?: string;
    season?: number;
    league?: number;
  }): Promise<Fixture | null> {
    try {
      console.log(`[Football Service] Finding match by IDs: ${team1Id} vs ${team2Id}`);
      
      // Get H2H matches
      const h2hMatches = await this.getHeadToHead(team1Id, team2Id, options?.date ? 20 : 10);
      
      // If date is provided, filter by date
      if (options?.date) {
        const targetDate = new Date(options.date).toISOString().split('T')[0];
        const matchOnDate = h2hMatches.find(fixture => {
          const fixtureDate = new Date(fixture.fixture.date).toISOString().split('T')[0];
          return fixtureDate === targetDate;
        });
        
        if (matchOnDate) {
          return matchOnDate;
        }
      }

      // If season is provided, filter by season
      if (options?.season) {
        const seasonMatches = h2hMatches.filter(fixture => fixture.league.season === options.season);
        if (seasonMatches.length > 0) {
          return seasonMatches[0]; // Most recent in that season
        }
      }

      // Return most recent match
      if (h2hMatches.length > 0) {
        return h2hMatches[0];
      }

      // If no H2H found, try to find upcoming match
      const team1Fixtures = await this.getFixturesByTeam(team1Id, { 
        next: 10,
        season: options?.season
      });
      const upcomingMatch = team1Fixtures.find(fixture => 
        fixture.teams.away.id === team2Id || fixture.teams.home.id === team2Id
      );

      return upcomingMatch || null;
    } catch (error) {
      console.error('[Football Service] Error finding match by IDs:', error);
      throw error;
    }
  }

  /**
   * Get fixtures for current season
   */
  async getCurrentSeasonFixtures(teamId: number, options?: {
    next?: number;
    last?: number;
    league?: number;
  }): Promise<Fixture[]> {
    const currentYear = new Date().getFullYear();
    
    return this.getFixturesByTeam(teamId, {
      season: currentYear,
      next: options?.next,
      last: options?.last
    });
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
          fixture.teams.away.id === team2!.id || fixture.teams.home.id === team2!.id
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

