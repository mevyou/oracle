/**
 * Football API Test Script
 * 
 * Run this script to test all football API endpoints
 * Usage: node test-football-api.js
 */

const axios = require('axios');

const API_BASE = 'http://localhost:3000/api/football';
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  gray: '\x1b[90m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logTest(testName) {
  console.log('\n' + '='.repeat(60));
  log(`TEST: ${testName}`, 'blue');
  console.log('='.repeat(60));
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'gray');
}

// ============================================
// Test 1: Search Team
// ============================================
async function testSearchTeam() {
  logTest('Search Team');
  
  try {
    const response = await axios.get(`${API_BASE}/teams/search`, {
      params: { name: 'Manchester United' }
    });
    
    logSuccess('Team search successful');
    logInfo(`Team found: ${response.data.team.name} (ID: ${response.data.team.id})`);
    logInfo(`Country: ${response.data.team.country}`);
    logInfo(`Founded: ${response.data.team.founded}`);
    
    return response.data.team;
  } catch (error) {
    logError(`Team search failed: ${error.response?.data?.error || error.message}`);
    return null;
  }
}

// ============================================
// Test 2: Find Match Between Teams
// ============================================
async function testFindMatch() {
  logTest('Find Match Between Teams');
  
  try {
    const response = await axios.get(`${API_BASE}/matches/find`, {
      params: {
        team1: 'Bayern Munich',
        team2: 'Liverpool'
      }
    });
    
    const match = response.data.match;
    
    logSuccess('Match found successfully');
    logInfo(`${match.teams.home.name} ${match.goals.home} - ${match.goals.away} ${match.teams.away.name}`);
    logInfo(`Date: ${new Date(match.fixture.date).toLocaleString()}`);
    logInfo(`Status: ${match.fixture.status.long}`);
    logInfo(`League: ${match.league.name}`);
    
    return match;
  } catch (error) {
    logError(`Match find failed: ${error.response?.data?.error || error.message}`);
    return null;
  }
}

// ============================================
// Test 3: Find Match with Date
// ============================================
async function testFindMatchWithDate() {
  logTest('Find Match with Specific Date');
  
  try {
    // Use a date in the past that likely has a match
    const date = '2024-03-10';
    
    const response = await axios.get(`${API_BASE}/matches/find`, {
      params: {
        team1: 'Real Madrid',
        team2: 'Barcelona',
        date
      }
    });
    
    const match = response.data.match;
    
    logSuccess('Match with date found successfully');
    logInfo(`${match.teams.home.name} ${match.goals.home} - ${match.goals.away} ${match.teams.away.name}`);
    logInfo(`Date: ${new Date(match.fixture.date).toLocaleString()}`);
    
    return match;
  } catch (error) {
    if (error.response?.status === 404) {
      log('⚠️  No match found on this date (this is expected for test data)', 'yellow');
    } else {
      logError(`Match find with date failed: ${error.response?.data?.error || error.message}`);
    }
    return null;
  }
}

// ============================================
// Test 4: Get Head-to-Head
// ============================================
async function testHeadToHead() {
  logTest('Head-to-Head Matches');
  
  try {
    const response = await axios.get(`${API_BASE}/matches/h2h`, {
      params: {
        team1: 'Manchester United',
        team2: 'Liverpool',
        last: 5
      }
    });
    
    const { teams, matches, total } = response.data;
    
    logSuccess('Head-to-head retrieved successfully');
    logInfo(`${teams.team1.name} vs ${teams.team2.name}`);
    logInfo(`Total matches: ${total}`);
    
    if (matches.length > 0) {
      matches.slice(0, 3).forEach((match, index) => {
        logInfo(`  ${index + 1}. ${match.teams.home.name} ${match.goals.home}-${match.goals.away} ${match.teams.away.name} (${new Date(match.fixture.date).toLocaleDateString()})`);
      });
    }
    
    return matches;
  } catch (error) {
    logError(`H2H failed: ${error.response?.data?.error || error.message}`);
    return null;
  }
}

// ============================================
// Test 5: Get Team Fixtures
// ============================================
async function testTeamFixtures() {
  logTest('Team Fixtures (Next 3 Matches)');
  
  try {
    const response = await axios.get(`${API_BASE}/fixtures/team`, {
      params: {
        name: 'Liverpool',
        next: 3
      }
    });
    
    const { team, fixtures, total } = response.data;
    
    logSuccess('Team fixtures retrieved successfully');
    logInfo(`Team: ${team.name}`);
    logInfo(`Total fixtures: ${total}`);
    
    fixtures.forEach((fixture, index) => {
      const opponent = fixture.teams.home.id === team.id 
        ? fixture.teams.away.name 
        : fixture.teams.home.name;
      const location = fixture.teams.home.id === team.id ? 'vs' : '@';
      
      logInfo(`  ${index + 1}. ${location} ${opponent} - ${new Date(fixture.fixture.date).toLocaleDateString()}`);
    });
    
    return fixtures;
  } catch (error) {
    logError(`Team fixtures failed: ${error.response?.data?.error || error.message}`);
    return null;
  }
}

