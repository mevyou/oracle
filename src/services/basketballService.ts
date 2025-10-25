import { getBasketballAPIClient } from '../utils/basketballApiClient';
import { cache } from '../utils/cache';

// Type definitions for Basketball API responses
export interface BasketballResponse<T> {
  get: string;
  parameters: Record<string, any>;
  errors: any[];
  results: number;
  response: T;
  paging?: {
    current: number;
    total: number;
  };
}

export interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
  country: Country;
  seasons: Array<{
    season: string;
    start: string;
    end: string;
    coverage: {
      games: {
        statistics: {
          teams: boolean;
          players: boolean;
        };
      };
      standings: boolean;
      players: boolean;
      odds: boolean;
    };
  }>;
}

export interface Team {
  id: number;
  name: string;
  national: boolean;
  logo: string | null;
  country: Country;
}

export interface Game {
  id: number;
  date: string;
  time: string;
  timestamp: number;
  timezone: string;
  stage: string | null;
  week: string | null;
  venue: string | null;
  status: {
    long: string;
    short: string;
    timer: string | null;
  };
  league: {
    id: number;
    name: string;
    type: string;
    season: string;
    logo: string | null;
  };
  country: Country;
  teams: {
    home: {
      id: number;
      name: string;
      logo: string | null;
    };
    away: {
      id: number;
      name: string;
      logo: string | null;
    };
  };
  scores: {
    home: {
      quarter_1: number | null;
      quarter_2: number | null;
      quarter_3: number | null;
      quarter_4: number | null;
      over_time: number | null;
      total: number | null;
    };
    away: {
      quarter_1: number | null;
      quarter_2: number | null;
      quarter_3: number | null;
      quarter_4: number | null;
      over_time: number | null;
      total: number | null;
    };
  };
}

export interface Season {
  season: string;
  start: string;
  end: string;
}

export class BasketballService {
  private client = getBasketballAPIClient();

