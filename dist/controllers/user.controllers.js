"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUsername = exports.verifyUserRegistration = exports.syncContractData = exports.registerUserAfterContract = exports.getAllUsers = exports.searchUsers = exports.linkWalletToSocial = exports.getSocialProfile = exports.handleSocialLogin = exports.deleteUserProfile = exports.saveUserProfile = exports.checkUserExists = exports.getUserProfile = void 0;
const userService_1 = require("../services/userService");
const contractService_1 = require("../services/contractService");
const prisma_1 = require("../../prisma/generated/prisma");
/**
 * Get user profile by address or social ID
 * GET /api/user/profile?address=0x1234... or ?user=google:123
 */
const getUserProfile = async (req, res, next) => {
    try {
        const identifier = (req.query.address || req.query.user);
        if (!identifier) {
            return res.status(400).json({
                error: 'Address or user identifier is required'
            });
        }
        const profile = await userService_1.userService.getUserProfile(identifier);
        if (!profile) {
            return res.status(404).json({
                error: 'Profile not found'
            });
        }
        res.json({ profile });
    }
    catch (error) {
        next(error);
    }
};
exports.getUserProfile = getUserProfile;
/**
 * Check if user exists
 * GET /api/user/exists?address=0x1234...
 */
const checkUserExists = async (req, res, next) => {
    try {
        const identifier = (req.query.address || req.query.user);
        if (!identifier) {
            return res.status(400).json({
                error: 'Address or user identifier is required'
            });
        }
        const exists = await userService_1.userService.checkUserExists(identifier);
        res.json({ exists });
    }
    catch (error) {
        next(error);
    }
};
exports.checkUserExists = checkUserExists;
/**
 * Create or update user profile
 * POST /api/user/profile
 */
const saveUserProfile = async (req, res, next) => {
    try {
        const { address, user, name, username, description, image, email, walletAddress, provider, providerId, metadata } = req.body;
        const identifier = user || address;
        if (!identifier) {
            return res.status(400).json({
                error: 'User identifier or address is required'
            });
        }
        if (!name || !username) {
            return res.status(400).json({
                error: 'Name and username are required'
            });
        }
        const profile = await userService_1.userService.saveUserProfile(identifier, {
            name,
            username,
            description,
            image,
            email,
            walletAddress,
            provider: provider || prisma_1.LoginProvider.WALLET,
            providerId,
            metadata
        });
        res.json({
            success: true,
            message: 'Profile saved successfully',
            profile
        });
    }
    catch (error) {
        if (error.message === 'Username already taken') {
            return res.status(409).json({ error: error.message });
        }
        next(error);
    }
};
exports.saveUserProfile = saveUserProfile;
/**
 * Delete user profile
 * DELETE /api/user/profile?address=0x1234...
 */
const deleteUserProfile = async (req, res, next) => {
    try {
        const identifier = (req.query.address || req.query.user);
        if (!identifier) {
            return res.status(400).json({
                error: 'Address or user identifier is required'
            });
        }
        const result = await userService_1.userService.deleteUserProfile(identifier);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteUserProfile = deleteUserProfile;
/**
 * Handle social login
 * POST /api/user/social-login
 */
const handleSocialLogin = async (req, res, next) => {
    try {
        const { provider, providerId, email, name, username, image, walletAddress } = req.body;
        if (!provider || !providerId || !name || !username) {
            return res.status(400).json({
                error: 'Provider, providerId, name, and username are required'
            });
        }
        const profile = await userService_1.userService.handleSocialLogin({
            provider: provider.toUpperCase(),
            providerId,
            email,
            name,
            username,
            image,
            walletAddress
        });
        res.json({
            success: true,
            message: 'Social login successful',
            profile
        });
    }
    catch (error) {
        next(error);
    }
};
exports.handleSocialLogin = handleSocialLogin;
/**
 * Get social profile
 * GET /api/user/social-login?provider=google&providerId=123
 */
const getSocialProfile = async (req, res, next) => {
    try {
        const { provider, providerId } = req.query;
        if (!provider || !providerId) {
            return res.status(400).json({
                error: 'Provider and providerId are required'
            });
        }
        const profile = await userService_1.userService.getSocialProfile(provider, providerId);
        if (!profile) {
            return res.status(404).json({
                error: 'Social profile not found'
            });
        }
        res.json({ profile });
    }
    catch (error) {
        next(error);
    }
};
exports.getSocialProfile = getSocialProfile;
/**
 * Link wallet to social profile
 * POST /api/user/link-wallet
 */
const linkWalletToSocial = async (req, res, next) => {
    try {
        const { provider, providerId, walletAddress } = req.body;
        if (!provider || !providerId || !walletAddress) {
            return res.status(400).json({
                error: 'Provider, providerId, and walletAddress are required'
            });
        }
        const profile = await userService_1.userService.linkWalletToSocial(provider, providerId, walletAddress);
        res.json({
            success: true,
            message: 'Wallet linked successfully',
            profile
        });
    }
    catch (error) {
        next(error);
    }
};
exports.linkWalletToSocial = linkWalletToSocial;
/**
 * Search users
 * GET /api/user/search?query=john&limit=10
 */
const searchUsers = async (req, res, next) => {
    try {
        const { query, limit } = req.query;
        if (!query) {
            return res.status(400).json({
                error: 'Search query is required'
            });
        }
        const users = await userService_1.userService.searchUsers(query, limit ? parseInt(limit) : 10);
        res.json({ users });
    }
    catch (error) {
        next(error);
    }
};
exports.searchUsers = searchUsers;
/**
 * Get all users with pagination
 * GET /api/user/all?page=1&limit=20
 */
const getAllUsers = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const result = await userService_1.userService.getAllUsers(page ? parseInt(page) : 1, limit ? parseInt(limit) : 20);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllUsers = getAllUsers;
/**
 * Register user after contract registration
 * POST /api/user/register-contract
 */
const registerUserAfterContract = async (req, res, next) => {
    try {
        const contractData = req.body;
        if (!contractData.walletAddress) {
            return res.status(400).json({
                error: 'Wallet address is required'
            });
        }
        const result = await contractService_1.contractService.registerUserAfterContract(contractData);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.registerUserAfterContract = registerUserAfterContract;
/**
 * Sync contract data to backend
 * POST /api/user/sync-contract
 */
const syncContractData = async (req, res, next) => {
    try {
        const { users } = req.body;
        if (!users || !Array.isArray(users)) {
            return res.status(400).json({
                error: 'Users array is required'
            });
        }
        const result = await contractService_1.contractService.syncContractDataToBackend(users);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.syncContractData = syncContractData;
/**
 * Verify user registration status
 * GET /api/user/verify?address=0x1234...
 */
const verifyUserRegistration = async (req, res, next) => {
    try {
        const { address } = req.query;
        if (!address) {
            return res.status(400).json({
                error: 'Wallet address is required'
            });
        }
        const verification = await contractService_1.contractService.verifyUserRegistration(address);
        res.json(verification);
    }
    catch (error) {
        next(error);
    }
};
exports.verifyUserRegistration = verifyUserRegistration;
/**
 * Get user by username
 * GET /api/user/username/:username
 */
const getUserByUsername = async (req, res, next) => {
    try {
        const { username } = req.params;
        if (!username) {
            return res.status(400).json({
                error: 'Username is required'
            });
        }
        const user = await userService_1.userService.getUserByUsername(username);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        res.json({ user });
    }
    catch (error) {
        next(error);
    }
};
exports.getUserByUsername = getUserByUsername;
