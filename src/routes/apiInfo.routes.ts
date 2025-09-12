import { Router } from 'express';
import { getApiInfo, getHealthCheck } from '../controllers/apiInfo.controllers';
import { routeRegistry } from '../utils/routeRegistry';

const router = Router();

// Register these routes
routeRegistry.registerRoute('GET', '/', 'API information and available endpoints', 'System');
routeRegistry.registerRoute('GET', '/health', 'Health check endpoint', 'System');

router.get('/', getApiInfo);
router.get('/health', getHealthCheck);

export default router;
