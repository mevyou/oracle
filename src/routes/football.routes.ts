import { Router } from 'express';
import {
  searchTeams,
  getTeamById,
  getAllTeams,
  getAllCountries,
  findMatch,
  findMatchByIds,
  getHeadToHead,
  getTeamFixtures,
  getCurrentSeasonFixtures,
  getFixturesByDate,
  getLiveFixtures,
  getFixtureById,
  getMatchPrediction,
  getFixtureStatistics
} from '../controllers/football.controllers';
import { routeRegistry } from '../utils/routeRegistry';

const router = Router();

// Register routes with route registry
routeRegistry.registerRoute('GET', '/api/football/countries', 'Get all countries available for teams', 'Football Countries');
routeRegistry.registerRoute('GET', '/api/football/teams/all', 'Get all teams from around the world', 'Football Teams');
routeRegistry.registerRoute('GET', '/api/football/teams/search', 'Search teams by name (returns all matches)', 'Football Teams');
routeRegistry.registerRoute('GET', '/api/football/teams/:id', 'Get team by ID (exact match)', 'Football Teams');
routeRegistry.registerRoute('GET', '/api/football/matches/find', 'Find match by team names', 'Football Matches');
routeRegistry.registerRoute('GET', '/api/football/matches/find-by-ids', 'Find match by team IDs (recommended)', 'Football Matches');
routeRegistry.registerRoute('GET', '/api/football/matches/h2h', 'Get head-to-head matches', 'Football Matches');
routeRegistry.registerRoute('GET', '/api/football/fixtures/team', 'Get fixtures by team name', 'Football Fixtures');
routeRegistry.registerRoute('GET', '/api/football/fixtures/current-season', 'Get current season fixtures by team ID', 'Football Fixtures');
routeRegistry.registerRoute('GET', '/api/football/fixtures/date', 'Get fixtures by date', 'Football Fixtures');
routeRegistry.registerRoute('GET', '/api/football/fixtures/live', 'Get live fixtures', 'Football Fixtures');
routeRegistry.registerRoute('GET', '/api/football/fixtures/:id', 'Get fixture by ID', 'Football Fixtures');
routeRegistry.registerRoute('GET', '/api/football/predictions/:id', 'Get match prediction', 'Football Analysis');
routeRegistry.registerRoute('GET', '/api/football/statistics/:id', 'Get fixture statistics', 'Football Analysis');

// Country routes
router.get('/countries', getAllCountries);      // Get ALL countries available for teams

// Team routes
router.get('/teams/all', getAllTeams);          // Get ALL teams from around the world
router.get('/teams/search', searchTeams);       // Returns ALL matching teams
router.get('/teams/:id', getTeamById);          // Get specific team by ID

// Match routes
router.get('/matches/find', findMatch);         // Find by team names (smart)
router.get('/matches/find-by-ids', findMatchByIds); // Find by team IDs (accurate)
router.get('/matches/h2h', getHeadToHead);      // Head-to-head history

// Fixture routes
router.get('/fixtures/team', getTeamFixtures);  // By team name
router.get('/fixtures/current-season', getCurrentSeasonFixtures); // Current season by team ID
router.get('/fixtures/date', getFixturesByDate);
router.get('/fixtures/live', getLiveFixtures);
router.get('/fixtures/:id', getFixtureById);

// Prediction and statistics routes
router.get('/predictions/:id', getMatchPrediction);
router.get('/statistics/:id', getFixtureStatistics);

export default router;

