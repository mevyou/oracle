/**
 * Football API Usage Examples
 * 
 * These examples demonstrate how to use the Football API
 * in your betting oracle application
 */

import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/football';

// ============================================
// Example 1: Find Latest Match Between Teams
// ============================================
export async function findLatestMatch(team1: string, team2: string) {
  try {
    const response = await axios.get(`${API_BASE}/matches/find`, {
      params: { team1, team2 }
    });
    
    const { match } = response.data;
    
    console.log('Match Found:');
    console.log(`${match.teams.home.name} ${match.goals.home} - ${match.goals.away} ${match.teams.away.name}`);
    console.log(`Date: ${new Date(match.fixture.date).toLocaleString()}`);
    console.log(`Status: ${match.fixture.status.long}`);
    
    return match;
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    return null;
  }
}

// Usage:
// findLatestMatch('Bayern Munich', 'Liverpool');


// ============================================
// Example 2: Find Match on Specific Date
// ============================================
export async function findMatchOnDate(team1: string, team2: string, date: string) {
  try {
    const response = await axios.get(`${API_BASE}/matches/find`, {
      params: { team1, team2, date }
    });
    
    const { match } = response.data;
    
    // Determine winner
    const winner = match.teams.home.winner 
      ? match.teams.home.name 
      : match.teams.away.winner 
        ? match.teams.away.name 
        : 'Draw';
    
    console.log(`Match on ${date}:`);
    console.log(`Winner: ${winner}`);
    console.log(`Final Score: ${match.goals.home} - ${match.goals.away}`);
    
    return {
      homeTeam: match.teams.home.name,
      awayTeam: match.teams.away.name,
      homeScore: match.goals.home,
      awayScore: match.goals.away,
      winner,
      status: match.fixture.status.short
    };
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    return null;
  }
}

// Usage:
// findMatchOnDate('Real Madrid', 'Barcelona', '2024-03-17');


// ============================================
// Example 3: Get Upcoming Matches for Betting
// ============================================
export async function getUpcomingMatches(teamName: string, count: number = 5) {
  try {
    const response = await axios.get(`${API_BASE}/fixtures/team`, {
      params: { name: teamName, next: count }
    });
    
    const { fixtures, team } = response.data;
    
    console.log(`\nUpcoming ${count} matches for ${team.name}:`);
    
    const upcomingMatches = fixtures.map((fixture: any) => ({
      id: fixture.fixture.id,
      opponent: fixture.teams.home.id === team.id 
        ? fixture.teams.away.name 
        : fixture.teams.home.name,
      isHome: fixture.teams.home.id === team.id,
      date: new Date(fixture.fixture.date),
      venue: fixture.fixture.venue?.name,
      league: fixture.league.name
    }));
    
    upcomingMatches.forEach((match: any, index: number) => {
      console.log(`\n${index + 1}. ${match.isHome ? 'vs' : '@'} ${match.opponent}`);
      console.log(`   Date: ${match.date.toLocaleString()}`);
      console.log(`   League: ${match.league}`);
      console.log(`   Fixture ID: ${match.id}`);
    });
    
    return upcomingMatches;
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    return [];
  }
}

// Usage:
// getUpcomingMatches('Liverpool', 5);


// ============================================
// Example 4: Head-to-Head Analysis
// ============================================
export async function getHeadToHeadStats(team1: string, team2: string, last: number = 10) {
  try {
    const response = await axios.get(`${API_BASE}/matches/h2h`, {
      params: { team1, team2, last }
    });
    
    const { matches, teams } = response.data;
    
    // Calculate stats
    let team1Wins = 0;
    let team2Wins = 0;
    let draws = 0;
    let totalGoalsTeam1 = 0;
    let totalGoalsTeam2 = 0;
    
    matches.forEach((match: any) => {
      const isTeam1Home = match.teams.home.name === teams.team1.name;
      const team1Goals = isTeam1Home ? match.goals.home : match.goals.away;
      const team2Goals = isTeam1Home ? match.goals.away : match.goals.home;
      
      totalGoalsTeam1 += team1Goals || 0;
      totalGoalsTeam2 += team2Goals || 0;
      
      if (team1Goals > team2Goals) team1Wins++;
      else if (team2Goals > team1Goals) team2Wins++;
      else draws++;
    });
    
    const stats = {
      team1: teams.team1.name,
      team2: teams.team2.name,
      matchesPlayed: matches.length,
      team1Wins,
      team2Wins,
      draws,
      team1Goals: totalGoalsTeam1,
      team2Goals: totalGoalsTeam2,
      averageGoalsPerGame: ((totalGoalsTeam1 + totalGoalsTeam2) / matches.length).toFixed(2)
    };
    
    console.log('\nHead-to-Head Stats:');
    console.log(`${stats.team1} vs ${stats.team2}`);
    console.log(`Matches: ${stats.matchesPlayed}`);
    console.log(`${stats.team1} Wins: ${stats.team1Wins}`);
    console.log(`${stats.team2} Wins: ${stats.team2Wins}`);
    console.log(`Draws: ${stats.draws}`);
    console.log(`Average Goals: ${stats.averageGoalsPerGame}`);
    
    return stats;
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    return null;
  }
}