  /**
   * Get all countries available for basketball
   */
  async getCountries(options?: {
    id?: number;
    name?: string;
    code?: string;
    search?: string;
  }): Promise<{
    countries: Country[];
    total: number;
  }> {
    const cacheKey = `basketball_countries:${JSON.stringify(options || {})}`;
    const cached = cache.get<{
      countries: Country[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for countries`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching countries`);

      const params: any = {};
      if (options?.id) params.id = options.id;
      if (options?.name) params.name = options.name;
      if (options?.code) params.code = options.code;
      if (options?.search) params.search = options.search;

      const response = await this.client.get<BasketballResponse<Country[]>>('/countries', { params });

      const countries = response.data.response || [];
      const total = response.data.results || countries.length;

      const result = {
        countries,
        total
      };

      // Cache for 24 hours (countries don't change frequently)
      cache.set(cacheKey, result, 86400);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching countries:`, error);
      throw error;
    }
  }

  /**
   * Get teams for a specific country
   */
  async getTeamsByCountry(countryId: number, options?: {
    league?: number;
    season?: string;
    search?: string;
  }): Promise<{
    teams: Team[];
    total: number;
  }> {
    const cacheKey = `basketball_teams_country_${countryId}:${JSON.stringify(options || {})}`;
    const cached = cache.get<{
      teams: Team[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for teams in country ${countryId}`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching teams for country ${countryId}`);

      const params: any = {
        country_id: countryId
      };
      if (options?.league) params.league = options.league;
      if (options?.season) params.season = options.season;
      if (options?.search) params.search = options.search;

      const response = await this.client.get<BasketballResponse<Team[]>>('/teams', { params });

      const teams = response.data.response || [];
      const total = response.data.results || teams.length;

      const result = {
        teams,
        total
      };

      // Cache for 1 hour (teams don't change frequently)
      cache.set(cacheKey, result, 3600);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching teams for country ${countryId}:`, error);
      throw error;
    }
  }

  /**
   * Get live basketball games
   */
  async getLiveGames(): Promise<{
    games: Game[];
    total: number;
  }> {
    const cacheKey = 'basketball_live_games';
    const cached = cache.get<{
      games: Game[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for live games`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching live games`);

      // Get current date for live games
      const today = new Date().toISOString().split('T')[0];
      
      const response = await this.client.get<BasketballResponse<Game[]>>('/games', {
        params: {
          date: today
        }
      });

      const allGames = response.data.response || [];
      
      // Filter for live games (status indicates game is in progress)
      const liveGames = allGames.filter(game => {
        const status = game.status.short;
        return ['Q1', 'Q2', 'Q3', 'Q4', 'OT', 'BT', 'HT'].includes(status);
      });

      const result = {
        games: liveGames,
        total: liveGames.length
      };

      // Cache for 2 minutes (live games change frequently)
      cache.set(cacheKey, result, 120);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching live games:`, error);
      throw error;
    }
  }

  /**
   * Get games for a specific date
   */
  async getGamesByDate(date: string, options?: {
    league?: number;
    season?: string;
    team?: number;
    timezone?: string;
  }): Promise<{
    games: Game[];
    total: number;
  }> {
    const cacheKey = `basketball_games_date_${date}:${JSON.stringify(options || {})}`;
    const cached = cache.get<{
      games: Game[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for games on ${date}`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching games for date ${date}`);

      const params: any = {
        date: date
      };
      if (options?.league) params.league = options.league;
      if (options?.season) params.season = options.season;
      if (options?.team) params.team = options.team;
      if (options?.timezone) params.timezone = options.timezone;

      const response = await this.client.get<BasketballResponse<Game[]>>('/games', { params });

      const games = response.data.response || [];
      const total = response.data.results || games.length;

      const result = {
        games,
        total
      };

      // Cache for 1 hour
      cache.set(cacheKey, result, 3600);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching games for date ${date}:`, error);
      throw error;
    }
  }

  /**
   * Get games for a specific season/year
   */
  async getGamesBySeason(season: string, options?: {
    league?: number;
    team?: number;
    date?: string;
  }): Promise<{
    games: Game[];
    total: number;
  }> {
    const cacheKey = `basketball_games_season_${season}:${JSON.stringify(options || {})}`;
    const cached = cache.get<{
      games: Game[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for games in season ${season}`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching games for season ${season}`);

      const params: any = {
        season: season
      };
      if (options?.league) params.league = options.league;
      if (options?.team) params.team = options.team;
      if (options?.date) params.date = options.date;

      const response = await this.client.get<BasketballResponse<Game[]>>('/games', { params });

      const games = response.data.response || [];
      const total = response.data.results || games.length;

      const result = {
        games,
        total
      };

      // Cache for 2 hours
      cache.set(cacheKey, result, 7200);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching games for season ${season}:`, error);
      throw error;
    }
  }

  /**
   * Get head-to-head matches between two teams
   */
  async getHeadToHead(team1Id: number, team2Id: number, options?: {
    date?: string;
    league?: number;
    season?: string;
    timezone?: string;
  }): Promise<{
    games: Game[];
    total: number;
  }> {
    const cacheKey = `basketball_h2h_${team1Id}_${team2Id}:${JSON.stringify(options || {})}`;
    const cached = cache.get<{
      games: Game[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for H2H ${team1Id} vs ${team2Id}`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching H2H matches between teams ${team1Id} and ${team2Id}`);

      const params: any = {
        h2h: `${team1Id}-${team2Id}`
      };
      if (options?.date) params.date = options.date;
      if (options?.league) params.league = options.league;
      if (options?.season) params.season = options.season;
      if (options?.timezone) params.timezone = options.timezone;

      const response = await this.client.get<BasketballResponse<Game[]>>('/games/h2h', { params });

      const games = response.data.response || [];
      const total = response.data.results || games.length;

      const result = {
        games,
        total
      };

      // Cache for 1 hour
      cache.set(cacheKey, result, 3600);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching H2H matches:`, error);
      throw error;
    }
  }

  /**
   * Get all available seasons
   */
  async getSeasons(): Promise<{
    seasons: Season[];
    total: number;
  }> {
    const cacheKey = 'basketball_seasons';
    const cached = cache.get<{
      seasons: Season[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for seasons`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching seasons`);

      const response = await this.client.get<BasketballResponse<string[]>>('/seasons');

      const seasonStrings = response.data.response || [];
      const seasons: Season[] = seasonStrings.map(seasonStr => ({
        season: seasonStr,
        start: '', // API doesn't provide start/end dates in seasons endpoint
        end: ''
      }));

      const result = {
        seasons,
        total: seasons.length
      };

      // Cache for 24 hours
      cache.set(cacheKey, result, 86400);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching seasons:`, error);
      throw error;
    }
  }

  /**
   * Get leagues for a specific country
   */
  async getLeaguesByCountry(countryId: number, options?: {
    season?: string;
    type?: string;
  }): Promise<{
    leagues: League[];
    total: number;
  }> {
    const cacheKey = `basketball_leagues_country_${countryId}:${JSON.stringify(options || {})}`;
    const cached = cache.get<{
      leagues: League[];
      total: number;
    }>(cacheKey);

    if (cached) {
      console.log(`[Basketball Service] Cache hit for leagues in country ${countryId}`);
      return cached;
    }

    try {
      console.log(`[Basketball Service] Fetching leagues for country ${countryId}`);

      const params: any = {
        country_id: countryId
      };
      if (options?.season) params.season = options.season;
      if (options?.type) params.type = options.type;

      const response = await this.client.get<BasketballResponse<League[]>>('/leagues', { params });

      const leagues = response.data.response || [];
      const total = response.data.results || leagues.length;

      const result = {
        leagues,
        total
      };

      // Cache for 2 hours
      cache.set(cacheKey, result, 7200);

      return result;
    } catch (error) {
      console.error(`[Basketball Service] Error fetching leagues for country ${countryId}:`, error);
      throw error;
    }
  }
}

export const basketballService = new BasketballService();
