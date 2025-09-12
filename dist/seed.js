"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const providerHooks_1 = require("./utils/providerHooks");
const mockData_1 = require("./data/mockData");
function parseDate(dateStr) {
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return new Date(); // Return current date if invalid
        }
        return date;
    }
    catch {
        return new Date(); // Return current date if parsing fails
    }
}
async function parseCSV(filePath) {
    const results = [];
    return new Promise((resolve, reject) => {
        fs_1.default.createReadStream(filePath)
            .pipe((0, csv_parser_1.default)())
            .on('data', (data) => {
            // Parse JSON strings in the data
            Object.keys(data).forEach(key => {
                try {
                    if (data[key].startsWith('[') || data[key].startsWith('{')) {
                        data[key] = JSON.parse(data[key]);
                    }
                }
                catch (e) {
                    // If parsing fails, keep the original string
                }
            });
            results.push(data);
        })
            .on('end', () => resolve(results))
            .on('error', reject);
    });
}
async function seed() {
    try {
        console.log('🎮 Initializing mock data (no database required)...');
        // Register mock providers for game results
        mockData_1.mockProviders.forEach(provider => {
            providerHooks_1.providerManager.registerProvider(provider.name, provider);
        });
        console.log('✅ Mock providers registered:');
        mockData_1.mockProviders.forEach(provider => {
            console.log(`   - ${provider.name} (${provider.type})`);
        });
        console.log('📦 Mock data ready - server can run without database');
    }
    catch (error) {
        console.error('Error initializing mock data:', error);
        throw error;
    }
}
// Run the seed function if this file is executed directly
if (require.main === module) {
    seed()
        .catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
