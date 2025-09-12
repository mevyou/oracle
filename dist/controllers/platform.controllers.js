"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokePlatform = exports.deletePlatform = exports.updatePlatform = exports.registerPlatform = exports.getPlatformById = exports.getPlatforms = void 0;
const db_1 = require("../config/db");
const zod_1 = require("zod");
// Validation schemas
const platformSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(100),
    platformType: zod_1.z.enum(['DEFI', 'NFT', 'DAO', 'EXCHANGE', 'WALLET']),
    email: zod_1.z.string().email(),
    permissionLevel: zod_1.z.enum(['BASIC', 'PREMIUM', 'ENTERPRISE']),
    zkCapabilities: zod_1.z.array(zod_1.z.string())
});
const updatePlatformSchema = platformSchema.partial();
// Get all platforms
const getPlatforms = async (req, res, next) => {
    try {
        const platforms = await db_1.prisma.platform.findMany({
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
        });
        res.status(200).json({ platforms });
    }
    catch (error) {
        next(error);
    }
};
exports.getPlatforms = getPlatforms;
// Get platform by ID
const getPlatformById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const platform = await db_1.prisma.platform.findUnique({
            where: { id },
            include: {
                contracts: true,
                serviceSubscriptions: true,
                platformAccessTokens: true,
                platformAccess: true
            }
        });
        if (!platform) {
            res.status(404).json({ message: "Platform not found" });
        }
        res.status(200).json({ platform });
    }
    catch (error) {
        next(error);
    }
};
exports.getPlatformById = getPlatformById;
// Register new platform
const registerPlatform = async (req, res, next) => {
    try {
        const validatedData = platformSchema.parse(req.body);
        const existingPlatform = await db_1.prisma.platform.findUnique({
            where: { email: validatedData.email }
        });
        if (existingPlatform) {
            res.status(400).json({ message: "Platform with this email already exists" });
        }
        const platform = await db_1.prisma.platform.create({
            data: {
                name: validatedData.name,
                platformType: validatedData.platformType,
                email: validatedData.email,
                permissionLevel: validatedData.permissionLevel,
                zkCapabilities: validatedData.zkCapabilities
            }
        });
        res.status(201).json({ platform });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        next(error);
    }
};
exports.registerPlatform = registerPlatform;
// Update platform
const updatePlatform = async (req, res, next) => {
    try {
        const { id } = req.params;
        const validatedData = updatePlatformSchema.parse(req.body);
        const updateData = {};
        if (validatedData.name)
            updateData.name = validatedData.name;
        if (validatedData.platformType)
            updateData.platformType = validatedData.platformType;
        if (validatedData.email)
            updateData.email = validatedData.email;
        if (validatedData.permissionLevel)
            updateData.permissionLevel = validatedData.permissionLevel;
        if (validatedData.zkCapabilities)
            updateData.zkCapabilities = validatedData.zkCapabilities;
        const platform = await db_1.prisma.platform.update({
            where: { id },
            data: updateData
        });
        res.status(200).json({ platform });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        next(error);
    }
};
exports.updatePlatform = updatePlatform;
// Delete platform
const deletePlatform = async (req, res, next) => {
    try {
        const { id } = req.params;
        // First check if platform exists
        const platform = await db_1.prisma.platform.findUnique({
            where: { id }
        });
        if (!platform) {
            res.status(404).json({ message: "Platform not found" });
        }
        // Delete related records first
        await db_1.prisma.$transaction([
            db_1.prisma.platformAccess.deleteMany({ where: { platformId: id } }),
            db_1.prisma.platformAccessToken.deleteMany({ where: { platformId: id } }),
            db_1.prisma.serviceSubscription.deleteMany({ where: { platformId: id } }),
            db_1.prisma.contract.deleteMany({ where: { platformId: id } }),
            db_1.prisma.platform.delete({ where: { id } })
        ]);
        res.status(200).json({ message: "Platform and related data deleted successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.deletePlatform = deletePlatform;
// Revoke platform access
const revokePlatform = async (req, res, next) => {
    try {
        const { id } = req.params;
        // Revoke all access tokens and permissions
        await db_1.prisma.$transaction([
            db_1.prisma.platformAccessToken.updateMany({
                where: { platformId: id },
                data: { isActive: false }
            }),
            db_1.prisma.platformAccess.updateMany({
                where: { platformId: id },
                data: { isActive: false }
            })
        ]);
        res.status(200).json({ message: "Platform access revoked successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.revokePlatform = revokePlatform;
