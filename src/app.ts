import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';
import platformRoutes from './routes/platform.routes';
import gameResultsRoutes from './routes/gameResults.routes';

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.json());

// Routes
app.use('/api/platforms', platformRoutes);
app.use('/api/results', gameResultsRoutes);
// Global error handler (should be after routes)


app.use(errorHandler);

export default app;