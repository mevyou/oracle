import { Router } from 'express';
import {
  getCountries,
  getTeamsByCountry,
  getLiveGames,
  getGamesByDate,
  getGamesBySeason,
  getHeadToHead,
  getSeasons,
  getLeaguesByCountry,
  getTodaysGames,
  getCurrentSeasonGames
} from '../controllers/basketball.controllers';
import { routeRegistry } from '../utils/routeRegistry';

const router = Router();

// Register routes with route registry
routeRegistry.registerRoute('GET', '/api/basketball/countries', 'Get all countries available for basketball', 'Basketball Countries');
routeRegistry.registerRoute('GET', '/api/basketball/teams/country/:countryId', 'Get teams for a specific country', 'Basketball Teams');
routeRegistry.registerRoute('GET', '/api/basketball/games/live', 'Get live basketball games', 'Basketball Games');
routeRegistry.registerRoute('GET', '/api/basketball/games/today', 'Get today\'s basketball games', 'Basketball Games');
routeRegistry.registerRoute('GET', '/api/basketball/games/date/:date', 'Get games for a specific date', 'Basketball Games');
routeRegistry.registerRoute('GET', '/api/basketball/games/season/:season', 'Get games for a specific season', 'Basketball Games');
routeRegistry.registerRoute('GET', '/api/basketball/games/current-season', 'Get current season games', 'Basketball Games');
routeRegistry.registerRoute('GET', '/api/basketball/games/h2h/:team1Id/:team2Id', 'Get head-to-head matches between two teams', 'Basketball Games');
routeRegistry.registerRoute('GET', '/api/basketball/seasons', 'Get all available seasons', 'Basketball Seasons');
routeRegistry.registerRoute('GET', '/api/basketball/leagues/country/:countryId', 'Get leagues for a specific country', 'Basketball Leagues');

// Country routes
router.get('/countries', getCountries);

// Team routes
router.get('/teams/country/:countryId', getTeamsByCountry);

// Game routes
router.get('/games/live', getLiveGames);
router.get('/games/today', getTodaysGames);
router.get('/games/date/:date', getGamesByDate);
router.get('/games/season/:season', getGamesBySeason);
router.get('/games/current-season', getCurrentSeasonGames);
router.get('/games/h2h/:team1Id/:team2Id', getHeadToHead);

// Season routes
router.get('/seasons', getSeasons);

// League routes
router.get('/leagues/country/:countryId', getLeaguesByCountry);

export default router;
