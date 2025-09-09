import { providerManager } from './utils/providerHooks';
import { mockProviders } from './data/mockData';

export const initializeMockData = () => {
  console.log('🎮 Initializing mock game data...');
  
  // Register mock providers
  mockProviders.forEach(provider => {
    providerManager.registerProvider(provider.name, provider);
  });
  
  console.log('✅ Mock providers registered:');
  mockProviders.forEach(provider => {
    console.log(`   - ${provider.name} (${provider.type})`);
  });
  
  console.log('📦 Mock data ready - server can run without database');
};
