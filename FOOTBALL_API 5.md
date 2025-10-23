
Players statistics
Get the players statistics from one fixture.

Update Frequency : This endpoint is updated every minute.

Recommended Calls : 1 call every minute for the fixtures in progress otherwise 1 call per day.

query Parameters
fixture
required
integer
The id of the fixture

team	
integer
The id of the team

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
/fixtures/players

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available players statistics from one {fixture}
get("https://v3.football.api-sports.io/fixtures/players?fixture=169080");

// Get all available players statistics from one {fixture} & {team}
get("https://v3.football.api-sports.io/fixtures/players?fixture=169080&team=2284");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "fixtures/players",
"parameters": {
"fixture": "169080"
},
"errors": [ ],
"results": 2,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"team": {
"id": 2284,
"name": "Monarcas",
"logo": "https://media.api-sports.io/football/teams/2284.png",
"update": "2020-01-13T16:12:12+00:00"
},
"players": [
{
"player": {
"id": 35931,
"name": "Sebastián Sosa",
"photo": "https://media.api-sports.io/football/players/35931.png"
},
"statistics": [
{
"games": {
"minutes": 90,
"number": 13,
"position": "G",
"rating": "6.3",
"captain": false,
"substitute": false
},
"offsides": null,
"shots": {
"total": 0,
"on": 0
},
"goals": {
"total": null,
"conceded": 1,
"assists": null,
"saves": 0
},
"passes": {
"total": 17,
"key": 0,
"accuracy": "68%"
},
"tackles": {
"total": null,
"blocks": 0,
"interceptions": 0
},
"duels": {
"total": null,
"won": null
},
"dribbles": {
"attempts": 0,
"success": 0,
"past": null
},
"fouls": {
"drawn": 0,
"committed": 0
},
"cards": {
"yellow": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": 0
}
}
]
}
]
}
]
}
Injuries
Injuries
Get the list of players not participating in the fixtures for various reasons such as suspended, injured for example.

Being a new endpoint, the data is only available from April 2021.

There are two types:

Missing Fixture : The player will not play the fixture.
Questionable : The information is not yet 100% sure, the player may eventually play the fixture.
Examples available in Request samples "Use Cases".

All the parameters of this endpoint can be used together.

This endpoint requires at least one parameter.

Update Frequency : This endpoint is updated every 4 hours.

Recommended Calls : 1 call per day.

query Parameters
league	
integer
The id of the league

season	
integer = 4 characters YYYY
The season of the league, required with league, team and player parameters

fixture	
integer
The id of the fixture

team	
integer
The id of the team

player	
integer
The id of the player

date	
stringYYYY-MM-DD
A valid date

ids	
stringMaximum of 20 fixtures ids
Value: "id-id-id"
One or more fixture ids

timezone	
string
A valid timezone from the endpoint Timezone

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
/injuries

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available injuries from one {league} & {season}
get("https://v3.football.api-sports.io/injuries?league=2&season=2020");

// Get all available injuries from one {fixture}
get("https://v3.football.api-sports.io/injuries?fixture=686314");

// Get all available injuries from severals fixtures {ids} 
get("https://v3.football.api-sports.io/injuries?ids=686314-686315-686316-686317-686318-686319-686320");

// Get all available injuries from one {team} & {season}
get("https://v3.football.api-sports.io/injuries?team=85&season=2020");

// Get all available injuries from one {player} & {season}
get("https://v3.football.api-sports.io/injuries?player=865&season=2020");

