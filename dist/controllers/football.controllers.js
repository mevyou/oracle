"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = exports.getAllTeams = exports.getCurrentSeasonFixtures = exports.findMatchByIds = exports.getFixtureStatistics = exports.getMatchPrediction = exports.getFixtureById = exports.getLiveFixtures = exports.getFixturesByDate = exports.getTeamFixtures = exports.getHeadToHead = exports.findMatch = exports.getTeamById = exports.searchTeams = void 0;
const footballService_1 = require("../services/footballService");
/**
 * Search for teams by name (returns ALL matching teams)
 * GET /api/football/teams/search?name=...
 * Frontend should display these for user selection
 */
const searchTeams = async (req, res, next) => {
    try {
        const { name } = req.query;
        if (!name || typeof name !== 'string') {
            return res.status(400).json({
                error: 'Team name is required',
                example: '/api/football/teams/search?name=Manchester United'
            });
        }
        const teams = await footballService_1.footballService.searchTeams(name);
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
    }
    catch (error) {
        next(error);
    }
};
exports.searchTeams = searchTeams;
/**
 * Get team by ID (exact match, no ambiguity)
 * GET /api/football/teams/:id
 */
const getTeamById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Team ID is required' });
        }
        const team = await footballService_1.footballService.getTeamById(parseInt(id));
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.json({
            success: true,
            team
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getTeamById = getTeamById;
/**
 * Find a match between two teams
 * GET /api/football/matches/find
 */
const findMatch = async (req, res, next) => {
    try {
        const { team1, team2, date, league, season } = req.query;
        if (!team1 || typeof team1 !== 'string') {
            return res.status(400).json({
                error: 'At least one team name (team1) is required',
                example: '/api/football/matches/find?team1=Bayern Munich&team2=Liverpool'
            });
        }
        const match = await footballService_1.footballService.findMatch({
            team1,
            team2: team2,
            date: date,
            league: league ? parseInt(league) : undefined,
            season: season ? parseInt(season) : undefined
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
    }
    catch (error) {
        next(error);
    }
};
exports.findMatch = findMatch;
/**
 * Get head-to-head matches between two teams
 * GET /api/football/matches/h2h?team1=...&team2=...
 */
const getHeadToHead = async (req, res, next) => {
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
            footballService_1.footballService.searchTeam(team1),
            footballService_1.footballService.searchTeam(team2)
        ]);
        if (!team1Data) {
            return res.status(404).json({ error: `Team not found: ${team1}` });
        }
        if (!team2Data) {
            return res.status(404).json({ error: `Team not found: ${team2}` });
        }
        const matches = await footballService_1.footballService.getHeadToHead(team1Data.id, team2Data.id, last ? parseInt(last) : 10);
        res.json({
            success: true,
            teams: {
                team1: team1Data,
                team2: team2Data
            },
            matches,
            total: matches.length
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getHeadToHead = getHeadToHead;
/**
 * Get fixtures by team
 * GET /api/football/fixtures/team?name=...
 */
const getTeamFixtures = async (req, res, next) => {
    try {
        const { name, date, season, last, next, from, to } = req.query;
        if (!name || typeof name !== 'string') {
            return res.status(400).json({
                error: 'Team name is required',
                example: '/api/football/fixtures/team?name=Liverpool&next=5'
            });
        }
        const team = await footballService_1.footballService.searchTeam(name);
        if (!team) {
            return res.status(404).json({ error: `Team not found: ${name}` });
        }
        const fixtures = await footballService_1.footballService.getFixturesByTeam(team.id, {
            date: date,
            season: season ? parseInt(season) : undefined,
            last: last ? parseInt(last) : undefined,
            next: next ? parseInt(next) : undefined,
            from: from,
            to: to
        });
        res.json({
            success: true,
            team,
            fixtures,
            total: fixtures.length
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getTeamFixtures = getTeamFixtures;
/**
 * Get fixtures by date
 * GET /api/football/fixtures/date?date=2024-01-15
 */
const getFixturesByDate = async (req, res, next) => {
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
        const fixtures = await footballService_1.footballService.getFixturesByDate(date, league ? parseInt(league) : undefined);
        res.json({
            success: true,
            date,
            fixtures,
            total: fixtures.length
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getFixturesByDate = getFixturesByDate;
/**
 * Get live fixtures
 * GET /api/football/fixtures/live
 */
const getLiveFixtures = async (req, res, next) => {
    try {
        const { league } = req.query;
        const fixtures = await footballService_1.footballService.getLiveFixtures(league ? parseInt(league) : undefined);
        res.json({
            success: true,
            live: true,
            fixtures,
            total: fixtures.length
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getLiveFixtures = getLiveFixtures;
/**
 * Get fixture by ID
 * GET /api/football/fixtures/:id
 */
const getFixtureById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Fixture ID is required' });
        }
        const fixture = await footballService_1.footballService.getFixtureById(parseInt(id));
        if (!fixture) {
            return res.status(404).json({ error: 'Fixture not found' });
        }
        res.json({
            success: true,
            fixture
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getFixtureById = getFixtureById;
/**
 * Get match prediction
 * GET /api/football/predictions/:id
 */
const getMatchPrediction = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Fixture ID is required' });
        }
        const prediction = await footballService_1.footballService.getMatchPrediction(parseInt(id));
        if (!prediction) {
            return res.status(404).json({ error: 'Prediction not available for this fixture' });
        }
        res.json({
            success: true,
            prediction
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getMatchPrediction = getMatchPrediction;
/**
 * Get fixture statistics
 * GET /api/football/statistics/:id
 */
const getFixtureStatistics = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Fixture ID is required' });
        }
        const statistics = await footballService_1.footballService.getFixtureStatistics(parseInt(id));
        res.json({
            success: true,
            statistics
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getFixtureStatistics = getFixtureStatistics;
/**
 * Find match by team IDs (more accurate than names)
 * GET /api/football/matches/find-by-ids?team1Id=33&team2Id=40&season=2024
 */
const findMatchByIds = async (req, res, next) => {
    try {
        const { team1Id, team2Id, date, season, league } = req.query;
        if (!team1Id || !team2Id) {
            return res.status(400).json({
                error: 'Both team IDs are required',
                example: '/api/football/matches/find-by-ids?team1Id=33&team2Id=40&season=2024'
            });
        }
        const match = await footballService_1.footballService.findMatchByIds(parseInt(team1Id), parseInt(team2Id), {
            date: date,
            season: season ? parseInt(season) : undefined,
            league: league ? parseInt(league) : undefined
        });
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
    }
    catch (error) {
        next(error);
    }
};
exports.findMatchByIds = findMatchByIds;
/**
 * Get current season fixtures for a team
 * GET /api/football/fixtures/current-season?teamId=40&next=5
 */
const getCurrentSeasonFixtures = async (req, res, next) => {
    try {
        const { teamId, next, last, league } = req.query;
        if (!teamId) {
            return res.status(400).json({
                error: 'Team ID is required',
                example: '/api/football/fixtures/current-season?teamId=40&next=5'
            });
        }
        const fixtures = await footballService_1.footballService.getCurrentSeasonFixtures(parseInt(teamId), {
            next: next ? parseInt(next) : undefined,
            last: last ? parseInt(last) : undefined,
            league: league ? parseInt(league) : undefined
        });
        const currentYear = new Date().getFullYear();
        res.json({
            success: true,
            season: currentYear,
            fixtures,
            total: fixtures.length
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getCurrentSeasonFixtures = getCurrentSeasonFixtures;
/**
 * Get all teams from around the world
 * GET /api/football/teams/all?country=england&league=39&season=2024
 */
const getAllTeams = async (req, res, next) => {
    try {
        const { country, league, season, page, limit } = req.query;
        const result = await footballService_1.footballService.getAllTeams({
            country: country,
            league: league ? parseInt(league) : undefined,
            season: season ? parseInt(season) : undefined,
            page: page ? parseInt(page) : undefined,
            limit: limit ? parseInt(limit) : undefined
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
    }
    catch (error) {
        next(error);
    }
};
exports.getAllTeams = getAllTeams;
/**
 * Get all countries available for teams
 * GET /api/football/countries
 */
const getAllCountries = async (req, res, next) => {
    try {
        const result = await footballService_1.footballService.getAllCountries();
        res.json({
            success: true,
            countries: result.countries,
            total: result.total,
            note: 'Returns all countries available for teams. Use country codes in other endpoints.'
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllCountries = getAllCountries;
