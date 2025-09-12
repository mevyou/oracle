import app from './app';
import config, { findAvailablePort } from './config/config';
import { initializeMockData } from './initMockData';

const startServer = async () => {
  try {
    // Initialize mock data (always available)
    initializeMockData();
    
    const port = await findAvailablePort(config.port);
    
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`📡 API endpoints available at:`);
      console.log(`   - http://localhost:${port}/ (API info & available endpoints)`);
      console.log(`   - http://localhost:${port}/health (Health check)`);
      console.log(`   - http://localhost:${port}/api/results (Game results)`);
      console.log(`\n💡 Note: Server runs with mock data - no database required!`);
      console.log(`🎮 Game Results API ready for testing`);
      console.log(`\n📚 Visit http://localhost:${port}/ to see all available endpoints`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
