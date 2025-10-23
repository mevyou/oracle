"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const routeRegistry_1 = require("../utils/routeRegistry");
const router = (0, express_1.Router)();
// Register routes with route registry
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/user/profile', 'Get user profile by address', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('POST', '/api/user/profile', 'Create or update user profile', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('DELETE', '/api/user/profile', 'Delete user profile', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/user/exists', 'Check if user exists', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('POST', '/api/user/social-login', 'Handle social login', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/user/social-login', 'Get social profile', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('POST', '/api/user/link-wallet', 'Link wallet to social profile', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/user/search', 'Search users by query', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/user/all', 'Get all users (paginated)', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/user/username/:username', 'Get user by username', 'User Profiles');
routeRegistry_1.routeRegistry.registerRoute('POST', '/api/user/register-contract', 'Register user after contract', 'Contract Integration');
routeRegistry_1.routeRegistry.registerRoute('POST', '/api/user/sync-contract', 'Bulk sync contract users', 'Contract Integration');
routeRegistry_1.routeRegistry.registerRoute('GET', '/api/user/verify', 'Verify user registration status', 'Contract Integration');
// Profile Management Routes
router.get('/profile', user_controllers_1.getUserProfile); // Get user profile
router.post('/profile', user_controllers_1.saveUserProfile); // Create/update user profile
router.delete('/profile', user_controllers_1.deleteUserProfile); // Delete user profile
// User Existence Check
router.get('/exists', user_controllers_1.checkUserExists); // Check if user exists
// Social Login Routes
router.post('/social-login', user_controllers_1.handleSocialLogin); // Handle social login
router.get('/social-login', user_controllers_1.getSocialProfile); // Get social profile
router.post('/link-wallet', user_controllers_1.linkWalletToSocial); // Link wallet to social profile
// Search & Discovery
router.get('/search', user_controllers_1.searchUsers); // Search users
router.get('/all', user_controllers_1.getAllUsers); // Get all users (paginated)
router.get('/username/:username', user_controllers_1.getUserByUsername); // Get user by username
// Contract Integration Routes
router.post('/register-contract', user_controllers_1.registerUserAfterContract); // Register user after contract
router.post('/sync-contract', user_controllers_1.syncContractData); // Sync contract data to backend
router.get('/verify', user_controllers_1.verifyUserRegistration); // Verify user registration status
exports.default = router;
