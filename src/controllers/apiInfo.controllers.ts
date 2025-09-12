import { NextFunction, Request, Response } from 'express';
import { routeRegistry } from '../utils/routeRegistry';

const getApiInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const routes = routeRegistry.getRoutesByCategory();
    const totalRoutes = routeRegistry.getRouteCount();

    const apiInfo = {
      name: 'Oracle Game Results API',
      version: '1.0.0',
      description: 'Three-party game results system with arbitrator verdicts and dynamic evidence',
      status: 'operational',
      totalRoutes,
      categories: Object.keys(routes).length,
      endpoints: routes,
      features: [
        'Three-party game resolution (2 players + 1 arbitrator)',
        'Dynamic evidence system (supports any data type)',
        'UUID-based game and request IDs',
        'Arbitrator verdicts with confidence scores',
        'Mock data fallback (no database required)',
        'Smart port selection',
        'Real-time game state tracking'
      ],
      documentation: {
        evidenceTypes: '/docs/evidence-types',
        apiReference: '/docs/api-reference'
      }
    };

    res.status(200).json(apiInfo);
  } catch (error) {
    next(error);
  }
};

const getHealthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const healthStatus = {
      status: 'healthy',
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
        routeRegistry: 'operational'
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
