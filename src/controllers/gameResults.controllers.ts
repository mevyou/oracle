import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import { providerManager, GameResult } from '../utils/providerHooks';
import { z } from 'zod';

const gameResultSchema = z.object({
  gameId: z.string().min(1),
  status: z.enum(['completed', 'pending', 'cancelled']),
  outcome: z.enum(['win', 'lose', 'draw']),
  winner: z.string().optional(),
  loser: z.string().optional(),
  score: z.object({
    player1: z.number(),
    player2: z.number()
  }).optional(),
  provider: z.string()
});

const getGameResult = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    
    let gameResult = await prisma.gameResult.findUnique({
      where: { gameId: id }
    });

    if (!gameResult) {
      const availableProviders = providerManager.getAvailableProviders();
      
      if (availableProviders.length === 0) {
        res.status(404).json({ 
          message: 'Game result not found and no providers available' 
        });
        return;
      }

      for (const providerName of availableProviders) {
        try {
          const fetchedResult = await providerManager.fetchFromProvider(providerName, id);
          
          gameResult = await prisma.gameResult.create({
            data: {
              gameId: fetchedResult.gameId,
              status: fetchedResult.status.toUpperCase() as any,
              outcome: fetchedResult.outcome.toUpperCase() as any,
              winner: fetchedResult.winner,
              loser: fetchedResult.loser,
              score: fetchedResult.score,
              provider: fetchedResult.provider
            }
          });
          break;
        } catch (error) {
          continue;
        }
      }

      if (!gameResult) {
        res.status(404).json({ 
          message: 'Game result not found and could not be fetched from any provider' 
        });
        return;
      }
    }

    res.status(200).json({ gameResult });
  } catch (error) {
    next(error);
  }
};

const createGameResult = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const validatedData = gameResultSchema.parse(req.body);

    const existingResult = await prisma.gameResult.findUnique({
      where: { gameId: validatedData.gameId }
    });

    if (existingResult) {
      res.status(400).json({ 
        message: 'Game result already exists' 
      });
      return;
    }

    const gameResult = await prisma.gameResult.create({
      data: {
        gameId: validatedData.gameId,
        status: validatedData.status.toUpperCase() as any,
        outcome: validatedData.outcome.toUpperCase() as any,
        winner: validatedData.winner,
        loser: validatedData.loser,
        score: validatedData.score,
        provider: validatedData.provider
      }
    });

    res.status(201).json({ gameResult });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
      return;
    }
    next(error);
  }
};

const getAllGameResults = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const gameResults = await prisma.gameResult.findMany({
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json({ gameResults });
  } catch (error) {
    next(error);
  }
};

const registerProvider = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, type, url, headers, timeout } = req.body;

    if (!name || !type || !url) {
      res.status(400).json({ 
        message: 'Name, type, and URL are required' 
      });
      return;
    }

    providerManager.registerProvider(name, {
      type,
      url,
      headers,
      timeout
    });

    res.status(201).json({ 
      message: 'Provider registered successfully',
      provider: { name, type, url }
    });
  } catch (error) {
    next(error);
  }
};

export {
  getGameResult,
  createGameResult,
  getAllGameResults,
  registerProvider
};
