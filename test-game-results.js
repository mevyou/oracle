// Simple test script to verify the game results system
const axios = require('axios');
const { createServer } = require('net');

const findAvailablePort = async (startPort = 3002, maxAttempts = 10) => {
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

const BASE_URL = `http://localhost:${process.env.PORT || 3002}`;

async function testGameResults() {
  try {
    console.log('Testing Game Results System...\n');

    // Test 1: Get all game results
    console.log('1. Getting all game results...');
    const allResults = await axios.get(`${BASE_URL}/api/results`);
    console.log('All results:', allResults.data);
    console.log('');

    // Test 2: Get specific game result (should exist from seed)
    console.log('2. Getting game result for ID "2"...');
    const game2 = await axios.get(`${BASE_URL}/api/results/2`);
    console.log('Game 2 result:', game2.data);
    console.log('');

    // Test 3: Get non-existent game result
    console.log('3. Getting non-existent game result for ID "999"...');
    try {
      const game999 = await axios.get(`${BASE_URL}/api/results/999`);
      console.log('Game 999 result:', game999.data);
    } catch (error) {
      console.log('Expected error for non-existent game:', error.response?.data || error.message);
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
    console.log('Provider registered:', newProvider.data);
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
    console.log('New game created:', newGame.data);
    console.log('');

    // Test 6: Get the newly created game result
    console.log('6. Getting the newly created game result...');
    const testGame = await axios.get(`${BASE_URL}/api/results/test-game-1`);
    console.log('Test game result:', testGame.data);

    console.log('\n✅ All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Run the test
testGameResults();
