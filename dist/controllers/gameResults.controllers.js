"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerProvider = exports.getAllGameResults = exports.createGameResult = exports.getGameResult = void 0;
const db_1 = require("../config/db");
const providerHooks_1 = require("../utils/providerHooks");
const mockData_1 = require("../data/mockData");
const zod_1 = require("zod");
const gameResultSchema = zod_1.z.object({
    gameId: zod_1.z.string().min(1),
    status: zod_1.z.enum(['completed', 'pending', 'cancelled']),
    outcome: zod_1.z.enum(['win', 'lose', 'draw']),
    winner: zod_1.z.string().optional(),
    loser: zod_1.z.string().optional(),
    player1: zod_1.z.string().min(1),
    player2: zod_1.z.string().min(1),
    arbitrator: zod_1.z.string().min(1),
    arbitratorVerdict: zod_1.z.object({
        decision: zod_1.z.enum(['player1_wins', 'player2_wins', 'draw', 'dispute']),
        reasoning: zod_1.z.string().min(1),
        confidence: zod_1.z.number().min(0).max(100),
        evidence: zod_1.z.array(zod_1.z.any()).optional(), // Dynamic evidence - accepts any type
        timestamp: zod_1.z.date()
    }),
    score: zod_1.z.object({
        player1: zod_1.z.number(),
        player2: zod_1.z.number()
    }).optional(),
    provider: zod_1.z.string(),
    gameDetails: zod_1.z.object({
        gameType: zod_1.z.string(),
        rules: zod_1.z.array(zod_1.z.string()),
        duration: zod_1.z.number(),
        stakes: zod_1.z.number()
    })
});
const getGameResult = async (req, res, next) => {
    try {
        const { id } = req.params;
        let gameResult = null;
        let usingMockData = false;
        // Try database first
        try {
            gameResult = await db_1.prisma.gameResult.findUnique({
                where: { gameId: id }
            });
        }
        catch (dbError) {
            console.log('📦 Database unavailable, falling back to mock data');
            usingMockData = true;
        }
        // If not found in DB, try providers
        if (!gameResult && !usingMockData) {
            const availableProviders = providerHooks_1.providerManager.getAvailableProviders();
            if (availableProviders.length === 0) {
                console.log('📦 No providers available, falling back to mock data');
                usingMockData = true;
            }
            else {
                for (const providerName of availableProviders) {
                    try {
                        const fetchedResult = await providerHooks_1.providerManager.fetchFromProvider(providerName, id);
                        gameResult = await db_1.prisma.gameResult.create({
                            data: {
                                gameId: fetchedResult.gameId,
                                status: fetchedResult.status.toUpperCase(),
                                outcome: fetchedResult.outcome.toUpperCase(),
                                winner: fetchedResult.winner,
                                loser: fetchedResult.loser,
                                score: fetchedResult.score,
                                provider: fetchedResult.provider
                            }
                        });
                        break;
                    }
                    catch (error) {
                        continue;
                    }
                }
            }
        }
        // Fallback to mock data
        if (!gameResult) {
            gameResult = (0, mockData_1.getMockGameResult)(id);
            usingMockData = true;
        }
        if (!gameResult) {
            res.status(404).json({
                message: 'Game result not found',
                usingMockData: false
            });
            return;
        }
        // Add request ID to response
        const responseData = {
            requestId: (0, mockData_1.generateRequestId)(),
            gameResult,
            usingMockData,
            source: usingMockData ? 'mock-data' : 'database',
            timestamp: new Date().toISOString()
        };
        res.status(200).json(responseData);
    }
    catch (error) {
        next(error);
    }
};
exports.getGameResult = getGameResult;
const createGameResult = async (req, res, next) => {
    try {
        const validatedData = gameResultSchema.parse(req.body);
        const existingResult = await db_1.prisma.gameResult.findUnique({
            where: { gameId: validatedData.gameId }
        });
        if (existingResult) {
            res.status(400).json({
                message: 'Game result already exists'
            });
            return;
        }
        const gameResult = await db_1.prisma.gameResult.create({
            data: {
                gameId: validatedData.gameId,
                status: validatedData.status.toUpperCase(),
                outcome: validatedData.outcome.toUpperCase(),
                winner: validatedData.winner,
                loser: validatedData.loser,
                score: validatedData.score,
                provider: validatedData.provider
            }
        });
        res.status(201).json({ gameResult });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
            return;
        }
        next(error);
    }
};
exports.createGameResult = createGameResult;
const getAllGameResults = async (req, res, next) => {
    try {
        let gameResults = [];
        let usingMockData = false;
        // Try database first
        try {
            gameResults = await db_1.prisma.gameResult.findMany({
                orderBy: { createdAt: 'desc' }
            });
        }
        catch (dbError) {
            console.log('📦 Database unavailable, falling back to mock data');
            gameResults = (0, mockData_1.getAllMockGameResults)();
            usingMockData = true;
        }
        // Add request ID to response
        const responseData = {
            requestId: (0, mockData_1.generateRequestId)(),
            gameResults,
            usingMockData,
            source: usingMockData ? 'mock-data' : 'database',
            timestamp: new Date().toISOString(),
            totalResults: gameResults.length
        };
        res.status(200).json(responseData);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllGameResults = getAllGameResults;
const registerProvider = async (req, res, next) => {
    try {
        const { name, type, url, headers, timeout } = req.body;
        if (!name || !type || !url) {
            res.status(400).json({
                message: 'Name, type, and URL are required'
            });
            return;
        }
        providerHooks_1.providerManager.registerProvider(name, {
            type,
            url,
            headers,
            timeout
        });
        res.status(201).json({
            message: 'Provider registered successfully',
            provider: { name, type, url }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.registerProvider = registerProvider;
