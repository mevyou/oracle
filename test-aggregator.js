/**
 * Test script for the X & xAI Aggregator System
 * 
 * This script demonstrates how to use the aggregator API endpoints
 * for real-time research and outcome prediction.
 * 
 * Prerequisites:
 * 1. Set up environment variables (X_API_KEY, XAI_API_KEY)
 * 2. Start the server: npm run dev
 * 3. Run this script: node test-aggregator.js
 */

const BASE_URL = 'http://localhost:3000';

// Test cases for different research scenarios
const testCases = [
  {
    name: 'Sports Match Result (Yes/No)',
    endpoint: '/api/aggregator/research',
    method: 'POST',
    data: {
      topic: 'Did Chelsea win against Liverpool?',
      outcomeType: 'yes_no',
      maxResults: 5,
      includeSources: true
    }
  },
  {
    name: 'Stock Market Analysis (Yes/No)',
    endpoint: '/api/aggregator/research',
    method: 'POST',
    data: {
      topic: 'Is Apple stock going up?',
      outcomeType: 'yes_no',
      maxResults: 8,
      includeSources: true,
      searchFilters: {
        dateRange: {
          start: '2024-01-01',
          end: '2024-01-15'
        },
        language: 'en'
      }
    }
  },
  {
    name: 'Multiple Choice Research',
    endpoint: '/api/aggregator/options',
    method: 'POST',
    data: {
      topic: 'What is the current market sentiment?',
      options: ['Bullish', 'Bearish', 'Sideways', 'Uncertain']
    }
  },
  {
    name: 'Quick Research (GET)',
    endpoint: '/api/aggregator/quick?topic=Is%20Bitcoin%20price%20rising?',
    method: 'GET'
  },
  {
    name: 'Date Range Research',
    endpoint: '/api/aggregator/date-range',
    method: 'POST',
    data: {
      topic: 'What happened in the stock market last week?',
      startDate: '2024-01-01',
      endDate: '2024-01-07'
    }
  }
];

// Utility function to make HTTP requests
async function makeRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: options.data ? JSON.stringify(options.data) : undefined
    });

    const result = await response.json();
    return { success: response.ok, data: result, status: response.status };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Test health check first
async function testHealthCheck() {
  console.log('🔍 Testing Health Check...');
  const result = await makeRequest(`${BASE_URL}/api/aggregator/health`);
  
  if (result.success) {
    console.log('✅ Aggregator service is healthy');
    console.log('   Services:', result.data.services);
  } else {
    console.log('❌ Health check failed:', result.error || result.data);
    return false;
  }
  return true;
}

// Test examples endpoint
async function testExamples() {
  console.log('\n📚 Testing Examples Endpoint...');
  const result = await makeRequest(`${BASE_URL}/api/aggregator/examples`);
  
  if (result.success) {
    console.log('✅ Examples retrieved successfully');
    console.log('   Available example types:', Object.keys(result.data.examples));
  } else {
    console.log('❌ Failed to get examples:', result.error || result.data);
  }
}

// Test statistics endpoint
async function testStats() {
  console.log('\n📊 Testing Statistics Endpoint...');
  const result = await makeRequest(`${BASE_URL}/api/aggregator/stats`);
  
  if (result.success) {
    console.log('✅ Statistics retrieved successfully');
    console.log('   Stats:', result.data.stats);
  } else {
    console.log('❌ Failed to get statistics:', result.error || result.data);
  }
}

// Run individual test case
async function runTestCase(testCase) {
  console.log(`\n🧪 Testing: ${testCase.name}`);
  console.log(`   Endpoint: ${testCase.method} ${testCase.endpoint}`);
  
  const url = `${BASE_URL}${testCase.endpoint}`;
  const options = {
    method: testCase.method,
    data: testCase.data
  };
  
  const result = await makeRequest(url, options);
  
  if (result.success) {
    console.log('✅ Test passed');
    if (result.data.result) {
      console.log(`   Outcome: ${result.data.result.outcome}`);
      console.log(`   Confidence: ${result.data.result.confidence}%`);
      console.log(`   Sources: ${result.data.result.sources?.length || 0}`);
    }
  } else {
    console.log('❌ Test failed:', result.error || result.data?.error);
  }
  
  return result.success;
}

// Main test runner
async function runTests() {
  console.log('🚀 Starting X & xAI Aggregator System Tests');
  console.log('=' .repeat(60));
  
  // Test health check first
  const isHealthy = await testHealthCheck();
  if (!isHealthy) {
    console.log('\n❌ Service is not healthy. Please check your configuration.');
    console.log('   Make sure X_API_KEY and XAI_API_KEY are set in your .env file');
    return;
  }
  
  // Test utility endpoints
  await testExamples();
  await testStats();
  
  // Run test cases
  console.log('\n🧪 Running Research Test Cases...');
  let passedTests = 0;
  let totalTests = testCases.length;
  
  for (const testCase of testCases) {
    const success = await runTestCase(testCase);
    if (success) passedTests++;
    
    // Add delay between tests to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Summary
  console.log('\n' + '=' .repeat(60));
  console.log('📊 Test Summary:');
  console.log(`   Passed: ${passedTests}/${totalTests}`);
  console.log(`   Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! The aggregator system is working correctly.');
  } else {
    console.log('⚠️  Some tests failed. Check the error messages above.');
  }
  
  console.log('\n💡 Tips:');
  console.log('   - Make sure your API keys are valid and have sufficient credits');
  console.log('   - Check rate limits if you see 429 errors');
  console.log('   - Verify network connectivity to X and xAI APIs');
  console.log('   - Review server logs for detailed error information');
}

// Handle fetch import for Node.js
if (typeof fetch === 'undefined') {
  console.log('📦 Installing fetch for Node.js...');
  try {
    const { default: fetch } = await import('node-fetch');
    global.fetch = fetch;
  } catch (error) {
    console.log('❌ Please install node-fetch: npm install node-fetch');
    process.exit(1);
  }
}

// Run the tests
runTests().catch(error => {
  console.error('❌ Test runner failed:', error);
  process.exit(1);
});
