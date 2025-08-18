"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFacility = void 0;
const db_1 = require("../config/db");
const getFacility = async (req, res, next) => {
    try {
        const platforms = await db_1.prisma.platform.findMany();
        res.status(200).json(platforms);
    }
    catch (error) {
        next(error);
    }
};
exports.getFacility = getFacility;