// Usage:
// getHeadToHeadStats('Manchester United', 'Liverpool', 10);


// ============================================
// Example 5: Live Match Monitoring
// ============================================
export async function monitorLiveMatches(intervalSeconds: number = 60) {
  console.log('Starting live match monitor...\n');
  
  const checkLiveMatches = async () => {
    try {
      const response = await axios.get(`${API_BASE}/fixtures/live`);
      const { fixtures } = response.data;
      
      if (fixtures.length === 0) {
        console.log(`[${new Date().toLocaleTimeString()}] No live matches currently`);
        return;
      }
      
      console.log(`\n[${new Date().toLocaleTimeString()}] ${fixtures.length} live matches:`);
      
      fixtures.forEach((match: any) => {
        const score = `${match.goals.home ?? 0} - ${match.goals.away ?? 0}`;
        const time = match.fixture.status.elapsed ? `${match.fixture.status.elapsed}'` : match.fixture.status.short;
        
        console.log(`  ${match.teams.home.name} ${score} ${match.teams.away.name} [${time}]`);
      });
      
      return fixtures;
    } catch (error: any) {
      console.error('Error checking live matches:', error.message);
      return [];
    }
  };
  
  // Check immediately
  await checkLiveMatches();
  
  // Then check every interval
  const intervalId = setInterval(checkLiveMatches, intervalSeconds * 1000);
  
  // Return stop function
  return () => {
    clearInterval(intervalId);
    console.log('Live match monitor stopped');
  };
}

// Usage:
// const stopMonitor = await monitorLiveMatches(60); // Check every 60 seconds
// To stop: stopMonitor();


// ============================================
// Example 6: Get Match Prediction
// ============================================
export async function getMatchPrediction(fixtureId: number) {
  try {
    const response = await axios.get(`${API_BASE}/predictions/${fixtureId}`);
    const { prediction } = response.data;
    
    console.log('\nMatch Prediction:');
    console.log(`Winner: ${prediction.predictions.winner.name} (${prediction.predictions.winner.comment})`);
    console.log(`Win Probability: ${prediction.predictions.percent.home} (Home) / ${prediction.predictions.percent.draw} (Draw) / ${prediction.predictions.percent.away} (Away)`);
    console.log(`Goals Prediction: ${prediction.predictions.under_over}`);
    console.log(`Advice: ${prediction.predictions.advice}`);
    
    return {
      winner: prediction.predictions.winner.name,
      winnerComment: prediction.predictions.winner.comment,
      probabilities: prediction.predictions.percent,
      goalsExpected: prediction.predictions.under_over,
      advice: prediction.predictions.advice
    };
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    return null;
  }
}

// Usage:
// getMatchPrediction(215662);


