Teams seasons
Get the list of seasons available for a team.

Examples available in Request samples "Use Cases".

This endpoint requires at least one parameter.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

query Parameters
team
required
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
/teams/seasons

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all seasons available for a team from one team {id}
get("https://v3.football.api-sports.io/teams/seasons?team=33");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "teams/seasons",
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
2021
]
}
Teams countries
Get the list of countries available for the teams endpoint.

Update Frequency : This endpoint is updated several times a week.

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
/teams/countries

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all countries available for the teams endpoints
get("https://v3.football.api-sports.io/teams/countries");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "teams/countries",
"parameters": [ ],
"errors": [ ],
"results": 258,
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
Venues
Venues
Get the list of available venues.

The venue id are unique in the API.

To get the image of a venue you have to call the following url: https://media.api-sports.io/football/venues/{venue_id}.png

Examples available in Request samples "Use Cases".

All the parameters of this endpoint can be used together.

This endpoint requires at least one parameter.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

query Parameters
id	
integer
The id of the venue

name	
string
The name of the venue

city	
string
The city of the venue

country	
string
The country name of the venue

search	
string >= 3 characters
The name, city or the country of the venue

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
/venues

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get one venue from venue {id}
get("https://v3.football.api-sports.io/venues?id=556");

// Get one venue from venue {name}
get("https://v3.football.api-sports.io/venues?name=Old Trafford");

// Get all venues from {city}
get("https://v3.football.api-sports.io/venues?city=manchester");

// Get venues from {country}
get("https://v3.football.api-sports.io/venues?country=england");

// Allows you to search for a venues in relation to a venue {name}, {city} or {country}
get("https://v3.football.api-sports.io/venues?search=trafford");
get("https://v3.football.api-sports.io/venues?search=manches");
get("https://v3.football.api-sports.io/venues?search=England");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "venues",
"parameters": {
"id": "556"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"id": 556,
"name": "Old Trafford",
"address": "Sir Matt Busby Way",
"city": "Manchester",
"country": "England",
"capacity": 76212,
"surface": "grass",
"image": "https://media.api-sports.io/football/venues/556.png"
}
]
}
Standings
Standings
Get the standings for a league or a team.

Return a table of one or more rankings according to the league / cup.

Some competitions have several rankings in a year, group phase, opening ranking, closing ranking etc…

Examples available in Request samples "Use Cases".

Most of the parameters of this endpoint can be used together.

Update Frequency : This endpoint is updated every hour.

Recommended Calls : 1 call per hour for the leagues or teams who have at least one fixture in progress otherwise 1 call per day.

Tutorials :

HOW TO GET STANDINGS FOR ALL CURRENT SEASONS
query Parameters
league	
integer
The id of the league

season
required
integer = 4 characters YYYY
The season of the league

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
/standings

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all Standings from one {league} & {season}
get("https://v3.football.api-sports.io/standings?league=39&season=2019");

// Get all Standings from one {league} & {season} & {team}
get("https://v3.football.api-sports.io/standings?league=39&team=33&season=2019");

// Get all Standings from one {team} & {season}
get("https://v3.football.api-sports.io/standings?team=33&season=2019");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "standings",
"parameters": {
"league": "39",
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
"league": {
"id": 39,
"name": "Premier League",
"country": "England",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": "https://media.api-sports.io/flags/gb.svg",
"season": 2019,
"standings": [
[
{
"rank": 1,
"team": {
"id": 40,
"name": "Liverpool",
"logo": "https://media.api-sports.io/football/teams/40.png"
},
"points": 70,
"goalsDiff": 41,
"group": "Premier League",
"form": "WWWWW",
"status": "same",
"description": "Promotion - Champions League (Group Stage)",
"all": {
"played": 24,
"win": 23,
"draw": 1,
"lose": 0,
"goals": {
"for": 56,
"against": 15
}
},
"home": {
"played": 12,
"win": 12,
"draw": 0,
"lose": 0,
"goals": {
"for": 31,
"against": 9
}
},
"away": {
"played": 12,
"win": 11,
"draw": 1,
"lose": 0,
"goals": {
"for": 25,
"against": 6
}
},
"update": "2020-01-29T00:00:00+00:00"
}
]
]
}
}
]
}
Fixtures
Rounds
Get the rounds for a league or a cup.

The round can be used in endpoint fixtures as filters

Examples available in Request samples "Use Cases".

Update Frequency : This endpoint is updated every day.

Recommended Calls : 1 call per day.

query Parameters
league
required
integer
The id of the league