// Get all available injuries from one {date}
get("https://v3.football.api-sports.io/injuries?date=2021-04-07");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/injuries?league=2&season=2020&team=85");
get("https://v3.football.api-sports.io/injuries?league=2&season=2020&player=865");
get("https://v3.football.api-sports.io/injuries?date=2021-04-07&timezone=Europe/London&team=85");
get("https://v3.football.api-sports.io/injuries?date=2021-04-07&league=61");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "injuries",
"parameters": {
"fixture": "686314"
},
"errors": [ ],
"results": 13,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"player": {
"id": 865,
"name": "D. Costa",
"photo": "https://media.api-sports.io/football/players/865.png",
"type": "Missing Fixture",
"reason": "Broken ankle"
},
"team": {
"id": 157,
"name": "Bayern Munich",
"logo": "https://media.api-sports.io/football/teams/157.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 510,
"name": "S. Gnabry",
"photo": "https://media.api-sports.io/football/players/510.png",
"type": "Missing Fixture",
"reason": "Illness"
},
"team": {
"id": 157,
"name": "Bayern Munich",
"logo": "https://media.api-sports.io/football/teams/157.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 496,
"name": "R. Hoffmann",
"photo": "https://media.api-sports.io/football/players/496.png",
"type": "Missing Fixture",
"reason": "Knee Injury"
},
"team": {
"id": 157,
"name": "Bayern Munich",
"logo": "https://media.api-sports.io/football/teams/157.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 521,
"name": "R. Lewandowski",
"photo": "https://media.api-sports.io/football/players/521.png",
"type": "Missing Fixture",
"reason": "Knee Injury"
},
"team": {
"id": 157,
"name": "Bayern Munich",
"logo": "https://media.api-sports.io/football/teams/157.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 514,
"name": "J. Martinez",
"photo": "https://media.api-sports.io/football/players/514.png",
"type": "Missing Fixture",
"reason": "Knock"
},
"team": {
"id": 157,
"name": "Bayern Munich",
"logo": "https://media.api-sports.io/football/teams/157.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 162037,
"name": "M. Tillman",
"photo": "https://media.api-sports.io/football/players/162037.png",
"type": "Missing Fixture",
"reason": "Knee Injury"
},
"team": {
"id": 157,
"name": "Bayern Munich",
"logo": "https://media.api-sports.io/football/teams/157.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 519,
"name": "C. Tolisso",
"photo": "https://media.api-sports.io/football/players/519.png",
"type": "Missing Fixture",
"reason": "Tendon Injury"
},
"team": {
"id": 157,
"name": "Bayern Munich",
"logo": "https://media.api-sports.io/football/teams/157.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 258,
"name": "J. Bernat",
"photo": "https://media.api-sports.io/football/players/258.png",
"type": "Missing Fixture",
"reason": "Knee Injury"
},
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 769,
"name": "A. Florenzi",
"photo": "https://media.api-sports.io/football/players/769.png",
"type": "Missing Fixture",
"reason": "Illness"
},
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 216,
"name": "M. Icardi",
"photo": "https://media.api-sports.io/football/players/216.png",
"type": "Missing Fixture",
"reason": "Muscle Injury"
},
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 263,
"name": "L. Kurzawa",
"photo": "https://media.api-sports.io/football/players/263.png",
"type": "Missing Fixture",
"reason": "Calf Injury"
},
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 271,
"name": "L. Paredes",
"photo": "https://media.api-sports.io/football/players/271.png",
"type": "Missing Fixture",
"reason": "Suspended"
},
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
},
{
"player": {
"id": 273,
"name": "M. Verratti",
"photo": "https://media.api-sports.io/football/players/273.png",
"type": "Missing Fixture",
"reason": "Illness"
},
"team": {
"id": 85,
"name": "Paris Saint Germain",
"logo": "https://media.api-sports.io/football/teams/85.png"
},
"fixture": {
"id": 686314,
"timezone": "UTC",
"date": "2021-04-07T19:00:00+00:00",
"timestamp": 1617822000
},
"league": {
"id": 2,
"season": 2020,
"name": "UEFA Champions League",
"country": "World",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": null
}
}
]
}
Predictions
Predictions
Get predictions about a fixture.

The predictions are made using several algorithms including the poisson distribution, comparison of team statistics, last matches, players etc…

Bookmakers odds are not used to make these predictions

Also provides some comparative statistics between teams

Available Predictions

Match winner : Id of the team that can potentially win the fixture
Win or Draw : If True indicates that the designated team can win or draw
Under / Over : -1.5 / -2.5 / -3.5 / -4.5 / +1.5 / +2.5 / +3.5 / +4.5 *
Goals Home : -1.5 / -2.5 / -3.5 / -4.5 *
Goals Away -1.5 / -2.5 / -3.5 / -4.5 *
Advice (Ex : Deportivo Santani or draws and -3.5 goals)
* -1.5 means that there will be a maximum of 1.5 goals in the fixture, i.e : 1 goal

Update Frequency : This endpoint is updated every hour.

Recommended Calls : 1 call per hour for the fixtures in progress otherwise 1 call per day.

Here is an example of what can be achieved

demo-prediction

