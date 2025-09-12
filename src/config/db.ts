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
  },
  // Mock platform methods for compatibility
  platform: {
    findUnique: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    findMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    create: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    update: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    delete: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    }
  },
  platformAccess: {
    deleteMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    updateMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    }
  },
  platformAccessToken: {
    deleteMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    },
    updateMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    }
  },
  serviceSubscription: {
    deleteMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    }
  },
  contract: {
    deleteMany: async (args: any) => {
      throw new Error('Database unavailable - using mock data');
    }
  },
  $transaction: async (operations: any[]) => {
    throw new Error('Database unavailable - using mock data');
  }
};
