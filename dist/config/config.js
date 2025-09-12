"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAvailablePort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const net_1 = require("net");
dotenv_1.default.config();
const isPortAvailable = (port) => {
    return new Promise((resolve) => {
        const server = (0, net_1.createServer)();
        server.listen(port, () => {
            server.once('close', () => {
                resolve(true);
            });
            server.close();
        });
        server.on('error', () => {
            resolve(false);
        });
    });
};
const findAvailablePort = async (startPort = 3000, maxAttempts = 10) => {
    for (let i = 0; i < maxAttempts; i++) {
        const port = startPort + i;
        const available = await isPortAvailable(port);
        if (available) {
            return port;
        }
    }
    throw new Error(`No available port found starting from ${startPort}`);
};
exports.findAvailablePort = findAvailablePort;
const config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
};
exports.default = config;
