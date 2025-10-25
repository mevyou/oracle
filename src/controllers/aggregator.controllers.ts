import { Request, Response, NextFunction } from 'express';
import { AggregatorService } from '../services/aggregatorService';
import { ResearchRequest } from '../types/aggregator';

const aggregatorService = new AggregatorService();

/**
 * Research any topic and get conclusive outcome
 * POST /api/aggregator/research
 */
export const researchTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { topic, outcomeType, options, maxResults, includeSources, searchFilters } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        error: 'Topic is required'
      });
    }

    const request: ResearchRequest = {
      topic,
      outcomeType: outcomeType || 'open_ended',
      options,
      maxResults: maxResults || 10,
      includeSources: includeSources !== false,
      searchFilters
    };

    const result = await aggregatorService.researchTopic(request);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Quick research for yes/no questions
 * GET /api/aggregator/quick?topic=...
 */
export const quickResearch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { topic } = req.query;

    if (!topic) {
      return res.status(400).json({
        success: false,
        error: 'Topic query parameter is required'
      });
    }

    const result = await aggregatorService.quickResearch(topic as string);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Research with multiple choice options
 * POST /api/aggregator/options
 */
export const researchWithOptions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { topic, options } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        error: 'Topic is required'
      });
    }

    if (!options || !Array.isArray(options) || options.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Options array is required'
      });
    }

    const result = await aggregatorService.researchWithOptions(topic, options);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Research with date range
 * POST /api/aggregator/date-range
 */
export const researchWithDateRange = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { topic, startDate, endDate } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        error: 'Topic is required'
      });
    }

    if (!startDate || !endDate) {
      return res.status(400).json({
        success: false,
        error: 'Start date and end date are required'
      });
    }

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
      return res.status(400).json({
        success: false,
        error: 'Dates must be in YYYY-MM-DD format'
      });
    }

    const result = await aggregatorService.researchWithDateRange(topic, startDate, endDate);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Manual research (fallback method)
 * POST /api/aggregator/manual
 */
export const manualResearch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { topic, outcomeType, options, maxResults, includeSources, searchFilters } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        error: 'Topic is required'
      });
    }

    const request: ResearchRequest = {
      topic,
      outcomeType: outcomeType || 'open_ended',
      options,
      maxResults: maxResults || 10,
      includeSources: includeSources !== false,
      searchFilters
    };

    const result = await aggregatorService.researchTopicManual(request);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get research statistics
 * GET /api/aggregator/stats
 */
export const getResearchStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stats = await aggregatorService.getResearchStats();

    res.json({
      success: true,
      stats
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Health check for aggregator service
 * GET /api/aggregator/health
 */
export const healthCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Test basic functionality
    const testResult = await aggregatorService.quickResearch('test');
    
    res.json({
      success: true,
      status: 'healthy',
      services: {
        x_api: 'connected',
        xai_api: 'connected',
        aggregator: 'operational'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Get available research examples
 * GET /api/aggregator/examples
 */
export const getExamples = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const examples = {
      yes_no: [
        {
          topic: "Did Chelsea win against Liverpool?",
          description: "Research recent match results"
        },
        {
          topic: "Is Apple stock going up?",
          description: "Check current stock performance"
        }
      ],
      multiple_choice: [
        {
          topic: "Who won the latest football match?",
          options: ["Team A", "Team B", "Draw"],
          description: "Research match outcome from multiple options"
        },
        {
          topic: "What is the current market trend?",
          options: ["Bullish", "Bearish", "Sideways"],
          description: "Analyze market sentiment"
        }
      ],
      open_ended: [
        {
          topic: "What are the latest developments in AI?",
          description: "Comprehensive research on AI trends"
        },
        {
          topic: "How is the economy performing?",
          description: "Economic analysis and insights"
        }
      ],
      date_range: [
        {
          topic: "What happened in the stock market last week?",
          startDate: "2024-01-01",
          endDate: "2024-01-07",
          description: "Research specific time period"
        }
      ]
    };

    res.json({
      success: true,
      examples
    });
  } catch (error: any) {
    next(error);
  }
};
