Coachs
Coachs
Get all the information about the coachs and their careers.

To get the photo of a coach you have to call the following url: https://media.api-sports.io/football/coachs/{coach_id}.png

Update Frequency : This endpoint is updated every day.

Recommended Calls : 1 call per day.

query Parameters
id	
integer
The id of the coach

team	
integer
The id of the team

search	
string >= 3 characters
The name of the coach

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
/coachs

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get coachs from one coach {id}
get("https://v3.football.api-sports.io/coachs?id=1");

// Get coachs from one {team}
get("https://v3.football.api-sports.io/coachs?team=33");

// Allows you to search for a coach in relation to a coach {name}
get("https://v3.football.api-sports.io/coachs?search=Klopp");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "coachs",
"parameters": {
"team": "85"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"id": 40,
"name": "T. Tuchel",
"firstname": "Thomas",
"lastname": "Tuchel",
"age": 47,
"birth": {
"date": "1973-08-29",
"place": "Krumbach",
"country": "Germany"
},
"nationality": "Germany",
"height": "192 cm",
"weight": "85 kg",
"photo": "https://media.api-sports.io/football/coachs/40.png",
"team": {
"id": 85,
"name": "PSG",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"career": [
{
"team": {
"id": 85,
"name": "PSG",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"start": "2018-07-01",
"end": null
},
{
"team": {
"id": 165,
"name": "Borussia Dortmund",
"logo": "https://media.api-sports.io/football/teams/165.png"
},
"start": "2015-07-01",
"end": "2017-05-01"
},
{
"team": {
"id": 164,
"name": "Mainz 05",
"logo": "https://media.api-sports.io/football/teams/164.png"
},
"start": "2009-08-01",
"end": "2014-05-01"
}
]
}
]
}
Players
Seasons
Get all available seasons for players statistics.

Update Frequency : This endpoint is updated every day.

Recommended Calls : 1 call per day.

query Parameters
player	
integer
The id of the player

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
/players/seasons

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all seasons available for players endpoint
get("https://v3.football.api-sports.io/players/seasons");

// Get all seasons available for a player {id}
get("https://v3.football.api-sports.io/players/seasons?player=276");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "players/seasons",
"parameters": [ ],
"errors": [ ],
"results": 35,
"paging": {
"current": 1,
"total": 1
},
"response": [
1966,
1982,
1986,
1990,
1991,
1992,
1993,
1994,
1995,
1996,
1997,
1998,
1999,
2000,
2001,
2002,
2003,
2004,
2005,
2006,
2007,
2008,
2009,
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
2020,
2022
]
}
Profiles
Returns the list of all available players.

It is possible to call this endpoint without parameters, but you will need to use the pagination to get all available players.

To get the photo of a player you have to call the following url: https://media.api-sports.io/football/players/{player_id}.png

This endpoint uses a pagination system, you can navigate between the different pages with to the page parameter.

Pagination : 250 results per page.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per week.

query Parameters
player	
integer
The id of the player

search	
string >= 3 characters
The lastname of the player

page	
integer
Default: 1
Use for the pagination

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
/players/profiles

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get data from one {player}
get("https://v3.football.api-sports.io/players/profiles?player=276");

// Allows you to search for a player in relation to a player {lastname}
get("https://v3.football.api-sports.io/players/profiles?search=ney");

// Get all available Players (limited to 250 results, use the pagination for next ones)
get("https://v3.football.api-sports.io/players/profiles");
get("https://v3.football.api-sports.io/players/profiles?page=2");
get("https://v3.football.api-sports.io/players/profiles?page=3");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "players/profiles",
"parameters": {
"player": "276"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"player": {
"id": 276,
"name": "Neymar",
"firstname": "Neymar",
"lastname": "da Silva Santos Júnior",
"age": 32,
"birth": {
"date": "1992-02-05",
"place": "Mogi das Cruzes",
"country": "Brazil"
},
"nationality": "Brazil",
"height": "175 cm",
"weight": "68 kg",
"number": 10,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/276.png"
}
}
]
}
Statistics
Get players statistics.

This endpoint returns the players for whom the profile and statistics data are available. Note that it is possible that a player has statistics for 2 teams in the same season in case of transfers.

The statistics are calculated according to the team id, league id and season.

You can find the available seasons by using the endpoint players/seasons.

To get the squads of the teams it is better to use the endpoint players/squads.

The players id are unique in the API and players keep it among all the teams they have been in.

In this endpoint you have the rating field, which is the rating of the player according to a match or a season. This data is calculated according to the performance of the player in relation to the other players of the game or the season who occupy the same position (Attacker, defender, goal...). There are different algorithms that take into account the position of the player and assign points according to his performance.

To get the photo of a player you have to call the following url: https://media.api-sports.io/football/players/{player_id}.png

This endpoint uses a pagination system, you can navigate between the different pages with to the page parameter.

Pagination : 20 results per page.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

Tutorials :

HOW TO GET ALL TEAMS AND PLAYERS FROM A LEAGUE ID
query Parameters
id	
integer
The id of the player

