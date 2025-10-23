import { NextFunction, Request, Response } from 'express';
import { routeRegistry } from '../utils/routeRegistry';
import { prisma } from '../config/db';

const getApiInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const routes = routeRegistry.getRoutesByCategory();
    const totalRoutes = routeRegistry.getRouteCount();

    const apiInfo = {
      name: 'Oracle Game Results & User Profile API',
      version: '1.0.0',
      description: 'Three-party game results system with arbitrator verdicts, dynamic evidence, and MongoDB-enabled user profiles',
      status: 'operational',
      totalRoutes,
      categories: Object.keys(routes).length,
      endpoints: routes,
      features: [
        'Real-time football data from API-Football',
        'Dynamic team search and match finding',
        'Support for team names with optional date filtering',
        'Head-to-head match analysis',
        'Live match monitoring and updates',
        'AI-powered match predictions',
        'Intelligent caching (80-90% API cost reduction)',
        'MongoDB-enabled user profile management',
        'Wallet and social login support',
        'Contract integration for user registration',
        'Three-party game resolution (2 players + 1 arbitrator)',
        'Dynamic evidence system (supports any data type)',
        'User search and discovery',
        'Smart port selection',
        'Production-ready architecture'
      ],
      documentation: {
        startHere: 'See START_HERE.md - Begin here!',
        footballQuickStart: 'See FOOTBALL_QUICK_START.md',
        footballApiReference: 'See FOOTBALL_API_REFERENCE.md',
        mongodbSetup: 'See MONGODB_SETUP.md',
        userApiReference: 'See USER_API_QUICK_REFERENCE.md',
        completeOverview: 'See COMPLETE_SYSTEM_OVERVIEW.md',
        projectComplete: 'See PROJECT_COMPLETE.md',
        examples: 'See examples/football-usage-examples.ts',
        tests: 'Run: npm test'
      }
    };

    res.status(200).json(apiInfo);
  } catch (error) {
    next(error);
  }
};

const getHealthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Check MongoDB connection
    let mongoStatus = 'disconnected';
    try {
      await prisma.$connect();
      mongoStatus = 'connected';
    } catch (dbError) {
      mongoStatus = 'error';
    }

    const healthStatus = {
      status: mongoStatus === 'connected' ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        unit: 'MB'
      },
      system: {
        platform: process.platform,
        nodeVersion: process.version,
        pid: process.pid
      },
      services: {
        api: 'operational',
        mockData: 'operational',
        routeRegistry: 'operational',
        mongodb: mongoStatus,
        userProfiles: mongoStatus === 'connected' ? 'operational' : 'unavailable'
      }
    };

    res.status(200).json(healthStatus);
  } catch (error) {
    next(error);
  }
};

export {
  getApiInfo,
  getHealthCheck
};
