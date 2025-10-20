# Migration Guide: localStorage to MongoDB Backend

This guide helps you migrate existing user data from localStorage to the MongoDB backend.

## Overview

### Before (localStorage)
```
User Data → Browser localStorage → Lost on device change
```

### After (MongoDB)
```
User Data → Backend API → MongoDB → Accessible everywhere
```

## Migration Strategies

### Strategy 1: Automatic Migration on Login (Recommended)

This is the smoothest user experience - data migrates automatically when users connect their wallet.

#### Implementation:

```typescript
// src/lib/migrationService.ts (create this in your frontend)

export class MigrationService {
  private MIGRATED_KEY = 'user_migrated_to_backend';
  
  async migrateUserToBackend(address: string) {
    // Check if already migrated
    const migrated = localStorage.getItem(this.MIGRATED_KEY);
    if (migrated === address) {
      return { success: true, alreadyMigrated: true };
    }
    
    // Get user data from localStorage
    const userData = this.getUserFromLocalStorage(address);
    if (!userData) {
      return { success: false, error: 'No local data found' };
    }
    
    // Upload image to IPFS if it's a local blob
    let imageUrl = userData.image;
    if (userData.image?.startsWith('blob:')) {
      imageUrl = await this.uploadToIPFS(userData.image);
    }
    
    // Save to backend
    const response = await fetch('http://localhost:3000/api/user/register-contract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        walletAddress: address,
        name: userData.name,
        username: userData.username,
        description: userData.description,
        image: imageUrl
      })
    });
    
    if (response.ok) {
      // Mark as migrated
      localStorage.setItem(this.MIGRATED_KEY, address);
      return { success: true };
    }
    
    return { success: false, error: 'Migration failed' };
  }
  
  private getUserFromLocalStorage(address: string) {
    const key = `user_profile_${address.toLowerCase()}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  private async uploadToIPFS(blobUrl: string): Promise<string> {
    // Your IPFS upload logic here
    const blob = await fetch(blobUrl).then(r => r.blob());
    const formData = new FormData();
    formData.append('file', blob);
    
    const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`
      },
      body: formData
    });
    
    const { IpfsHash } = await response.json();
    return `ipfs://${IpfsHash}`;
  }
}

export const migrationService = new MigrationService();
```

#### Usage in your auth hook:

```typescript
// In your useAuth or similar hook
import { migrationService } from '@/lib/migrationService';

const useAuth = () => {
  const [user, setUser] = useState(null);
  
  const connectWallet = async () => {
    const address = await ethereum.request({ method: 'eth_requestAccounts' });
    
    // Try to get user from backend
    const backendUser = await userService.getUserProfile(address[0]);
    
    if (backendUser) {
      // User exists in backend
      setUser(backendUser);
    } else {
      // Try to migrate from localStorage
      const migrationResult = await migrationService.migrateUserToBackend(address[0]);
      
      if (migrationResult.success) {
        // Get the migrated user
        const migratedUser = await userService.getUserProfile(address[0]);
        setUser(migratedUser);
      } else {
        // Show onboarding modal
        showOnboarding();
      }
    }
  };
  
  return { user, connectWallet };
};
```

### Strategy 2: Bulk Migration Script

For migrating many users at once (e.g., from contract events).

#### Create migration script:

```typescript
// scripts/migrateUsers.ts

import { ethers } from 'ethers';

interface ContractUser {
  address: string;
  name: string;
  username: string;
  description: string;
  imageHash: string;
  timestamp: number;
}

