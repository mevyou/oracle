// Mock database interface - no actual database connection
export const prisma = {
  gameResult: {
    findUnique: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    findMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    create: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    upsert: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    }
  }
};
