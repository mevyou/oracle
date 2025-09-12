import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';
// import platformRoutes from './routes/platform.routes';
import gameResultsRoutes from './routes/gameResults.routes';
import apiInfoRoutes from './routes/apiInfo.routes';

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.json());

// Routes
app.use('/', apiInfoRoutes); // Main API info and health check
app.use('/api/results', gameResultsRoutes);
// app.use('/api/platforms', platformRoutes); // Temporarily disabled
// Global error handler (should be after routes)


app.use(errorHandler);

export default app;