async function migrateUsersFromContract() {
  // Connect to contract
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    contractABI,
    provider
  );
  
  // Get all UserRegistered events
  const filter = contract.filters.UserRegistered();
  const events = await contract.queryFilter(filter, 0, 'latest');
  
  const users: ContractUser[] = events.map(event => ({
    address: event.args.user,
    name: event.args.name,
    username: event.args.username,
    description: event.args.description,
    imageHash: event.args.imageHash,
    timestamp: event.args.timestamp.toNumber()
  }));
  
  console.log(`Found ${users.length} users to migrate`);
  
  // Send to backend for bulk migration
  const response = await fetch('http://localhost:3000/api/user/sync-contract', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      users: users.map(u => ({
        walletAddress: u.address,
        name: u.name,
        username: u.username,
        description: u.description,
        image: `ipfs://${u.imageHash}`
      }))
    })
  });
  
  const result = await response.json();
  console.log('Migration result:', result);
}

migrateUsersFromContract()
  .then(() => console.log('Migration complete'))
  .catch(console.error);
```

#### Run the script:

```bash
npx ts-node scripts/migrateUsers.ts
```

### Strategy 3: User-Initiated Migration

Let users manually trigger migration with a button.

```typescript
// In your UI component
const MigrationBanner = ({ address }: { address: string }) => {
  const [migrating, setMigrating] = useState(false);
  const [migrated, setMigrated] = useState(false);
  
  const handleMigrate = async () => {
    setMigrating(true);
    
    try {
      const result = await migrationService.migrateUserToBackend(address);
      
      if (result.success) {
        setMigrated(true);
        // Reload user data
        window.location.reload();
      }
    } catch (error) {
      console.error('Migration failed:', error);
    } finally {
      setMigrating(false);
    }
  };
  
  if (migrated) {
    return (
      <div className="bg-green-100 p-4 rounded">
        ✅ Your profile has been migrated to the cloud!
      </div>
    );
  }
  
  return (
    <div className="bg-blue-100 p-4 rounded">
      <p>Your profile is stored locally. Migrate it to access from any device!</p>
      <button 
        onClick={handleMigrate}
        disabled={migrating}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {migrating ? 'Migrating...' : 'Migrate to Cloud'}
      </button>
    </div>
  );
};
```

## Frontend Code Updates

### Update User Service

```typescript
// src/lib/userService.ts

