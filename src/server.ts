import app from './app';
import config, { findAvailablePort } from './config/config';
import { initializeMockData } from './initMockData';
import { connectDB } from './config/db';

const startServer = async () => {
  try {
    // Connect to MongoDB
    try {
      await connectDB();
      console.log('✅ MongoDB connected - User profiles will be stored in database');
    } catch (dbError) {
      console.warn('⚠️  MongoDB connection failed - User profile features may not work');
      console.warn('   Make sure DATABASE_URL is set in your .env file');
    }
    
    // Initialize mock data (always available)
    initializeMockData();
    
    const port = await findAvailablePort(config.port);
    
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`📡 API endpoints available at:`);
      console.log(`   - http://localhost:${port}/ (API info & available endpoints)`);
      console.log(`   - http://localhost:${port}/health (Health check)`);
      console.log(`   - http://localhost:${port}/api/results (Game results)`);
      console.log(`   - http://localhost:${port}/api/user (User profiles)`);
      console.log(`   - http://localhost:${port}/api/football (Football data)`);
      console.log(`\n💡 Note: Game results use mock data`);
      console.log(`📦 User profiles stored in MongoDB`);
      console.log(`⚽ Football data from API-Football`);
      console.log(`\n📚 Visit http://localhost:${port}/ to see all available endpoints`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
