"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// Mock database interface - no actual database connection
exports.prisma = {
    gameResult: {
        findUnique: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        findMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        create: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        upsert: async (args) => {
            throw new Error('Database unavailable - using mock data');
        }
    },
    // Mock platform methods for compatibility
    platform: {
        findUnique: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        findMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        create: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        update: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        delete: async (args) => {
            throw new Error('Database unavailable - using mock data');
        }
    },
    platformAccess: {
        deleteMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        updateMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        }
    },
    platformAccessToken: {
        deleteMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        },
        updateMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        }
    },
    serviceSubscription: {
        deleteMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        }
    },
    contract: {
        deleteMany: async (args) => {
            throw new Error('Database unavailable - using mock data');
        }
    },
    $transaction: async (operations) => {
        throw new Error('Database unavailable - using mock data');
    }
};