class UserService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
  async getUserProfile(address: string) {
    try {
      const response = await fetch(`${this.baseUrl}/api/user/profile?address=${address}`);
      
      if (!response.ok) {
        return null;
      }
      
      const { profile } = await response.json();
      return profile;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  }
  
  async saveUserProfile(address: string, data: any) {
    const response = await fetch(`${this.baseUrl}/api/user/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, ...data })
    });
    
    if (!response.ok) {
      throw new Error('Failed to save profile');
    }
    
    return response.json();
  }
  
  async checkUserExists(address: string): Promise<boolean> {
    const response = await fetch(`${this.baseUrl}/api/user/exists?address=${address}`);
    const { exists } = await response.json();
    return exists;
  }
}

export const userService = new UserService();
```

### Update Contract Service

```typescript
// src/lib/contractService.ts

class ContractService {
  async registerUserAfterContract(contractData: any) {
    const response = await fetch(`${this.baseUrl}/api/user/register-contract`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contractData)
    });
    
    return response.json();
  }
  
  async verifyUserRegistration(address: string) {
    const response = await fetch(
      `${this.baseUrl}/api/user/verify?address=${address}`
    );
    
    return response.json();
  }
}

export const contractService = new ContractService();
```

## Testing the Migration

### 1. Test with One User

```typescript
// Test migration for a single user
const testAddress = '0x1234567890abcdef';

// Check current status
const verification = await fetch(
  `http://localhost:3000/api/user/verify?address=${testAddress}`
).then(r => r.json());

console.log('Before migration:', verification);

// Migrate
await migrationService.migrateUserToBackend(testAddress);

// Check after migration
const afterVerification = await fetch(
  `http://localhost:3000/api/user/verify?address=${testAddress}`
).then(r => r.json());

console.log('After migration:', afterVerification);
```

### 2. Verify Data Integrity

```typescript
// Compare localStorage data with backend data
async function verifyMigration(address: string) {
  const localData = localStorage.getItem(`user_profile_${address.toLowerCase()}`);
  const local = localData ? JSON.parse(localData) : null;
  
  const response = await fetch(`http://localhost:3000/api/user/profile?address=${address}`);
  const { profile: backend } = await response.json();
  
  console.log('Local:', local);
  console.log('Backend:', backend);
  
  // Compare fields
  const fieldsMatch = (
    local.name === backend.name &&
    local.username === backend.username &&
    local.description === backend.description
  );
  
  console.log('Data matches:', fieldsMatch);
  return fieldsMatch;
}
```

## Rollback Plan

If you need to rollback to localStorage:

```typescript
class RollbackService {
  async rollbackToLocalStorage(address: string) {
    // Get data from backend
    const response = await fetch(
      `http://localhost:3000/api/user/profile?address=${address}`
    );
    const { profile } = await response.json();
    
    // Save to localStorage
    const key = `user_profile_${address.toLowerCase()}`;
    localStorage.setItem(key, JSON.stringify({
      name: profile.name,
      username: profile.username,
      description: profile.description,
      image: profile.image,
      timestamp: profile.timestamp
    }));
    
    console.log('Rolled back to localStorage');
  }
}
```

## Migration Checklist

- [ ] Backend is deployed and running
- [ ] MongoDB is configured and accessible
- [ ] Environment variables are set
- [ ] Prisma schema is pushed to database
- [ ] Migration service is implemented in frontend
- [ ] Test migration with one user
- [ ] Test migration with multiple users
- [ ] Update auth flow to check backend first
- [ ] Update onboarding flow to save to backend
- [ ] Add migration banner/prompt for existing users
- [ ] Test with different scenarios:
  - [ ] New user (no localStorage, no backend)
  - [ ] Existing localStorage user (migrate)
  - [ ] Existing backend user (skip migration)
  - [ ] User with both localStorage and backend (use backend)
- [ ] Monitor for errors
- [ ] Clean up localStorage after successful migration (optional)

## Post-Migration

### Clean Up localStorage (Optional)

After confirming migration success:

```typescript
function cleanupLocalStorage(address: string) {
  const key = `user_profile_${address.toLowerCase()}`;
  localStorage.removeItem(key);
  localStorage.setItem('migration_cleanup_complete', 'true');
}
```

### Monitor Migration Success

Add analytics to track migration:

```typescript
async function trackMigration(address: string, success: boolean) {
  // Your analytics service
  analytics.track('User Migration', {
    address,
    success,
    timestamp: Date.now()
  });
}
```

## Common Issues

### Issue: User has different data in localStorage and backend

**Solution**: Give user choice or use most recent (by timestamp)

```typescript
async function resolveConflict(address: string) {
  const local = getLocalStorageUser(address);
  const backend = await getBackendUser(address);
  
  if (local.timestamp > backend.timestamp) {
    // Local is newer - update backend
    await saveUserProfile(address, local);
  } else {
    // Backend is newer - use it
    return backend;
  }
}
```

### Issue: Image is blob URL (can't be migrated)

**Solution**: Re-upload to IPFS during migration

```typescript
async function reuploadImage(blobUrl: string): Promise<string> {
  const blob = await fetch(blobUrl).then(r => r.blob());
  return uploadToIPFS(blob);
}
```

### Issue: Username conflicts

**Solution**: Append number or prompt user to choose new username

```typescript
async function resolveUsernameConflict(username: string, address: string) {
  let availableUsername = username;
  let counter = 1;
  
  while (await usernameExists(availableUsername)) {
    availableUsername = `${username}${counter}`;
    counter++;
  }
  
  return availableUsername;
}
```

## Support

For migration issues:
1. Check server logs
2. Check browser console
3. Verify MongoDB connection
4. Test API endpoints directly
5. Check Prisma Studio for data

## Next Steps

After successful migration:
1. Update documentation
2. Notify users about multi-device access
3. Add profile sync indicator in UI
4. Consider removing localStorage code
5. Add backup/export feature


