
Custom theme
You can override the default styles by creating your own CSS theme using the data-theme attribute and custom variable declarations.

Example:

api-sports-widget[data-theme="MyTheme"] {
  --primary-color: #18cfc0;
  --success-color: #2ecc58;
  --warning-color: #f39c12;
  --danger-color: #e74c3c;
  --light-color: #898989;

  --home-color: var(--primary-color);
  --away-color: #ffc107;

  --text-color: #333;
  --text-color-info: #333;

  --background-color: #fff;

  --primary-font-size: 0.72rem;
  --secondary-font-size: 0.75rem;
  --button-font-size: 0.8rem;
  --title-font-size: 0.9rem;

  --header-text-transform: uppercase;
  --button-text-transform: uppercase;
  --title-text-transform: uppercase;

  --border: 1px solid #95959530;
  --game-height: 2.3rem;
  --league-height: 2.35rem;

  --score-size: 2.25rem;
  --flag-size: 22px;
  --teams-logo-size: 18px;
  --teams-logo-size-xl: 5rem;
  --hover: rgba(200, 200, 200, 0.15);
}
    <api-sports-widget data-type="games"></api-sports-widget>

    <div id="game-container"></div>

    <api-sports-widget
      data-type="config"
      data-key="Your-Api-Key-Here"
      data-sport="football"
      data-theme="MyTheme"
    ></api-sports-widget>
Find all the documentation on widgets here

Timezone
Timezone
Get the list of available timezone to be used in the fixtures endpoint.

This endpoint does not require any parameters.

Update Frequency : This endpoint contains all the existing timezone, it is not updated.

Recommended Calls : 1 call when you need.

header Parameters
x-rapidapi-key
required
string
Your Api-Key

Responses
200 OK
204 No Content
499 Time Out
500 Internal Server Error

get
/timezone

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
fetch("https://v3.football.api-sports.io/timezone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "timezone",
"parameters": [ ],
"errors": [ ],
"results": 425,
"paging": {
"current": 1,
"total": 1
},
"response": [
"Africa/Abidjan",
"Africa/Accra",
"Africa/Addis_Ababa",
"Africa/Algiers",
"Africa/Asmara"
]
}
Countries
Countries
Get the list of available countries for the leagues endpoint.

The name and code fields can be used in other endpoints as filters.

To get the flag of a country you have to call the following url: https://media.api-sports.io/flags/{country_code}.svg

Examples available in Request samples "Use Cases".

All the parameters of this endpoint can be used together.

Update Frequency : This endpoint is updated each time a new league from a country not covered by the API is added.

Recommended Calls : 1 call per day.

query Parameters
name	
string
The name of the country

code	
string [ 2 .. 6 ] characters FR, GB-ENG, IT…
The Alpha code of the country

search	
string = 3 characters
The name of the country

header Parameters
x-rapidapi-key
required
string
Your Api-Key

Responses
200 OK
204 No Content
499 Time Out
500 Internal Server Error

get
/countries

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available countries across all {seasons} and competitions
get("https://v3.football.api-sports.io/countries");

// Get all available countries from one country {name}
get("https://v3.football.api-sports.io/countries?name=england");

// Get all available countries from one country {code}
get("https://v3.football.api-sports.io/countries?code=fr");

// Allows you to search for a countries in relation to a country {name}
get("https://v3.football.api-sports.io/countries?search=engl");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "countries",
"parameters": {
"name": "england"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"name": "England",
"code": "GB",
"flag": "https://media.api-sports.io/flags/gb.svg"
}
]
}
Leagues
Leagues
Get the list of available leagues and cups.

The league id are unique in the API and leagues keep it across all seasons

To get the logo of a competition you have to call the following url: https://media.api-sports.io/football/leagues/{league_id}.png

This endpoint also returns the coverage of each competition, which makes it possible to know what is available for that league or cup.

The values returned by the coverage indicate the data available at the moment you call the API, so for a competition that has not yet started, it is normal to have all the features set to False. This will be updated once the competition has started.

You can find all the leagues ids on our Dashboard.

Example :

"coverage": {
  "fixtures": {
      "events": true,
      "lineups": true,
      "statistics_fixtures": false,
      "statistics_players": false
  },
  "standings": true,
  "players": true,
  "top_scorers": true,
  "top_assists": true,
  "top_cards": true,
  "injuries": true,
  "predictions": true,
  "odds": false
}
In this example we can deduce that the competition does not have the following features: statistics_fixtures, statistics_players, odds because it is set to False.

