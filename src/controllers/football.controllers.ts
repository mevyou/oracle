import { Request, Response, NextFunction } from 'express';
import { footballService } from '../services/footballService';

/**
 * Search for teams by name (returns ALL matching teams)
 * GET /api/football/teams/search?name=...
 * Frontend should display these for user selection
 */
export const searchTeams = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.query;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({
        error: 'Team name is required',
        example: '/api/football/teams/search?name=Manchester United'
      });
    }

    const teams = await footballService.searchTeams(name);

    if (teams.length === 0) {
      return res.status(404).json({
        error: 'No teams found',
        searched: name
      });
    }

    res.json({
      success: true,
      teams,
      total: teams.length,
      note: 'Multiple teams found. Frontend should display these for user selection.'
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get team by ID (exact match, no ambiguity)
 * GET /api/football/teams/:id
 */
export const getTeamById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Team ID is required' });
    }

    const team = await footballService.getTeamById(parseInt(id));

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({
      success: true,
      team
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Find a match between two teams
 * GET /api/football/matches/find
 */
export const findMatch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { team1, team2, date, league, season } = req.query;

    if (!team1 || typeof team1 !== 'string') {
      return res.status(400).json({
        error: 'At least one team name (team1) is required',
        example: '/api/football/matches/find?team1=Bayern Munich&team2=Liverpool'
      });
    }

    const match = await footballService.findMatch({
      team1,
      team2: team2 as string | undefined,
      date: date as string | undefined,
      league: league ? parseInt(league as string) : undefined,
      season: season ? parseInt(season as string) : undefined
    });

    if (!match) {
      return res.status(404).json({
        error: 'No match found',
        params: { team1, team2, date }
      });
    }

    res.json({
      success: true,
      match
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get head-to-head matches between two teams
 * GET /api/football/matches/h2h?team1=...&team2=...
 */
export const getHeadToHead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { team1, team2, last } = req.query;

    if (!team1 || !team2) {
      return res.status(400).json({
        error: 'Both team names are required',
        example: '/api/football/matches/h2h?team1=Real Madrid&team2=Barcelona&last=5'
      });
    }

    // Search for both teams
    const [team1Data, team2Data] = await Promise.all([
      footballService.searchTeam(team1 as string),
      footballService.searchTeam(team2 as string)
    ]);

    if (!team1Data) {
      return res.status(404).json({ error: `Team not found: ${team1}` });
    }

    if (!team2Data) {
      return res.status(404).json({ error: `Team not found: ${team2}` });
    }

    const matches = await footballService.getHeadToHead(
      team1Data.id,
      team2Data.id,
      last ? parseInt(last as string) : 10
    );

    res.json({
      success: true,
      teams: {
        team1: team1Data,
        team2: team2Data
      },
      matches,
      total: matches.length
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get fixtures by team
 * GET /api/football/fixtures/team?name=...
 */
export const getTeamFixtures = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, date, season, last, next, from, to } = req.query;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({
        error: 'Team name is required',
        example: '/api/football/fixtures/team?name=Liverpool&next=5'
      });
    }

    const team = await footballService.searchTeam(name);
    if (!team) {
      return res.status(404).json({ error: `Team not found: ${name}` });
    }

    const fixtures = await footballService.getFixturesByTeam(team.id, {
      date: date as string | undefined,
      season: season ? parseInt(season as string) : undefined,
      last: last ? parseInt(last as string) : undefined,
      next: next ? parseInt(next as string) : undefined,
      from: from as string | undefined,
      to: to as string | undefined
    });

    res.json({
      success: true,
      team,
      fixtures,
      total: fixtures.length
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get fixtures by date
 * GET /api/football/fixtures/date?date=2024-01-15
 */
export const getFixturesByDate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { date, league } = req.query;

    if (!date || typeof date !== 'string') {
      return res.status(400).json({
        error: 'Date is required in YYYY-MM-DD format',
        example: '/api/football/fixtures/date?date=2024-01-15'
      });
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        error: 'Invalid date format. Use YYYY-MM-DD',
        example: '2024-01-15'
      });
    }

    const fixtures = await footballService.getFixturesByDate(
      date,
      league ? parseInt(league as string) : undefined
    );

    res.json({
      success: true,
      date,
      fixtures,
      total: fixtures.length
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get live fixtures
 * GET /api/football/fixtures/live
 */
export const getLiveFixtures = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { league } = req.query;

    const fixtures = await footballService.getLiveFixtures(
      league ? parseInt(league as string) : undefined
    );

    res.json({
      success: true,
      live: true,
      fixtures,
      total: fixtures.length
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get fixture by ID
 * GET /api/football/fixtures/:id
 */
export const getFixtureById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Fixture ID is required' });
    }

    const fixture = await footballService.getFixtureById(parseInt(id));

    if (!fixture) {
      return res.status(404).json({ error: 'Fixture not found' });
    }

    res.json({
      success: true,
      fixture
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get match prediction
 * GET /api/football/predictions/:id
 */
export const getMatchPrediction = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Fixture ID is required' });
    }

    const prediction = await footballService.getMatchPrediction(parseInt(id));

    if (!prediction) {
      return res.status(404).json({ error: 'Prediction not available for this fixture' });
    }

    res.json({
      success: true,
      prediction
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get fixture statistics
 * GET /api/football/statistics/:id
 */
export const getFixtureStatistics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Fixture ID is required' });
    }

    const statistics = await footballService.getFixtureStatistics(parseInt(id));

    res.json({
      success: true,
      statistics
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Find match by team IDs (more accurate than names)
 * GET /api/football/matches/find-by-ids?team1Id=33&team2Id=40&season=2024
 */
export const findMatchByIds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { team1Id, team2Id, date, season, league } = req.query;

    if (!team1Id || !team2Id) {
      return res.status(400).json({
        error: 'Both team IDs are required',
        example: '/api/football/matches/find-by-ids?team1Id=33&team2Id=40&season=2024'
      });
    }

    const match = await footballService.findMatchByIds(
      parseInt(team1Id as string),
      parseInt(team2Id as string),
      {
        date: date as string | undefined,
        season: season ? parseInt(season as string) : undefined,
        league: league ? parseInt(league as string) : undefined
      }
    );

    if (!match) {
      return res.status(404).json({
        error: 'No match found',
        params: { team1Id, team2Id, date, season }
      });
    }

    res.json({
      success: true,
      match
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get current season fixtures for a team
 * GET /api/football/fixtures/current-season?teamId=40&next=5
 */
export const getCurrentSeasonFixtures = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { teamId, next, last, league } = req.query;

    if (!teamId) {
      return res.status(400).json({
        error: 'Team ID is required',
        example: '/api/football/fixtures/current-season?teamId=40&next=5'
      });
    }

    const fixtures = await footballService.getCurrentSeasonFixtures(
      parseInt(teamId as string),
      {
        next: next ? parseInt(next as string) : undefined,
        last: last ? parseInt(last as string) : undefined,
        league: league ? parseInt(league as string) : undefined
      }
    );

    const currentYear = new Date().getFullYear();

    res.json({
      success: true,
      season: currentYear,
      fixtures,
      total: fixtures.length
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get all teams from around the world
 * GET /api/football/teams/all?country=england&league=39&season=2024
 */
export const getAllTeams = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { country, league, season, page, limit } = req.query;

    const result = await footballService.getAllTeams({
      country: country as string,
      league: league ? parseInt(league as string) : undefined,
      season: season ? parseInt(season as string) : undefined,
      page: page ? parseInt(page as string) : undefined,
      limit: limit ? parseInt(limit as string) : undefined
    });

    res.json({
      success: true,
      teams: result.teams,
      pagination: {
        total: result.total,
        page: result.page,
        hasMore: result.hasMore
      },
      filters: {
        country: country || 'all',
        league: league || 'all',
        season: season || 'all'
      },
      note: 'Returns teams from around the world. Use filters to narrow down results.'
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get all countries available for teams
 * GET /api/football/countries
 */
export const getAllCountries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await footballService.getAllCountries();

    res.json({
      success: true,
      countries: result.countries,
      total: result.total,
      note: 'Returns all countries available for teams. Use country codes in other endpoints.'
    });
  } catch (error: any) {
    next(error);
  }
};

