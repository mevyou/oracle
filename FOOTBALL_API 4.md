Events
Get the events from a fixture.

Available events

TYPE				
Goal	Normal Goal	Own Goal	Penalty	Missed Penalty
Card	Yellow Card	Red card		
Subst	Substitution [1, 2, 3...]			
Var	Goal cancelled	Penalty confirmed		
VAR events are available from the 2020-2021 season.
Update Frequency : This endpoint is updated every 15 seconds.

Recommended Calls : 1 call per minute for the fixtures in progress otherwise 1 call per day.

You can also retrieve all the events of the fixtures in progress with to the endpoint fixtures?live=all

Here is an example of what can be achieved

demo-events

query Parameters
fixture
required
integer
The id of the fixture

team	
integer
The id of the team

player	
integer
The id of the player

type	
string
The type

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
/fixtures/events

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available events from one {fixture}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662");

// Get all available events from one {fixture} & {team}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&team=463");

// Get all available events from one {fixture} & {player}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&player=35845");

// Get all available events from one {fixture} & {type}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&type=card");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&player=35845&type=card");
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&team=463&type=goal&player=35845");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "fixtures/events",
"parameters": {
"fixture": "215662"
},
"errors": [ ],
"results": 18,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"time": {
"elapsed": 25,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 6126,
"name": "F. Andrada"
},
"assist": {
"id": null,
"name": null
},
"type": "Goal",
"detail": "Normal Goal",
"comments": null
},
{
"time": {
"elapsed": 33,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 5936,
"name": "Julio González"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 33,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 6126,
"name": "Federico Andrada"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 36,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 5931,
"name": "Diego Rodríguez"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 39,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 5954,
"name": "Fernando Márquez"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 44,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 6262,
"name": "Emanuel Iñiguez"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 46,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 35695,
"name": "D. Rodríguez"
},
"assist": {
"id": 5947,
"name": "B. Merlini"
},
"type": "subst",
"detail": "Substitution 1",
"comments": null
},
{
"time": {
"elapsed": 62,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 6093,
"name": "Gonzalo Verón"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 73,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 5942,
"name": "A. Castro"
},
"assist": {
"id": 6059,
"name": "G. Mainero"
},
"type": "subst",
"detail": "Substitution 2",
"comments": null
},
{
"time": {
"elapsed": 74,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 6561,
"name": "N. Solís"
},
"assist": {
"id": 35845,
"name": "H. Burbano"
},
"type": "subst",
"detail": "Substitution 1",
"comments": null
},
{
"time": {
"elapsed": 75,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 6093,
"name": "G. Verón"
},
"assist": {
"id": 6396,
"name": "N. Bazzana"
},
"type": "subst",
"detail": "Substitution 2",
"comments": null
},
{
"time": {
"elapsed": 79,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 6474,
"name": "G. Gil"
},
"assist": {
"id": 6550,
"name": "F. Grahl"
},
"type": "subst",
"detail": "Substitution 3",
"comments": null
},
{
"time": {
"elapsed": 79,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 5936,
"name": "J. González"
},
"assist": {
"id": 70767,
"name": "B. Ojeda"
},
"type": "subst",
"detail": "Substitution 3",
"comments": null
},
{
"time": {
"elapsed": 84,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 6540,
"name": "Juan Rodriguez"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 85,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 35845,
"name": "Hernán Burbano"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 90,
"extra": null
},
"team": {
"id": 442,
"name": "Defensa Y Justicia",
"logo": "https://media.api-sports.io/football/teams/442.png"
},
"player": {
"id": 5912,
"name": "Neri Cardozo"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
},
{
"time": {
"elapsed": 90,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 35845,
"name": "Hernán Burbano"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Red Card",
"comments": null
},
{
"time": {
"elapsed": 90,
"extra": null
},
"team": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
},
"player": {
"id": 35845,
"name": "Hernán Burbano"
},
"assist": {
"id": null,
"name": null
},
"type": "Card",
"detail": "Yellow Card",
"comments": null
}
]
}
Lineups
Get the lineups for a fixture.

Lineups are available between 20 and 40 minutes before the fixture when the competition covers this feature. You can check this with the endpoint leagues and the coverage field.