The coverage of a competition can vary from season to season and values set to True do not guarantee 100% data availability.

Some competitions, such as the friendlies, are exceptions to the coverage indicated in the leagues endpoint, and the data available may differ depending on the match, including livescore, events, lineups, statistics and players.

Competitions are automatically renewed by the API when a new season is available. There may be a delay between the announcement of the official calendar and the availability of data in the API.

For Cup competitions, fixtures are automatically added when the two participating teams are known. For example if the current phase is the 8th final, the quarter final will be added once the teams playing this phase are known.

Examples available in Request samples "Use Cases".

Most of the parameters of this endpoint can be used together.

Update Frequency : This endpoint is updated several times a day.

Recommended Calls : 1 call per hour.

query Parameters
id	
integer
The id of the league

name	
string
The name of the league

country	
string
The country name of the league

code	
string [ 2 .. 6 ] characters FR, GB-ENG, IT…
The Alpha code of the country

season	
integer = 4 characters YYYY
The season of the league

team	
integer
The id of the team

type	
string
Enum: "league" "cup"
The type of the league

current	
string Return the list of active seasons or the las...Show pattern
Enum: "true" "false"
The state of the league

search	
string >= 3 characters
The name or the country of the league

last	
integer <= 2 characters
The X last leagues/cups added in the API

header Parameters
x-rapidapi-key
required
string
Your Api-Key

Responses
200 OK
204 No Content
499 Time Out
500 Internal Server Error

get
/leagues

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Allows to retrieve all the seasons available for a league/cup
get("https://v3.football.api-sports.io/leagues?id=39");

// Get all leagues from one league {name}
get("https://v3.football.api-sports.io/leagues?name=premier league");

// Get all leagues from one {country}
// You can find the available {country} by using the endpoint country
get("https://v3.football.api-sports.io/leagues?country=england");

// Get all leagues from one country {code} (GB, FR, IT etc..)
// You can find the available country {code} by using the endpoint country
get("https://v3.football.api-sports.io/leagues?code=gb");

// Get all leagues from one {season}
// You can find the available {season} by using the endpoint seasons
get("https://v3.football.api-sports.io/leagues?season=2019");

// Get one league from one league {id} & {season}
get("https://v3.football.api-sports.io/leagues?season=2019&id=39");

// Get all leagues in which the {team} has played at least one match
get("https://v3.football.api-sports.io/leagues?team=33");

// Allows you to search for a league in relation to a league {name} or {country}
get("https://v3.football.api-sports.io/leagues?search=premier league");
get("https://v3.football.api-sports.io/leagues?search=England");

// Get all leagues from one {type}
get("https://v3.football.api-sports.io/leagues?type=league");

// Get all leagues where the season is in progress or not
get("https://v3.football.api-sports.io/leagues?current=true");

// Get the last 99 leagues or cups added to the API
get("https://v3.football.api-sports.io/leagues?last=99");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/leagues?season=2019&country=england&type=league");
get("https://v3.football.api-sports.io/leagues?team=85&season=2019");
get("https://v3.football.api-sports.io/leagues?id=61¤t=true&type=league");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "leagues",
"parameters": {
"id": "39"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"league": {
"id": 39,
"name": "Premier League",
"type": "League",
"logo": "https://media.api-sports.io/football/leagues/2.png"
},
"country": {
"name": "England",
"code": "GB",
"flag": "https://media.api-sports.io/flags/gb.svg"
},
"seasons": [
{
"year": 2010,
"start": "2010-08-14",
"end": "2011-05-17",
"current": false,
"coverage": {
"fixtures": {
"events": true,
"lineups": true,
"statistics_fixtures": false,
"statistics_players": false
},
"standings": true,
"players": true,
"top_scorers": true,
"top_assists": true,
"top_cards": true,
"injuries": true,
"predictions": true,
"odds": false
}
},
{
"year": 2011,
"start": "2011-08-13",
"end": "2012-05-13",
"current": false,
"coverage": {
"fixtures": {
"events": true,
"lineups": true,
"statistics_fixtures": false,
"statistics_players": false
},
"standings": true,
"players": true,
"top_scorers": true,
"top_assists": true,
"top_cards": true,
"injuries": true,
"predictions": true,
"odds": false
}
}
]
}
]
}
Seasons
Get the list of available seasons.

All seasons are only 4-digit keys, so for a league whose season is 2018-2019 like the English Premier League (EPL), the 2018-2019 season in the API will be 2018.

All seasons can be used in other endpoints as filters.

This endpoint does not require any parameters.

Update Frequency : This endpoint is updated each time a new league is added.

