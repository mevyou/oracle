import { NextFunction, Request, Response } from "express"
import { prisma } from "../config/db"
import { z } from "zod"

// Define the platform type based on the schema
type PlatformType = 'DEFI' | 'NFT' | 'DAO' | 'EXCHANGE' | 'WALLET'
type PermissionLevel = 'BASIC' | 'PREMIUM' | 'ENTERPRISE'

interface Platform {
  id: string
  name: string
  platformType: PlatformType
  email: string
  permissionLevel: PermissionLevel
  zkCapabilities: string[]
  createdAt: Date
  updatedAt: Date
}

// Validation schemas
const platformSchema = z.object({
  name: z.string().min(2).max(100),
  platformType: z.enum(['DEFI', 'NFT', 'DAO', 'EXCHANGE', 'WALLET']),
  email: z.string().email(),
  permissionLevel: z.enum(['BASIC', 'PREMIUM', 'ENTERPRISE']),
  zkCapabilities: z.array(z.string())
})

const updatePlatformSchema = platformSchema.partial()

type PlatformInput = z.infer<typeof platformSchema>
type UpdatePlatformInput = z.infer<typeof updatePlatformSchema>

// Get all platforms
const getPlatforms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const platforms = await prisma.platform.findMany({
      select: {
        id: true,
        name: true,
        platformType: true,
        email: true,
        zkCapabilities: true,
        permissionLevel: true,
        contracts: true,
        serviceSubscriptions: true,
        platformAccessTokens: true,
        platformAccess: true,
        createdAt: true,
        updatedAt: true
      }
    })
    res.status(200).json({ platforms })
  } catch (error) {
    next(error)
  }
}

// Get platform by ID
const getPlatformById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const platform = await prisma.platform.findUnique({
      where: { id },
      include: {
        contracts: true,
        serviceSubscriptions: true,
        platformAccessTokens: true,
        platformAccess: true
      }
    })

    if (!platform) {
      res.status(404).json({ message: "Platform not found" })
    }

    res.status(200).json({ platform })
  } catch (error) {
    next(error)
  }
}

// Register new platform
const registerPlatform = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = platformSchema.parse(req.body) as PlatformInput

    const existingPlatform = await prisma.platform.findUnique({
      where: { email: validatedData.email }
    })

    if (existingPlatform) {
      res.status(400).json({ message: "Platform with this email already exists" })
    }

    const platform = await prisma.platform.create({
      data: {
        name: validatedData.name,
        platformType: validatedData.platformType,
        email: validatedData.email,
        permissionLevel: validatedData.permissionLevel,
        zkCapabilities: validatedData.zkCapabilities
      }
    })

    res.status(201).json({ platform })
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors })
    }
    next(error)
  }
}

// Update platform
const updatePlatform = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const validatedData = updatePlatformSchema.parse(req.body) as UpdatePlatformInput

    const updateData: Partial<Platform> = {}
    if (validatedData.name) updateData.name = validatedData.name
    if (validatedData.platformType) updateData.platformType = validatedData.platformType
    if (validatedData.email) updateData.email = validatedData.email
    if (validatedData.permissionLevel) updateData.permissionLevel = validatedData.permissionLevel
    if (validatedData.zkCapabilities) updateData.zkCapabilities = validatedData.zkCapabilities

    const platform = await prisma.platform.update({
      where: { id },
      data: updateData
    })

    res.status(200).json({ platform })
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors })
    }
    next(error)
  }
}

// Delete platform
const deletePlatform = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    // First check if platform exists
    const platform = await prisma.platform.findUnique({
      where: { id }
    })

    if (!platform) {
      res.status(404).json({ message: "Platform not found" })
    }

    // Delete related records first
    await prisma.$transaction([
      prisma.platformAccess.deleteMany({ where: { platformId: id } }),
      prisma.platformAccessToken.deleteMany({ where: { platformId: id } }),
      prisma.serviceSubscription.deleteMany({ where: { platformId: id } }),
      prisma.contract.deleteMany({ where: { platformId: id } }),
      prisma.platform.delete({ where: { id } })
    ])

    res.status(200).json({ message: "Platform and related data deleted successfully" })
  } catch (error) {
    next(error)
  }
}

// Revoke platform access
const revokePlatform = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    // Revoke all access tokens and permissions
    await prisma.$transaction([
      prisma.platformAccessToken.updateMany({
        where: { platformId: id },
        data: { isActive: false }
      }),
      prisma.platformAccess.updateMany({
        where: { platformId: id },
        data: { isActive: false }
      })
    ])

    res.status(200).json({ message: "Platform access revoked successfully" })
  } catch (error) {
    next(error)
  }
}

export {
  getPlatforms,
  getPlatformById,
  registerPlatform,
  updatePlatform,
  deletePlatform,
  revokePlatform
}
