It's possible that for some competitions the lineups are not available before the fixture, in this case, they are updated and available after the match with a variable delay depending on the competition.

Available datas

Formation
Coach
Start XI
Substitutes
Players' positions on the grid *

X = row and Y = column (X:Y)

Line 1 X being the one of the goal and then for each line this number is incremented. The column Y will go from left to right, and incremented for each player of the line.

* As a new feature, some irregularities may occur, do not hesitate to report them on our public Roadmap

Update Frequency : This endpoint is updated every 15 minutes.

Recommended Calls : 1 call every 15 minutes for the fixtures in progress otherwise 1 call per day.

Here are several examples of what can be done

demo-lineups

demo-lineups

query Parameters
fixture
required
integer
The id of the fixture

team	
integer
The id of the team

player	
integer
The id of the player

type	
string
The type

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
/fixtures/lineups

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available lineups from one {fixture}
get("https://v3.football.api-sports.io/fixtures/lineups?fixture=592872");

// Get all available lineups from one {fixture} & {team}
get("https://v3.football.api-sports.io/fixtures/lineups?fixture=592872&team=50");

// Get all available lineups from one {fixture} & {player}
get("https://v3.football.api-sports.io/fixtures/lineups?fixture=215662&player=35845");

// Get all available lineups from one {fixture} & {type}
get("https://v3.football.api-sports.io/fixtures/lineups?fixture=215662&type=startXI");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/fixtures/lineups?fixture=215662&player=35845&type=startXI");
get("https://v3.football.api-sports.io/fixtures/lineups?fixture=215662&team=463&type=startXI&player=35845");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "fixtures/lineups",
"parameters": {
"fixture": "592872"
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
"id": 50,
"name": "Manchester City",
"logo": "https://media.api-sports.io/football/teams/50.png",
"colors": {
"player": {
"primary": "5badff",
"number": "ffffff",
"border": "99ff99"
},
"goalkeeper": {
"primary": "99ff99",
"number": "000000",
"border": "99ff99"
}
}
},
"formation": "4-3-3",
"startXI": [
{
"player": {
"id": 617,
"name": "Ederson",
"number": 31,
"pos": "G",
"grid": "1:1"
}
},
{
"player": {
"id": 627,
"name": "Kyle Walker",
"number": 2,
"pos": "D",
"grid": "2:4"
}
},
{
"player": {
"id": 626,
"name": "John Stones",
"number": 5,
"pos": "D",
"grid": "2:3"
}
},
{
"player": {
"id": 567,
"name": "Rúben Dias",
"number": 3,
"pos": "D",
"grid": "2:2"
}
},
{
"player": {
"id": 641,
"name": "Oleksandr Zinchenko",
"number": 11,
"pos": "D",
"grid": "2:1"
}
},
{
"player": {
"id": 629,
"name": "Kevin De Bruyne",
"number": 17,
"pos": "M",
"grid": "3:3"
}
},
{
"player": {
"id": 640,
"name": "Fernandinho",
"number": 25,
"pos": "M",
"grid": "3:2"
}
},
{
"player": {
"id": 631,
"name": "Phil Foden",
"number": 47,
"pos": "M",
"grid": "3:1"
}
},
{
"player": {
"id": 635,
"name": "Riyad Mahrez",
"number": 26,
"pos": "F",
"grid": "4:3"
}
},
{
"player": {
"id": 643,
"name": "Gabriel Jesus",
"number": 9,
"pos": "F",
"grid": "4:2"
}
},
{
"player": {
"id": 645,
"name": "Raheem Sterling",
"number": 7,
"pos": "F",
"grid": "4:1"
}
}
],
"substitutes": [
{
"player": {
"id": 50828,
"name": "Zack Steffen",
"number": 13,
"pos": "G",
"grid": null
}
},
{
"player": {
"id": 623,
"name": "Benjamin Mendy",
"number": 22,
"pos": "D",
"grid": null
}
},
{
"player": {
"id": 18861,
"name": "Nathan Aké",
"number": 6,
"pos": "D",
"grid": null
}
},
{
"player": {
"id": 622,
"name": "Aymeric Laporte",
"number": 14,
"pos": "D",
"grid": null
}
},
{
"player": {
"id": 633,
"name": "İlkay Gündoğan",
"number": 8,
"pos": "M",
"grid": null
}
},
{
"player": {
"id": 44,
"name": "Rodri",
"number": 16,
"pos": "M",
"grid": null
}
},
{
"player": {
"id": 931,
"name": "Ferrán Torres",
"number": 21,
"pos": "F",
"grid": null
}
},
{
"player": {
"id": 636,
"name": "Bernardo Silva",
"number": 20,
"pos": "M",
"grid": null
}
},
{
"player": {
"id": 642,
"name": "Sergio Agüero",
"number": 10,
"pos": "F",
"grid": null
}
}
],
"coach": {
"id": 4,
"name": "Guardiola",
"photo": "https://media.api-sports.io/football/coachs/4.png"
}
},
{
"team": {
"id": 45,
"name": "Everton",
"logo": "https://media.api-sports.io/football/teams/45.png",
"colors": {
"player": {
"primary": "070707",
"number": "ffffff",
"border": "66ff00"
},
"goalkeeper": {
"primary": "66ff00",
"number": "000000",
"border": "66ff00"
}
}
},
"formation": "4-3-1-2",
"startXI": [
{
"player": {
"id": 2932,
"name": "Jordan Pickford",
"number": 1,
"pos": "G",
"grid": "1:1"
}
},
{
"player": {
"id": 19150,
"name": "Mason Holgate",
"number": 4,
"pos": "D",
"grid": "2:4"
}
},
{
"player": {
"id": 2934,
"name": "Michael Keane",
"number": 5,
"pos": "D",
"grid": "2:3"
}
},
{
"player": {
"id": 19073,
"name": "Ben Godfrey",
"number": 22,
"pos": "D",
"grid": "2:2"
}
},
{
"player": {
"id": 2724,
"name": "Lucas Digne",
"number": 12,
"pos": "D",
"grid": "2:1"
}
},
{
"player": {
"id": 18805,
"name": "Abdoulaye Doucouré",
"number": 16,
"pos": "M",
"grid": "3:3"
}
},
{
"player": {
"id": 326,
"name": "Allan",
"number": 6,
"pos": "M",
"grid": "3:2"
}
},
{
"player": {
"id": 18762,
"name": "Tom Davies",
"number": 26,
"pos": "M",
"grid": "3:1"
}
},
{
"player": {
"id": 2795,
"name": "Gylfi Sigurðsson",
"number": 10,
"pos": "M",
"grid": "4:1"
}
},
{
"player": {
"id": 18766,
"name": "Dominic Calvert-Lewin",
"number": 9,
"pos": "F",
"grid": "5:2"
}
},
{
"player": {
"id": 2413,
"name": "Richarlison",
"number": 7,
"pos": "F",
"grid": "5:1"
}
}
],
"substitutes": [
{
"player": {
"id": 18755,
"name": "João Virgínia",
"number": 31,
"pos": "G",
"grid": null
}
},
{
"player": {
"id": 766,
"name": "Robin Olsen",
"number": 33,
"pos": "G",
"grid": null
}
},
{
"player": {
"id": 156490,
"name": "Niels Nkounkou",
"number": 18,
"pos": "D",
"grid": null
}
},
{
"player": {
"id": 18758,
"name": "Séamus Coleman",
"number": 23,
"pos": "D",
"grid": null
}
},
{
"player": {
"id": 138849,
"name": "Kyle John",
"number": 48,
"pos": "D",
"grid": null
}
},
{
"player": {
"id": 18765,
"name": "André Gomes",
"number": 21,
"pos": "M",
"grid": null
}
},
{
"player": {
"id": 1455,
"name": "Alex Iwobi",
"number": 17,
"pos": "F",
"grid": null
}
},
{
"player": {
"id": 18761,
"name": "Bernard",
"number": 20,
"pos": "F",
"grid": null
}
}
],
"coach": {
"id": 2407,
"name": "C. Ancelotti",
"photo": "https://media.api-sports.io/football/coachs/2407.png"
}
}
]
}