Recommended Calls : 1 call per day.

header Parameters
x-rapidapi-key
required
string
Your Api-Key

Responses
200 OK
204 No Content
499 Time Out
500 Internal Server Error

get
/leagues/seasons

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
fetch("https://v3.football.api-sports.io/leagues/seasons", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "leagues/seasons",
"parameters": [ ],
"errors": [ ],
"results": 12,
"paging": {
"current": 1,
"total": 1
},
"response": [
2008,
2010,
2011,
2012,
2013,
2014,
2015,
2016,
2017,
2018,
2019,
2020
]
}
Teams
Teams information
Get the list of available teams.

The team id are unique in the API and teams keep it among all the leagues/cups in which they participate.

To get the logo of a team you have to call the following url: https://media.api-sports.io/football/teams/{team_id}.png

You can find all the teams ids on our Dashboard.

Examples available in Request samples "Use Cases".

All the parameters of this endpoint can be used together.

This endpoint requires at least one parameter.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

Tutorials :

HOW TO GET ALL TEAMS AND PLAYERS FROM A LEAGUE ID
query Parameters
id	
integer
The id of the team

name	
string
The name of the team

league	
integer
The id of the league

season	
integer = 4 characters YYYY
The season of the league

country	
string
The country name of the team

code	
string = 3 characters
The code of the team

venue	
integer
The id of the venue

search	
string >= 3 characters
The name or the country name of the team

header Parameters
x-rapidapi-key
required
string
Your Api-Key

Responses
200 OK
204 No Content
499 Time Out
500 Internal Server Error

get
/teams

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get one team from one team {id}
get("https://v3.football.api-sports.io/teams?id=33");

// Get one team from one team {name}
get("https://v3.football.api-sports.io/teams?name=manchester united");

// Get all teams from one {league} & {season}
get("https://v3.football.api-sports.io/teams?league=39&season=2019");

// Get teams from one team {country}
get("https://v3.football.api-sports.io/teams?country=england");

// Get teams from one team {code}
get("https://v3.football.api-sports.io/teams?code=FRA");

// Get teams from one venue {id}
get("https://v3.football.api-sports.io/teams?venue=789");

// Allows you to search for a team in relation to a team {name} or {country}
get("https://v3.football.api-sports.io/teams?search=manches");
get("https://v3.football.api-sports.io/teams?search=England");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "teams",
"parameters": {
"id": "33"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"team": {
"id": 33,
"name": "Manchester United",
"code": "MUN",
"country": "England",
"founded": 1878,
"national": false,
"logo": "https://media.api-sports.io/football/teams/33.png"
},
"venue": {
"id": 556,
"name": "Old Trafford",
"address": "Sir Matt Busby Way",
"city": "Manchester",
"capacity": 76212,
"surface": "grass",
"image": "https://media.api-sports.io/football/venues/556.png"
}
}
]
}
Teams statistics
Returns the statistics of a team in relation to a given competition and season.

It is possible to add the date parameter to calculate statistics from the beginning of the season to the given date. By default the API returns the statistics of all games played by the team for the competition and the season.

Update Frequency : This endpoint is updated twice a day.

Recommended Calls : 1 call per day for the teams who have at least one fixture during the day otherwise 1 call per week.

Here is an example of what can be achieved

demo-teams-statistics

query Parameters
league
required
integer
The id of the league

season
required
integer = 4 characters YYYY
The season of the league

team
required
integer
The id of the team

date	
stringYYYY-MM-DD
The limit date

header Parameters
x-rapidapi-key
required
string
Your Api-Key

Responses
200 OK
204 No Content
499 Time Out
500 Internal Server Error

get
/teams/statistics

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all statistics for a {team} in a {league} & {season}
get("https://v3.football.api-sports.io/teams/statistics?league=39&team=33&season=2019");

