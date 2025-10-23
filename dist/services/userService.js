"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.UserService = void 0;
const db_1 = require("../config/db");
const prisma_1 = require("../../prisma/generated/prisma");
class UserService {
    /**
     * Check if a user exists by address or social ID
     */
    async checkUserExists(identifier) {
        try {
            const user = await db_1.prisma.userProfile.findUnique({
                where: { user: identifier.toLowerCase() }
            });
            return !!user;
        }
        catch (error) {
            console.error('Error checking user existence:', error);
            return false;
        }
    }
    /**
     * Get user profile by wallet address or social ID
     */
    async getUserProfile(identifier) {
        try {
            const user = await db_1.prisma.userProfile.findUnique({
                where: { user: identifier.toLowerCase() }
            });
            return user;
        }
        catch (error) {
            console.error('Error fetching user profile:', error);
            throw new Error('Failed to fetch user profile');
        }
    }
    /**
     * Get user profile by username
     */
    async getUserByUsername(username) {
        try {
            const user = await db_1.prisma.userProfile.findUnique({
                where: { username: username.toLowerCase() }
            });
            return user;
        }
        catch (error) {
            console.error('Error fetching user by username:', error);
            throw new Error('Failed to fetch user by username');
        }
    }
    /**
     * Save or update user profile
     */
    async saveUserProfile(identifier, data) {
        try {
            const userIdentifier = identifier.toLowerCase();
            // Check if username is already taken by another user
            if (data.username) {
                const existingUser = await db_1.prisma.userProfile.findFirst({
                    where: {
                        username: data.username.toLowerCase(),
                        user: { not: userIdentifier }
                    }
                });
                if (existingUser) {
                    throw new Error('Username already taken');
                }
            }
            const timestamp = new Date();
            const userProfile = await db_1.prisma.userProfile.upsert({
                where: { user: userIdentifier },
                update: {
                    name: data.name,
                    username: data.username.toLowerCase(),
                    description: data.description,
                    image: data.image,
                    email: data.email,
                    walletAddress: data.walletAddress,
                    lastUpdated: timestamp,
                    metadata: data.metadata || {}
                },
                create: {
                    user: userIdentifier,
                    name: data.name,
                    username: data.username.toLowerCase(),
                    description: data.description,
                    image: data.image,
                    provider: data.provider || prisma_1.LoginProvider.WALLET,
                    providerId: data.providerId,
                    email: data.email,
                    walletAddress: data.walletAddress,
                    createdAt: timestamp,
                    timestamp: timestamp,
                    lastUpdated: timestamp,
                    metadata: data.metadata || {}
                }
            });
            return userProfile;
        }
        catch (error) {
            console.error('Error saving user profile:', error);
            throw new Error(error.message || 'Failed to save user profile');
        }
    }
    /**
     * Handle social login
     */
    async handleSocialLogin(data) {
        try {
            const socialIdentifier = `${data.provider.toLowerCase()}:${data.providerId}`;
            const userProfile = await this.saveUserProfile(socialIdentifier, {
                name: data.name,
                username: data.username,
                email: data.email,
                image: data.image,
                provider: data.provider,
                providerId: data.providerId,
                walletAddress: data.walletAddress
            });
            return userProfile;
        }
        catch (error) {
            console.error('Error handling social login:', error);
            throw new Error('Failed to handle social login');
        }
    }
    /**
     * Get social profile by provider and providerId
     */
    async getSocialProfile(provider, providerId) {
        try {
            const socialIdentifier = `${provider.toLowerCase()}:${providerId}`;
            return await this.getUserProfile(socialIdentifier);
        }
        catch (error) {
            console.error('Error fetching social profile:', error);
            throw new Error('Failed to fetch social profile');
        }
    }
    /**
     * Link wallet address to social login profile
     */
    async linkWalletToSocial(provider, providerId, walletAddress) {
        try {
            const socialIdentifier = `${provider.toLowerCase()}:${providerId}`;
            const userProfile = await db_1.prisma.userProfile.update({
                where: { user: socialIdentifier },
                data: {
                    walletAddress: walletAddress.toLowerCase(),
                    lastUpdated: new Date()
                }
            });
            return userProfile;
        }
        catch (error) {
            console.error('Error linking wallet to social profile:', error);
            throw new Error('Failed to link wallet to social profile');
        }
    }
    /**
     * Delete user profile
     */
    async deleteUserProfile(identifier) {
        try {
            await db_1.prisma.userProfile.delete({
                where: { user: identifier.toLowerCase() }
            });
            return { success: true, message: 'User profile deleted successfully' };
        }
        catch (error) {
            console.error('Error deleting user profile:', error);
            throw new Error('Failed to delete user profile');
        }
    }
    /**
     * Search users by username or name
     */
    async searchUsers(query, limit = 10) {
        try {
            const users = await db_1.prisma.userProfile.findMany({
                where: {
                    OR: [
                        { username: { contains: query.toLowerCase() } },
                        { name: { contains: query, mode: 'insensitive' } }
                    ]
                },
                take: limit,
                orderBy: { createdAt: 'desc' }
            });
            return users;
        }
        catch (error) {
            console.error('Error searching users:', error);
            throw new Error('Failed to search users');
        }
    }
    /**
     * Get all users with pagination
     */
    async getAllUsers(page = 1, limit = 20) {
        try {
            const skip = (page - 1) * limit;
            const [users, total] = await Promise.all([
                db_1.prisma.userProfile.findMany({
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' }
                }),
                db_1.prisma.userProfile.count()
            ]);
            return {
                users,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            };
        }
        catch (error) {
            console.error('Error fetching all users:', error);
            throw new Error('Failed to fetch users');
        }
    }
}
exports.UserService = UserService;
// Export singleton instance
exports.userService = new UserService();
