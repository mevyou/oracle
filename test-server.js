// Smart test script that detects the server port automatically
const axios = require('axios');
const { createServer } = require('net');

const findAvailablePort = async (startPort = 3001, maxAttempts = 10) => {
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
  // Try common ports where the server might be running
  const commonPorts = [3000, 3001, 3002, 3003, 3004, 5000, 8000];
  
  for (const port of commonPorts) {
    try {
      const response = await axios.get(`http://localhost:${port}/api/results`, {
        timeout: 1000
      });
      console.log(`✅ Found server running on port ${port}`);
      return port;
    } catch (error) {
      // Port not available or server not running
      continue;
    }
  }
  
  throw new Error('❌ Server not found on any common port. Make sure the server is running with "npm run dev"');
};

async function testGameResults() {
  try {
    console.log('🔍 Detecting server port...');
    const port = await findServerPort();
    const BASE_URL = `http://localhost:${port}`;
    
    console.log(`\n🧪 Testing Game Results System on port ${port}...\n`);

    // Test 1: Get all game results
    console.log('1. Getting all game results...');
    const allResults = await axios.get(`${BASE_URL}/api/results`);
    console.log('✅ All results:', allResults.data);
    console.log(`   📊 Source: ${allResults.data.source} (${allResults.data.usingMockData ? 'Mock Data' : 'Database'})`);
    console.log('');

    // Test 2: Get specific game result (should exist from seed)
    console.log('2. Getting game result for ID "2"...');
    const game2 = await axios.get(`${BASE_URL}/api/results/2`);
    console.log('✅ Game 2 result:', game2.data);
    console.log(`   📊 Source: ${game2.data.source} (${game2.data.usingMockData ? 'Mock Data' : 'Database'})`);
    console.log('');

    // Test 3: Get non-existent game result
    console.log('3. Getting non-existent game result for ID "999"...');
    try {
      const game999 = await axios.get(`${BASE_URL}/api/results/999`);
      console.log('Game 999 result:', game999.data);
    } catch (error) {
      console.log('✅ Expected error for non-existent game:', error.response?.data?.message || error.message);
    }
    console.log('');

    // Test 4: Register a new provider
    console.log('4. Registering a new provider...');
    const newProvider = await axios.post(`${BASE_URL}/api/results/providers`, {
      name: 'test-provider',
      type: 'api',
      url: 'https://api.example.com',
      headers: { 'Authorization': 'Bearer test-token' }
    });
    console.log('✅ Provider registered:', newProvider.data);
    console.log('');

    // Test 5: Create a new game result
    console.log('5. Creating a new game result...');
    const newGame = await axios.post(`${BASE_URL}/api/results`, {
      gameId: 'test-game-1',
      status: 'completed',
      outcome: 'win',
      winner: 'TestPlayer1',
      loser: 'TestPlayer2',
      score: { player1: 5, player2: 3 },
      provider: 'test-provider'
    });
    console.log('✅ New game created:', newGame.data);
    console.log('');

    // Test 6: Get the newly created game result
    console.log('6. Getting the newly created game result...');
    const testGame = await axios.get(`${BASE_URL}/api/results/test-game-1`);
    console.log('✅ Test game result:', testGame.data);

    console.log('\n🎉 All tests completed successfully!');
    console.log(`\n📋 Server is running on: http://localhost:${port}`);
    console.log('📋 Available endpoints:');
    console.log(`   - GET  http://localhost:${port}/api/results`);
    console.log(`   - GET  http://localhost:${port}/api/results/:id`);
    console.log(`   - POST http://localhost:${port}/api/results`);
    console.log(`   - POST http://localhost:${port}/api/results/providers`);

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    console.log('\n💡 Make sure to:');
    console.log('   1. Start the server: npm run dev');
    console.log('   2. Set up the database (see previous instructions)');
  }
}

// Run the test
testGameResults();
