import { Request, Response, NextFunction } from 'express';
import { basketballService } from '../services/basketballService';

/**
 * Get all countries available for basketball
 * GET /api/basketball/countries
 */
export const getCountries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, name, code, search } = req.query;

    const result = await basketballService.getCountries({
      id: id ? parseInt(id as string) : undefined,
      name: name as string,
      code: code as string,
      search: search as string
    });

    res.json({
      success: true,
      countries: result.countries,
      total: result.total,
      filters: {
        id: id || 'all',
        name: name || 'all',
        code: code || 'all',
        search: search || 'all'
      },
      note: 'Returns all countries available for basketball teams and leagues.'
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get teams for a specific country
 * GET /api/basketball/teams/country/:countryId
 */
export const getTeamsByCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { countryId } = req.params;
    const { league, season, search } = req.query;

    const result = await basketballService.getTeamsByCountry(parseInt(countryId), {
      league: league ? parseInt(league as string) : undefined,
      season: season as string,
      search: search as string
    });

    res.json({
      success: true,
      teams: result.teams,
      total: result.total,
      countryId: parseInt(countryId),
      filters: {
        league: league || 'all',
        season: season || 'all',
        search: search || 'all'
      },
      note: `Returns basketball teams for country ID ${countryId}.`
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get live basketball games
 * GET /api/basketball/games/live
 */
export const getLiveGames = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await basketballService.getLiveGames();

    res.json({
      success: true,
      games: result.games,
      total: result.total,
      status: 'live',
      note: 'Returns currently live basketball games. Games are updated every 15 seconds.'
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get games for a specific date
 * GET /api/basketball/games/date/:date
 */
export const getGamesByDate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { date } = req.params;
    const { league, season, team, timezone } = req.query;

    const result = await basketballService.getGamesByDate(date, {
      league: league ? parseInt(league as string) : undefined,
      season: season as string,
      team: team ? parseInt(team as string) : undefined,
      timezone: timezone as string
    });

    res.json({
      success: true,
      games: result.games,
      total: result.total,
      date: date,
      filters: {
        league: league || 'all',
        season: season || 'all',
        team: team || 'all',
        timezone: timezone || 'UTC'
      },
      note: `Returns basketball games for date ${date}.`
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get games for a specific season
 * GET /api/basketball/games/season/:season
 */
export const getGamesBySeason = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { season } = req.params;
    const { league, team, date } = req.query;

    const result = await basketballService.getGamesBySeason(season, {
      league: league ? parseInt(league as string) : undefined,
      team: team ? parseInt(team as string) : undefined,
      date: date as string
    });

    res.json({
      success: true,
      games: result.games,
      total: result.total,
      season: season,
      filters: {
        league: league || 'all',
        team: team || 'all',
        date: date || 'all'
      },
      note: `Returns basketball games for season ${season}.`
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get head-to-head matches between two teams
 * GET /api/basketball/games/h2h/:team1Id/:team2Id
 */
export const getHeadToHead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { team1Id, team2Id } = req.params;
    const { date, league, season, timezone } = req.query;

    const result = await basketballService.getHeadToHead(
      parseInt(team1Id),
      parseInt(team2Id),
      {
        date: date as string,
        league: league ? parseInt(league as string) : undefined,
        season: season as string,
        timezone: timezone as string
      }
    );

    res.json({
      success: true,
      games: result.games,
      total: result.total,
      teams: {
        team1: parseInt(team1Id),
        team2: parseInt(team2Id)
      },
      filters: {
        date: date || 'all',
        league: league || 'all',
        season: season || 'all',
        timezone: timezone || 'UTC'
      },
      note: `Returns head-to-head matches between team ${team1Id} and team ${team2Id}.`
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get all available seasons
 * GET /api/basketball/seasons
 */
export const getSeasons = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await basketballService.getSeasons();

    res.json({
      success: true,
      seasons: result.seasons,
      total: result.total,
      note: 'Returns all available basketball seasons.'
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get leagues for a specific country
 * GET /api/basketball/leagues/country/:countryId
 */
export const getLeaguesByCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { countryId } = req.params;
    const { season, type } = req.query;

    const result = await basketballService.getLeaguesByCountry(parseInt(countryId), {
      season: season as string,
      type: type as string
    });

    res.json({
      success: true,
      leagues: result.leagues,
      total: result.total,
      countryId: parseInt(countryId),
      filters: {
        season: season || 'all',
        type: type || 'all'
      },
      note: `Returns basketball leagues for country ID ${countryId}.`
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get today's games (convenience endpoint)
 * GET /api/basketball/games/today
 */
export const getTodaysGames = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const { league, season, team, timezone } = req.query;

    const result = await basketballService.getGamesByDate(today, {
      league: league ? parseInt(league as string) : undefined,
      season: season as string,
      team: team ? parseInt(team as string) : undefined,
      timezone: timezone as string
    });

    res.json({
      success: true,
      games: result.games,
      total: result.total,
      date: today,
      filters: {
        league: league || 'all',
        season: season || 'all',
        team: team || 'all',
        timezone: timezone || 'UTC'
      },
      note: `Returns basketball games for today (${today}).`
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get current season games (convenience endpoint)
 * GET /api/basketball/games/current-season
 */
export const getCurrentSeasonGames = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const currentYear = new Date().getFullYear();
    const currentSeason = `${currentYear}-${currentYear + 1}`;
    const { league, team, date } = req.query;

    const result = await basketballService.getGamesBySeason(currentSeason, {
      league: league ? parseInt(league as string) : undefined,
      team: team ? parseInt(team as string) : undefined,
      date: date as string
    });

    res.json({
      success: true,
      games: result.games,
      total: result.total,
      season: currentSeason,
      filters: {
        league: league || 'all',
        team: team || 'all',
        date: date || 'all'
      },
      note: `Returns basketball games for current season (${currentSeason}).`
    });
  } catch (error: any) {
    next(error);
  }
};
