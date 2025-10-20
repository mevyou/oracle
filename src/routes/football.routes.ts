import { Router } from 'express';
import {
  searchTeam,
  findMatch,
  getHeadToHead,
  getTeamFixtures,
  getFixturesByDate,
  getLiveFixtures,
  getFixtureById,
  getMatchPrediction,
  getFixtureStatistics
} from '../controllers/football.controllers';
import { routeRegistry } from '../utils/routeRegistry';

const router = Router();

// Register routes with route registry
routeRegistry.registerRoute('GET', '/api/football/teams/search', 'Search for a team by name', 'Football');
routeRegistry.registerRoute('GET', '/api/football/matches/find', 'Find match between teams', 'Football');
routeRegistry.registerRoute('GET', '/api/football/matches/h2h', 'Get head-to-head matches', 'Football');
routeRegistry.registerRoute('GET', '/api/football/fixtures/team', 'Get fixtures by team name', 'Football');
routeRegistry.registerRoute('GET', '/api/football/fixtures/date', 'Get fixtures by date', 'Football');
routeRegistry.registerRoute('GET', '/api/football/fixtures/live', 'Get live fixtures', 'Football');
routeRegistry.registerRoute('GET', '/api/football/fixtures/:id', 'Get fixture by ID', 'Football');
routeRegistry.registerRoute('GET', '/api/football/predictions/:id', 'Get match prediction', 'Football');
routeRegistry.registerRoute('GET', '/api/football/statistics/:id', 'Get fixture statistics', 'Football');

// Team routes
router.get('/teams/search', searchTeam);

// Match routes
router.get('/matches/find', findMatch);
router.get('/matches/h2h', getHeadToHead);

// Fixture routes
router.get('/fixtures/team', getTeamFixtures);
router.get('/fixtures/date', getFixturesByDate);
router.get('/fixtures/live', getLiveFixtures);
router.get('/fixtures/:id', getFixtureById);

// Prediction and statistics routes
router.get('/predictions/:id', getMatchPrediction);
router.get('/statistics/:id', getFixtureStatistics);

export default router;

