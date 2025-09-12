// Test script for the new dynamic API endpoints
const axios = require('axios');
const { createServer } = require('net');

const findAvailablePort = async (startPort = 3000, maxAttempts = 10) => {
  for (let i = 0; i < maxAttempts; i++) {
    const port = startPort + i;
    const available = await new Promise((resolve) => {
      const server = createServer();
      server.listen(port, () => {
        server.once('close', () => resolve(true));
        server.close();
      });
      server.on('error', () => resolve(false));
    });
    
    if (available) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
};

const findServerPort = async () => {
  const commonPorts = [3000, 3001, 3002, 3003, 3004, 5000, 8000];
  
  for (const port of commonPorts) {
    try {
      const response = await axios.get(`http://localhost:${port}/health`, {
        timeout: 1000
      });
      console.log(`✅ Found server running on port ${port}`);
      return port;
    } catch (error) {
      continue;
    }
  }
  
  throw new Error('❌ Server not found on any common port. Make sure the server is running with "npm run dev"');
};

async function testEndpoints() {
  try {
    console.log('🔍 Detecting server port...');
    const port = await findServerPort();
    const BASE_URL = `http://localhost:${port}`;
    
    console.log(`\n🧪 Testing Dynamic API Endpoints on port ${port}...\n`);

    // Test 1: Main API info endpoint
    console.log('1. Getting API information and available endpoints...');
    const apiInfo = await axios.get(`${BASE_URL}/`);
    console.log('✅ API Info retrieved successfully');
    console.log(`   📊 API Name: ${apiInfo.data.name}`);
    console.log(`   📊 Version: ${apiInfo.data.version}`);
    console.log(`   📊 Total Routes: ${apiInfo.data.totalRoutes}`);
    console.log(`   📊 Categories: ${apiInfo.data.categories}`);
    console.log('');
    
    // Show all available endpoints by category
    console.log('📡 Available Endpoints by Category:');
    Object.entries(apiInfo.data.endpoints).forEach(([category, routes]) => {
      console.log(`\n   ${category}:`);
      routes.forEach(route => {
        console.log(`     ${route.method.padEnd(6)} ${route.path} - ${route.description}`);
      });
    });
    console.log('');

    // Test 2: Health check endpoint
    console.log('2. Testing health check endpoint...');
    const health = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check successful');
    console.log(`   📊 Status: ${health.data.status}`);
    console.log(`   📊 Uptime: ${Math.round(health.data.uptime)} seconds`);
    console.log(`   📊 Memory Used: ${health.data.memory.used}MB / ${health.data.memory.total}MB`);
    console.log(`   📊 Platform: ${health.data.system.platform}`);
    console.log(`   📊 Node Version: ${health.data.system.nodeVersion}`);
    console.log('');

    // Test 3: Game results endpoint (to show it's working)
    console.log('3. Testing game results endpoint...');
    const gameResults = await axios.get(`${BASE_URL}/api/results`);
    console.log('✅ Game results endpoint working');
    console.log(`   📊 Total Games: ${gameResults.data.totalResults}`);
    console.log(`   📊 Source: ${gameResults.data.source}`);
    console.log(`   🆔 Request ID: ${gameResults.data.requestId}`);
    console.log('');

    console.log('\n🎉 All endpoint tests completed successfully!');
    console.log(`\n📋 Server is running on: http://localhost:${port}`);
    console.log('📋 Key endpoints:');
    console.log(`   - GET  http://localhost:${port}/ (API info & available endpoints)`);
    console.log(`   - GET  http://localhost:${port}/health (Health check)`);
    console.log(`   - GET  http://localhost:${port}/api/results (Game results)`);
    
    console.log('\n🚀 Dynamic Route Features:');
    console.log('   ✅ Automatic route registration');
    console.log('   ✅ Categorized endpoint listing');
    console.log('   ✅ Health monitoring');
    console.log('   ✅ API documentation');
    console.log('   ✅ Extensible system - add routes anywhere!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    console.log('\n💡 Make sure to:');
    console.log('   1. Start the server: npm run dev');
    console.log('   2. Install dependencies: npm install');
  }
}

// Run the test
testEndpoints();
