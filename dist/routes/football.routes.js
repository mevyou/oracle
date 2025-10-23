"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const football_controllers_1 = require("../controllers/football.controllers");
const routeRegistry_1 = require("../utils/routeRegistry");
const router = (0, express_1.Router)();
// Register routes with route registry
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/countries', 'Get all countries available for teams', 'Football Countries');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/teams/all', 'Get all teams from around the world', 'Football Teams');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/teams/search', 'Search teams by name (returns all matches)', 'Football Teams');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/teams/:id', 'Get team by ID (exact match)', 'Football Teams');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/matches/find', 'Find match by team names', 'Football Matches');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/matches/find-by-ids', 'Find match by team IDs (recommended)', 'Football Matches');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/matches/h2h', 'Get head-to-head matches', 'Football Matches');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/fixtures/team', 'Get fixtures by team name', 'Football Fixtures');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/fixtures/current-season', 'Get current season fixtures by team ID', 'Football Fixtures');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/fixtures/date', 'Get fixtures by date', 'Football Fixtures');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/fixtures/live', 'Get live fixtures', 'Football Fixtures');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/fixtures/:id', 'Get fixture by ID', 'Football Fixtures');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/predictions/:id', 'Get match prediction', 'Football Analysis');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/football/statistics/:id', 'Get fixture statistics', 'Football Analysis');
// Country routes
router.get('/countries', football_controllers_1.getAllCountries); // Get ALL countries available for teams
// Team routes
router.get('/teams/all', football_controllers_1.getAllTeams); // Get ALL teams from around the world
router.get('/teams/search', football_controllers_1.searchTeams); // Returns ALL matching teams
router.get('/teams/:id', football_controllers_1.getTeamById); // Get specific team by ID
// Match routes
router.get('/matches/find', football_controllers_1.findMatch); // Find by team names (smart)
router.get('/matches/find-by-ids', football_controllers_1.findMatchByIds); // Find by team IDs (accurate)
router.get('/matches/h2h', football_controllers_1.getHeadToHead); // Head-to-head history
// Fixture routes
router.get('/fixtures/team', football_controllers_1.getTeamFixtures); // By team name
router.get('/fixtures/current-season', football_controllers_1.getCurrentSeasonFixtures); // Current season by team ID
router.get('/fixtures/date', football_controllers_1.getFixturesByDate);
router.get('/fixtures/live', football_controllers_1.getLiveFixtures);
router.get('/fixtures/:id', football_controllers_1.getFixtureById);
// Prediction and statistics routes
router.get('/predictions/:id', football_controllers_1.getMatchPrediction);
router.get('/statistics/:id', football_controllers_1.getFixtureStatistics);
exports.default = router;
