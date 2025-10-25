import { Router } from 'express';
import {
  researchTopic,
  quickResearch,
  researchWithOptions,
  researchWithDateRange,
  manualResearch,
  getResearchStats,
  healthCheck,
  getExamples
} from '../controllers/aggregator.controllers';
import { routeRegistry } from '../utils/routeRegistry';

const router = Router();

// Register routes with route registry
routeRegistry.registerRoute('POST', '/api/aggregator/research', 'Research any topic and get conclusive outcome', 'Aggregator');
routeRegistry.registerRoute('GET', '/api/aggregator/quick', 'Quick research for yes/no questions', 'Aggregator');
routeRegistry.registerRoute('POST', '/api/aggregator/options', 'Research with multiple choice options', 'Aggregator');
routeRegistry.registerRoute('POST', '/api/aggregator/date-range', 'Research with date range filter', 'Aggregator');
routeRegistry.registerRoute('POST', '/api/aggregator/manual', 'Manual research (fallback method)', 'Aggregator');
routeRegistry.registerRoute('GET', '/api/aggregator/stats', 'Get research statistics', 'Aggregator');
routeRegistry.registerRoute('GET', '/api/aggregator/health', 'Health check for aggregator service', 'Aggregator');
routeRegistry.registerRoute('GET', '/api/aggregator/examples', 'Get available research examples', 'Aggregator');

// Main research endpoint
router.post('/research', researchTopic);

// Quick research for simple questions
router.get('/quick', quickResearch);

// Research with multiple choice options
router.post('/options', researchWithOptions);

// Research with date range
router.post('/date-range', researchWithDateRange);

// Manual research (fallback)
router.post('/manual', manualResearch);

// Statistics and health
router.get('/stats', getResearchStats);
router.get('/health', healthCheck);

// Examples and documentation
router.get('/examples', getExamples);

export default router;
