import app from './app';
import config, { findAvailablePort } from './config/config';

const startServer = async () => {
  try {
    const port = await findAvailablePort(config.port);
    
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`📡 API endpoints available at:`);
      console.log(`   - http://localhost:${port}/api/platforms`);
      console.log(`   - http://localhost:${port}/api/results`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