team	
integer
The id of the team

league	
integer
The id of the league

season	
integer = 4 characters YYYY | Requires the fields Id, League or Team...
The season of the league

search	
string >= 4 characters Requires the fields League or Team
The name of the player

page	
integer
Default: 1
Use for the pagination

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
/players

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all players statistics from one player {id} & {season}
get("https://v3.football.api-sports.io/players?id=19088&season=2018");

// Get all players statistics from one {team} & {season}
get("https://v3.football.api-sports.io/players?season=2018&team=33");
get("https://v3.football.api-sports.io/players?season=2018&team=33&page=2");

// Get all players statistics from one {league} & {season}
get("https://v3.football.api-sports.io/players?season=2018&league=61");
get("https://v3.football.api-sports.io/players?season=2018&league=61&page=4");

// Get all players statistics from one {league}, {team} & {season}
get("https://v3.football.api-sports.io/players?season=2018&league=61&team=33");
get("https://v3.football.api-sports.io/players?season=2018&league=61&team=33&page=5");

// Allows you to search for a player in relation to a player {name}
get("https://v3.football.api-sports.io/players?team=85&search=cavani");
get("https://v3.football.api-sports.io/players?league=61&search=cavani");
get("https://v3.football.api-sports.io/players?team=85&search=cavani&season=2018");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "players",
"parameters": {
"id": "276",
"season": "2019"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"player": {
"id": 276,
"name": "Neymar",
"firstname": "Neymar",
"lastname": "da Silva Santos Júnior",
"age": 28,
"birth": {
"date": "1992-02-05",
"place": "Mogi das Cruzes",
"country": "Brazil"
},
"nationality": "Brazil",
"height": "175 cm",
"weight": "68 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/276.png"
},
"statistics": [
{
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2019
},
"games": {
"appearences": 15,
"lineups": 15,
"minutes": 1322,
"number": null,
"position": "Attacker",
"rating": "8.053333",
"captain": false
},
"substitutes": {
"in": 0,
"out": 3,
"bench": 0
},
"shots": {
"total": 70,
"on": 36
},
"goals": {
"total": 13,
"conceded": null,
"assists": 6,
"saves": 0
},
"passes": {
"total": 704,
"key": 39,
"accuracy": 79
},
"tackles": {
"total": 13,
"blocks": 0,
"interceptions": 4
},
"duels": {
"total": null,
"won": null
},
"dribbles": {
"attempts": 143,
"success": 88,
"past": null
},
"fouls": {
"drawn": 62,
"committed": 14
},
"cards": {
"yellow": 3,
"yellowred": 1,
"red": 0
},
"penalty": {
"won": 1,
"commited": null,
"scored": 4,
"missed": 1,
"saved": null
}
}
]
}
]
}
Squads
Return the current squad of a team when the team parameter is used. When the player parameter is used the endpoint returns the set of teams associated with the player.

The response format is the same regardless of the parameter sent.

This endpoint requires at least one parameter.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per week.

query Parameters
team	
integer
The id of the team

