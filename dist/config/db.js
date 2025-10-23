"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.connectDB = connectDB;
exports.disconnectDB = disconnectDB;
const prisma_1 = require("../../prisma/generated/prisma");
// Create a singleton Prisma client instance
const globalForPrisma = global;
exports.prisma = globalForPrisma.prisma || new prisma_1.PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = exports.prisma;
// Connect to MongoDB
async function connectDB() {
    try {
        await exports.prisma.$connect();
        console.log('✅ MongoDB connected successfully');
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
}
// Disconnect from MongoDB
async function disconnectDB() {
    try {
        await exports.prisma.$disconnect();
        console.log('✅ MongoDB disconnected successfully');
    }
    catch (error) {
        console.error('❌ MongoDB disconnection error:', error);
        throw error;
    }
}
// Handle graceful shutdown
process.on('beforeExit', async () => {
    await disconnectDB();
});
