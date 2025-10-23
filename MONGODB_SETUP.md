# MongoDB User Profile Backend - Setup Guide

This guide explains how to set up and use the MongoDB-enabled user profile management backend.

## Architecture Overview

```
Frontend → API Routes → Services → MongoDB (via Prisma)
```

### Components Created:
- **Database Schema** (`prisma/schema.prisma`) - User profile and contract user models
- **Database Connection** (`src/config/db.ts`) - MongoDB connection with Prisma
- **User Service** (`src/services/userService.ts`) - Business logic for user operations
- **Contract Service** (`src/services/contractService.ts`) - Contract integration logic
- **User Controllers** (`src/controllers/user.controllers.ts`) - Request handlers
- **User Routes** (`src/routes/user.routes.ts`) - API endpoints

## Setup Instructions

### 1. MongoDB Setup

#### Option A: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string:
   - Click "Connect" on your cluster
   - Select "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<database-name>` with `oracle_db` (or your preferred name)

#### Option B: Local MongoDB

1. Install MongoDB locally: https://www.mongodb.com/try/download/community
2. Start MongoDB: `mongod`
3. Use connection string: `mongodb://localhost:27017/oracle_db`

### 2. Environment Configuration

1. Copy the environment template:
   ```bash
   cp env.template .env
   ```

2. Update your `.env` file with your MongoDB connection string:
   ```env
   # For MongoDB Atlas:
   DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/oracle_db?retryWrites=true&w=majority"
   
   # OR for local MongoDB:
   DATABASE_URL="mongodb://localhost:27017/oracle_db"
   
   PORT=3000
   NODE_ENV=development
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Generate Prisma Client

```bash
npm run prisma:generate
```

This generates the Prisma client with TypeScript types for your MongoDB models.

### 5. Push Database Schema to MongoDB

```bash
npm run prisma:push
```

This creates the collections and indexes in your MongoDB database.

### 6. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm run build
npm start
```

You should see:
```
✅ MongoDB connected successfully
✅ MongoDB connected - User profiles will be stored in database
🚀 Server running on port 3000
```

## API Endpoints

### Profile Management

#### Get User Profile
```bash
GET /api/user/profile?address=0x1234567890abcdef
```

Response:
```json
{
  "profile": {
    "id": "...",
    "user": "0x1234567890abcdef",
    "name": "John Doe",
    "username": "johndoe",
    "description": "Betting enthusiast",
    "image": "ipfs://...",
    "provider": "WALLET",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "lastUpdated": "2025-01-01T00:00:00.000Z"
  }
}
```

#### Create/Update User Profile
```bash
POST /api/user/profile
Content-Type: application/json

{
  "address": "0x1234567890abcdef",
  "name": "John Doe",
  "username": "johndoe",
  "description": "Betting enthusiast",
  "image": "ipfs://Qm..."
}
```

Response:
```json
{
  "success": true,
  "message": "Profile saved successfully",
  "profile": { ... }
}
```

#### Delete User Profile
```bash
DELETE /api/user/profile?address=0x1234567890abcdef
```

#### Check if User Exists
```bash
GET /api/user/exists?address=0x1234567890abcdef
```

Response:
```json
{
  "exists": true
}
```

### Social Login

#### Handle Social Login
```bash
POST /api/user/social-login
Content-Type: application/json

{
  "provider": "GOOGLE",
  "providerId": "123456789",
  "email": "john@example.com",
  "name": "John Doe",
  "username": "john_doe",
  "image": "https://..."
}
```

#### Get Social Profile
```bash
GET /api/user/social-login?provider=google&providerId=123456789
```

#### Link Wallet to Social Profile
```bash
POST /api/user/link-wallet
Content-Type: application/json

{
  "provider": "google",
  "providerId": "123456789",
  "walletAddress": "0x1234567890abcdef"
}
```

### Search & Discovery

#### Search Users
```bash
GET /api/user/search?query=john&limit=10
```

#### Get All Users (Paginated)
```bash
GET /api/user/all?page=1&limit=20
```

#### Get User by Username
```bash
GET /api/user/username/johndoe
```

### Contract Integration

#### Register User After Contract
```bash
POST /api/user/register-contract
Content-Type: application/json

{
  "walletAddress": "0x1234567890abcdef",
  "name": "John Doe",
  "username": "johndoe",
  "description": "Betting enthusiast",
  "image": "ipfs://..."
}
```

#### Sync Contract Data to Backend
```bash
POST /api/user/sync-contract
Content-Type: application/json

{
  "users": [
    {
      "walletAddress": "0x1234...",
      "name": "User 1",
      "username": "user1"
    },
    {
      "walletAddress": "0x5678...",
      "name": "User 2",
      "username": "user2"
    }
  ]
}
```

#### Verify User Registration
```bash
GET /api/user/verify?address=0x1234567890abcdef
```

Response:
```json
{
  "existsInContract": true,
  "existsInBackend": true,
  "synced": true,
  "profileData": { ... }
}
```

## Database Models

### UserProfile Model
```typescript
{
  id: string;              // MongoDB ObjectId
  user: string;            // Unique identifier (wallet address or provider:providerId)
  name: string;
  username: string;        // Unique username
  description?: string;
  image?: string;          // IPFS URL or external URL
  provider: LoginProvider; // WALLET, GOOGLE, FACEBOOK, etc.
  providerId?: string;     // For social login
  email?: string;
  walletAddress?: string;  // Optional wallet link for social users
  createdAt: DateTime;
  timestamp: DateTime;
  lastUpdated: DateTime;
  metadata?: Json;         // Additional custom data
}
```

