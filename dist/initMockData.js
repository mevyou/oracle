"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeMockData = void 0;
const providerHooks_1 = require("./utils/providerHooks");
const mockData_1 = require("./data/mockData");
const initializeMockData = () => {
    console.log('🎮 Initializing mock game data...');
    // Register mock providers
    mockData_1.mockProviders.forEach(provider => {
        providerHooks_1.providerManager.registerProvider(provider.name, provider);
    });
    console.log('✅ Mock providers registered:');
    mockData_1.mockProviders.forEach(provider => {
        console.log(`   - ${provider.name} (${provider.type})`);
    });
    console.log('📦 Mock data ready - server can run without database');
};
exports.initializeMockData = initializeMockData;