// ============================================
// Example 7: Bet Settlement Workflow
// ============================================
export async function settleBet(betData: {
  team1: string;
  team2: string;
  betType: 'win' | 'draw' | 'over' | 'under';
  userPrediction: string;
  matchDate?: string;
}) {
  try {
    // Find the match
    const response = await axios.get(`${API_BASE}/matches/find`, {
      params: {
        team1: betData.team1,
        team2: betData.team2,
        date: betData.matchDate
      }
    });
    
    const { match } = response.data;
    
    // Check if match is finished
    if (match.fixture.status.short !== 'FT') {
      return {
        settled: false,
        message: `Match not finished yet. Status: ${match.fixture.status.long}`
      };
    }
    
    // Determine actual outcome
    let actualOutcome: string;
    const homeScore = match.goals.home;
    const awayScore = match.goals.away;
    const totalGoals = homeScore + awayScore;
    
    switch (betData.betType) {
      case 'win':
        if (homeScore > awayScore) actualOutcome = match.teams.home.name;
        else if (awayScore > homeScore) actualOutcome = match.teams.away.name;
        else actualOutcome = 'draw';
        break;
      
      case 'draw':
        actualOutcome = homeScore === awayScore ? 'draw' : 'no draw';
        break;
      
      case 'over':
        actualOutcome = totalGoals > 2.5 ? 'over 2.5' : 'under 2.5';
        break;
      
      case 'under':
        actualOutcome = totalGoals < 2.5 ? 'under 2.5' : 'over 2.5';
        break;
      
      default:
        actualOutcome = 'unknown';
    }
    
    const won = actualOutcome === betData.userPrediction;
    
    console.log('\nBet Settlement:');
    console.log(`Match: ${match.teams.home.name} ${homeScore} - ${awayScore} ${match.teams.away.name}`);
    console.log(`User Predicted: ${betData.userPrediction}`);
    console.log(`Actual Outcome: ${actualOutcome}`);
    console.log(`Result: ${won ? '✅ WON' : '❌ LOST'}`);
    
    return {
      settled: true,
      won,
      actualOutcome,
      userPrediction: betData.userPrediction,
      score: `${homeScore} - ${awayScore}`,
      match
    };
  } catch (error: any) {
    console.error('Error settling bet:', error.response?.data || error.message);
    return {
      settled: false,
      error: error.response?.data?.error || error.message
    };
  }
}

// Usage:
// settleBet({
//   team1: 'Bayern Munich',
//   team2: 'Liverpool',
//   betType: 'win',
//   userPrediction: 'Bayern Munich',
//   matchDate: '2024-03-15'
// });


// ============================================
// Example 8: Get Fixtures for Date Range
// ============================================
export async function getFixturesInRange(teamName: string, from: string, to: string) {
  try {
    const response = await axios.get(`${API_BASE}/fixtures/team`, {
      params: { name: teamName, from, to }
    });
    
    const { fixtures, team } = response.data;
    
    console.log(`\nFixtures for ${team.name} (${from} to ${to}):`);
    console.log(`Total matches: ${fixtures.length}\n`);
    
    const summary = fixtures.map((fixture: any) => {
      const isHome = fixture.teams.home.id === team.id;
      const opponent = isHome ? fixture.teams.away.name : fixture.teams.home.name;
      const result = fixture.goals.home !== null 
        ? `${fixture.goals.home}-${fixture.goals.away}` 
        : 'TBD';
      
      return {
        date: new Date(fixture.fixture.date).toLocaleDateString(),
        opponent,
        isHome,
        result,
        status: fixture.fixture.status.short,
        league: fixture.league.name
      };
    });
    
    summary.forEach((match, index) => {
      console.log(`${index + 1}. ${match.date} - ${match.isHome ? 'vs' : '@'} ${match.opponent}`);
      console.log(`   Result: ${match.result} | Status: ${match.status} | League: ${match.league}`);
    });
    
    return summary;
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    return [];
  }
}

// Usage:
// getFixturesInRange('Manchester City', '2024-01-01', '2024-01-31');


// ============================================
// Run Examples
// ============================================
async function runExamples() {
  console.log('='.repeat(50));
  console.log('FOOTBALL API USAGE EXAMPLES');
  console.log('='.repeat(50));
  
  // Example 1
  console.log('\n\n1️⃣  Finding Latest Match:');
  console.log('-'.repeat(50));
  await findLatestMatch('Bayern Munich', 'Liverpool');
  
  // Example 2
  console.log('\n\n2️⃣  Finding Match on Specific Date:');
  console.log('-'.repeat(50));
  await findMatchOnDate('Real Madrid', 'Barcelona', '2024-03-17');
  
  // Example 3
  console.log('\n\n3️⃣  Getting Upcoming Matches:');
  console.log('-'.repeat(50));
  await getUpcomingMatches('Liverpool', 5);
  
  // Example 4
  console.log('\n\n4️⃣  Head-to-Head Analysis:');
  console.log('-'.repeat(50));
  await getHeadToHeadStats('Manchester United', 'Liverpool', 10);
  
  console.log('\n\n' + '='.repeat(50));
  console.log('Examples completed!');
  console.log('='.repeat(50));
}

// Uncomment to run examples:
// runExamples();

export {
  findLatestMatch,
  findMatchOnDate,
  getUpcomingMatches,
  getHeadToHeadStats,
  monitorLiveMatches,
  getMatchPrediction,
  settleBet,
  getFixturesInRange,
  runExamples
};