### ContractUser Model
```typescript
{
  id: string;              // MongoDB ObjectId
  walletAddress: string;   // Unique wallet address
  contractData: Json;      // Raw data from smart contract
  syncedToBackend: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}
```

## Frontend Integration

### 1. User Registration Flow

```typescript
// After successful contract registration
const response = await fetch('http://localhost:3000/api/user/register-contract', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    walletAddress: userAddress,
    name: formData.name,
    username: formData.username,
    description: formData.description,
    image: ipfsUrl // Upload to IPFS first
  })
});

const result = await response.json();
if (result.success) {
  console.log('User registered:', result.profile);
}
```

### 2. Profile Retrieval on Wallet Connection

```typescript
// When user connects wallet
const checkProfile = async (address: string) => {
  const response = await fetch(`http://localhost:3000/api/user/profile?address=${address}`);
  
  if (response.ok) {
    const { profile } = await response.json();
    // User has profile - load it
    return profile;
  } else {
    // User doesn't have profile - show onboarding
    return null;
  }
};
```

### 3. Social Login Integration

```typescript
// After Google OAuth
const handleGoogleLogin = async (googleUser: any) => {
  const response = await fetch('http://localhost:3000/api/user/social-login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      provider: 'GOOGLE',
      providerId: googleUser.id,
      email: googleUser.email,
      name: googleUser.name,
      username: generateUsername(googleUser.email),
      image: googleUser.picture
    })
  });
  
  const result = await response.json();
  return result.profile;
};
```

## Development Tools

### Prisma Studio (Database GUI)

View and edit your database in a browser:
```bash
npm run prisma:studio
```

This opens Prisma Studio at http://localhost:5555

### Update Database Schema

1. Edit `prisma/schema.prisma`
2. Run:
   ```bash
   npm run prisma:generate
   npm run prisma:push
   ```

## Testing the API

### Using cURL

```bash
# Create a user
curl -X POST http://localhost:3000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "address": "0x1234567890abcdef",
    "name": "Test User",
    "username": "testuser",
    "description": "Test account",
    "image": "ipfs://QmTest..."
  }'

# Get the user
curl http://localhost:3000/api/user/profile?address=0x1234567890abcdef

# Check if user exists
curl http://localhost:3000/api/user/exists?address=0x1234567890abcdef

# Search users
curl http://localhost:3000/api/user/search?query=test&limit=5
```

### Using JavaScript/TypeScript

```typescript
// User service wrapper
class UserAPI {
  private baseUrl = 'http://localhost:3000/api/user';
  
  async getProfile(address: string) {
    const res = await fetch(`${this.baseUrl}/profile?address=${address}`);
    return res.json();
  }
  
  async saveProfile(address: string, data: any) {
    const res = await fetch(`${this.baseUrl}/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, ...data })
    });
    return res.json();
  }
  
  async checkExists(address: string) {
    const res = await fetch(`${this.baseUrl}/exists?address=${address}`);
    const { exists } = await res.json();
    return exists;
  }
}
```

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `400` - Bad Request (missing/invalid parameters)
- `404` - Not Found (user doesn't exist)
- `409` - Conflict (username already taken)
- `500` - Internal Server Error

Example error response:
```json
{
  "error": "Username already taken"
}
```

## Production Deployment

### 1. Environment Variables

Set these on your hosting platform:
```env
DATABASE_URL=mongodb+srv://...
NODE_ENV=production
PORT=3000
```

### 2. Build and Deploy

```bash
npm run build
npm start
```

### 3. Recommended Hosting Platforms

- **Backend**: Vercel, Railway, Render, Heroku
- **Database**: MongoDB Atlas (has free tier)

## Security Considerations

### Recommended Additions

1. **Authentication**: Add JWT or wallet signature verification
2. **Rate Limiting**: Implement rate limiting on endpoints
3. **Input Validation**: Already using basic validation, consider Zod for advanced validation
4. **CORS**: Update CORS settings in production
5. **Image Validation**: Validate IPFS URLs and image types

### Example: Add Authentication Middleware

```typescript
// src/middlewares/auth.ts
import { Request, Response, NextFunction } from 'express';

export const verifyWalletSignature = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { address, signature, message } = req.body;
  
  // Verify signature
  const isValid = verifySignature(address, signature, message);
  
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  next();
};
```

## Troubleshooting

### "MongoDB connection error"

- Check your `DATABASE_URL` in `.env`
- Ensure MongoDB is running (for local) or accessible (for Atlas)
- Verify network access in MongoDB Atlas settings
- Check if IP is whitelisted in Atlas

### "Module not found" errors

```bash
npm install
npm run prisma:generate
```

### "Username already taken"

The username must be unique. Choose a different username or update the existing user.

### Database schema changes

After modifying `prisma/schema.prisma`:
```bash
npm run prisma:generate
npm run prisma:push
```

## Support & Documentation

- **Prisma Docs**: https://www.prisma.io/docs
- **MongoDB Atlas**: https://docs.atlas.mongodb.com
- **Express.js**: https://expressjs.com

## Next Steps

1. **Add Authentication**: Implement JWT or signature-based auth
2. **Add Caching**: Use Redis for frequently accessed profiles
3. **Add File Upload**: Set up direct image upload (Cloudinary, AWS S3)
4. **Add Analytics**: Track user activity and engagement
5. **Add Notifications**: Email/push notifications for profile updates
6. **Add Social Features**: Following, friends, activity feed

## License

ISC


