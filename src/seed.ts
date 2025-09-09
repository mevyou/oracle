import { AccessType, PrismaClient } from '../prisma/generated/prisma'
import fs from 'fs'
import csvParser from 'csv-parser'
import path from 'path'
import { providerManager } from './utils/providerHooks'

const prisma = new PrismaClient()

function parseDate(dateStr: string): Date {
  try {
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) {
      return new Date() // Return current date if invalid
    }
    return date
  } catch {
    return new Date() // Return current date if parsing fails
  }
}

async function parseCSV(filePath: string): Promise<any[]> {
  const results: any[] = []

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => {
        // Parse JSON strings in the data
        Object.keys(data).forEach(key => {
          try {
            if (data[key].startsWith('[') || data[key].startsWith('{')) {
              data[key] = JSON.parse(data[key])
            }
          } catch (e) {
            // If parsing fails, keep the original string
          }
        })
        results.push(data)
      })
      .on('end', () => resolve(results))
      .on('error', reject)
  })
}

async function seed() {
  try {
    // Clear existing data
    await prisma.$transaction([
      prisma.jWTToken.deleteMany(),
      prisma.contractPermission.deleteMany(),
      prisma.platformAccess.deleteMany(),
      prisma.contract.deleteMany(),
      prisma.service.deleteMany(),
      prisma.platform.deleteMany(),
      prisma.provider.deleteMany(),
    ])

    // Seed Providers
    const providers = await parseCSV(path.join(__dirname, 'data', 'providers.csv'))
    for (const provider of providers) {
      await prisma.provider.create({
        data: {
          id: parseInt(provider.id),
          name: provider.name,
          serviceType: provider.serviceType,
          email: provider.email,
          rwaType: provider.rwaType,
          verificationLayer: provider.verificationLayer,
          interactionLayer: provider.interactionLayer,
          logo: provider.logo,
          coverImage: provider.coverImage,
          serviceVerificationType: provider.serviceVerificationType,
          chains: provider.chains,
          interopProtocols: provider.interopProtocols,
          serviceFee: provider.serviceFee,
          authMethod: provider.authMethod,
          jwtSettings: provider.jwtSettings,
          zkProofSupport: provider.zkProofSupport,
          privacyLevel: provider.privacyLevel,
          complianceFramework: provider.complianceFramework,
          createdAt: parseDate(provider.createdAt),
          updatedAt: parseDate(provider.updatedAt)
        }
      })
    }

    // Seed Platforms
    const platforms = await parseCSV(path.join(__dirname, 'data', 'platforms.csv'))
    for (const platform of platforms) {
      await prisma.platform.create({
        data: {
          id: platform.id,
          name: platform.name,
          platformType: platform.platformType,
          email: platform.email,
          permissionLevel: platform.permissionLevel,
          zkCapabilities: platform.zkCapabilities,
          createdAt: parseDate(platform.createdAt),
          updatedAt: parseDate(platform.updatedAt)
        }
      })
    }

    // Seed Services
    const services = await parseCSV(path.join(__dirname, 'data', 'services.csv'))
    for (const service of services) {
      await prisma.service.create({
        data: {
          id: service.id,
          providerId: parseInt(service.providerId),
          name: service.name,
          description: service.description,
          endpoint: service.endpoint,
          proofOfService: service.proofOfService,
          serviceCategory: service.serviceCategory,
          authMethod: service.authMethod,
          accessLevel: service.accessLevel,
          rateLimits: service.rateLimits,
          zkRequirements: service.zkRequirements,
          complianceChecks: service.complianceChecks,
          isActive: service.isActive === 'true',
          createdAt: parseDate(service.createdAt),
          updatedAt: parseDate(service.updatedAt)
        }
      })
    }

    // Seed Contracts
    const contracts = await parseCSV(path.join(__dirname, 'data', 'contracts.csv'))
    for (const contract of contracts) {
      await prisma.contract.create({
        data: {
          id: contract.id,
          platformId: contract.platformId,
          name: contract.name,
          chain: contract.chain,
          address: contract.address,
          abi: contract.abi,
          zkProofRequirements: contract.zkProofRequirements,
          complianceStatus: contract.complianceStatus,
          createdAt: parseDate(contract.createdAt),
          updatedAt: parseDate(contract.updatedAt)
        }
      })
    }

    // Seed Platform Access
    const platformAccess = await parseCSV(path.join(__dirname, 'data', 'platform_access.csv'))
    for (const access of platformAccess) {
      await prisma.platformAccess.create({
        data: {
          id: access.id,
          providerId: parseInt(access.providerId),
          platformId: access.platformId,
          grantedServices: access.grantedServices || [],
          accessType: AccessType.ALL,
          permissions: access.permissions,
          expiresAt: parseDate(access.expiresAt),
          isActive: access.isActive === 'true',
          createdAt: parseDate(access.createdAt),
          updatedAt: parseDate(access.updatedAt)
        }
      })
    }

    // Seed Contract Permissions
    const contractPermissions = await parseCSV(path.join(__dirname, 'data', 'contract_permissions.csv'))
    for (const permission of contractPermissions) {
      await prisma.contractPermission.create({
        data: {
          id: permission.id,
          providerId: parseInt(permission.providerId),
          contractId: permission.contractId,
          serviceId: permission.serviceId,
          jwtToken: permission.jwtToken,
          permissions: permission.permissions,
          grantedAt: parseDate(permission.grantedAt),
          expiresAt: parseDate(permission.expiresAt),
          isActive: permission.isActive === 'true'
        }
      })
    }

    // Seed JWT Tokens
    const jwtTokens = await parseCSV(path.join(__dirname, 'data', 'jwt_tokens.csv'))
    for (const token of jwtTokens) {
      await prisma.jWTToken.create({
        data: {
          id: token.id,
          token: token.token,
          providerId: parseInt(token.providerId),
          contractId: token.contractId,
          serviceId: token.serviceId,
          permissions: token.permissions,
          zkProofHash: token.zkProofHash,
          issuedAt: parseDate(token.issuedAt),
          expiresAt: parseDate(token.expiresAt),
          isRevoked: token.isRevoked === 'true'
        }
      })
    }

    // Register mock providers for game results
    providerManager.registerProvider('mock-api', {
      type: 'api',
      url: 'https://mock-api.example.com',
      headers: { 'Authorization': 'Bearer mock-token' }
    });

    providerManager.registerProvider('mock-webhook', {
      type: 'webhook',
      url: 'https://mock-webhook.example.com/game-results',
      headers: { 'Content-Type': 'application/json' }
    });

    // Create mock game results
    const mockGames = [
      {
        gameId: '2',
        status: 'COMPLETED' as const,
        outcome: 'WIN' as const,
        winner: 'Player1',
        loser: 'Player2',
        score: { player1: 3, player2: 1 },
        provider: 'mock-provider'
      },
      {
        gameId: '3',
        status: 'COMPLETED' as const,
        outcome: 'DRAW' as const,
        score: { player1: 2, player2: 2 },
        provider: 'mock-provider'
      },
      {
        gameId: '4',
        status: 'PENDING' as const,
        outcome: 'DRAW' as const,
        provider: 'mock-provider'
      }
    ];

    for (const game of mockGames) {
      await prisma.gameResult.upsert({
        where: { gameId: game.gameId },
        update: game,
        create: game
      });
    }

    console.log('Database seeded successfully!')
    console.log('Mock providers registered:')
    console.log('- mock-api (API provider)')
    console.log('- mock-webhook (Webhook provider)')
    console.log('Mock game results created for game IDs: 2, 3, 4')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seed()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { seed }