//Get all statistics for a {team} in a {league} & {season} with a end {date}
get("https://v3.football.api-sports.io/teams/statistics?league=39&team=33&season=2019&date=2019-10-08");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "teams/statistics",
"parameters": {
"league": "39",
"season": "2019",
"team": "33"
},
"errors": [ ],
"results": 11,
"paging": {
"current": 1,
"total": 1
},
"response": {
"league": {
"id": 39,
"name": "Premier League",
"country": "England",
"logo": "https://media.api-sports.io/football/leagues/39.png",
"flag": "https://media.api-sports.io/flags/gb-eng.svg",
"season": 2019
},
"team": {
"id": 33,
"name": "Manchester United",
"logo": "https://media.api-sports.io/football/teams/33.png"
},
"form": "WDLDWLDLDWLWDDWWDLWWLWLLDWWDWDWWWWDWDW",
"fixtures": {
"played": {
"home": 19,
"away": 19,
"total": 38
},
"wins": {
"home": 10,
"away": 8,
"total": 18
},
"draws": {
"home": 7,
"away": 5,
"total": 12
},
"loses": {
"home": 2,
"away": 6,
"total": 8
}
},
"goals": {
"for": {
"total": {
"home": 40,
"away": 26,
"total": 66
},
"average": {
"home": "2.1",
"away": "1.4",
"total": "1.7"
},
"minute": {
"0-15": {
"total": 4,
"percentage": "6.06%"
},
"16-30": {
"total": 17,
"percentage": "25.76%"
},
"31-45": {
"total": 11,
"percentage": "16.67%"
},
"46-60": {
"total": 13,
"percentage": "19.70%"
},
"61-75": {
"total": 10,
"percentage": "15.15%"
},
"76-90": {
"total": 8,
"percentage": "12.12%"
},
"91-105": {
"total": 3,
"percentage": "4.55%"
},
"106-120": {
"total": null,
"percentage": null
}
},
"under_over": {
"0.5": {
"over": 30,
"under": 8
},
"1.5": {
"over": 20,
"under": 18
},
"2.5": {
"over": 11,
"under": 27
},
"3.5": {
"over": 4,
"under": 34
},
"4.5": {
"over": 1,
"under": 37
}
}
},
"against": {
"total": {
"home": 17,
"away": 19,
"total": 36
},
"average": {
"home": "0.9",
"away": "1.0",
"total": "0.9"
},
"minute": {
"0-15": {
"total": 6,
"percentage": "16.67%"
},
"16-30": {
"total": 3,
"percentage": "8.33%"
},
"31-45": {
"total": 7,
"percentage": "19.44%"
},
"46-60": {
"total": 9,
"percentage": "25.00%"
},
"61-75": {
"total": 3,
"percentage": "8.33%"
},
"76-90": {
"total": 5,
"percentage": "13.89%"
},
"91-105": {
"total": 3,
"percentage": "8.33%"
},
"106-120": {
"total": null,
"percentage": null
}
},
"under_over": {
"0.5": {
"over": 25,
"under": 13
},
"1.5": {
"over": 10,
"under": 28
},
"2.5": {
"over": 1,
"under": 37
},
"3.5": {
"over": 0,
"under": 38
},
"4.5": {
"over": 0,
"under": 38
}
}
}
},
"biggest": {
"streak": {
"wins": 4,
"draws": 2,
"loses": 2
},
"wins": {
"home": "4-0",
"away": "0-3"
},
"loses": {
"home": "0-2",
"away": "2-0"
},
"goals": {
"for": {
"home": 5,
"away": 3
},
"against": {
"home": 2,
"away": 3
}
}
},
"clean_sheet": {
"home": 7,
"away": 6,
"total": 13
},
"failed_to_score": {
"home": 2,
"away": 6,
"total": 8
},
"penalty": {
"scored": {
"total": 10,
"percentage": "100.00%"
},
"missed": {
"total": 0,
"percentage": "0%"
},
"total": 10
},
"lineups": [
{
"formation": "4-2-3-1",
"played": 32
},
{
"formation": "3-4-1-2",
"played": 4
},
{
"formation": "3-4-2-1",
"played": 1
},
{
"formation": "4-3-1-2",
"played": 1
}
],
"cards": {
"yellow": {
"0-15": {
"total": 5,
"percentage": "6.85%"
},
"16-30": {
"total": 5,
"percentage": "6.85%"
},
"31-45": {
"total": 16,
"percentage": "21.92%"
},
"46-60": {
"total": 12,
"percentage": "16.44%"
},
"61-75": {
"total": 14,
"percentage": "19.18%"
},
"76-90": {
"total": 21,
"percentage": "28.77%"
},
"91-105": {
"total": null,
"percentage": null
},
"106-120": {
"total": null,
"percentage": null
}
},
"red": {
"0-15": {
"total": null,
"percentage": null
},
"16-30": {
"total": null,
"percentage": null
},
"31-45": {
"total": null,
"percentage": null
},
"46-60": {
"total": null,
"percentage": null
},
"61-75": {
"total": null,
"percentage": null
},
"76-90": {
"total": null,
"percentage": null
},
"91-105": {
"total": null,
"percentage": null
},
"106-120": {
"total": null,
"percentage": null
}
}
}
}
}
