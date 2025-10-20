import { prisma } from '../config/db';
import { userService, UserProfileData } from './userService';
import { LoginProvider } from '../../prisma/generated/prisma';

export interface ContractUserData {
  walletAddress: string;
  name?: string;
  username?: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

export interface VerificationResult {
  existsInContract: boolean;
  existsInBackend: boolean;
  synced: boolean;
  profileData?: any;
}

export class ContractService {
  /**
   * Register user in backend after successful contract registration
   */
  async registerUserAfterContract(contractData: ContractUserData) {
    try {
      const { walletAddress, name, username, description, image, ...metadata } = contractData;

      if (!walletAddress) {
        throw new Error('Wallet address is required');
      }

      // Save contract user data
      await prisma.contractUser.upsert({
        where: { walletAddress: walletAddress.toLowerCase() },
        update: {
          contractData: contractData,
          syncedToBackend: true,
          updatedAt: new Date()
        },
        create: {
          walletAddress: walletAddress.toLowerCase(),
          contractData: contractData,
          syncedToBackend: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });

      // Create/update user profile
      if (name && username) {
        const userProfileData: UserProfileData = {
          name,
          username,
          description,
          image,
          provider: LoginProvider.WALLET,
          walletAddress: walletAddress.toLowerCase(),
          metadata
        };

        const profile = await userService.saveUserProfile(
          walletAddress.toLowerCase(),
          userProfileData
        );

        return {
          success: true,
          message: 'User registered successfully',
          profile
        };
      }

      return {
        success: true,
        message: 'Contract user data saved',
        contractUser: contractData
      };
    } catch (error: any) {
      console.error('Error registering user after contract:', error);
      throw new Error(error.message || 'Failed to register user after contract');
    }
  }

  /**
   * Sync multiple contract users to backend (for migration)
   */
  async syncContractDataToBackend(contractUsers: ContractUserData[]) {
    try {
      const results = {
        success: 0,
        failed: 0,
        errors: [] as string[]
      };

      for (const contractUser of contractUsers) {
        try {
          await this.registerUserAfterContract(contractUser);
          results.success++;
        } catch (error: any) {
          results.failed++;
          results.errors.push(`${contractUser.walletAddress}: ${error.message}`);
        }
      }

      return {
        success: true,
        message: `Synced ${results.success} users, ${results.failed} failed`,
        results
      };
    } catch (error) {
      console.error('Error syncing contract data to backend:', error);
      throw new Error('Failed to sync contract data to backend');
    }
  }

  /**
   * Verify user registration status (contract vs backend)
   */
  async verifyUserRegistration(walletAddress: string): Promise<VerificationResult> {
    try {
      const address = walletAddress.toLowerCase();

      // Check in backend
      const [contractUser, userProfile] = await Promise.all([
        prisma.contractUser.findUnique({
          where: { walletAddress: address }
        }),
        userService.getUserProfile(address)
      ]);

      return {
        existsInContract: !!contractUser,
        existsInBackend: !!userProfile,
        synced: !!contractUser?.syncedToBackend,
        profileData: userProfile || contractUser?.contractData
      };
    } catch (error) {
      console.error('Error verifying user registration:', error);
      throw new Error('Failed to verify user registration');
    }
  }

  /**
   * Get contract user data
   */
  async getContractUser(walletAddress: string) {
    try {
      const contractUser = await prisma.contractUser.findUnique({
        where: { walletAddress: walletAddress.toLowerCase() }
      });
      return contractUser;
    } catch (error) {
      console.error('Error fetching contract user:', error);
      throw new Error('Failed to fetch contract user');
    }
  }

  /**
   * Mark contract user as synced
   */
  async markContractUserSynced(walletAddress: string) {
    try {
      const contractUser = await prisma.contractUser.update({
        where: { walletAddress: walletAddress.toLowerCase() },
        data: {
          syncedToBackend: true,
          updatedAt: new Date()
        }
      });
      return contractUser;
    } catch (error) {
      console.error('Error marking contract user as synced:', error);
      throw new Error('Failed to mark contract user as synced');
    }
  }

  /**
   * Get all unsynced contract users
   */
  async getUnsyncedUsers() {
    try {
      const unsyncedUsers = await prisma.contractUser.findMany({
        where: { syncedToBackend: false },
        orderBy: { createdAt: 'asc' }
      });
      return unsyncedUsers;
    } catch (error) {
      console.error('Error fetching unsynced users:', error);
      throw new Error('Failed to fetch unsynced users');
    }
  }

  /**
   * Delete contract user data
   */
  async deleteContractUser(walletAddress: string) {
    try {
      await prisma.contractUser.delete({
        where: { walletAddress: walletAddress.toLowerCase() }
      });
      return { success: true, message: 'Contract user deleted successfully' };
    } catch (error) {
      console.error('Error deleting contract user:', error);
      throw new Error('Failed to delete contract user');
    }
  }
}

// Export singleton instance
export const contractService = new ContractService();