// ============================================
// Test 6: Get Live Fixtures
// ============================================
async function testLiveFixtures() {
  logTest('Live Fixtures');
  
  try {
    const response = await axios.get(`${API_BASE}/fixtures/live`);
    
    const { fixtures, total } = response.data;
    
    if (total === 0) {
      log('ℹ️  No live matches at the moment (this is normal)', 'yellow');
    } else {
      logSuccess(`${total} live matches found`);
      
      fixtures.slice(0, 5).forEach((match, index) => {
        const score = `${match.goals.home ?? 0} - ${match.goals.away ?? 0}`;
        const time = match.fixture.status.elapsed || match.fixture.status.short;
        logInfo(`  ${index + 1}. ${match.teams.home.name} ${score} ${match.teams.away.name} [${time}']`);
      });
    }
    
    return fixtures;
  } catch (error) {
    logError(`Live fixtures failed: ${error.response?.data?.error || error.message}`);
    return null;
  }
}

// ============================================
// Test 7: Get Fixtures by Date
// ============================================
async function testFixturesByDate() {
  logTest('Fixtures by Date');
  
  try {
    // Use today's date
    const today = new Date().toISOString().split('T')[0];
    
    const response = await axios.get(`${API_BASE}/fixtures/date`, {
      params: { date: today }
    });
    
    const { date, fixtures, total } = response.data;
    
    logSuccess(`Fixtures for ${date} retrieved successfully`);
    logInfo(`Total fixtures: ${total}`);
    
    if (fixtures.length > 0) {
      fixtures.slice(0, 5).forEach((match, index) => {
        const score = match.goals.home !== null 
          ? `${match.goals.home}-${match.goals.away}` 
          : 'vs';
        logInfo(`  ${index + 1}. ${match.teams.home.name} ${score} ${match.teams.away.name} [${match.fixture.status.short}]`);
      });
    } else {
      log('ℹ️  No fixtures on this date', 'yellow');
    }
    
    return fixtures;
  } catch (error) {
    logError(`Fixtures by date failed: ${error.response?.data?.error || error.message}`);
    return null;
  }
}

// ============================================
// Test Summary
// ============================================
async function runAllTests() {
  console.log('\n');
  log('╔═══════════════════════════════════════════════════════════╗', 'blue');
  log('║         FOOTBALL API INTEGRATION TEST SUITE              ║', 'blue');
  log('╚═══════════════════════════════════════════════════════════╝', 'blue');
  
  const results = {
    passed: 0,
    failed: 0,
    total: 7
  };
  
  // Run all tests
  const tests = [
    { name: 'Search Team', fn: testSearchTeam },
    { name: 'Find Match', fn: testFindMatch },
    { name: 'Find Match with Date', fn: testFindMatchWithDate },
    { name: 'Head-to-Head', fn: testHeadToHead },
    { name: 'Team Fixtures', fn: testTeamFixtures },
    { name: 'Live Fixtures', fn: testLiveFixtures },
    { name: 'Fixtures by Date', fn: testFixturesByDate }
  ];
  
  for (const test of tests) {
    const result = await test.fn();
    if (result !== null) {
      results.passed++;
    } else {
      results.failed++;
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between tests
  }
  
  // Summary
  console.log('\n\n');
  log('╔═══════════════════════════════════════════════════════════╗', 'blue');
  log('║                    TEST SUMMARY                           ║', 'blue');
  log('╚═══════════════════════════════════════════════════════════╝', 'blue');
  console.log();
  logSuccess(`Passed: ${results.passed}/${results.total}`);
  if (results.failed > 0) {
    logError(`Failed: ${results.failed}/${results.total}`);
  }
  
  console.log('\n');
  
  if (results.passed === results.total) {
    log('🎉 All tests passed! Your Football API integration is working perfectly!', 'green');
  } else if (results.passed > 0) {
    log('⚠️  Some tests passed. Check your API key and internet connection.', 'yellow');
  } else {
    log('❌ All tests failed. Make sure:', 'red');
    log('   1. Server is running (npm run dev)', 'red');
    log('   2. FOOTBALL_API_KEY is set in .env file', 'red');
    log('   3. Internet connection is working', 'red');
  }
  
  console.log('\n');
  log('📚 For more information, see:', 'gray');
  log('   - FOOTBALL_API_INTEGRATION.md', 'gray');
  log('   - FOOTBALL_QUICK_START.md', 'gray');
  log('   - examples/football-usage-examples.ts', 'gray');
  console.log('\n');
}

// Run tests if executed directly
if (require.main === module) {
  runAllTests()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Test suite error:', error);
      process.exit(1);
    });
}

module.exports = {
  testSearchTeam,
  testFindMatch,
  testFindMatchWithDate,
  testHeadToHead,
  testTeamFixtures,
  testLiveFixtures,
  testFixturesByDate,
  runAllTests
};