query Parameters
fixture
required
integer
The id of the fixture

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
/predictions

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available predictions from one {fixture}
get("https://v3.football.api-sports.io/predictions?fixture=198772");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "predictions",
"parameters": {
"fixture": "198772"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"predictions": {
"winner": {
"id": 1189,
"name": "Deportivo Santani",
"comment": "Win or draw"
},
"win_or_draw": true,
"under_over": "-3.5",
"goals": {
"home": "-2.5",
"away": "-1.5"
},
"advice": "Combo Double chance : Deportivo Santani or draw and -3.5 goals",
"percent": {
"home": "45%",
"draw": "45%",
"away": "10%"
}
},
"league": {
"id": 252,
"name": "Primera Division - Clausura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/252.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2019
},
"teams": {
"home": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"last_5": {
"form": "60%",
"att": "60%",
"def": "0%",
"goals": {
"for": {
"total": 3,
"average": 0.6
},
"against": {
"total": 5,
"average": 1
}
}
},
"league": {
"form": "LDLDLDLWLWWLW",
"fixtures": {
"played": {
"home": 6,
"away": 7,
"total": 13
},
"wins": {
"home": 2,
"away": 2,
"total": 4
},
"draws": {
"home": 3,
"away": 0,
"total": 3
},
"loses": {
"home": 1,
"away": 5,
"total": 6
}
},
"goals": {
"for": {
"total": {
"home": 7,
"away": 4,
"total": 11
},
"average": {
"home": "1.2",
"away": "0.6",
"total": "0.8"
}
},
"against": {
"total": {
"home": 6,
"away": 14,
"total": 20
},
"average": {
"home": "1.0",
"away": "2.0",
"total": "1.5"
}
}
},
"biggest": {
"streak": {
"wins": 2,
"draws": 1,
"loses": 1
},
"wins": {
"home": "3-1",
"away": "0-1"
},
"loses": {
"home": "0-2",
"away": "4-0"
},
"goals": {
"for": {
"home": 3,
"away": 1
},
"against": {
"home": 2,
"away": 4
}
}
},
"clean_sheet": {
"home": 1,
"away": 2,
"total": 3
},
"failed_to_score": {
"home": 1,
"away": 3,
"total": 4
}
}
},
"away": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"last_5": {
"form": "40%",
"att": "80%",
"def": "0%",
"goals": {
"for": {
"total": 4,
"average": 0.8
},
"against": {
"total": 8,
"average": 1.6
}
}
},
"league": {
"form": "WLWLDLDLLLLWW",
"fixtures": {
"played": {
"home": 7,
"away": 6,
"total": 13
},
"wins": {
"home": 3,
"away": 1,
"total": 4
},
"draws": {
"home": 0,
"away": 2,
"total": 2
},
"loses": {
"home": 4,
"away": 3,
"total": 7
}
},
"goals": {
"for": {
"total": {
"home": 8,
"away": 3,
"total": 11
},
"average": {
"home": "1.1",
"away": "0.5",
"total": "0.8"
}
},
"against": {
"total": {
"home": 14,
"away": 10,
"total": 24
},
"average": {
"home": "2.0",
"away": "1.7",
"total": "1.8"
}
}
},
"biggest": {
"streak": {
"wins": 1,
"draws": 1,
"loses": 4
},
"wins": {
"home": "3-1",
"away": "0-1"
},
"loses": {
"home": "0-6",
"away": "3-0"
},
"goals": {
"for": {
"home": 3,
"away": 1
},
"against": {
"home": 6,
"away": 3
}
}
},
"clean_sheet": {
"home": 1,
"away": 1,
"total": 2
},
"failed_to_score": {
"home": 3,
"away": 3,
"total": 6
}
}
}
},
"comparison": {
"form": {
"home": "60%",
"away": "40%"
},
"att": {
"home": "43%",
"away": "57%"
},
"def": {
"home": "62%",
"away": "38%"
},
"poisson_distribution": {
"home": "75%",
"away": "25%"
},
"h2h": {
"home": "29%",
"away": "71%"
},
"goals": {
"home": "40%",
"away": "60%"
},
"total": {
"home": "51.5%",
"away": "48.5%"
}
},
"h2h": [
{
"fixture": {
"id": 198706,
"referee": "J. Méndez",
"timezone": "UTC",
"date": "2019-07-27T19:30:00+00:00",
"timestamp": 1564255800,
"periods": {
"first": 1564255800,
"second": 1564259400
},
"venue": {
"id": null,
"name": "Estadio Lic. Erico Galeano Segovia (Capiatá)",
"city": null
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 252,
"name": "Primera Division - Clausura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/252.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2019,
"round": "Clausura - 3"
},
"teams": {
"home": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"winner": true
},
"away": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"winner": false
}
},
"goals": {
"home": 3,
"away": 1
},
"score": {
"halftime": {
"home": 1,
"away": 1
},
"fulltime": {
"home": 3,
"away": 1
},
"extratime": {
"home": null,
"away": null
},
"penalty": {
"home": null,
"away": null
}
}
},
{
"fixture": {
"id": 144182,
"referee": null,
"timezone": "UTC",
"date": "2019-03-25T23:15:00+00:00",
"timestamp": 1553555700,
"periods": {
"first": 1553555700,
"second": 1553559300
},
"venue": {
"id": null,
"name": "Estadio Lic. Erico Galeano Segovia (Capiatá)",
"city": null
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 250,
"name": "Primera Division - Apertura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/250.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2019,
"round": "Regular Season - 12"
},
"teams": {
"home": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"winner": true
},
"away": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"winner": false
}
},
"goals": {
"home": 2,
"away": 1
},
"score": {
"halftime": {
"home": 2,
"away": 1
},
"fulltime": {
"home": 2,
"away": 1
},
"extratime": {
"home": null,
"away": null
},
"penalty": {
"home": null,
"away": null
}
}
},
{
"fixture": {
"id": 144113,
"referee": null,
"timezone": "UTC",
"date": "2019-01-23T21:00:00+00:00",
"timestamp": 1548277200,
"periods": {
"first": 1548277200,
"second": 1548280800
},
"venue": {
"id": null,
"name": "Estadio Juan José Vázquez (San Estanislao)",
"city": null
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 250,
"name": "Primera Division - Apertura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/250.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2019,
"round": "Regular Season - 1"
},
"teams": {
"home": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"winner": null
},
"away": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"winner": null
}
},
"goals": {
"home": 0,
"away": 0
},
"score": {
"halftime": {
"home": 0,
"away": 0
},
"fulltime": {
"home": 0,
"away": 0
},
"extratime": {
"home": null,
"away": null
},
"penalty": {
"home": null,
"away": null
}
}
},
{
"fixture": {
"id": 144745,
"referee": null,
"timezone": "UTC",
"date": "2018-11-12T20:45:00+00:00",
"timestamp": 1542055500,
"periods": {
"first": 1542055500,
"second": 1542059100
},
"venue": {
"id": null,
"name": "Estadio Lic. Erico Galeano Segovia (Capiatá)",
"city": null
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 252,
"name": "Primera Division - Clausura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/252.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2018,
"round": "Regular Season - 18"
},
"teams": {
"home": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"winner": false
},
"away": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"winner": true
}
},
"goals": {
"home": 0,
"away": 2
},
"score": {
"halftime": {
"home": 0,
"away": 1
},
"fulltime": {
"home": 0,
"away": 2
},
"extratime": {
"home": null,
"away": null
},
"penalty": {
"home": null,
"away": null
}
}
},
{
"fixture": {
"id": 144679,
"referee": null,
"timezone": "UTC",
"date": "2018-08-26T19:30:00+00:00",
"timestamp": 1535311800,
"periods": {
"first": 1535311800,
"second": 1535315400
},
"venue": {
"id": null,
"name": "Estadio Juan José Vázquez (San Estanislao)",
"city": null
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 252,
"name": "Primera Division - Clausura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/252.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2018,
"round": "Regular Season - 7"
},
"teams": {
"home": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"winner": false
},
"away": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"winner": true
}
},
"goals": {
"home": 0,
"away": 1
},
"score": {
"halftime": {
"home": 0,
"away": 1
},
"fulltime": {
"home": 0,
"away": 1
},
"extratime": {
"home": null,
"away": null
},
"penalty": {
"home": null,
"away": null
}
}
},
{
"fixture": {
"id": 144330,
"referee": null,
"timezone": "UTC",
"date": "2018-05-05T21:30:00+00:00",
"timestamp": 1525555800,
"periods": {
"first": 1525555800,
"second": 1525559400
},
"venue": {
"id": null,
"name": "Estadio Juan José Vázquez (San Estanislao)",
"city": null
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 250,
"name": "Primera Division - Apertura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/250.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2018,
"round": "Regular Season - 15"
},
"teams": {
"home": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"winner": null
},
"away": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"winner": null
}
},
"goals": {
"home": 3,
"away": 3
},
"score": {
"halftime": {
"home": 2,
"away": 1
},
"fulltime": {
"home": 3,
"away": 3
},
"extratime": {
"home": null,
"away": null
},
"penalty": {
"home": null,
"away": null
}
}
},
{
"fixture": {
"id": 144264,
"referee": null,
"timezone": "UTC",
"date": "2018-02-25T20:45:00+00:00",
"timestamp": 1519591500,
"periods": {
"first": 1519591500,
"second": 1519595100
},
"venue": {
"id": null,
"name": "Estadio Lic. Erico Galeano Segovia (Capiatá)",
"city": null
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 250,
"name": "Primera Division - Apertura",
"country": "Paraguay",
"logo": "https://media.api-sports.io/football/leagues/250.png",
"flag": "https://media.api-sports.io/flags/py.svg",
"season": 2018,
"round": "Regular Season - 4"
},
"teams": {
"home": {
"id": 1180,
"name": "Deportivo Capiata",
"logo": "https://media.api-sports.io/football/teams/1180.png",
"winner": true
},
"away": {
"id": 1189,
"name": "Deportivo Santani",
"logo": "https://media.api-sports.io/football/teams/1189.png",
"winner": false
}
},
"goals": {
"home": 2,
"away": 1
},
"score": {
"halftime": {
"home": 1,
"away": 1
},
"fulltime": {
"home": 2,
"away": 1
},
"extratime": {
"home": null,
"away": null
},
"penalty": {
"home": null,
"away": null
}
}
}
]
}
]
}
