import { Router } from 'express';
import { 
  getGameResult, 
  createGameResult, 
  getAllGameResults, 
  registerProvider 
} from '../controllers/gameResults.controllers';

const router = Router();

router.get('/', getAllGameResults);
router.get('/:id', getGameResult);
router.post('/', createGameResult);
router.post('/providers', registerProvider);

export default router;