player	
integer
The id of the player

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
/players/squads

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
fetch("https://v3.football.api-sports.io/players/squads?team=33", {
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
"get": "players/squads",
"parameters": {
"team": "33"
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
"logo": "https://media.api-sports.io/football/teams/33.png"
},
"players": [
{
"id": 20319,
"name": "N. Bishop",
"age": 22,
"number": 30,
"position": "Goalkeeper",
"photo": "https://media.api-sports.io/football/players/20319.png"
},
{
"id": 882,
"name": "David de Gea",
"age": 31,
"number": 1,
"position": "Goalkeeper",
"photo": "https://media.api-sports.io/football/players/882.png"
},
{
"id": 883,
"name": "L. Grant",
"age": 38,
"number": 13,
"position": "Goalkeeper",
"photo": "https://media.api-sports.io/football/players/883.png"
},
{
"id": 2931,
"name": "T. Heaton",
"age": 35,
"number": null,
"position": "Goalkeeper",
"photo": "https://media.api-sports.io/football/players/2931.png"
},
{
"id": 19088,
"name": "D. Henderson",
"age": 24,
"number": 26,
"position": "Goalkeeper",
"photo": "https://media.api-sports.io/football/players/19088.png"
},
{
"id": 885,
"name": "E. Bailly",
"age": 27,
"number": 3,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/885.png"
},
{
"id": 886,
"name": "Diogo Dalot",
"age": 22,
"number": 20,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/886.png"
},
{
"id": 153434,
"name": "W. Fish",
"age": 18,
"number": 48,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/153434.png"
},
{
"id": 888,
"name": "P. Jones",
"age": 29,
"number": 4,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/888.png"
},
{
"id": 138775,
"name": "E. Laird",
"age": 20,
"number": null,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/138775.png"
},
{
"id": 2935,
"name": "H. Maguire",
"age": 28,
"number": 5,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/2935.png"
},
{
"id": 889,
"name": "V. Lindelöf",
"age": 27,
"number": 2,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/889.png"
},
{
"id": 891,
"name": "L. Shaw",
"age": 26,
"number": 23,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/891.png"
},
{
"id": 378,
"name": "Alex Telles",
"age": 29,
"number": 27,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/378.png"
},
{
"id": 19182,
"name": "A. Tuanzebe",
"age": 24,
"number": 38,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/19182.png"
},
{
"id": 18846,
"name": "A. Wan-Bissaka",
"age": 24,
"number": 29,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/18846.png"
},
{
"id": 138806,
"name": "B. Williams",
"age": 21,
"number": 33,
"position": "Defender",
"photo": "https://media.api-sports.io/football/players/138806.png"
},
{
"id": 1485,
"name": "Bruno Fernandes",
"age": 27,
"number": 18,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/1485.png"
},
{
"id": 906,
"name": "T. Chong",
"age": 22,
"number": 44,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/906.png"
},
{
"id": 895,
"name": "J. Garner",
"age": 20,
"number": null,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/895.png"
},
{
"id": 899,
"name": "Andreas Pereira",
"age": 25,
"number": 15,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/899.png"
},
{
"id": 900,
"name": "J. Lingard",
"age": 29,
"number": 14,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/900.png"
},
{
"id": 901,
"name": "Mata",
"age": 33,
"number": 8,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/901.png"
},
{
"id": 902,
"name": "N. Matić",
"age": 33,
"number": 31,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/902.png"
},
{
"id": 903,
"name": "S. McTominay",
"age": 25,
"number": 39,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/903.png"
},
{
"id": 180560,
"name": "H. Mejbri",
"age": 18,
"number": 46,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/180560.png"
},
{
"id": 904,
"name": "P. Pogba",
"age": 28,
"number": 6,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/904.png"
},
{
"id": 905,
"name": "Fred",
"age": 28,
"number": 17,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/905.png"
},
{
"id": 163054,
"name": "S. Shoretire",
"age": 17,
"number": 74,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/163054.png"
},
{
"id": 547,
"name": "D. van de Beek",
"age": 24,
"number": 34,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/547.png"
},
{
"id": 138814,
"name": "E. Galbraith",
"age": 20,
"number": null,
"position": "Midfielder",
"photo": "https://media.api-sports.io/football/players/138814.png"
},
{
"id": 274,
"name": "E. Cavani",
"age": 34,
"number": 7,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/274.png"
},
{
"id": 153430,
"name": "A. Elanga",
"age": 19,
"number": 56,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/153430.png"
},
{
"id": 897,
"name": "M. Greenwood",
"age": 20,
"number": 11,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/897.png"
},
{
"id": 19329,
"name": "D. James",
"age": 24,
"number": 21,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/19329.png"
},
{
"id": 908,
"name": "A. Martial",
"age": 26,
"number": 9,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/908.png"
},
{
"id": 909,
"name": "M. Rashford",
"age": 24,
"number": 10,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/909.png"
},
{
"id": 157997,
"name": "A. Diallo",
"age": 19,
"number": 19,
"position": "Attacker",
"photo": "https://media.api-sports.io/football/players/157997.png"
}
]
}
]
}
Teams
Returns the list of teams and seasons in which the player played during his career.

This endpoint requires at least one parameter.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per week.

query Parameters
player
required
integer
The id of the player

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
/players/teams

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
fetch("https://v3.football.api-sports.io/players/teams?player=276", {
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
"get": "players/teams",
"parameters": {
"player": "276"
},
"errors": [ ],
"results": 8,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"team": {
"id": 6,
"name": "Brazil",
"logo": "https://media.api-sports.io/football/teams/6.png"
},
"seasons": [
2026,
2023,
2022,
2021,
2019,
2018,
2017,
2016,
2015,
2014,
2013,
2012,
2011,
2010
]
},
{
"team": {
"id": 2932,
"name": "Al-Hilal Saudi FC",
"logo": "https://media.api-sports.io/football/teams/2932.png"
},
"seasons": [
2024,
2023
]
},
{
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"seasons": [
2022,
2021,
2020,
2019,
2018,
2017
]
},
{
"team": {
"id": 529,
"name": "Barcelona",
"logo": "https://media.api-sports.io/football/teams/529.png"
},
"seasons": [
2016,
2015,
2014,
2013
]
},
{
"team": {
"id": 10171,
"name": "Brazil  U23",
"logo": "https://media.api-sports.io/football/teams/10171.png"
},
"seasons": [
2016,
2012
]
},
{
"team": {
"id": 128,
"name": "Santos",
"logo": "https://media.api-sports.io/football/teams/128.png"
},
"seasons": [
2012,
2011,
2010,
2009
]
},
{
"team": {
"id": 16200,
"name": "Brazil U20",
"logo": "https://media.api-sports.io/football/teams/16200.png"
},
"seasons": [
2011
]
},
{
"team": {
"id": 12502,
"name": "Brazil U17",
"logo": "https://media.api-sports.io/football/teams/12502.png"
},
"seasons": [
2009
]
}
]
}