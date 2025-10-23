import { Router } from 'express';
import {
  getUserProfile,
  checkUserExists,
  saveUserProfile,
  deleteUserProfile,
  handleSocialLogin,
  getSocialProfile,
  linkWalletToSocial,
  searchUsers,
  getAllUsers,
  registerUserAfterContract,
  syncContractData,
  verifyUserRegistration,
  getUserByUsername
} from '../controllers/user.controllers';
import { routeRegistry } from '../utils/routeRegistry';

const router = Router();

// Register routes with route registry
routeRegistry.registerRoute('GET', '/api/user/profile', 'Get user profile by address', 'User Profiles');
routeRegistry.registerRoute('POST', '/api/user/profile', 'Create or update user profile', 'User Profiles');
routeRegistry.registerRoute('DELETE', '/api/user/profile', 'Delete user profile', 'User Profiles');
routeRegistry.registerRoute('GET', '/api/user/exists', 'Check if user exists', 'User Profiles');
routeRegistry.registerRoute('POST', '/api/user/social-login', 'Handle social login', 'User Profiles');
routeRegistry.registerRoute('GET', '/api/user/social-login', 'Get social profile', 'User Profiles');
routeRegistry.registerRoute('POST', '/api/user/link-wallet', 'Link wallet to social profile', 'User Profiles');
routeRegistry.registerRoute('GET', '/api/user/search', 'Search users by query', 'User Profiles');
routeRegistry.registerRoute('GET', '/api/user/all', 'Get all users (paginated)', 'User Profiles');
routeRegistry.registerRoute('GET', '/api/user/username/:username', 'Get user by username', 'User Profiles');
routeRegistry.registerRoute('POST', '/api/user/register-contract', 'Register user after contract', 'Contract Integration');
routeRegistry.registerRoute('POST', '/api/user/sync-contract', 'Bulk sync contract users', 'Contract Integration');
routeRegistry.registerRoute('GET', '/api/user/verify', 'Verify user registration status', 'Contract Integration');

// Profile Management Routes
router.get('/profile', getUserProfile);           // Get user profile
router.post('/profile', saveUserProfile);         // Create/update user profile
router.delete('/profile', deleteUserProfile);     // Delete user profile

// User Existence Check
router.get('/exists', checkUserExists);           // Check if user exists

// Social Login Routes
router.post('/social-login', handleSocialLogin);  // Handle social login
router.get('/social-login', getSocialProfile);    // Get social profile
router.post('/link-wallet', linkWalletToSocial);  // Link wallet to social profile

// Search & Discovery
router.get('/search', searchUsers);               // Search users
router.get('/all', getAllUsers);                  // Get all users (paginated)
router.get('/username/:username', getUserByUsername); // Get user by username

// Contract Integration Routes
router.post('/register-contract', registerUserAfterContract); // Register user after contract
router.post('/sync-contract', syncContractData);              // Sync contract data to backend
router.get('/verify', verifyUserRegistration);                // Verify user registration status

export default router;