season
required
integer = 4 characters YYYY
The season of the league

current	
boolean
Enum: "true" "false"
The current round only

dates	
boolean
Default: false
Enum: "true" "false"
Add the dates of each round in the response

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
/fixtures/rounds

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available rounds from one {league} & {season}
get("https://v3.football.api-sports.io/fixtures/rounds?league=39&season=2019");

// Get all available rounds from one {league} & {season} With the dates of each round
get("https://v3.football.api-sports.io/fixtures/rounds?league=39&season=2019&dates=true");

// Get current round from one {league} & {season}
get("https://v3.football.api-sports.io/fixtures/rounds?league=39&season=2019&current=true");
Response samples
200204499500
Content type
application/json
Example

Default
Default

Copy
Expand allCollapse all
{
"get": "fixtures/rounds",
"parameters": {
"league": "39",
"season": "2019"
},
"errors": [ ],
"results": 38,
"paging": {
"current": 1,
"total": 1
},
"response": [
"Regular Season - 1",
"Regular Season - 2",
"Regular Season - 3",
"Regular Season - 4",
"Regular Season - 5",
"Regular Season - 6",
"Regular Season - 7",
"Regular Season - 8",
"Regular Season - 9",
"Regular Season - 10",
"Regular Season - 11",
"Regular Season - 12",
"Regular Season - 13",
"Regular Season - 14",
"Regular Season - 15",
"Regular Season - 16",
"Regular Season - 17",
"Regular Season - 18",
"Regular Season - 18",
"Regular Season - 19",
"Regular Season - 20",
"Regular Season - 21",
"Regular Season - 22",
"Regular Season - 23",
"Regular Season - 24",
"Regular Season - 25",
"Regular Season - 26",
"Regular Season - 27",
"Regular Season - 28",
"Regular Season - 29",
"Regular Season - 30",
"Regular Season - 31",
"Regular Season - 32",
"Regular Season - 33",
"Regular Season - 34",
"Regular Season - 35",
"Regular Season - 36",
"Regular Season - 37",
"Regular Season - 38"
]
}
Fixtures
For all requests to fixtures you can add the query parameter timezone to your request in order to retrieve the list of matches in the time zone of your choice like “Europe/London“

To know the list of available time zones you have to use the endpoint timezone.

Available fixtures status

SHORT	LONG	TYPE	DESCRIPTION
TBD	Time To Be Defined	Scheduled	Scheduled but date and time are not known
NS	Not Started	Scheduled	
1H	First Half, Kick Off	In Play	First half in play
HT	Halftime	In Play	Finished in the regular time
2H	Second Half, 2nd Half Started	In Play	Second half in play
ET	Extra Time	In Play	Extra time in play
BT	Break Time	In Play	Break during extra time
P	Penalty In Progress	In Play	Penaly played after extra time
SUSP	Match Suspended	In Play	Suspended by referee's decision, may be rescheduled another day
INT	Match Interrupted	In Play	Interrupted by referee's decision, should resume in a few minutes
FT	Match Finished	Finished	Finished in the regular time
AET	Match Finished	Finished	Finished after extra time without going to the penalty shootout
PEN	Match Finished	Finished	Finished after the penalty shootout
PST	Match Postponed	Postponed	Postponed to another day, once the new date and time is known the status will change to Not Started
CANC	Match Cancelled	Cancelled	Cancelled, match will not be played
ABD	Match Abandoned	Abandoned	Abandoned for various reasons (Bad Weather, Safety, Floodlights, Playing Staff Or Referees), Can be rescheduled or not, it depends on the competition
AWD	Technical Loss	Not Played	
WO	WalkOver	Not Played	Victory by forfeit or absence of competitor
LIVE	In Progress	In Play	Used in very rare cases. It indicates a fixture in progress but the data indicating the half-time or elapsed time are not available
Fixtures with the status TBD may indicate an incorrect fixture date or time because the fixture date or time is not yet known or final. Fixtures with this status are checked and updated daily. The same applies to fixtures with the status PST, CANC.

The fixtures ids are unique and specific to each fixture. In no case an ID will change.

Not all competitions have livescore available and only have final result. In this case, the status remains in NS and will be updated in the minutes/hours following the match (this can take up to 48 hours, depending on the competition).

Although the data is updated every 15 seconds, depending on the competition there may be a delay between reality and the availability of data in the API.

Update Frequency : This endpoint is updated every 15 seconds.

Recommended Calls : 1 call per minute for the leagues, teams, fixtures who have at least one fixture in progress otherwise 1 call per day.

