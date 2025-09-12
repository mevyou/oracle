"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameResults_controllers_1 = require("../controllers/gameResults.controllers");
const routeRegistry_1 = require("../utils/routeRegistry");
const router = (0, express_1.Router)();
// Register all game results routes
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/results', 'Get all game results', 'Game Results');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/results/:id', 'Get specific game result by ID', 'Game Results');
routeRegistry_1.routeRegistry.registerRoute('POST', '/api/results', 'Create new game result', 'Game Results');
routeRegistry_1.routeRegistry.registerRoute('POST', '/api/results/providers', 'Register new provider', 'Game Results');
router.get('/', gameResults_controllers_1.getAllGameResults);
router.get('/:id', gameResults_controllers_1.getGameResult);
router.post('/', gameResults_controllers_1.createGameResult);
router.post('/providers', gameResults_controllers_1.registerProvider);
exports.default = router;
