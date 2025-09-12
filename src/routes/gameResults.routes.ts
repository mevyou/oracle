import { Router } from 'express';
import { 
  getGameResult, 
  createGameResult, 
  getAllGameResults, 
  registerProvider 
} from '../controllers/gameResults.controllers';
import { routeRegistry } from '../utils/routeRegistry';

const router = Router();

// Register all game results routes
routeRegistry.registerRoute('GET', '/api/results', 'Get all game results', 'Game Results');
routeRegistry.registerRoute('GET', '/api/results/:id', 'Get specific game result by ID', 'Game Results');
routeRegistry.registerRoute('POST', '/api/results', 'Create new game result', 'Game Results');
routeRegistry.registerRoute('POST', '/api/results/providers', 'Register new provider', 'Game Results');

router.get('/', getAllGameResults);
router.get('/:id', getGameResult);
router.post('/', createGameResult);
router.post('/providers', registerProvider);

export default router;