Here are several examples of what can be achieved

demo-fixtures

query Parameters
id	
integer
Value: "id"
The id of the fixture

ids	
stringMaximum of 20 fixtures ids
Value: "id-id-id"
One or more fixture ids

live	
string
Enum: "all" "id-id"
All or several leagues ids

date	
stringYYYY-MM-DD
A valid date

league	
integer
The id of the league

season	
integer = 4 characters YYYY
The season of the league

team	
integer
The id of the team

last	
integer <= 2 characters
For the X last fixtures

next	
integer <= 2 characters
For the X next fixtures

from	
stringYYYY-MM-DD
A valid date

to	
stringYYYY-MM-DD
A valid date

round	
string
The round of the fixture

status	
string
Enum: "NS" "NS-PST-FT"
One or more fixture status short

venue	
integer
The venue id of the fixture

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
/fixtures

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get fixture from one fixture {id}
// In this request events, lineups, statistics fixture and players fixture are returned in the response
get("https://v3.football.api-sports.io/fixtures?id=215662");

// Get fixture from severals fixtures {ids}
// In this request events, lineups, statistics fixture and players fixture are returned in the response
get("https://v3.football.api-sports.io/fixtures?ids=215662-215663-215664-215665-215666-215667");

// Get all available fixtures in play
// In this request events are returned in the response
get("https://v3.football.api-sports.io/fixtures?live=all");

// Get all available fixtures in play filter by several {league}
// In this request events are returned in the response
get("https://v3.football.api-sports.io/fixtures?live=39-61-48");

// Get all available fixtures from one {league} & {season}
get("https://v3.football.api-sports.io/fixtures?league=39&season=2019");

// Get all available fixtures from one {date}
get("https://v3.football.api-sports.io/fixtures?date=2019-10-22");

// Get next X available fixtures
get("https://v3.football.api-sports.io/fixtures?next=15");

