import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/userService';
import { contractService } from '../services/contractService';
import { LoginProvider } from '../../prisma/generated/prisma';

/**
 * Get user profile by address or social ID
 * GET /api/user/profile?address=0x1234... or ?user=google:123
 */
export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const identifier = (req.query.address || req.query.user) as string;

    if (!identifier) {
      return res.status(400).json({
        error: 'Address or user identifier is required'
      });
    }

    const profile = await userService.getUserProfile(identifier);

    if (!profile) {
      return res.status(404).json({
        error: 'Profile not found'
      });
    }

    res.json({ profile });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Check if user exists
 * GET /api/user/exists?address=0x1234...
 */
export const checkUserExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const identifier = (req.query.address || req.query.user) as string;

    if (!identifier) {
      return res.status(400).json({
        error: 'Address or user identifier is required'
      });
    }

    const exists = await userService.checkUserExists(identifier);

    res.json({ exists });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Create or update user profile
 * POST /api/user/profile
 */
export const saveUserProfile = async (req: Request, res: Response, next: NextFunction) => {
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

    const profile = await userService.saveUserProfile(identifier, {
      name,
      username,
      description,
      image,
      email,
      walletAddress,
      provider: provider || LoginProvider.WALLET,
      providerId,
      metadata
    });

    res.json({
      success: true,
      message: 'Profile saved successfully',
      profile
    });
  } catch (error: any) {
    if (error.message === 'Username already taken') {
      return res.status(409).json({ error: error.message });
    }
    next(error);
  }
};

/**
 * Delete user profile
 * DELETE /api/user/profile?address=0x1234...
 */
export const deleteUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const identifier = (req.query.address || req.query.user) as string;

    if (!identifier) {
      return res.status(400).json({
        error: 'Address or user identifier is required'
      });
    }

    const result = await userService.deleteUserProfile(identifier);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Handle social login
 * POST /api/user/social-login
 */
export const handleSocialLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { provider, providerId, email, name, username, image, walletAddress } = req.body;

    if (!provider || !providerId || !name || !username) {
      return res.status(400).json({
        error: 'Provider, providerId, name, and username are required'
      });
    }

    const profile = await userService.handleSocialLogin({
      provider: provider.toUpperCase() as LoginProvider,
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
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get social profile
 * GET /api/user/social-login?provider=google&providerId=123
 */
export const getSocialProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { provider, providerId } = req.query;

    if (!provider || !providerId) {
      return res.status(400).json({
        error: 'Provider and providerId are required'
      });
    }

    const profile = await userService.getSocialProfile(provider as string, providerId as string);

    if (!profile) {
      return res.status(404).json({
        error: 'Social profile not found'
      });
    }

    res.json({ profile });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Link wallet to social profile
 * POST /api/user/link-wallet
 */
export const linkWalletToSocial = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { provider, providerId, walletAddress } = req.body;

    if (!provider || !providerId || !walletAddress) {
      return res.status(400).json({
        error: 'Provider, providerId, and walletAddress are required'
      });
    }

    const profile = await userService.linkWalletToSocial(provider, providerId, walletAddress);

    res.json({
      success: true,
      message: 'Wallet linked successfully',
      profile
    });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Search users
 * GET /api/user/search?query=john&limit=10
 */
export const searchUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query, limit } = req.query;

    if (!query) {
      return res.status(400).json({
        error: 'Search query is required'
      });
    }

    const users = await userService.searchUsers(
      query as string,
      limit ? parseInt(limit as string) : 10
    );

    res.json({ users });
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get all users with pagination
 * GET /api/user/all?page=1&limit=20
 */
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, limit } = req.query;

    const result = await userService.getAllUsers(
      page ? parseInt(page as string) : 1,
      limit ? parseInt(limit as string) : 20
    );

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Register user after contract registration
 * POST /api/user/register-contract
 */
export const registerUserAfterContract = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contractData = req.body;

    if (!contractData.walletAddress) {
      return res.status(400).json({
        error: 'Wallet address is required'
      });
    }

    const result = await contractService.registerUserAfterContract(contractData);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Sync contract data to backend
 * POST /api/user/sync-contract
 */
export const syncContractData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { users } = req.body;

    if (!users || !Array.isArray(users)) {
      return res.status(400).json({
        error: 'Users array is required'
      });
    }

    const result = await contractService.syncContractDataToBackend(users);

    res.json(result);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Verify user registration status
 * GET /api/user/verify?address=0x1234...
 */
export const verifyUserRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { address } = req.query;

    if (!address) {
      return res.status(400).json({
        error: 'Wallet address is required'
      });
    }

    const verification = await contractService.verifyUserRegistration(address as string);

    res.json(verification);
  } catch (error: any) {
    next(error);
  }
};

/**
 * Get user by username
 * GET /api/user/username/:username
 */
export const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).json({
        error: 'Username is required'
      });
    }

    const user = await userService.getUserByUsername(username);

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    res.json({ user });
  } catch (error: any) {
    next(error);
  }
};


