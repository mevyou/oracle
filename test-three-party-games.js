// Test script for Three-Party Game Results System
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
  const commonPorts = [3000, 3001, 3002, 3003, 3004, 5000, 8000];
  
  for (const port of commonPorts) {
    try {
      const response = await axios.get(`http://localhost:${port}/api/results`, {
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

async function testThreePartyGames() {
  try {
    console.log('🔍 Detecting server port...');
    const port = await findServerPort();
    const BASE_URL = `http://localhost:${port}`;
    
    console.log(`\n🎮 Testing Three-Party Game Results System on port ${port}...\n`);

    // Test 1: Get all game results
    console.log('1. Getting all three-party game results...');
    const allResults = await axios.get(`${BASE_URL}/api/results`);
    console.log('✅ All results retrieved successfully');
    console.log(`   📊 Total Results: ${allResults.data.totalResults}`);
    console.log(`   📊 Source: ${allResults.data.source} (${allResults.data.usingMockData ? 'Mock Data' : 'Database'})`);
    console.log(`   🆔 Request ID: ${allResults.data.requestId}`);
    console.log('');

    // Test 2: Get specific game result with arbitrator verdict
    console.log('2. Getting game result for ID "2" (completed game with arbitrator verdict)...');
    const game2 = await axios.get(`${BASE_URL}/api/results/2`);
    const gameData = game2.data.gameResult;
    console.log('✅ Game 2 result:');
    console.log(`   🎯 Players: ${gameData.player1} vs ${gameData.player2}`);
    console.log(`   ⚖️  Arbitrator: ${gameData.arbitrator}`);
    console.log(`   🏆 Winner: ${gameData.winner || 'Draw'}`);
    console.log(`   📋 Arbitrator Decision: ${gameData.arbitratorVerdict.decision}`);
    console.log(`   💭 Reasoning: ${gameData.arbitratorVerdict.reasoning}`);
    console.log(`   🎯 Confidence: ${gameData.arbitratorVerdict.confidence}%`);
    console.log(`   📁 Evidence: ${gameData.arbitratorVerdict.evidence?.length || 0} items`);
    if (gameData.arbitratorVerdict.evidence && gameData.arbitratorVerdict.evidence.length > 0) {
      gameData.arbitratorVerdict.evidence.forEach((item, index) => {
        if (typeof item === 'string') {
          console.log(`      ${index + 1}. ${item}`);
        } else if (typeof item === 'object') {
          console.log(`      ${index + 1}. [${item.type}] ${item.description || item.url || 'Object data'}`);
        }
      });
    }
    console.log(`   🎮 Game Type: ${gameData.gameDetails.gameType}`);
    console.log(`   💰 Stakes: $${gameData.gameDetails.stakes}`);
    console.log(`   🆔 Request ID: ${game2.data.requestId}`);
    console.log('');

    // Test 3: Get pending game
    console.log('3. Getting pending game result for ID "4"...');
    const game4 = await axios.get(`${BASE_URL}/api/results/4`);
    const pendingGame = game4.data.gameResult;
    console.log('✅ Game 4 result (pending):');
    console.log(`   🎯 Players: ${pendingGame.player1} vs ${pendingGame.player2}`);
    console.log(`   ⚖️  Arbitrator: ${pendingGame.arbitrator}`);
    console.log(`   📊 Status: ${pendingGame.status}`);
    console.log(`   📋 Arbitrator Decision: ${pendingGame.arbitratorVerdict.decision}`);
    console.log(`   💭 Reasoning: ${pendingGame.arbitratorVerdict.reasoning}`);
    console.log(`   🎮 Game Type: ${pendingGame.gameDetails.gameType}`);
    console.log(`   🆔 Request ID: ${game4.data.requestId}`);
    console.log('');

    // Test 4: Create a new three-party game result
    console.log('4. Creating a new three-party game result...');
    const newGame = await axios.post(`${BASE_URL}/api/results`, {
      gameId: 'test-game-' + Date.now(),
      status: 'completed',
      outcome: 'win',
      winner: 'TestPlayer1',
      loser: 'TestPlayer2',
      player1: 'TestPlayer1',
      player2: 'TestPlayer2',
      arbitrator: 'TestArbitrator',
      arbitratorVerdict: {
        decision: 'player1_wins',
        reasoning: 'TestPlayer1 demonstrated superior gameplay and met all victory conditions',
        confidence: 92,
        evidence: [
          'victory_screenshot.png',
          {
            type: 'video',
            url: 'https://evidence.example.com/test/replay.mp4',
            description: 'Full game replay showing TestPlayer1 victory',
            duration: 900,
            highlights: [120, 300, 600]
          },
          {
            type: 'performance_data',
            metrics: {
              accuracy: 0.94,
              speed: 1200,
              strategy_rating: 'excellent'
            }
          },
          {
            type: 'blockchain_proof',
            transaction_hash: '0x1234567890abcdef...',
            block_number: 18543210,
            verified: true
          },
          'rule_compliance_check_passed'
        ],
        timestamp: new Date()
      },
      score: { player1: 5, player2: 2 },
      provider: 'test-provider',
      gameDetails: {
        gameType: 'Test Battle',
        rules: ['Fair play', 'No cheating', 'Best of 7 rounds'],
        duration: 30,
        stakes: 250
      }
    });
    console.log('✅ New three-party game created successfully');
    console.log(`   🎯 Players: ${newGame.data.gameResult.player1} vs ${newGame.data.gameResult.player2}`);
    console.log(`   ⚖️  Arbitrator: ${newGame.data.gameResult.arbitrator}`);
    console.log(`   🏆 Winner: ${newGame.data.gameResult.winner}`);
    console.log(`   📋 Decision: ${newGame.data.gameResult.arbitratorVerdict.decision}`);
    console.log(`   🎯 Confidence: ${newGame.data.gameResult.arbitratorVerdict.confidence}%`);
    console.log('');

    // Test 5: Get the newly created game result
    console.log('5. Retrieving the newly created game result...');
    const testGame = await axios.get(`${BASE_URL}/api/results/${newGame.data.gameResult.gameId}`);
    console.log('✅ Test game retrieved successfully');
    console.log(`   🆔 Game ID: ${testGame.data.gameResult.gameId}`);
    console.log(`   🆔 Request ID: ${testGame.data.requestId}`);
    console.log('');

    // Test 6: Register a new arbitrator provider
    console.log('6. Registering a new arbitrator provider...');
    const newProvider = await axios.post(`${BASE_URL}/api/results/providers`, {
      name: 'arbitrator-provider',
      type: 'api',
      url: 'https://arbitrator-api.example.com',
      headers: { 
        'Authorization': 'Bearer arbitrator-token',
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Arbitrator provider registered successfully');
    console.log(`   📡 Provider: ${newProvider.data.provider.name}`);
    console.log(`   🔗 URL: ${newProvider.data.provider.url}`);
    console.log('');

    console.log('\n🎉 All three-party game tests completed successfully!');
    console.log(`\n📋 Server is running on: http://localhost:${port}`);
    console.log('📋 Available endpoints:');
    console.log(`   - GET  http://localhost:${port}/api/results (All games)`);
    console.log(`   - GET  http://localhost:${port}/api/results/:id (Specific game)`);
    console.log(`   - POST http://localhost:${port}/api/results (Create game)`);
    console.log(`   - POST http://localhost:${port}/api/results/providers (Register provider)`);
    
    console.log('\n🎮 Three-Party Game Features:');
    console.log('   ✅ UUID-based Game IDs and Request IDs');
    console.log('   ✅ Player 1 vs Player 2 structure');
    console.log('   ✅ Arbitrator verdicts with confidence scores');
    console.log('   ✅ Evidence tracking and reasoning');
    console.log('   ✅ Game details (type, rules, duration, stakes)');
    console.log('   ✅ Comprehensive mock data');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    console.log('\n💡 Make sure to:');
    console.log('   1. Start the server: npm run dev');
    console.log('   2. Install dependencies: npm install');
  }
}

// Run the test
testThreePartyGames();