// Get last X available fixtures
get("https://v3.football.api-sports.io/fixtures?last=15");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/fixtures?date=2020-01-30&league=61&season=2019");
get("https://v3.football.api-sports.io/fixtures?league=61&next=10");
get("https://v3.football.api-sports.io/fixtures?venue=358&next=10");
get("https://v3.football.api-sports.io/fixtures?league=61&last=10&status=ft");
get("https://v3.football.api-sports.io/fixtures?team=85&last=10&timezone=Europe/london");
get("https://v3.football.api-sports.io/fixtures?team=85&season=2019&from=2019-07-01&to=2020-10-31");
get("https://v3.football.api-sports.io/fixtures?league=61&season=2019&from=2019-07-01&to=2020-10-31&timezone=Europe/london");
get("https://v3.football.api-sports.io/fixtures?league=61&season=2019&round=Regular Season - 1");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "fixtures",
"parameters": {
"live": "all"
},
"errors": [ ],
"results": 4,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"fixture": {
"id": 239625,
"referee": null,
"timezone": "UTC",
"date": "2020-02-06T14:00:00+00:00",
"timestamp": 1580997600,
"periods": {
"first": 1580997600,
"second": null
},
"venue": {
"id": 1887,
"name": "Stade Municipal",
"city": "Oued Zem"
},
"status": {
"long": "Halftime",
"short": "HT",
"elapsed": 45,
"extra": null
}
},
"league": {
"id": 200,
"name": "Botola Pro",
"country": "Morocco",
"logo": "https://media.api-sports.io/football/leagues/115.png",
"flag": "https://media.api-sports.io/flags/ma.svg",
"season": 2019,
"round": "Regular Season - 14"
},
"teams": {
"home": {
"id": 967,
"name": "Rapide Oued ZEM",
"logo": "https://media.api-sports.io/football/teams/967.png",
"winner": false
},
"away": {
"id": 968,
"name": "Wydad AC",
"logo": "https://media.api-sports.io/football/teams/968.png",
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
"home": null,
"away": null
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
Head To Head
Get heads to heads between two teams.

Update Frequency : This endpoint is updated every 15 seconds.

Recommended Calls : 1 call per minute for the leagues, teams, fixtures who have at least one fixture in progress otherwise 1 call per day.

Here is an example of what can be achieved

demo-h2h

query Parameters
h2h
required
stringID-ID
The ids of the teams

date	
stringYYYY-MM-DD
league	
integer
The id of the league

season	
integer = 4 characters YYYY
The season of the league

last	
integer
For the X last fixtures

next	
integer
For the X next fixtures

from	
stringYYYY-MM-DD
to	
stringYYYY-MM-DD
status	
string
Enum: "NS" "NS-PST-FT"
One or more fixture status short

venue	
integer
The venue id of the fixture

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
/fixtures/headtohead

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all head to head between two {team}
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34");
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34&status=ns");
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34&from=2019-10-01&to=2019-10-31");
get("https://v3.football.api-sports.io/fixtures/headtohead?date=2019-10-22&h2h=33-34");
get("https://v3.football.api-sports.io/fixtures/headtohead?league=39&season=2019&h2h=33-34&last=5");
get("https://v3.football.api-sports.io/fixtures/headtohead?league=39&season=2019&h2h=33-34&next=10&from=2019-10-01&to=2019-10-31");
get("https://v3.football.api-sports.io/fixtures/headtohead?league=39&season=2019&h2h=33-34&last=5&timezone=Europe/London");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "fixtures/headtohead",
"parameters": {
"h2h": "33-34",
"last": "1"
},
"errors": [ ],
"results": 1,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"fixture": {
"id": 157201,
"referee": "Kevin Friend, England",
"timezone": "UTC",
"date": "2019-12-26T17:30:00+00:00",
"timestamp": 1577381400,
"periods": {
"first": 1577381400,
"second": 1577385000
},
"venue": {
"id": 556,
"name": "Old Trafford",
"city": "Manchester"
},
"status": {
"long": "Match Finished",
"short": "FT",
"elapsed": 90,
"extra": null
}
},
"league": {
"id": 39,
"name": "Premier League",
"country": "England",
"logo": "https://media.api-sports.io/football/leagues/2.png",
"flag": "https://media.api-sports.io/flags/gb.svg",
"season": 2019,
"round": "Regular Season - 19"
},
"teams": {
"home": {
"id": 33,
"name": "Manchester United",
"logo": "https://media.api-sports.io/football/teams/33.png",
"winner": true
},
"away": {
"id": 34,
"name": "Newcastle",
"logo": "https://media.api-sports.io/football/teams/34.png",
"winner": false
}
},
"goals": {
"home": 4,
"away": 1
},
"score": {
"halftime": {
"home": 3,
"away": 1
},
"fulltime": {
"home": 4,
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
Statistics
Get the statistics for one fixture.

Available statistics

Shots on Goal
Shots off Goal
Shots insidebox
Shots outsidebox
Total Shots
Blocked Shots
Fouls
Corner Kicks
Offsides
Ball Possession
Yellow Cards
Red Cards
Goalkeeper Saves
Total passes
Passes accurate
Passes %
Update Frequency : This endpoint is updated every minute.

Recommended Calls : 1 call every minute for the teams or fixtures who have at least one fixture in progress otherwise 1 call per day.

Here is an example of what can be achieved

demo-statistics

query Parameters
fixture
required
integer
The id of the fixture

team	
integer
The id of the team

type	
string
The type of statistics

half	
boolean
Default: false
Enum: "true" "false"
Add the halftime statistics in the response Data start from 2024 season for half parameter

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
/fixtures/statistics

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available statistics from one {fixture}
get("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662");

// Get all available statistics from one {fixture} with Fulltime, First & Second Half data
get("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662&half=true");

// Get all available statistics from one {fixture} & {type}
get("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662&type=Total Shots");

// Get all available statistics from one {fixture} & {team}
get("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662&team=463");
Response samples
200204499500
Content type
application/json
Example

Default
Default

Copy
Expand allCollapse all
{
"get": "fixtures/statistics",
"parameters": {
"team": "463",
"fixture": "215662"
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
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"statistics": [
{
"type": "Shots on Goal",
"value": 3
},
{
"type": "Shots off Goal",
"value": 2
},
{
"type": "Total Shots",
"value": 9
},
{
"type": "Blocked Shots",
"value": 4
},
{
"type": "Shots insidebox",
"value": 4
},
{
"type": "Shots outsidebox",
"value": 5
},
{
"type": "Fouls",
"value": 22
},
{
"type": "Corner Kicks",
"value": 3
},
{
"type": "Offsides",
"value": 1
},
{
"type": "Ball Possession",
"value": "32%"
},
{
"type": "Yellow Cards",
"value": 5
},
{
"type": "Red Cards",
"value": 1
},
{
"type": "Goalkeeper Saves",
"value": null
},
{
"type": "Total passes",
"value": 242
},
{
"type": "Passes accurate",
"value": 121
},
{
"type": "Passes %",
"value": null
}
]
}
]
}
