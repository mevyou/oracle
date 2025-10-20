# User Profile API - Quick Reference

## Base URL
```
http://localhost:3000/api/user
```

## Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profile?address={address}` | Get user profile |
| POST | `/profile` | Create/update profile |
| DELETE | `/profile?address={address}` | Delete profile |
| GET | `/exists?address={address}` | Check if user exists |
| POST | `/social-login` | Handle social login |
| GET | `/social-login?provider={provider}&providerId={id}` | Get social profile |
| POST | `/link-wallet` | Link wallet to social |
| GET | `/search?query={query}&limit={limit}` | Search users |
| GET | `/all?page={page}&limit={limit}` | Get all users |
| GET | `/username/{username}` | Get user by username |
| POST | `/register-contract` | Register from contract |
| POST | `/sync-contract` | Bulk sync from contract |
| GET | `/verify?address={address}` | Verify registration |

## Quick Examples

### Get Profile
```bash
curl http://localhost:3000/api/user/profile?address=0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```

### Create Profile
```bash
curl -X POST http://localhost:3000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "name": "Alice",
    "username": "alice123",
    "description": "Web3 enthusiast",
    "image": "ipfs://Qm..."
  }'
```

### Check Exists
```bash
curl http://localhost:3000/api/user/exists?address=0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```

### Search Users
```bash
curl http://localhost:3000/api/user/search?query=alice&limit=10
```

### Social Login
```bash
curl -X POST http://localhost:3000/api/user/social-login \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "GOOGLE",
    "providerId": "123456789",
    "email": "alice@gmail.com",
    "name": "Alice",
    "username": "alice_google"
  }'
```

### Register After Contract
```bash
curl -X POST http://localhost:3000/api/user/register-contract \
  -H "Content-Type: application/json" \
  -d '{
    "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "name": "Alice",
    "username": "alice123",
    "description": "Web3 enthusiast",
    "image": "ipfs://Qm..."
  }'
```

## JavaScript/TypeScript Client

```typescript
// Simple client wrapper
class UserAPI {
  private baseUrl = 'http://localhost:3000/api/user';
  
  async getProfile(address: string) {
    const res = await fetch(`${this.baseUrl}/profile?address=${address}`);
    if (!res.ok) return null;
    const { profile } = await res.json();
    return profile;
  }
  
  async saveProfile(data: {
    address: string;
    name: string;
    username: string;
    description?: string;
    image?: string;
  }) {
    const res = await fetch(`${this.baseUrl}/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  }
  
  async checkExists(address: string): Promise<boolean> {
    const res = await fetch(`${this.baseUrl}/exists?address=${address}`);
    const { exists } = await res.json();
    return exists;
  }
  
  async searchUsers(query: string, limit = 10) {
    const res = await fetch(`${this.baseUrl}/search?query=${query}&limit=${limit}`);
    const { users } = await res.json();
    return users;
  }
}

export const userAPI = new UserAPI();
```

## React Hook Example

```typescript
import { useState, useEffect } from 'react';
import { userAPI } from '@/lib/userAPI';

export function useUserProfile(address?: string) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!address) return;
    
    setLoading(true);
    userAPI.getProfile(address)
      .then(setProfile)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [address]);
  
  const updateProfile = async (data: any) => {
    const result = await userAPI.saveProfile({
      address: address!,
      ...data
    });
    setProfile(result.profile);
    return result;
  };
  
  return { profile, loading, error, updateProfile };
}
```

## Response Formats

### Success Response (Profile)
```json
{
  "profile": {
    "id": "65f1234567890abcdef12345",
    "user": "0x742d35cc6634c0532925a3b844bc9e7595f0beb",
    "name": "Alice",
    "username": "alice123",
    "description": "Web3 enthusiast",
    "image": "ipfs://Qm...",
    "provider": "WALLET",
    "createdAt": "2025-01-15T10:30:00.000Z",
    "lastUpdated": "2025-01-15T10:30:00.000Z"
  }
}
```

### Success Response (Create/Update)
```json
{
  "success": true,
  "message": "Profile saved successfully",
  "profile": { ... }
}
```

### Error Response
```json
{
  "error": "Username already taken"
}
```

### Verification Response
```json
{
  "existsInContract": true,
  "existsInBackend": true,
  "synced": true,
  "profileData": { ... }
}
```

## Status Codes

- `200` - Success
- `400` - Bad Request (missing parameters)
- `404` - Not Found (user doesn't exist)
- `409` - Conflict (username taken)
- `500` - Server Error

## Environment Setup

1. Copy `env.template` to `.env`
2. Set `DATABASE_URL` to your MongoDB connection string
3. Run `npm run prisma:generate`
4. Run `npm run prisma:push`
5. Run `npm run dev`

## MongoDB Connection Strings

### Local MongoDB
```
DATABASE_URL="mongodb://localhost:27017/oracle_db"
```

### MongoDB Atlas
```
DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/oracle_db?retryWrites=true&w=majority"
```

## Common Patterns

### Check if user needs onboarding
```typescript
const needsOnboarding = async (address: string) => {
  const exists = await userAPI.checkExists(address);
  return !exists;
};
```

### Register user after contract transaction
```typescript
const registerAfterContract = async (tx: any, formData: any) => {
  await tx.wait(); // Wait for contract transaction
  
  // Register in backend
  await fetch('http://localhost:3000/api/user/register-contract', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      walletAddress: formData.address,
      ...formData
    })
  });
};
```

### Handle social login with wallet linking
```typescript
const linkSocialToWallet = async (googleUser: any, walletAddress: string) => {
  // First, create/get social profile
  const socialProfile = await fetch('http://localhost:3000/api/user/social-login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      provider: 'GOOGLE',
      providerId: googleUser.id,
      name: googleUser.name,
      username: googleUser.email.split('@')[0],
      email: googleUser.email
    })
  }).then(r => r.json());
  
  // Then, link wallet
  await fetch('http://localhost:3000/api/user/link-wallet', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      provider: 'google',
      providerId: googleUser.id,
      walletAddress
    })
  });
};
```

## Database Models

### UserProfile
- `id`: MongoDB ObjectId
- `user`: Unique identifier (wallet or provider:id)
- `name`: Display name
- `username`: Unique username
- `description`: Bio/description
- `image`: IPFS or external URL
- `provider`: Login method (WALLET, GOOGLE, etc.)
- `providerId`: Social provider ID
- `email`: Email address
- `walletAddress`: Linked wallet
- `createdAt`: Creation timestamp
- `lastUpdated`: Last update timestamp
- `metadata`: Custom JSON data

### ContractUser
- `id`: MongoDB ObjectId
- `walletAddress`: Unique wallet address
- `contractData`: Raw contract data (JSON)
- `syncedToBackend`: Sync status
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp


