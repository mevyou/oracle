"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const cors_1 = __importDefault(require("cors"));
// import platformRoutes from './routes/platform.routes';
const gameResults_routes_1 = __importDefault(require("./routes/gameResults.routes"));
const apiInfo_routes_1 = __importDefault(require("./routes/apiInfo.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const football_routes_1 = __importDefault(require("./routes/football.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use(express_1.default.json());
// Routes
app.use('/', apiInfo_routes_1.default); // Main API info and health check
app.use('/api/results', gameResults_routes_1.default);
app.use('/api/user', user_routes_1.default); // User profile management routes
app.use('/api/football', football_routes_1.default); // Football data routes
// app.use('/api/platforms', platformRoutes); // Temporarily disabled
// Global error handler (should be after routes)
app.use(errorHandler_1.errorHandler);
exports.default = app;
