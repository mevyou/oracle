"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiInfo_controllers_1 = require("../controllers/apiInfo.controllers");
const routeRegistry_1 = require("../utils/routeRegistry");
const router = (0, express_1.Router)();
// Register these routes
routeRegistry_1.routeRegistry.registerRoute('GET', '/', 'API information and available endpoints', 'System');
routeRegistry_1.routeRegistry.registerRoute('GET', '/health', 'Health check endpoint', 'System');
router.get('/', apiInfo_controllers_1.getApiInfo);
router.get('/health', apiInfo_controllers_1.getHealthCheck);
exports.default = router;
