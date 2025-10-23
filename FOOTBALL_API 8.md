
Top Yellow Cards
Get the 20 players with the most yellow cards for a league or cup.

How it is calculated:

1 : The player that received the higher number of yellow cards
2 : The player that received the higher number of red cards
3 : The player that assists in the higher number of matches
4 : The player that played the fewer minutes
Update Frequency : This endpoint is updated several times a week.

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
/players/topyellowcards

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
fetch("https://v3.football.api-sports.io/players/topyellowcards?season=2020&league=61", {
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
"get": "players/topyellowcards",
"parameters": {
"season": "2020",
"league": "61"
},
"errors": [ ],
"results": 20,
"paging": {
"current": 0,
"total": 1
},
"response": [
{
"player": {
"id": 8694,
"name": "W. Faes",
"firstname": "Wout",
"lastname": "Faes",
"age": 23,
"birth": {
"date": "1998-04-03",
"place": null,
"country": "Belgium"
},
"nationality": "Belgium",
"height": "187 cm",
"weight": "84 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/8694.png"
},
"statistics": [
{
"team": {
"id": 93,
"name": "Reims",
"logo": "https://media.api-sports.io/football/teams/93.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 26,
"lineups": 26,
"minutes": 2292,
"number": null,
"position": "Defender",
"rating": "6.907692",
"captain": false
},
"substitutes": {
"in": 0,
"out": 0,
"bench": 0
},
"shots": {
"total": 5,
"on": 1
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1228,
"key": 0,
"accuracy": 43
},
"tackles": {
"total": 25,
"blocks": 24,
"interceptions": 55
},
"duels": {
"total": 164,
"won": 95
},
"dribbles": {
"attempts": 12,
"success": 10,
"past": null
},
"fouls": {
"drawn": 12,
"committed": 16
},
"cards": {
"yellow": 10,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 1689,
"name": "Álvaro González",
"firstname": "Álvaro",
"lastname": "González Soberón",
"age": 31,
"birth": {
"date": "1990-01-08",
"place": "Potes",
"country": "Spain"
},
"nationality": "Spain",
"height": "182 cm",
"weight": "75 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/1689.png"
},
"statistics": [
{
"team": {
"id": 81,
"name": "Marseille",
"logo": "https://media.api-sports.io/football/teams/81.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 25,
"lineups": 25,
"minutes": 2204,
"number": null,
"position": "Defender",
"rating": "6.912000",
"captain": false
},
"substitutes": {
"in": 0,
"out": 3,
"bench": 0
},
"shots": {
"total": 9,
"on": 2
},
"goals": {
"total": 1,
"conceded": 0,
"assists": 3,
"saves": null
},
"passes": {
"total": 1367,
"key": 4,
"accuracy": 47
},
"tackles": {
"total": 25,
"blocks": 12,
"interceptions": 26
},
"duels": {
"total": 160,
"won": 91
},
"dribbles": {
"attempts": 3,
"success": 3,
"past": null
},
"fouls": {
"drawn": 23,
"committed": 26
},
"cards": {
"yellow": 10,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 6231,
"name": "F. Medina",
"firstname": "Facundo Axel",
"lastname": "Medina",
"age": 22,
"birth": {
"date": "1999-05-28",
"place": "Buenos Aires",
"country": "Argentina"
},
"nationality": "Argentina",
"height": "180 cm",
"weight": "78 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/6231.png"
},
"statistics": [
{
"team": {
"id": 116,
"name": "Lens",
"logo": "https://media.api-sports.io/football/teams/116.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 21,
"lineups": 20,
"minutes": 1769,
"number": null,
"position": "Defender",
"rating": "6.761904",
"captain": false
},
"substitutes": {
"in": 1,
"out": 1,
"bench": 5
},
"shots": {
"total": 7,
"on": 4
},
"goals": {
"total": 2,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1396,
"key": 8,
"accuracy": 58
},
"tackles": {
"total": 34,
"blocks": 7,
"interceptions": 34
},
"duels": {
"total": 154,
"won": 71
},
"dribbles": {
"attempts": 10,
"success": 6,
"past": null
},
"fouls": {
"drawn": 7,
"committed": 28
},
"cards": {
"yellow": 9,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21635,
"name": "J. Gradit",
"firstname": "Jonathan",
"lastname": "Gradit",
"age": 29,
"birth": {
"date": "1992-11-24",
"place": "Talence",
"country": "France"
},
"nationality": "France",
"height": "180 cm",
"weight": "75 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21635.png"
},
"statistics": [
{
"team": {
"id": 116,
"name": "Lens",
"logo": "https://media.api-sports.io/football/teams/116.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 26,
"lineups": 26,
"minutes": 2198,
"number": null,
"position": "Defender",
"rating": "6.904000",
"captain": false
},
"substitutes": {
"in": 0,
"out": 5,
"bench": 1
},
"shots": {
"total": 1,
"on": 0
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 1303,
"key": 4,
"accuracy": 47
},
"tackles": {
"total": 50,
"blocks": 12,
"interceptions": 41
},
"duels": {
"total": 271,
"won": 162
},
"dribbles": {
"attempts": 35,
"success": 24,
"past": null
},
"fouls": {
"drawn": 46,
"committed": 41
},
"cards": {
"yellow": 8,
"yellowred": 1,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 20696,
"name": "P. Gueye",
"firstname": "Pape Alassane",
"lastname": "Gueye",
"age": 22,
"birth": {
"date": "1999-01-24",
"place": "Montreuil",
"country": "France"
},
"nationality": "France",
"height": "187 cm",
"weight": "65 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/20696.png"
},
"statistics": [
{
"team": {
"id": 81,
"name": "Marseille",
"logo": "https://media.api-sports.io/football/teams/81.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 25,
"lineups": 16,
"minutes": 1485,
"number": null,
"position": "Midfielder",
"rating": "6.684000",
"captain": false
},
"substitutes": {
"in": 9,
"out": 6,
"bench": 11
},
"shots": {
"total": 6,
"on": 2
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 924,
"key": 5,
"accuracy": 30
},
"tackles": {
"total": 39,
"blocks": 5,
"interceptions": 36
},
"duels": {
"total": 216,
"won": 106
},
"dribbles": {
"attempts": 9,
"success": 4,
"past": null
},
"fouls": {
"drawn": 30,
"committed": 36
},
"cards": {
"yellow": 8,
"yellowred": 1,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 22004,
"name": "Moreto Cassamã",
"firstname": "Moreto Moro",
"lastname": "Cassamã",
"age": 23,
"birth": {
"date": "1998-02-16",
"place": "Bissau",
"country": "Portugal"
},
"nationality": "Guinea-Bissau",
"height": "165 cm",
"weight": "63 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/22004.png"
},
"statistics": [
{
"team": {
"id": 93,
"name": "Reims",
"logo": "https://media.api-sports.io/football/teams/93.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 23,
"lineups": 20,
"minutes": 1550,
"number": null,
"position": "Midfielder",
"rating": "6.760869",
"captain": false
},
"substitutes": {
"in": 3,
"out": 10,
"bench": 5
},
"shots": {
"total": 7,
"on": 2
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1005,
"key": 10,
"accuracy": 43
},
"tackles": {
"total": 31,
"blocks": 5,
"interceptions": 33
},
"duels": {
"total": 131,
"won": 74
},
"dribbles": {
"attempts": 24,
"success": 22,
"past": null
},
"fouls": {
"drawn": 18,
"committed": 22
},
"cards": {
"yellow": 8,
"yellowred": 0,
"red": 2
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 1902,
"name": "D. Ćaleta-Car",
"firstname": "Duje",
"lastname": "Ćaleta-Car",
"age": 25,
"birth": {
"date": "1996-09-17",
"place": "Šibenik",
"country": "Croatia"
},
"nationality": "Croatia",
"height": "192 cm",
"weight": "89 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/1902.png"
},
"statistics": [
{
"team": {
"id": 81,
"name": "Marseille",
"logo": "https://media.api-sports.io/football/teams/81.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 28,
"lineups": 27,
"minutes": 2423,
"number": null,
"position": "Defender",
"rating": "6.985185",
"captain": false
},
"substitutes": {
"in": 1,
"out": 2,
"bench": 1
},
"shots": {
"total": 9,
"on": 3
},
"goals": {
"total": 2,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 1558,
"key": 4,
"accuracy": 51
},
"tackles": {
"total": 25,
"blocks": 20,
"interceptions": 39
},
"duels": {
"total": 176,
"won": 108
},
"dribbles": {
"attempts": 2,
"success": 2,
"past": null
},
"fouls": {
"drawn": 14,
"committed": 26
},
"cards": {
"yellow": 8,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21504,
"name": "D. Ndong",
"firstname": "Didier",
"lastname": "Ndong Ibrahim",
"age": 27,
"birth": {
"date": "1994-06-17",
"place": "Lambaréné",
"country": "Gabon"
},
"nationality": "Gabon",
"height": "179 cm",
"weight": "75 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21504.png"
},
"statistics": [
{
"team": {
"id": 89,
"name": "Dijon",
"logo": "https://media.api-sports.io/football/teams/89.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 28,
"lineups": 28,
"minutes": 2520,
"number": null,
"position": "Midfielder",
"rating": "6.767857",
"captain": false
},
"substitutes": {
"in": 0,
"out": 0,
"bench": 1
},
"shots": {
"total": 6,
"on": 1
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 1370,
"key": 10,
"accuracy": 46
},
"tackles": {
"total": 52,
"blocks": 7,
"interceptions": 35
},
"duels": {
"total": 247,
"won": 114
},
"dribbles": {
"attempts": 27,
"success": 20,
"past": null
},
"fouls": {
"drawn": 17,
"committed": 38
},
"cards": {
"yellow": 8,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 20531,
"name": "H. Maïga",
"firstname": "Digbo G'nampa Habib",
"lastname": "Maïga",
"age": 25,
"birth": {
"date": "1996-01-01",
"place": "Gagnoa",
"country": "Côte d'Ivoire"
},
"nationality": "Côte d'Ivoire",
"height": "181 cm",
"weight": "80 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/20531.png"
},
"statistics": [
{
"team": {
"id": 112,
"name": "Metz",
"logo": "https://media.api-sports.io/football/teams/112.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 23,
"lineups": 23,
"minutes": 2006,
"number": null,
"position": "Midfielder",
"rating": "6.978260",
"captain": false
},
"substitutes": {
"in": 0,
"out": 3,
"bench": 0
},
"shots": {
"total": 16,
"on": 4
},
"goals": {
"total": 1,
"conceded": 0,
"assists": 3,
"saves": null
},
"passes": {
"total": 969,
"key": 24,
"accuracy": 36
},
"tackles": {
"total": 65,
"blocks": 4,
"interceptions": 43
},
"duels": {
"total": 290,
"won": 155
},
"dribbles": {
"attempts": 40,
"success": 29,
"past": null
},
"fouls": {
"drawn": 30,
"committed": 45
},
"cards": {
"yellow": 8,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 22143,
"name": "Y. Cahuzac",
"firstname": "Yannick",
"lastname": "Cahuzac",
"age": 36,
"birth": {
"date": "1985-01-18",
"place": "Ajaccio",
"country": "France"
},
"nationality": "France",
"height": "178 cm",
"weight": "72 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/22143.png"
},
"statistics": [
{
"team": {
"id": 116,
"name": "Lens",
"logo": "https://media.api-sports.io/football/teams/116.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 22,
"lineups": 18,
"minutes": 1561,
"number": null,
"position": "Midfielder",
"rating": "6.720000",
"captain": false
},
"substitutes": {
"in": 4,
"out": 6,
"bench": 9
},
"shots": {
"total": 3,
"on": 1
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 627,
"key": 9,
"accuracy": 26
},
"tackles": {
"total": 18,
"blocks": 4,
"interceptions": 24
},
"duels": {
"total": 118,
"won": 60
},
"dribbles": {
"attempts": 4,
"success": 3,
"past": null
},
"fouls": {
"drawn": 15,
"committed": 22
},
"cards": {
"yellow": 8,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 1271,
"name": "A. Tchouaméni",
"firstname": "Aurélien",
"lastname": "Tchouaméni",
"age": 21,
"birth": {
"date": "2000-01-27",
"place": "Rouen",
"country": "France"
},
"nationality": "France",
"height": "185 cm",
"weight": "80 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/1271.png"
},
"statistics": [
{
"team": {
"id": 91,
"name": "Monaco",
"logo": "https://media.api-sports.io/football/teams/91.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 29,
"lineups": 29,
"minutes": 2450,
"number": null,
"position": "Midfielder",
"rating": "7.175862",
"captain": false
},
"substitutes": {
"in": 0,
"out": 8,
"bench": 0
},
"shots": {
"total": 29,
"on": 10
},
"goals": {
"total": 2,
"conceded": 0,
"assists": 2,
"saves": null
},
"passes": {
"total": 1420,
"key": 15,
"accuracy": 44
},
"tackles": {
"total": 102,
"blocks": 10,
"interceptions": 50
},
"duels": {
"total": 380,
"won": 231
},
"dribbles": {
"attempts": 30,
"success": 19,
"past": null
},
"fouls": {
"drawn": 46,
"committed": 49
},
"cards": {
"yellow": 7,
"yellowred": 1,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 22254,
"name": "Y. Fofana",
"firstname": "Youssouf",
"lastname": "Fofana",
"age": 22,
"birth": {
"date": "1999-01-10",
"place": null,
"country": "France"
},
"nationality": "France",
"height": "178 cm",
"weight": null,
"injured": false,
"photo": "https://media.api-sports.io/football/players/22254.png"
},
"statistics": [
{
"team": {
"id": 91,
"name": "Monaco",
"logo": "https://media.api-sports.io/football/teams/91.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 27,
"lineups": 27,
"minutes": 2204,
"number": null,
"position": "Midfielder",
"rating": "6.833333",
"captain": false
},
"substitutes": {
"in": 0,
"out": 7,
"bench": 1
},
"shots": {
"total": 16,
"on": 3
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 1253,
"key": 22,
"accuracy": 43
},
"tackles": {
"total": 78,
"blocks": 3,
"interceptions": 29
},
"duels": {
"total": 265,
"won": 137
},
"dribbles": {
"attempts": 44,
"success": 22,
"past": null
},
"fouls": {
"drawn": 26,
"committed": 39
},
"cards": {
"yellow": 7,
"yellowred": 1,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 18764,
"name": "M. Schneiderlin",
"firstname": "Morgan",
"lastname": "Schneiderlin",
"age": 32,
"birth": {
"date": "1989-11-08",
"place": "Zellwiller",
"country": "France"
},
"nationality": "France",
"height": "181 cm",
"weight": "75 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/18764.png"
},
"statistics": [
{
"team": {
"id": 84,
"name": "Nice",
"logo": "https://media.api-sports.io/football/teams/84.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 22,
"lineups": 19,
"minutes": 1756,
"number": null,
"position": "Midfielder",
"rating": "6.890909",
"captain": false
},
"substitutes": {
"in": 3,
"out": 1,
"bench": 5
},
"shots": {
"total": 8,
"on": 3
},
"goals": {
"total": 0,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1250,
"key": 10,
"accuracy": 53
},
"tackles": {
"total": 40,
"blocks": 11,
"interceptions": 44
},
"duels": {
"total": 189,
"won": 87
},
"dribbles": {
"attempts": 16,
"success": 12,
"past": null
},
"fouls": {
"drawn": 6,
"committed": 37
},
"cards": {
"yellow": 7,
"yellowred": 1,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 20654,
"name": "F. Centonze",
"firstname": "Fabien",
"lastname": "Centonze",
"age": 25,
"birth": {
"date": "1996-01-16",
"place": "Voiron",
"country": "France"
},
"nationality": "France",
"height": "182 cm",
"weight": "75 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/20654.png"
},
"statistics": [
{
"team": {
"id": 112,
"name": "Metz",
"logo": "https://media.api-sports.io/football/teams/112.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 28,
"lineups": 28,
"minutes": 2502,
"number": null,
"position": "Defender",
"rating": "7.121428",
"captain": false
},
"substitutes": {
"in": 0,
"out": 1,
"bench": 0
},
"shots": {
"total": 13,
"on": 4
},
"goals": {
"total": 0,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 971,
"key": 19,
"accuracy": 28
},
"tackles": {
"total": 83,
"blocks": 15,
"interceptions": 90
},
"duels": {
"total": 363,
"won": 214
},
"dribbles": {
"attempts": 80,
"success": 44,
"past": null
},
"fouls": {
"drawn": 43,
"committed": 32
},
"cards": {
"yellow": 7,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 3339,
"name": "C. Doucouré",
"firstname": "Cheick Oumar",
"lastname": "Doucouré",
"age": 21,
"birth": {
"date": "2000-01-08",
"place": "Bamako",
"country": "Mali"
},
"nationality": "Mali",
"height": "180 cm",
"weight": "73 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/3339.png"
},
"statistics": [
{
"team": {
"id": 116,
"name": "Lens",
"logo": "https://media.api-sports.io/football/teams/116.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 26,
"lineups": 23,
"minutes": 2032,
"number": null,
"position": "Midfielder",
"rating": "7.080000",
"captain": false
},
"substitutes": {
"in": 3,
"out": 6,
"bench": 5
},
"shots": {
"total": 18,
"on": 5
},
"goals": {
"total": 2,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 1093,
"key": 22,
"accuracy": 40
},
"tackles": {
"total": 67,
"blocks": 3,
"interceptions": 38
},
"duels": {
"total": 227,
"won": 129
},
"dribbles": {
"attempts": 37,
"success": 31,
"past": null
},
"fouls": {
"drawn": 9,
"committed": 36
},
"cards": {
"yellow": 7,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 179843,
"name": "L. Gourna-Douath",
"firstname": "Lucas",
"lastname": "Gourna-Douath",
"age": 18,
"birth": {
"date": "2003-08-05",
"place": null,
"country": "France"
},
"nationality": "France",
"height": null,
"weight": null,
"injured": false,
"photo": "https://media.api-sports.io/football/players/179843.png"
},
"statistics": [
{
"team": {
"id": 1063,
"name": "Saint Etienne",
"logo": "https://media.api-sports.io/football/teams/1063.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 24,
"lineups": 10,
"minutes": 1031,
"number": null,
"position": "Midfielder",
"rating": "6.547619",
"captain": false
},
"substitutes": {
"in": 14,
"out": 5,
"bench": 19
},
"shots": {
"total": 3,
"on": null
},
"goals": {
"total": 0,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 475,
"key": 2,
"accuracy": 18
},
"tackles": {
"total": 27,
"blocks": null,
"interceptions": 21
},
"duels": {
"total": 131,
"won": 65
},
"dribbles": {
"attempts": 8,
"success": 4,
"past": null
},
"fouls": {
"drawn": 24,
"committed": 27
},
"cards": {
"yellow": 7,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 2198,
"name": "S. Doumbia",
"firstname": "Souleyman",
"lastname": "Doumbia",
"age": 25,
"birth": {
"date": "1996-09-24",
"place": "Paris",
"country": "France"
},
"nationality": "Côte d'Ivoire",
"height": "177 cm",
"weight": "73 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/2198.png"
},
"statistics": [
{
"team": {
"id": 77,
"name": "Angers",
"logo": "https://media.api-sports.io/football/teams/77.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 23,
"lineups": 21,
"minutes": 1918,
"number": null,
"position": "Defender",
"rating": "6.669565",
"captain": false
},
"substitutes": {
"in": 2,
"out": 2,
"bench": 3
},
"shots": {
"total": 7,
"on": 3
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 780,
"key": 12,
"accuracy": 32
},
"tackles": {
"total": 43,
"blocks": 4,
"interceptions": 39
},
"duels": {
"total": 175,
"won": 94
},
"dribbles": {
"attempts": 32,
"success": 20,
"past": null
},
"fouls": {
"drawn": 13,
"committed": 26
},
"cards": {
"yellow": 7,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 22005,
"name": "X. Chavalerin",
"firstname": "Xavier",
"lastname": "Chavalerin",
"age": 30,
"birth": {
"date": "1991-03-07",
"place": "Villeurbanne",
"country": "France"
},
"nationality": "France",
"height": "178 cm",
"weight": "66 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/22005.png"
},
"statistics": [
{
"team": {
"id": 93,
"name": "Reims",
"logo": "https://media.api-sports.io/football/teams/93.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 22,
"lineups": 21,
"minutes": 1743,
"number": null,
"position": "Midfielder",
"rating": "6.966666",
"captain": false
},
"substitutes": {
"in": 1,
"out": 3,
"bench": 1
},
"shots": {
"total": 13,
"on": 5
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 2,
"saves": null
},
"passes": {
"total": 626,
"key": 15,
"accuracy": 30
},
"tackles": {
"total": 66,
"blocks": 6,
"interceptions": 25
},
"duels": {
"total": 185,
"won": 98
},
"dribbles": {
"attempts": 19,
"success": 13,
"past": null
},
"fouls": {
"drawn": 6,
"committed": 31
},
"cards": {
"yellow": 7,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 103,
"name": "J. Aholou",
"firstname": "Jean Eudès",
"lastname": "Aholou",
"age": 27,
"birth": {
"date": "1994-03-20",
"place": "Yopougnon",
"country": "Côte d'Ivoire"
},
"nationality": "Côte d'Ivoire",
"height": "186 cm",
"weight": "71 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/103.png"
},
"statistics": [
{
"team": {
"id": 95,
"name": "Strasbourg",
"logo": "https://media.api-sports.io/football/teams/95.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 20,
"lineups": 19,
"minutes": 1561,
"number": null,
"position": "Midfielder",
"rating": "6.550000",
"captain": false
},
"substitutes": {
"in": 1,
"out": 9,
"bench": 1
},
"shots": {
"total": 2,
"on": 1
},
"goals": {
"total": 2,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 7,
"key": 0,
"accuracy": 62
},
"tackles": {
"total": 1,
"blocks": 0,
"interceptions": 1
},
"duels": {
"total": 5,
"won": 3
},
"dribbles": {
"attempts": 0,
"success": 0,
"past": null
},
"fouls": {
"drawn": 1,
"committed": 0
},
"cards": {
"yellow": 7,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 4399,
"name": "H. Boudaoui",
"firstname": "Hichem",
"lastname": "Boudaoui",
"age": 22,
"birth": {
"date": "1999-09-23",
"place": "Béchar",
"country": "Algeria"
},
"nationality": "Algeria",
"height": "175 cm",
"weight": "61 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/4399.png"
},
"statistics": [
{
"team": {
"id": 84,
"name": "Nice",
"logo": "https://media.api-sports.io/football/teams/84.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 19,
"lineups": 17,
"minutes": 1327,
"number": null,
"position": "Midfielder",
"rating": "6.731578",
"captain": false
},
"substitutes": {
"in": 2,
"out": 12,
"bench": 3
},
"shots": {
"total": 9,
"on": 5
},
"goals": {
"total": 1,
"conceded": 0,
"assists": 2,
"saves": null
},
"passes": {
"total": 648,
"key": 7,
"accuracy": 28
},
"tackles": {
"total": 44,
"blocks": 3,
"interceptions": 21
},
"duels": {
"total": 200,
"won": 93
},
"dribbles": {
"attempts": 29,
"success": 18,
"past": null
},
"fouls": {
"drawn": 19,
"committed": 23
},
"cards": {
"yellow": 7,
"yellowred": 0,
"red": 0
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
}
]
}
Top Red Cards
Get the 20 players with the most red cards for a league or cup.

How it is calculated:

1 : The player that received the higher number of red cards
2 : The player that received the higher number of yellow cards
3 : The player that assists in the higher number of matches
4 : The player that played the fewer minutes
Update Frequency : This endpoint is updated several times a week.

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
/players/topredcards

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
fetch("https://v3.football.api-sports.io/players/topredcards?season=2020&league=61", {
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
"get": "players/topredcards",
"parameters": {
"season": "2020",
"league": "61"
},
"errors": [ ],
"results": 20,
"paging": {
"current": 0,
"total": 1
},
"response": [
{
"player": {
"id": 22004,
"name": "Moreto Cassamã",
"firstname": "Moreto Moro",
"lastname": "Cassamã",
"age": 23,
"birth": {
"date": "1998-02-16",
"place": "Bissau",
"country": "Portugal"
},
"nationality": "Guinea-Bissau",
"height": "165 cm",
"weight": "63 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/22004.png"
},
"statistics": [
{
"team": {
"id": 93,
"name": "Reims",
"logo": "https://media.api-sports.io/football/teams/93.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 23,
"lineups": 20,
"minutes": 1550,
"number": null,
"position": "Midfielder",
"rating": "6.760869",
"captain": false
},
"substitutes": {
"in": 3,
"out": 10,
"bench": 5
},
"shots": {
"total": 7,
"on": 2
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1005,
"key": 10,
"accuracy": 43
},
"tackles": {
"total": 31,
"blocks": 5,
"interceptions": 33
},
"duels": {
"total": 131,
"won": 74
},
"dribbles": {
"attempts": 24,
"success": 22,
"past": null
},
"fouls": {
"drawn": 18,
"committed": 22
},
"cards": {
"yellow": 8,
"yellowred": 0,
"red": 2
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21998,
"name": "A. Disasi",
"firstname": "Axel",
"lastname": "Disasi",
"age": 23,
"birth": {
"date": "1998-03-11",
"place": "Gonesse",
"country": "France"
},
"nationality": "France",
"height": "190 cm",
"weight": "86 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21998.png"
},
"statistics": [
{
"team": {
"id": 91,
"name": "Monaco",
"logo": "https://media.api-sports.io/football/teams/91.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 22,
"lineups": 19,
"minutes": 1602,
"number": null,
"position": "Defender",
"rating": "6.747619",
"captain": false
},
"substitutes": {
"in": 3,
"out": 3,
"bench": 8
},
"shots": {
"total": 13,
"on": 6
},
"goals": {
"total": 3,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1180,
"key": 4,
"accuracy": 47
},
"tackles": {
"total": 21,
"blocks": 10,
"interceptions": 21
},
"duels": {
"total": 143,
"won": 77
},
"dribbles": {
"attempts": 8,
"success": 5,
"past": null
},
"fouls": {
"drawn": 12,
"committed": 21
},
"cards": {
"yellow": 4,
"yellowred": 0,
"red": 2
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 1912,
"name": "D. Payet",
"firstname": "Dimitri",
"lastname": "Payet",
"age": 34,
"birth": {
"date": "1987-03-29",
"place": "Saint-Pierre",
"country": "Réunion"
},
"nationality": "France",
"height": "175 cm",
"weight": "77 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/1912.png"
},
"statistics": [
{
"team": {
"id": 81,
"name": "Marseille",
"logo": "https://media.api-sports.io/football/teams/81.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 25,
"lineups": 20,
"minutes": 1716,
"number": null,
"position": "Midfielder",
"rating": "6.956000",
"captain": false
},
"substitutes": {
"in": 5,
"out": 11,
"bench": 5
},
"shots": {
"total": 21,
"on": 9
},
"goals": {
"total": 4,
"conceded": 0,
"assists": 4,
"saves": null
},
"passes": {
"total": 816,
"key": 45,
"accuracy": 25
},
"tackles": {
"total": 17,
"blocks": 2,
"interceptions": 4
},
"duels": {
"total": 156,
"won": 81
},
"dribbles": {
"attempts": 46,
"success": 28,
"past": null
},
"fouls": {
"drawn": 32,
"committed": 11
},
"cards": {
"yellow": 3,
"yellowred": 0,
"red": 2
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 1,
"saved": null
}
}
]
},
{
"player": {
"id": 21571,
"name": "Hilton",
"firstname": "Vitorino",
"lastname": "Hilton da Silva",
"age": 44,
"birth": {
"date": "1977-09-13",
"place": "Brasília",
"country": "Brazil"
},
"nationality": "Brazil",
"height": "180 cm",
"weight": "78 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21571.png"
},
"statistics": [
{
"team": {
"id": 82,
"name": "Montpellier",
"logo": "https://media.api-sports.io/football/teams/82.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 22,
"lineups": 18,
"minutes": 1537,
"number": null,
"position": "Defender",
"rating": "6.588888",
"captain": false
},
"substitutes": {
"in": 4,
"out": 0,
"bench": 7
},
"shots": {
"total": 10,
"on": 3
},
"goals": {
"total": 0,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 808,
"key": null,
"accuracy": 33
},
"tackles": {
"total": 10,
"blocks": 19,
"interceptions": 27
},
"duels": {
"total": 91,
"won": 49
},
"dribbles": {
"attempts": 1,
"success": 1,
"past": null
},
"fouls": {
"drawn": 10,
"committed": 15
},
"cards": {
"yellow": 3,
"yellowred": 0,
"red": 2
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 2478,
"name": "D. Benedetto",
"firstname": "Darío Ismael",
"lastname": "Benedetto",
"age": 31,
"birth": {
"date": "1990-05-17",
"place": "Berazategui",
"country": "Argentina"
},
"nationality": "Argentina",
"height": "177 cm",
"weight": "75 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/2478.png"
},
"statistics": [
{
"team": {
"id": 81,
"name": "Marseille",
"logo": "https://media.api-sports.io/football/teams/81.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 26,
"lineups": 18,
"minutes": 1484,
"number": null,
"position": "Attacker",
"rating": "6.553846",
"captain": false
},
"substitutes": {
"in": 8,
"out": 15,
"bench": 8
},
"shots": {
"total": 32,
"on": 13
},
"goals": {
"total": 4,
"conceded": 0,
"assists": 3,
"saves": null
},
"passes": {
"total": 310,
"key": 13,
"accuracy": 9
},
"tackles": {
"total": 5,
"blocks": 2,
"interceptions": 3
},
"duels": {
"total": 164,
"won": 56
},
"dribbles": {
"attempts": 15,
"success": 9,
"past": null
},
"fouls": {
"drawn": 19,
"committed": 17
},
"cards": {
"yellow": 2,
"yellowred": 1,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 1,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21433,
"name": "F. Miguel",
"firstname": "Florian",
"lastname": "Miguel",
"age": 25,
"birth": {
"date": "1996-09-01",
"place": "Brugge",
"country": "France"
},
"nationality": "France",
"height": "179 cm",
"weight": "70 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21433.png"
},
"statistics": [
{
"team": {
"id": 92,
"name": "Nimes",
"logo": "https://media.api-sports.io/football/teams/92.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 19,
"lineups": 16,
"minutes": 1357,
"number": null,
"position": "Defender",
"rating": "6.783333",
"captain": false
},
"substitutes": {
"in": 3,
"out": 2,
"bench": 10
},
"shots": {
"total": 6,
"on": 3
},
"goals": {
"total": 0,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 714,
"key": 1,
"accuracy": 35
},
"tackles": {
"total": 13,
"blocks": 12,
"interceptions": 40
},
"duels": {
"total": 125,
"won": 71
},
"dribbles": {
"attempts": 4,
"success": 3,
"past": null
},
"fouls": {
"drawn": 29,
"committed": 14
},
"cards": {
"yellow": 2,
"yellowred": 1,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 7,
"name": "A. Diallo",
"firstname": "Abdou",
"lastname": "Diallo",
"age": 25,
"birth": {
"date": "1996-05-04",
"place": "Tours",
"country": "France"
},
"nationality": "Senegal",
"height": "187 cm",
"weight": "79 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/7.png"
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
"season": 2020
},
"games": {
"appearences": 18,
"lineups": 14,
"minutes": 1209,
"number": null,
"position": "Defender",
"rating": "7.005882",
"captain": false
},
"substitutes": {
"in": 4,
"out": 1,
"bench": 8
},
"shots": {
"total": 3,
"on": null
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 951,
"key": 1,
"accuracy": 49
},
"tackles": {
"total": 12,
"blocks": 8,
"interceptions": 22
},
"duels": {
"total": 92,
"won": 55
},
"dribbles": {
"attempts": 20,
"success": 14,
"past": null
},
"fouls": {
"drawn": 8,
"committed": 15
},
"cards": {
"yellow": 1,
"yellowred": 1,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 8694,
"name": "W. Faes",
"firstname": "Wout",
"lastname": "Faes",
"age": 23,
"birth": {
"date": "1998-04-03",
"place": null,
"country": "Belgium"
},
"nationality": "Belgium",
"height": "187 cm",
"weight": "84 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/8694.png"
},
"statistics": [
{
"team": {
"id": 93,
"name": "Reims",
"logo": "https://media.api-sports.io/football/teams/93.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 26,
"lineups": 26,
"minutes": 2292,
"number": null,
"position": "Defender",
"rating": "6.907692",
"captain": false
},
"substitutes": {
"in": 0,
"out": 0,
"bench": 0
},
"shots": {
"total": 5,
"on": 1
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1228,
"key": 0,
"accuracy": 43
},
"tackles": {
"total": 25,
"blocks": 24,
"interceptions": 55
},
"duels": {
"total": 164,
"won": 95
},
"dribbles": {
"attempts": 12,
"success": 10,
"past": null
},
"fouls": {
"drawn": 12,
"committed": 16
},
"cards": {
"yellow": 10,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 1907,
"name": "H. Sakai",
"firstname": "Hiroki",
"lastname": "Sakai",
"age": 31,
"birth": {
"date": "1990-04-12",
"place": "Kashiwa",
"country": "Japan"
},
"nationality": "Japan",
"height": "183 cm",
"weight": "70 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/1907.png"
},
"statistics": [
{
"team": {
"id": 81,
"name": "Marseille",
"logo": "https://media.api-sports.io/football/teams/81.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 25,
"lineups": 23,
"minutes": 2087,
"number": null,
"position": "Defender",
"rating": "6.776000",
"captain": false
},
"substitutes": {
"in": 2,
"out": 4,
"bench": 3
},
"shots": {
"total": 1,
"on": 0
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 926,
"key": 18,
"accuracy": 31
},
"tackles": {
"total": 71,
"blocks": 4,
"interceptions": 50
},
"duels": {
"total": 250,
"won": 133
},
"dribbles": {
"attempts": 21,
"success": 7,
"past": null
},
"fouls": {
"drawn": 15,
"committed": 41
},
"cards": {
"yellow": 6,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21443,
"name": "T. Savanier",
"firstname": "Téji",
"lastname": "Savanier",
"age": 30,
"birth": {
"date": "1991-12-22",
"place": "Montpellier",
"country": "France"
},
"nationality": "France",
"height": "171 cm",
"weight": "62 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21443.png"
},
"statistics": [
{
"team": {
"id": 82,
"name": "Montpellier",
"logo": "https://media.api-sports.io/football/teams/82.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 22,
"lineups": 21,
"minutes": 1738,
"number": null,
"position": "Midfielder",
"rating": "7.100000",
"captain": false
},
"substitutes": {
"in": 1,
"out": 8,
"bench": 1
},
"shots": {
"total": 33,
"on": 15
},
"goals": {
"total": 5,
"conceded": 0,
"assists": 4,
"saves": null
},
"passes": {
"total": 850,
"key": 49,
"accuracy": 30
},
"tackles": {
"total": 39,
"blocks": 4,
"interceptions": 32
},
"duels": {
"total": 322,
"won": 149
},
"dribbles": {
"attempts": 70,
"success": 41,
"past": null
},
"fouls": {
"drawn": 54,
"committed": 45
},
"cards": {
"yellow": 6,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 2,
"missed": 2,
"saved": null
}
}
]
},
{
"player": {
"id": 941,
"name": "L. Benito",
"firstname": "Loris",
"lastname": "Benito Souto",
"age": 29,
"birth": {
"date": "1992-01-07",
"place": "Aarau",
"country": "Switzerland"
},
"nationality": "Switzerland",
"height": "184 cm",
"weight": "80 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/941.png"
},
"statistics": [
{
"team": {
"id": 78,
"name": "Bordeaux",
"logo": "https://media.api-sports.io/football/teams/78.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 25,
"lineups": 24,
"minutes": 2113,
"number": null,
"position": "Defender",
"rating": "6.828000",
"captain": false
},
"substitutes": {
"in": 1,
"out": 2,
"bench": 4
},
"shots": {
"total": 6,
"on": 1
},
"goals": {
"total": 0,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 1240,
"key": 11,
"accuracy": 45
},
"tackles": {
"total": 35,
"blocks": 7,
"interceptions": 39
},
"duels": {
"total": 158,
"won": 84
},
"dribbles": {
"attempts": 2,
"success": 2,
"past": null
},
"fouls": {
"drawn": 13,
"committed": 32
},
"cards": {
"yellow": 5,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 22232,
"name": "Thiago Mendes",
"firstname": "Thiago Henrique",
"lastname": "Mendes Ribeiro",
"age": 29,
"birth": {
"date": "1992-03-15",
"place": "São Luís",
"country": "Brazil"
},
"nationality": "Brazil",
"height": "176 cm",
"weight": "78 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/22232.png"
},
"statistics": [
{
"team": {
"id": 80,
"name": "Lyon",
"logo": "https://media.api-sports.io/football/teams/80.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 23,
"lineups": 19,
"minutes": 1813,
"number": null,
"position": "Midfielder",
"rating": "6.956521",
"captain": false
},
"substitutes": {
"in": 4,
"out": 2,
"bench": 5
},
"shots": {
"total": 15,
"on": 6
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 1220,
"key": 22,
"accuracy": 46
},
"tackles": {
"total": 32,
"blocks": 6,
"interceptions": 32
},
"duels": {
"total": 157,
"won": 84
},
"dribbles": {
"attempts": 17,
"success": 11,
"past": null
},
"fouls": {
"drawn": 20,
"committed": 22
},
"cards": {
"yellow": 5,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 3080,
"name": "M. Munetsi",
"firstname": "Marshall Nyasha",
"lastname": "Munetsi",
"age": 25,
"birth": {
"date": "1996-06-22",
"place": "Bulawayo",
"country": "Zimbabwe"
},
"nationality": "Zimbabwe",
"height": "188 cm",
"weight": "83 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/3080.png"
},
"statistics": [
{
"team": {
"id": 93,
"name": "Reims",
"logo": "https://media.api-sports.io/football/teams/93.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 21,
"lineups": 15,
"minutes": 1386,
"number": null,
"position": "Midfielder",
"rating": "6.828571",
"captain": false
},
"substitutes": {
"in": 6,
"out": 3,
"bench": 9
},
"shots": {
"total": 9,
"on": 3
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 587,
"key": 7,
"accuracy": 30
},
"tackles": {
"total": 27,
"blocks": 17,
"interceptions": 51
},
"duels": {
"total": 163,
"won": 93
},
"dribbles": {
"attempts": 17,
"success": 12,
"past": null
},
"fouls": {
"drawn": 15,
"committed": 23
},
"cards": {
"yellow": 5,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 3416,
"name": "J. Boye",
"firstname": "John",
"lastname": "Boye",
"age": 34,
"birth": {
"date": "1987-04-23",
"place": "Accra",
"country": "Ghana"
},
"nationality": "Ghana",
"height": "184 cm",
"weight": "73 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/3416.png"
},
"statistics": [
{
"team": {
"id": 112,
"name": "Metz",
"logo": "https://media.api-sports.io/football/teams/112.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 28,
"lineups": 28,
"minutes": 2456,
"number": null,
"position": "Defender",
"rating": "6.885714",
"captain": false
},
"substitutes": {
"in": 0,
"out": 3,
"bench": 0
},
"shots": {
"total": 9,
"on": 1
},
"goals": {
"total": 1,
"conceded": 0,
"assists": 2,
"saves": null
},
"passes": {
"total": 980,
"key": 6,
"accuracy": 30
},
"tackles": {
"total": 39,
"blocks": 18,
"interceptions": 61
},
"duels": {
"total": 188,
"won": 99
},
"dribbles": {
"attempts": 3,
"success": 3,
"past": null
},
"fouls": {
"drawn": 13,
"committed": 23
},
"cards": {
"yellow": 4,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21711,
"name": "F. Sammaritano",
"firstname": "Frédéric",
"lastname": "Sammaritano",
"age": 35,
"birth": {
"date": "1986-03-23",
"place": "Vannes",
"country": "France"
},
"nationality": "France",
"height": "162 cm",
"weight": "65 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21711.png"
},
"statistics": [
{
"team": {
"id": 89,
"name": "Dijon",
"logo": "https://media.api-sports.io/football/teams/89.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 24,
"lineups": 9,
"minutes": 941,
"number": null,
"position": "Midfielder",
"rating": "6.604166",
"captain": false
},
"substitutes": {
"in": 15,
"out": 9,
"bench": 18
},
"shots": {
"total": 8,
"on": 3
},
"goals": {
"total": 0,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 322,
"key": 20,
"accuracy": 17
},
"tackles": {
"total": 15,
"blocks": 0,
"interceptions": 9
},
"duels": {
"total": 107,
"won": 49
},
"dribbles": {
"attempts": 23,
"success": 14,
"past": null
},
"fouls": {
"drawn": 18,
"committed": 12
},
"cards": {
"yellow": 4,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21499,
"name": "L. Deaux",
"firstname": "Lucas",
"lastname": "Deaux",
"age": 33,
"birth": {
"date": "1988-12-26",
"place": "Reims",
"country": "France"
},
"nationality": "France",
"height": "188 cm",
"weight": "82 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21499.png"
},
"statistics": [
{
"team": {
"id": 92,
"name": "Nimes",
"logo": "https://media.api-sports.io/football/teams/92.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 17,
"lineups": 15,
"minutes": 1347,
"number": null,
"position": "Midfielder",
"rating": "6.629411",
"captain": false
},
"substitutes": {
"in": 2,
"out": 2,
"bench": 3
},
"shots": {
"total": 10,
"on": 4
},
"goals": {
"total": 1,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 739,
"key": 13,
"accuracy": 41
},
"tackles": {
"total": 30,
"blocks": 3,
"interceptions": 16
},
"duels": {
"total": 178,
"won": 90
},
"dribbles": {
"attempts": 23,
"success": 16,
"past": null
},
"fouls": {
"drawn": 15,
"committed": 25
},
"cards": {
"yellow": 4,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 6,
"name": "L. Balerdi",
"firstname": "Leonardo Julián",
"lastname": "Balerdi Rossa",
"age": 22,
"birth": {
"date": "1999-01-26",
"place": "Villa Mercedes",
"country": "Argentina"
},
"nationality": "Argentina",
"height": "187 cm",
"weight": "85 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/6.png"
},
"statistics": [
{
"team": {
"id": 81,
"name": "Marseille",
"logo": "https://media.api-sports.io/football/teams/81.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 13,
"lineups": 12,
"minutes": 1004,
"number": null,
"position": "Defender",
"rating": "6.476923",
"captain": false
},
"substitutes": {
"in": 1,
"out": 1,
"bench": 16
},
"shots": {
"total": 8,
"on": 2
},
"goals": {
"total": 1,
"conceded": 0,
"assists": null,
"saves": null
},
"passes": {
"total": 561,
"key": 0,
"accuracy": 41
},
"tackles": {
"total": 14,
"blocks": 6,
"interceptions": 16
},
"duels": {
"total": 114,
"won": 48
},
"dribbles": {
"attempts": 5,
"success": 2,
"past": null
},
"fouls": {
"drawn": 13,
"committed": 21
},
"cards": {
"yellow": 4,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 276,
"name": "Neymar",
"firstname": "Neymar",
"lastname": "da Silva Santos Júnior",
"age": 29,
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
"season": 2020
},
"games": {
"appearences": 11,
"lineups": 9,
"minutes": 865,
"number": null,
"position": "Attacker",
"rating": "7.490909",
"captain": false
},
"substitutes": {
"in": 2,
"out": 0,
"bench": 2
},
"shots": {
"total": 32,
"on": 14
},
"goals": {
"total": 6,
"conceded": 0,
"assists": 3,
"saves": null
},
"passes": {
"total": 552,
"key": 32,
"accuracy": 39
},
"tackles": {
"total": 8,
"blocks": null,
"interceptions": 6
},
"duels": {
"total": 216,
"won": 111
},
"dribbles": {
"attempts": 99,
"success": 57,
"past": null
},
"fouls": {
"drawn": 43,
"committed": 17
},
"cards": {
"yellow": 4,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 3,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 21097,
"name": "Andrei Girotto",
"firstname": "Andrei",
"lastname": "Girotto",
"age": 29,
"birth": {
"date": "1992-02-17",
"place": "Bento Gonçalves",
"country": "Brazil"
},
"nationality": "Brazil",
"height": "186 cm",
"weight": "73 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/21097.png"
},
"statistics": [
{
"team": {
"id": 83,
"name": "Nantes",
"logo": "https://media.api-sports.io/football/teams/83.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 27,
"lineups": 26,
"minutes": 2282,
"number": null,
"position": "Midfielder",
"rating": "6.844444",
"captain": false
},
"substitutes": {
"in": 1,
"out": 0,
"bench": 1
},
"shots": {
"total": 20,
"on": 5
},
"goals": {
"total": 1,
"conceded": 0,
"assists": 1,
"saves": null
},
"passes": {
"total": 1278,
"key": 10,
"accuracy": 40
},
"tackles": {
"total": 58,
"blocks": 11,
"interceptions": 50
},
"duels": {
"total": 254,
"won": 157
},
"dribbles": {
"attempts": 5,
"success": 3,
"past": null
},
"fouls": {
"drawn": 21,
"committed": 25
},
"cards": {
"yellow": 3,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": null
}
}
]
},
{
"player": {
"id": 20519,
"name": "A. Oukidja",
"firstname": "Alexandre",
"lastname": "Oukidja",
"age": 33,
"birth": {
"date": "1988-07-19",
"place": "Nevers",
"country": "France"
},
"nationality": "Algeria",
"height": "184 cm",
"weight": "79 kg",
"injured": false,
"photo": "https://media.api-sports.io/football/players/20519.png"
},
"statistics": [
{
"team": {
"id": 112,
"name": "Metz",
"logo": "https://media.api-sports.io/football/teams/112.png"
},
"league": {
"id": 61,
"name": "Ligue 1",
"country": "France",
"logo": "https://media.api-sports.io/football/leagues/61.png",
"flag": "https://media.api-sports.io/flags/fr.svg",
"season": 2020
},
"games": {
"appearences": 27,
"lineups": 27,
"minutes": 2430,
"number": null,
"position": "Goalkeeper",
"rating": "6.922222",
"captain": false
},
"substitutes": {
"in": 0,
"out": 1,
"bench": 0
},
"shots": {
"total": 0,
"on": 0
},
"goals": {
"total": 0,
"conceded": 26,
"assists": null,
"saves": 69
},
"passes": {
"total": 685,
"key": 1,
"accuracy": 16
},
"tackles": {
"total": null,
"blocks": 0,
"interceptions": 0
},
"duels": {
"total": 24,
"won": 20
},
"dribbles": {
"attempts": 2,
"success": 2,
"past": null
},
"fouls": {
"drawn": 6,
"committed": 0
},
"cards": {
"yellow": 3,
"yellowred": 0,
"red": 1
},
"penalty": {
"won": null,
"commited": null,
"scored": 0,
"missed": 0,
"saved": 2
}
}
]
}
]
}
Transfers
Transfers
Get all available transfers for players and teams

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

query Parameters
player	
integer
The id of the player

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
/transfers

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all transfers from one {player}
get("https://v3.football.api-sports.io/transfers?player=35845");

// Get all transfers from one {team}
get("https://v3.football.api-sports.io/transfers?team=463");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "transfers",
"parameters": {
"player": "35845"
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
"id": 35845,
"name": "Hernán Darío Burbano"
},
"update": "2020-02-06T00:08:15+00:00",
"transfers": [
{
"date": "2019-07-15",
"type": "Free",
"teams": {
"in": {
"id": 2283,
"name": "Atlas",
"logo": "https://media.api-sports.io/football/teams/2283.png"
},
"out": {
"id": 2283,
"name": "Atlas",
"logo": "https://media.api-sports.io/football/teams/2283.png"
}
}
},
{
"date": "2019-01-01",
"type": "N/A",
"teams": {
"in": {
"id": 1937,
"name": "Atletico Atlas",
"logo": "https://media.api-sports.io/football/teams/1937.png"
},
"out": {
"id": 1139,
"name": "Santa Fe",
"logo": "https://media.api-sports.io/football/teams/1139.png"
}
}
},
{
"date": "2018-07-01",
"type": "N/A",
"teams": {
"in": {
"id": 1139,
"name": "Santa Fe",
"logo": "https://media.api-sports.io/football/teams/1139.png"
},
"out": {
"id": 2289,
"name": "Leon",
"logo": "https://media.api-sports.io/football/teams/2289.png"
}
}
},
{
"date": "2015-06-11",
"type": "N/A",
"teams": {
"in": {
"id": 2289,
"name": "Leon",
"logo": "https://media.api-sports.io/football/teams/2289.png"
},
"out": {
"id": 2279,
"name": "Tigres UANL",
"logo": "https://media.api-sports.io/football/teams/2279.png"
}
}
},
{
"date": "2014-01-01",
"type": "N/A",
"teams": {
"in": {
"id": 2279,
"name": "Tigres UANL",
"logo": "https://media.api-sports.io/football/teams/2279.png"
},
"out": {
"id": 2289,
"name": "Leon",
"logo": "https://media.api-sports.io/football/teams/2289.png"
}
}
},
{
"date": "2012-01-01",
"type": "N/A",
"teams": {
"in": {
"id": 2289,
"name": "Leon",
"logo": "https://media.api-sports.io/football/teams/2289.png"
},
"out": {
"id": 1127,
"name": "Deportivo Cali",
"logo": "https://media.api-sports.io/football/teams/1127.png"
}
}
},
{
"date": "2011-01-01",
"type": "N/A",
"teams": {
"in": {
"id": 1127,
"name": "Deportivo Cali",
"logo": "https://media.api-sports.io/football/teams/1127.png"
},
"out": {
"id": 1126,
"name": "Deportivo Pasto",
"logo": "https://media.api-sports.io/football/teams/1126.png"
}
}
},
{
"date": "2020-01-01",
"type": null,
"teams": {
"in": {
"id": 1470,
"name": "Cucuta",
"logo": "https://media.api-sports.io/football/teams/1470.png"
},
"out": {
"id": 463,
"name": "Aldosivi",
"logo": "https://media.api-sports.io/football/teams/463.png"
}
}
}
]
}
]
}
Trophies
Trophies
Get all available trophies for a player or a coach.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

query Parameters
player	
integer
The id of the player

players	
stringMaximum of 20 players ids
Value: "id-id-id"
One or more players ids

coach	
integer
The id of the coach

coachs	
stringMaximum of 20 coachs ids
Value: "id-id-id"
One or more coachs ids

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
/trophies

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all trophies from one {player}
get("https://v3.football.api-sports.io/trophies?player=276");

// Get all trophies from several {player} ids
get("https://v3.football.api-sports.io/trophies?players=276-278");

// Get all trophies from one {coach}
get("https://v3.football.api-sports.io/trophies?coach=2");

// Get all trophies from several {coach} ids
get("https://v3.football.api-sports.io/trophies?coachs=2-6");
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
"get": "trophies",
"parameters": {
"player": "276"
},
"errors": [ ],
"results": 38,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"league": "Sudamericano U20",
"country": "South-America",
"season": "Peru 2011",
"place": "Winner"
},
{
"league": "Trophée des Champions",
"country": "France",
"season": "2019/2020",
"place": "Winner"
},
{
"league": "Copa America",
"country": "South-America",
"season": "2019 Brazil",
"place": "Winner"
},
{
"league": "Ligue 1",
"country": "France",
"season": "2018/2019",
"place": "Winner"
},
{
"league": "Coupe de France",
"country": "France",
"season": "2018/2019",
"place": "2nd Place"
},
{
"league": "Trophée des Champions",
"country": "France",
"season": "2018/2019",
"place": "Winner"
},
{
"league": "Ligue 1",
"country": "France",
"season": "2017/2018",
"place": "Winner"
},
{
"league": "Coupe de France",
"country": "France",
"season": "2017/2018",
"place": "Winner"
},
{
"league": "Coupe de la Ligue",
"country": "France",
"season": "2017/2018",
"place": "Winner"
},
{
"league": "La Liga",
"country": "Spain",
"season": "2016/2017",
"place": "2nd Place"
}
]
}
Sidelined
Sidelined
Get all available sidelined for a player or a coach.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

query Parameters
player	
integer
The id of the player

players	
stringMaximum of 20 players ids
Value: "id-id-id"
One or more players ids

coach	
integer
The id of the coach

coachs	
stringMaximum of 20 coachs ids
Value: "id-id-id"
One or more coachs ids

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
/sidelined

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all from one {player}
get("https://v3.football.api-sports.io/sidelined?player=276");

// Get all from several {player} ids
get("https://v3.football.api-sports.io/sidelined?players=276-278-279-280-281-282");

// Get all from one {coach}
get("https://v3.football.api-sports.io/sidelined?coach=2");

// Get all from several {coach} ids
get("https://v3.football.api-sports.io/sidelined?coachs=2-6-44-77-54-52");
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
"get": "sidelined",
"parameters": {
"player": "276"
},
"errors": [ ],
"results": 27,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"type": "Suspended",
"start": "2020-02-26",
"end": "2020-03-01"
},
{
"type": "Hip/Thigh Injury",
"start": "2020-02-02",
"end": "2020-02-10"
},
{
"type": "Groin/Pelvis Injury",
"start": "2019-10-11",
"end": "2019-11-20"
},
{
"type": "Ankle/Foot Injury",
"start": "2019-08-01",
"end": "2019-08-23"
},
{
"type": "Suspended",
"start": "2019-05-15",
"end": "2019-05-27"
},
{
"type": "Ankle/Foot Injury",
"start": "2019-01-24",
"end": "2019-04-20"
},
{
"type": "Groin Strain",
"start": "2018-12-03",
"end": "2019-01-02"
},
{
"type": "Groin Strain",
"start": "2018-11-21",
"end": "2018-11-27"
},
{
"type": "Broken Toe",
"start": "2018-02-26",
"end": "2018-05-20"
},
{
"type": "Thigh Muscle Strain",
"start": "2018-01-20",
"end": "2018-01-25"
},
{
"type": "Rib Injury",
"start": "2018-01-11",
"end": "2018-01-16"
},
{
"type": "Suspended",
"start": "2017-12-05",
"end": "2017-12-11"
},
{
"type": "Thigh Muscle Strain",
"start": "2017-11-03",
"end": "2017-11-15"
},
{
"type": "Suspended",
"start": "2017-10-23",
"end": "2017-10-28"
},
{
"type": "Ankle/Foot Injury",
"start": "2017-09-21",
"end": "2017-09-25"
},
{
"type": "Suspended",
"start": "2017-04-09",
"end": "2017-04-27"
},
{
"type": "Suspended",
"start": "2016-12-04",
"end": "2016-12-11"
},
{
"type": "Suspended",
"start": "2016-03-04",
"end": "2016-03-07"
},
{
"type": "Hamstring",
"start": "2016-01-21",
"end": "2016-01-26"
},
{
"type": "Hamstring",
"start": "2015-12-08",
"end": "2015-12-16"
},
{
"type": "Virus",
"start": "2015-08-09",
"end": "2015-08-26"
},
{
"type": "Suspended",
"start": "2015-03-01",
"end": "2015-03-09"
},
{
"type": "Sprained Ankle",
"start": "2014-08-22",
"end": "2014-08-29"
},
{
"type": "Vertebral Fracture",
"start": "2014-07-05",
"end": "2014-08-05"
},
{
"type": "Ankle/Foot Injury",
"start": "2014-04-17",
"end": "2014-05-10"
},
{
"type": "Sprained Ankle",
"start": "2014-01-17",
"end": "2014-02-14"
},
{
"type": "Suspended",
"start": "2013-12-15",
"end": "2013-12-23"
}
]
}
Odds (In-Play)
odds/live
This endpoint returns in-play odds for fixtures in progress.

Fixtures are added between 15 and 5 minutes before the start of the fixture. Once the fixture is over they are removed from the endpoint between 5 and 20 minutes. No history is stored. So fixtures that are about to start, fixtures in progress and fixtures that have just ended are available in this endpoint.

Update Frequency : This endpoint is updated every 5 seconds.*

* This value can change in the range of 5 to 60 seconds

INFORMATIONS ABOUT STATUS

"status": {
    "stopped": false, // True if the fixture is stopped by the referee for X reason
    "blocked": false, // True if bets on this fixture are temporarily blocked
    "finished": false // True if the fixture has not started or if it is finished
},
INFORMATIONS ABOUT VALUES

When several identical values exist for the same bet the main field is set to True for the bet being considered, the others will have the value False.

The main field will be set to True only if several identical values exist for the same bet.

When a value is unique for a bet the main value will always be False or null.

Example below :

"id": 36,
"name": "Over/Under Line",
"values": [
    {
        "value": "Over",
        "odd": "1.975",
        "handicap": "2",
        "main": true, // Bet to consider
        "suspended": false // True if this bet is temporarily suspended
    },
    {
        "value": "Over",
        "odd": "3.45",
        "handicap": "2",
        "main": false, // Bet to no consider
        "suspended": false
    },
]
query Parameters
fixture	
integer
The id of the fixture

league	
integer (In this endpoint the "season" parameter is ...Show pattern
The id of the league

bet	
integer
The id of the bet

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
/odds/live

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available odds
get("https://v3.football.api-sports.io/odds/live");

// Get all available odds from one {fixture}
get("https://v3.football.api-sports.io/odds/live?fixture=164327");

// Get all available odds from one {league}
get("https://v3.football.api-sports.io/odds/live?league=39");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/odds/live?bet=4&league=39");
get("https://v3.football.api-sports.io/odds/live?bet=4&fixture=164327");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "odds/live",
"parameters": {
"fixture": "721238"
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
"id": 721238,
"status": {
"long": "Second Half",
"elapsed": 62,
"seconds": "62:14"
}
},
"league": {
"id": 30,
"season": 2022
},
"teams": {
"home": {
"id": 1563,
"goals": 1
},
"away": {
"id": 1565,
"goals": 0
}
},
"status": {
"stopped": false,
"blocked": false,
"finished": false
},
"update": "2022-01-27T16:21:01+00:00",
"odds": [
{
"id": 20,
"name": "Match Corners",
"values": [
{
"value": "Over",
"odd": "2.5",
"handicap": "8",
"main": null,
"suspended": false
},
{
"value": "Exactly",
"odd": "4.333",
"handicap": "8",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "2.2",
"handicap": "8",
"main": null,
"suspended": false
},
{
"value": "Over",
"odd": "9",
"handicap": "10",
"main": null,
"suspended": false
},
{
"value": "Exactly",
"odd": "7.5",
"handicap": "10",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.181",
"handicap": "10",
"main": null,
"suspended": false
},
{
"value": "Over",
"odd": "1.615",
"handicap": "7",
"main": null,
"suspended": false
},
{
"value": "Exactly",
"odd": "4",
"handicap": "7",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "4.333",
"handicap": "7",
"main": null,
"suspended": false
},
{
"value": "Over",
"odd": "1.2",
"handicap": "6",
"main": null,
"suspended": false
},
{
"value": "Exactly",
"odd": "5.5",
"handicap": "6",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "15",
"handicap": "6",
"main": null,
"suspended": false
},
{
"value": "Over",
"odd": "4.5",
"handicap": "9",
"main": null,
"suspended": false
},
{
"value": "Exactly",
"odd": "5",
"handicap": "9",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.5",
"handicap": "9",
"main": null,
"suspended": false
}
]
},
{
"id": 33,
"name": "Asian Handicap",
"values": [
{
"value": "Home",
"odd": "1.475",
"handicap": "-1",
"main": false,
"suspended": false
},
{
"value": "Away",
"odd": "2.6",
"handicap": "1",
"main": false,
"suspended": false
},
{
"value": "Home",
"odd": "2.05",
"handicap": "-1",
"main": true,
"suspended": false
},
{
"value": "Away",
"odd": "1.8",
"handicap": "1",
"main": true,
"suspended": false
},
{
"value": "Home",
"odd": "3.8",
"handicap": "-2",
"main": false,
"suspended": false
},
{
"value": "Away",
"odd": "1.25",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Home",
"odd": "1.3",
"handicap": "-1",
"main": false,
"suspended": false
},
{
"value": "Away",
"odd": "3.45",
"handicap": "1",
"main": false,
"suspended": false
},
{
"value": "Home",
"odd": "2.85",
"handicap": "-1",
"main": false,
"suspended": false
},
{
"value": "Away",
"odd": "1.4",
"handicap": "1",
"main": false,
"suspended": false
}
]
},
{
"id": 85,
"name": "Which team will score the 2nd goal?",
"values": [
{
"value": "1",
"odd": "3.2",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No goal",
"odd": "2.2",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2",
"odd": "2.875",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 36,
"name": "Over/Under Line",
"values": [
{
"value": "Over",
"odd": "1.625",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Under",
"odd": "2.25",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Over",
"odd": "2.675",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Under",
"odd": "1.45",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Over",
"odd": "3.45",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Under",
"odd": "1.3",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Over",
"odd": "1.975",
"handicap": "2",
"main": true,
"suspended": false
},
{
"value": "Under",
"odd": "1.875",
"handicap": "2",
"main": true,
"suspended": false
}
]
},
{
"id": 60,
"name": "To Score 3 or More",
"values": [
{
"value": "Correa Caio Canedo",
"odd": "67",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Omar Al-Somah",
"odd": "126",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Omar Khrbin",
"odd": "151",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Ali Saleh",
"odd": "401",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Tahnoon Al Zaabi",
"odd": "501",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mahmood Al Mawas",
"odd": "401",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Khalil Ibrahim",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Abdullah Ramadan",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Oliver Kass Kawo",
"odd": "501",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Ali Salmeen",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Amro Jenyat",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Fahd Youssef",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Mouhamad Anez",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Abdelaziz Sanqour",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Walid Abbas",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Mohamad Al Attas",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Tamer Haj Mohamad",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Moaiad Al Khouli",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Omar Midani",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Mahmoud Al Hammadi",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
}
]
},
{
"id": 23,
"name": "Final Score",
"values": [
{
"value": "1-0",
"odd": "2.2",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2-0",
"odd": "4.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2-1",
"odd": "9",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "3-0",
"odd": "19",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "3-1",
"odd": "34",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "3-2",
"odd": "67",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "4-0",
"odd": "67",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "4-1",
"odd": "101",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "4-2",
"odd": "301",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "4-3",
"odd": "351",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "5-0",
"odd": "301",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "5-1",
"odd": "301",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "5-2",
"odd": "351",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "6-0",
"odd": "351",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "6-1",
"odd": "401",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "0-0",
"odd": "3.4",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "1-1",
"odd": "4.333",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2-2",
"odd": "29",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "3-3",
"odd": "301",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "0-1",
"odd": "5.5",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "0-2",
"odd": "17",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "1-2",
"odd": "17",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "0-3",
"odd": "51",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "1-3",
"odd": "51",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2-3",
"odd": "81",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "0-4",
"odd": "201",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "1-4",
"odd": "201",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2-4",
"odd": "351",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "3-4",
"odd": "351",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "0-5",
"odd": "351",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "1-5",
"odd": "401",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "2-5",
"odd": "401",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "5-3",
"odd": "401",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "4-4",
"odd": "401",
"handicap": null,
"main": null,
"suspended": true
}
]
},
{
"id": 29,
"name": "Result / Both Teams To Score",
"values": [
{
"value": "Home/Yes",
"odd": "8",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away/Yes",
"odd": "17",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Draw/Yes",
"odd": "4.333",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Home/No",
"odd": "1.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away/No",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Draw/No",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
}
]
},
{
"id": 27,
"name": "Home Team Score a Goal (2nd Half)",
"values": [
{
"value": "Yes",
"odd": "2.625",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.444",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 58,
"name": "Home Team Goals",
"values": [
{
"value": "Over",
"odd": "2.625",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.444",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Over",
"odd": "13",
"handicap": "3",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.04",
"handicap": "3",
"main": null,
"suspended": false
}
]
},
{
"id": 46,
"name": "Goal Scorer",
"values": [
{
"value": "Omar Al-Somah",
"odd": "7",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Correa Caio Canedo",
"odd": "10",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Omar Khrbin",
"odd": "8.5",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Ali Saleh",
"odd": "12",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Mahmood Al Mawas",
"odd": "13",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Tahnoon Al Zaabi",
"odd": "15",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Khalil Ibrahim",
"odd": "19",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Oliver Kass Kawo",
"odd": "17",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Abdullah Ramadan",
"odd": "23",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Fahd Youssef",
"odd": "19",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Amro Jenyat",
"odd": "21",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Ali Salmeen",
"odd": "23",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Mouhamad Anez",
"odd": "21",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Tamer Haj Mohamad",
"odd": "26",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Abdelaziz Sanqour",
"odd": "41",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Mahmoud Al Hammadi",
"odd": "41",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Walid Abbas",
"odd": "41",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Moaiad Al Khouli",
"odd": "34",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Mohamad Al Attas",
"odd": "41",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Omar Midani",
"odd": "41",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "No 2nd Goal",
"odd": "2.2",
"handicap": "2",
"main": null,
"suspended": false
}
]
},
{
"id": 21,
"name": "3-Way Handicap",
"values": [
{
"value": "Home",
"odd": "1.025",
"handicap": "1",
"main": false,
"suspended": false
},
{
"value": "Draw",
"odd": "19",
"handicap": "-1",
"main": false,
"suspended": false
},
{
"value": "Away",
"odd": "51",
"handicap": "-1",
"main": false,
"suspended": false
},
{
"value": "Home",
"odd": "51",
"handicap": "-3",
"main": false,
"suspended": false
},
{
"value": "Draw",
"odd": "17",
"handicap": "3",
"main": false,
"suspended": false
},
{
"value": "Away",
"odd": "1.025",
"handicap": "3",
"main": false,
"suspended": false
},
{
"value": "Home",
"odd": "15",
"handicap": "-2",
"main": false,
"suspended": false
},
{
"value": "Draw",
"odd": "4.333",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Away",
"odd": "1.222",
"handicap": "2",
"main": false,
"suspended": false
},
{
"value": "Home",
"odd": "3.75",
"handicap": "-1",
"main": true,
"suspended": false
},
{
"value": "Draw",
"odd": "1.833",
"handicap": "1",
"main": true,
"suspended": false
},
{
"value": "Away",
"odd": "3.4",
"handicap": "1",
"main": true,
"suspended": false
}
]
},
{
"id": 32,
"name": "Asian Corners",
"values": [
{
"value": "Over",
"odd": "2.05",
"handicap": "8",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.75",
"handicap": "8",
"main": null,
"suspended": false
}
]
},
{
"id": 25,
"name": "Match Goals",
"values": [
{
"value": "Over",
"odd": "11",
"handicap": "4",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.05",
"handicap": "4",
"main": null,
"suspended": false
},
{
"value": "Over",
"odd": "1.615",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "2.2",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Over",
"odd": "3.75",
"handicap": "3",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.25",
"handicap": "3",
"main": null,
"suspended": false
}
]
},
{
"id": 35,
"name": "To Win 2nd Half",
"values": [
{
"value": "Home",
"odd": "3.75",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Draw",
"odd": "1.833",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away",
"odd": "3.4",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 45,
"name": "Race to the 7th corner?",
"values": [
{
"value": "1",
"odd": "81",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2",
"odd": "3.4",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Neither",
"odd": "1.3",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 16,
"name": "How many goals will Away Team score?",
"values": [
{
"value": "No goal",
"odd": "1.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "1",
"odd": "2.75",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2",
"odd": "11",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "3 or more",
"odd": "41",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 44,
"name": "Race to the 9th corner?",
"values": [
{
"value": "1",
"odd": "101",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2",
"odd": "15",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Neither",
"odd": "1.03",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 59,
"name": "Fulltime Result",
"values": [
{
"value": "Home",
"odd": "1.3",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Draw",
"odd": "4.333",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away",
"odd": "17",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 72,
"name": "Double Chance",
"values": [
{
"value": "Home or Draw",
"odd": "1.025",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away or Draw",
"odd": "3.4",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Home or Away",
"odd": "1.2",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 66,
"name": "Home Team Clean Sheet",
"values": [
{
"value": "Yes",
"odd": "1.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "2.5",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 90,
"name": "2nd Goal in Interval",
"values": [
{
"value": "Yes",
"odd": "4.5",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.166",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "Yes",
"odd": "2.5",
"handicap": "80",
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.5",
"handicap": "80",
"main": null,
"suspended": false
}
]
},
{
"id": 88,
"name": "Which team will score the 7th corner? (2 Way)",
"values": [
{
"value": "1",
"odd": "2.375",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2",
"odd": "1.533",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 68,
"name": "Goals Odd/Even",
"values": [
{
"value": "Odd",
"odd": "1.615",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Even",
"odd": "2.2",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 39,
"name": "Away Team Goals",
"values": [
{
"value": "Over",
"odd": "11",
"handicap": "2",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "1.05",
"handicap": "2",
"main": null,
"suspended": false
}
]
},
{
"id": 48,
"name": "Draw No Bet",
"values": [
{
"value": "Home",
"odd": "1.05",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away",
"odd": "11",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 65,
"name": "Next 10 Minutes Total",
"values": [
{
"value": "Goals/Over  0.5",
"odd": "3.75",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "Goals/Under  0.5",
"odd": "1.25",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "Corners/Over  0.5",
"odd": "1.571",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "Corners/Under  0.5",
"odd": "2.25",
"handicap": "70",
"main": null,
"suspended": false
}
]
},
{
"id": 37,
"name": "Total Corners",
"values": [
{
"value": "Over",
"odd": "1.615",
"handicap": "8",
"main": null,
"suspended": false
},
{
"value": "Under",
"odd": "2.2",
"handicap": "8",
"main": null,
"suspended": false
}
]
},
{
"id": 52,
"name": "1x2 - 80 minutes",
"values": [
{
"value": "Home",
"odd": "1.142",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Draw",
"odd": "5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away",
"odd": "41",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 69,
"name": "Both Teams to Score",
"values": [
{
"value": "Yes",
"odd": "2.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.5",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 43,
"name": "Both Teams To Score (2nd Half)",
"values": [
{
"value": "Yes",
"odd": "7",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.1",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 56,
"name": "1x2 - 70 minutes",
"values": [
{
"value": "Home",
"odd": "1.055",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Draw",
"odd": "8.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Away",
"odd": "151",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 15,
"name": "Last Corner",
"values": [
{
"value": "1",
"odd": "2.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2",
"odd": "1.5",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 53,
"name": "To Score 2 or More",
"values": [
{
"value": "Correa Caio Canedo",
"odd": "6.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Omar Al-Somah",
"odd": "34",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Omar Khrbin",
"odd": "51",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Ali Saleh",
"odd": "101",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Tahnoon Al Zaabi",
"odd": "101",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mahmood Al Mawas",
"odd": "101",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Khalil Ibrahim",
"odd": "126",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Abdullah Ramadan",
"odd": "151",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Oliver Kass Kawo",
"odd": "101",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Ali Salmeen",
"odd": "151",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Amro Jenyat",
"odd": "126",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Fahd Youssef",
"odd": "126",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mouhamad Anez",
"odd": "126",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Abdelaziz Sanqour",
"odd": "251",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Walid Abbas",
"odd": "301",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mohamad Al Attas",
"odd": "301",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Tamer Haj Mohamad",
"odd": "151",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Moaiad Al Khouli",
"odd": "251",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Omar Midani",
"odd": "301",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mahmoud Al Hammadi",
"odd": "251",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 62,
"name": "Last Team to Score (3 way)",
"values": [
{
"value": "1",
"odd": "1.363",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No goal",
"odd": "3.4",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "2",
"odd": "3",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 47,
"name": "Away 1st Goal in Interval",
"values": [
{
"value": "Yes",
"odd": "7.5",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.071",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "Yes",
"odd": "4",
"handicap": "80",
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.222",
"handicap": "80",
"main": null,
"suspended": false
}
]
},
{
"id": 70,
"name": "Away Team Score a Goal (2nd Half)",
"values": [
{
"value": "Yes",
"odd": "2.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.5",
"handicap": null,
"main": null,
"suspended": false
}
]
},
{
"id": 95,
"name": "Home 2nd Goal in Interval",
"values": [
{
"value": "Yes",
"odd": "8",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.062",
"handicap": "70",
"main": null,
"suspended": false
},
{
"value": "Yes",
"odd": "4.333",
"handicap": "80",
"main": null,
"suspended": false
},
{
"value": "No",
"odd": "1.2",
"handicap": "80",
"main": null,
"suspended": false
}
]
},
{
"id": 63,
"name": "Anytime Goal Scorer",
"values": [
{
"value": "Correa Caio Canedo",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Omar Al-Somah",
"odd": "5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Omar Khrbin",
"odd": "6",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Ali Saleh",
"odd": "8.5",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Tahnoon Al Zaabi",
"odd": "11",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mahmood Al Mawas",
"odd": "9",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Khalil Ibrahim",
"odd": "13",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Abdullah Ramadan",
"odd": "17",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Oliver Kass Kawo",
"odd": "12",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Ali Salmeen",
"odd": "17",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Fahd Youssef",
"odd": "13",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Amro Jenyat",
"odd": "15",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mouhamad Anez",
"odd": "15",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Tamer Haj Mohamad",
"odd": "19",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Abdelaziz Sanqour",
"odd": "26",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Walid Abbas",
"odd": "29",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Mohamad Al Attas",
"odd": "29",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Moaiad Al Khouli",
"odd": "26",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "Omar Midani",
"odd": "29",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No 1st Goal",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "Mahmoud Al Hammadi",
"odd": "26",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "No 2nd Goal",
"odd": "0",
"handicap": null,
"main": null,
"suspended": true
}
]
},
{
"id": 67,
"name": "How many goals will Home Team score?",
"values": [
{
"value": "No goal",
"odd": "2",
"handicap": null,
"main": null,
"suspended": true
},
{
"value": "1",
"odd": "1.444",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "2",
"odd": "3.25",
"handicap": null,
"main": null,
"suspended": false
},
{
"value": "3 or more",
"odd": "13",
"handicap": null,
"main": null,
"suspended": false
}
]
}
]
}
]
}
odds/live/bets
Get all available bets for in-play odds.

All bets id can be used in endpoint odds/live as filters, but are not compatible with endpoint odds for pre-match odds.

Update Frequency : This endpoint is updated every 60 seconds.

query Parameters
id	
string
The id of the bet name

search	
string = 3 characters
The name of the bet

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
/odds/live/bets

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available bets
get("https://v3.football.api-sports.io/odds/live/bets");

// Get bet from one {id}
get("https://v3.football.api-sports.io/odds/live/bets?id=1");

// Allows you to search for a bet in relation to a bets {name}
get("https://v3.football.api-sports.io/odds/live/bets?search=winner");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "odds/live/bets",
"parameters": [ ],
"errors": [ ],
"results": 137,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"id": 1,
"name": "Over/Under Extra Time"
},
{
"id": 2,
"name": "1x2 Extra Time"
},
{
"id": 3,
"name": "Extra Time Asian Corners"
},
{
"id": 4,
"name": "Extra Time Total Corners (3 Ways) (1st Half)"
},
{
"id": 5,
"name": "Extra Time Double Result"
},
{
"id": 6,
"name": "Which team will score the 1st goal in extra time?"
},
{
"id": 7,
"name": "Extra Time Asian Corners (1st Half)"
},
{
"id": 8,
"name": "Method of Victory"
},
{
"id": 9,
"name": "Both Teams To Score (ET)"
},
{
"id": 10,
"name": "To Qualify"
},
{
"id": 11,
"name": "Asian Handicap Extra Time"
},
{
"id": 12,
"name": "1x2 Extra Time (1st Half)"
},
{
"id": 13,
"name": "Extra Time Total Corners (3 Ways)"
},
{
"id": 14,
"name": "Over/Under Extra Time (1st Half)"
},
{
"id": 15,
"name": "Last Corner"
},
{
"id": 16,
"name": "How many goals will Away Team score?"
},
{
"id": 17,
"name": "Asian Handicap (1st Half)"
},
{
"id": 18,
"name": "1st Goal in Interval"
},
{
"id": 19,
"name": "1x2 (1st Half)"
},
{
"id": 20,
"name": "Match Corners"
},
{
"id": 21,
"name": "3-Way Handicap"
},
{
"id": 22,
"name": "1x2 - 30 minutes"
},
{
"id": 23,
"name": "Final Score"
},
{
"id": 24,
"name": "Over/Under Line (1st Half)"
},
{
"id": 25,
"name": "Match Goals"
},
{
"id": 26,
"name": "European Handicap (1st Half)"
},
{
"id": 27,
"name": "Home Team Score a Goal (2nd Half)"
},
{
"id": 28,
"name": "Home Team  to Score in Both Halves"
},
{
"id": 29,
"name": "Result / Both Teams To Score"
},
{
"id": 30,
"name": "Both Teams To Score (1st Half)"
},
{
"id": 31,
"name": "Total Corners (3way) (2nd Half)"
},
{
"id": 32,
"name": "Asian Corners"
},
{
"id": 33,
"name": "Asian Handicap"
},
{
"id": 34,
"name": "1x2 - 40 minutes"
},
{
"id": 35,
"name": "To Win 2nd Half"
},
{
"id": 36,
"name": "Over/Under Line"
},
{
"id": 37,
"name": "Total Corners"
},
{
"id": 38,
"name": "Away Team to Score in Both Halves"
},
{
"id": 39,
"name": "Away Team Goals"
},
{
"id": 40,
"name": "Total Corners (3 way) (1st Half)"
},
{
"id": 41,
"name": "1x2 - 50 minutes"
},
{
"id": 42,
"name": "Race to the 3rd corner?"
},
{
"id": 43,
"name": "Both Teams To Score (2nd Half)"
},
{
"id": 44,
"name": "Race to the 9th corner?"
},
{
"id": 45,
"name": "Race to the 7th corner?"
},
{
"id": 46,
"name": "Goal Scorer"
},
{
"id": 47,
"name": "Away 1st Goal in Interval"
},
{
"id": 48,
"name": "Draw No Bet"
},
{
"id": 49,
"name": "Over/Under (1st Half)"
},
{
"id": 50,
"name": "1x2 - 60 minutes"
},
{
"id": 51,
"name": "Asian Corners (1st Half)"
},
{
"id": 52,
"name": "1x2 - 80 minutes"
},
{
"id": 53,
"name": "To Score 2 or More"
},
{
"id": 54,
"name": "Home 1st Goal in Interval"
},
{
"id": 55,
"name": "Correct Score (1st Half)"
},
{
"id": 56,
"name": "1x2 - 70 minutes"
},
{
"id": 57,
"name": "Away Team Clean Sheet"
},
{
"id": 58,
"name": "Home Team Goals"
},
{
"id": 59,
"name": "Fulltime Result"
},
{
"id": 60,
"name": "To Score 3 or More"
},
{
"id": 61,
"name": "Race to the 5th corner?"
},
{
"id": 62,
"name": "Last Team to Score (3 way)"
},
{
"id": 63,
"name": "Anytime Goal Scorer"
},
{
"id": 64,
"name": "Half Time/Full Time"
},
{
"id": 65,
"name": "Next 10 Minutes Total"
},
{
"id": 66,
"name": "Home Team Clean Sheet"
},
{
"id": 67,
"name": "How many goals will Home Team score?"
},
{
"id": 68,
"name": "Goals Odd/Even"
},
{
"id": 69,
"name": "Both Teams to Score"
},
{
"id": 70,
"name": "Away Team Score a Goal (2nd Half)"
},
{
"id": 71,
"name": "Which team will score the 4th corner? (2 Way)"
},
{
"id": 72,
"name": "Double Chance"
},
{
"id": 73,
"name": "Which team will score the 1st goal?"
},
{
"id": 74,
"name": "Which team will score the 3rd corner? (2 Way)"
},
{
"id": 75,
"name": "Which team will score the 2nd corner? (2 Way)"
},
{
"id": 76,
"name": "Corners European Handicap"
},
{
"id": 77,
"name": "1x2 - 10 minutes"
},
{
"id": 78,
"name": "Corners 1x2"
},
{
"id": 79,
"name": "1x2 - 20 minutes"
},
{
"id": 80,
"name": "Method of 1st Goal"
},
{
"id": 81,
"name": "Method of Qualification"
},
{
"id": 82,
"name": "Game Won After Penalties Shootout"
},
{
"id": 83,
"name": "Game Won In Extra Time"
},
{
"id": 84,
"name": "Which team will score the 2nd goal?"
},
{
"id": 85,
"name": "Which team will score the 2nd goal?"
},
{
"id": 86,
"name": "Which team will score the 6th corner? (2 Way)"
},
{
"id": 87,
"name": "Which team will score the 5th corner? (2 Way)"
},
{
"id": 88,
"name": "Which team will score the 7th corner? (2 Way)"
},
{
"id": 89,
"name": "Which team will score the 9th corner? (2 Way)"
},
{
"id": 90,
"name": "2nd Goal in Interval"
},
{
"id": 91,
"name": "Away 2nd Goal in Interval"
},
{
"id": 92,
"name": "Which team will score the 3rd goal?"
},
{
"id": 93,
"name": "Which team will score the 10th corner? (2 Way)"
},
{
"id": 94,
"name": "3rd Goal in Interval"
},
{
"id": 95,
"name": "Home 2nd Goal in Interval"
},
{
"id": 96,
"name": "Asian Handicap Converted Penalties"
},
{
"id": 97,
"name": "Sudden Death"
},
{
"id": 98,
"name": "Away Penalty Shootout"
},
{
"id": 99,
"name": "Home Penalty Shootout"
},
{
"id": 100,
"name": "Home Total Converted Penalties"
},
{
"id": 101,
"name": "Total Penalties in Shootout"
},
{
"id": 102,
"name": "Last Penalty Score/Miss"
},
{
"id": 103,
"name": "Correct Score in Shootouts"
},
{
"id": 104,
"name": "Total Converted Penalties"
},
{
"id": 105,
"name": "Total Converted Penalties - Goal Line"
},
{
"id": 106,
"name": "Away Total Converted Penalties"
},
{
"id": 107,
"name": "Penalties Shootout Winner"
},
{
"id": 108,
"name": "Which team will score the 11th corner? (2 Way)"
},
{
"id": 109,
"name": "Which team will score the 4th goal?"
},
{
"id": 110,
"name": "Which team will score the 8th corner? (2 Way)"
},
{
"id": 111,
"name": "Last Penalty Scorer in Shootout"
},
{
"id": 112,
"name": "Which team will score the 5th goal?"
},
{
"id": 113,
"name": "Method of 2nd Goal"
},
{
"id": 114,
"name": "Which team will score the 13th corner? (2 Way)"
},
{
"id": 115,
"name": "Player to be Booked"
},
{
"id": 116,
"name": "Action In Next 1 Minutes"
},
{
"id": 117,
"name": "First Action In Next 5 Minutes"
},
{
"id": 118,
"name": "Player to be Sent Off"
},
{
"id": 119,
"name": "Total Cards"
},
{
"id": 120,
"name": "Which team will score the 12th corner? (2 Way)"
},
{
"id": 121,
"name": "Which team will score the 14th corner? (2 Way)"
},
{
"id": 122,
"name": "Which team will score the 15th corner? (2 Way)"
},
{
"id": 123,
"name": "Which team will score the 16th corner? (2 Way)"
},
{
"id": 124,
"name": "Which team will score the 17th corner? (2 Way)"
},
{
"id": 125,
"name": "Home 3rd Goal in Interval"
},
{
"id": 126,
"name": "Which team will score the 18th corner? (2 Way)"
},
{
"id": 127,
"name": "Which team will score the 6th goal?"
},
{
"id": 128,
"name": "Away 3rd Goal in Interval"
},
{
"id": 129,
"name": "Which team will score the 2nd goal in extra time?"
},
{
"id": 130,
"name": "Method of 3rd Goal"
},
{
"id": 131,
"name": "4th Goal in Interval"
},
{
"id": 132,
"name": "Which team will score the 7th goal?"
},
{
"id": 133,
"name": "Which team will score the 19th corner? (2 Way)"
},
{
"id": 134,
"name": "Home 4th Goal in Interval"
},
{
"id": 135,
"name": "Away 4th Goal in Interval"
},
{
"id": 136,
"name": "5th Goal in Interval"
},
{
"id": 137,
"name": "Home 5th Goal in Interval"
}
]
}
Odds (Pre-Match)
Odds
Get odds from fixtures, leagues or date.

This endpoint uses a pagination system, you can navigate between the different pages with to the page parameter.

Pagination : 10 results per page.

We provide pre-match odds between 1 and 14 days before the fixture.

We keep a 7-days history (The availability of odds may vary according to the leagues, seasons, fixtures and bookmakers)

Update Frequency : This endpoint is updated every 3 hours.

Recommended Calls : 1 call every 3 hours.

query Parameters
fixture	
integer
The id of the fixture

league	
integer
The id of the league

season	
integer = 4 characters YYYY
The season of the league

date	
stringYYYY-MM-DD
A valid date

timezone	
string
A valid timezone from the endpoint Timezone

page	
integer
Default: 1
Use for the pagination

bookmaker	
integer
The id of the bookmaker

bet	
integer
The id of the bet

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
/odds

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available odds from one {fixture}
get("https://v3.football.api-sports.io/odds?fixture=164327");

// Get all available odds from one {league} & {season}
get("https://v3.football.api-sports.io/odds?league=39&season=2019");

// Get all available odds from one {date}
get("https://v3.football.api-sports.io/odds?date=2020-05-15");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/odds?bookmaker=1&bet=4&league=39&season=2019");
get("https://v3.football.api-sports.io/odds?bet=4&fixture=164327");
get("https://v3.football.api-sports.io/odds?bookmaker=1&league=39&season=2019");
get("https://v3.football.api-sports.io/odds?date=2020-05-15&page=2&bet=4");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "odds",
"parameters": {
"fixture": "326090",
"bookmaker": "6"
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
"id": 116,
"name": "Vysshaya Liga",
"country": "Belarus",
"logo": "https://media.api-sports.io/football/leagues/116.png",
"flag": "https://media.api-sports.io/flags/by.svg",
"season": 2020
},
"fixture": {
"id": 326090,
"timezone": "UTC",
"date": "2020-05-15T15:00:00+00:00",
"timestamp": 1589554800
},
"update": "2020-05-15T09:49:32+00:00",
"bookmakers": [
{
"id": 6,
"name": "Bwin",
"bets": [
{
"id": 38,
"name": "Exact Goals Number",
"values": [
{
"value": 4,
"odd": "7.00"
},
{
"value": 3,
"odd": "4.40"
},
{
"value": 2,
"odd": "3.40"
},
{
"value": "more 8",
"odd": "251.00"
},
{
"value": 7,
"odd": "101.00"
},
{
"value": "more 5",
"odd": "8.00"
},
{
"value": 6,
"odd": "31.00"
},
{
"value": 5,
"odd": "14.00"
},
{
"value": 0,
"odd": "6.25"
},
{
"value": 1,
"odd": "3.90"
}
]
},
{
"id": 20,
"name": "Double Chance - First Half",
"values": [
{
"value": "Home/Draw",
"odd": "1.20"
},
{
"value": "Home/Away",
"odd": "1.75"
},
{
"value": "Draw/Away",
"odd": "1.26"
}
]
},
{
"id": 17,
"name": "Total - Away",
"values": [
{
"value": "Under 2.5",
"odd": "1.06"
},
{
"value": "Over 2.5",
"odd": "7.25"
},
{
"value": "Under 1.5",
"odd": "1.33"
},
{
"value": "Over 1.5",
"odd": "3.10"
}
]
},
{
"id": 16,
"name": "Total - Home",
"values": [
{
"value": "Under 2.5",
"odd": "1.09"
},
{
"value": "Over 2.5",
"odd": "6.25"
},
{
"value": "Under 1.5",
"odd": "1.40"
},
{
"value": "Over 1.5",
"odd": "2.70"
}
]
},
{
"id": 22,
"name": "Odd/Even - First Half",
"values": [
{
"value": "Even",
"odd": "1.60"
},
{
"value": "Odd",
"odd": "2.20"
}
]
},
{
"id": 21,
"name": "Odd/Even",
"values": [
{
"value": "Even",
"odd": "1.80"
},
{
"value": "Odd",
"odd": "1.91"
}
]
},
{
"id": 34,
"name": "Both Teams Score - First Half",
"values": [
{
"value": "No",
"odd": "1.14"
},
{
"value": "Yes",
"odd": "5.00"
}
]
},
{
"id": 32,
"name": "Win Both Halves",
"values": [
{
"value": "Away",
"odd": "10.50"
},
{
"value": "Draw",
"odd": "1.13"
},
{
"value": "Home",
"odd": "8.00"
}
]
},
{
"id": 12,
"name": "Double Chance",
"values": [
{
"value": "Draw/Away",
"odd": "1.50"
},
{
"value": "Home/Away",
"odd": "1.33"
},
{
"value": "Home/Draw",
"odd": "1.36"
}
]
},
{
"id": 10,
"name": "Exact Score",
"values": [
{
"value": "3:4",
"odd": "126.00"
},
{
"value": "2:4",
"odd": "81.00"
},
{
"value": "2:3",
"odd": "36.00"
},
{
"value": "1:4",
"odd": "67.00"
},
{
"value": "1:3",
"odd": "26.00"
},
{
"value": "1:2",
"odd": "11.50"
},
{
"value": "0:4",
"odd": "67.00"
},
{
"value": "4:1",
"odd": "51.00"
},
{
"value": "4:0",
"odd": "51.00"
},
{
"value": "3:2",
"odd": "34.00"
},
{
"value": "3:1",
"odd": "21.00"
},
{
"value": "3:0",
"odd": "23.00"
},
{
"value": "2:1",
"odd": "10.50"
},
{
"value": "2:0",
"odd": "11.50"
},
{
"value": "1:0",
"odd": "7.25"
},
{
"value": "4:2",
"odd": "81.00"
},
{
"value": "4:3",
"odd": "126.00"
},
{
"value": "0:3",
"odd": "31.00"
},
{
"value": "0:2",
"odd": "14.00"
},
{
"value": "0:1",
"odd": "8.25"
},
{
"value": "4:4",
"odd": "151.00"
},
{
"value": "3:3",
"odd": "67.00"
},
{
"value": "2:2",
"odd": "16.00"
},
{
"value": "1:1",
"odd": "6.25"
},
{
"value": "0:0",
"odd": "6.25"
}
]
},
{
"id": 13,
"name": "First Half Winner",
"values": [
{
"value": "Home",
"odd": "3.20"
},
{
"value": "Draw",
"odd": "1.90"
},
{
"value": "Away",
"odd": "3.70"
}
]
},
{
"id": 15,
"name": "Team To Score Last",
"values": [
{
"value": "No goal",
"odd": "6.25"
},
{
"value": "Away",
"odd": "2.15"
},
{
"value": "Home",
"odd": "1.95"
}
]
},
{
"id": 14,
"name": "Team To Score First",
"values": [
{
"value": "Away",
"odd": "2.15"
},
{
"value": "Draw",
"odd": "6.25"
},
{
"value": "Home",
"odd": "1.95"
}
]
},
{
"id": 46,
"name": "Exact Goals Number - First Half",
"values": [
{
"value": "more 3",
"odd": "8.25"
},
{
"value": 0,
"odd": "2.35"
},
{
"value": 1,
"odd": "2.60"
},
{
"value": 2,
"odd": "4.75"
}
]
},
{
"id": 25,
"name": "Result/Total Goals",
"values": [
{
"value": "Home/Over 2.5",
"odd": "4.60"
},
{
"value": "Away/Under 3.5",
"odd": "3.50"
},
{
"value": "Home/Under 3.5",
"odd": "3.00"
},
{
"value": "Away/Over 3.5",
"odd": "12.00"
},
{
"value": "Home/Over 3.5",
"odd": "9.25"
},
{
"value": "Away/Over 2.5",
"odd": "5.50"
},
{
"value": "Home/Under 2.5",
"odd": "4.50"
},
{
"value": "Away/Under 2.5",
"odd": "5.25"
}
]
},
{
"id": 24,
"name": "Results/Both Teams Score",
"values": [
{
"value": "Away/No",
"odd": "4.40"
},
{
"value": "Draw/No",
"odd": "6.25"
},
{
"value": "Home/No",
"odd": "3.75"
},
{
"value": "Away/Yes",
"odd": "6.50"
},
{
"value": "Draw/Yes",
"odd": "4.50"
},
{
"value": "Home/Yes",
"odd": "5.50"
}
]
},
{
"id": 44,
"name": "Away Team Score a Goal",
"values": [
{
"value": "No",
"odd": "2.55"
},
{
"value": "Yes",
"odd": "1.45"
}
]
},
{
"id": 43,
"name": "Home Team Score a Goal",
"values": [
{
"value": "No",
"odd": "2.90"
},
{
"value": "Yes",
"odd": "1.36"
}
]
},
{
"id": 40,
"name": "Home Team Exact Goals Number",
"values": [
{
"value": 1,
"odd": "2.55"
},
{
"value": 2,
"odd": "4.20"
},
{
"value": 0,
"odd": "2.90"
},
{
"value": "more 3",
"odd": "6.25"
}
]
},
{
"id": 42,
"name": "Second Half Exact Goals Number",
"values": [
{
"value": "more 3",
"odd": "5.50"
},
{
"value": 0,
"odd": "3.00"
},
{
"value": 1,
"odd": "2.60"
},
{
"value": 2,
"odd": "3.90"
}
]
},
{
"id": 41,
"name": "Away Team Exact Goals Number",
"values": [
{
"value": "more 3",
"odd": "7.25"
},
{
"value": 0,
"odd": "2.55"
},
{
"value": 1,
"odd": "2.50"
},
{
"value": 2,
"odd": "4.60"
}
]
},
{
"id": 7,
"name": "HT/FT Double",
"values": [
{
"value": "Home/Home",
"odd": "4.20"
},
{
"value": "Draw/Draw",
"odd": "4.10"
},
{
"value": "Draw/Away",
"odd": "6.75"
},
{
"value": "Home/Away",
"odd": "36.00"
},
{
"value": "Home/Draw",
"odd": "14.50"
},
{
"value": "Away/Away",
"odd": "5.00"
},
{
"value": "Away/Draw",
"odd": "14.50"
},
{
"value": "Away/Home",
"odd": "31.00"
},
{
"value": "Draw/Home",
"odd": "5.75"
}
]
},
{
"id": 26,
"name": "Goals Over/Under - Second Half",
"values": [
{
"value": "Under 3.5",
"odd": "1.01"
},
{
"value": "Over 3.5",
"odd": "12.00"
},
{
"value": "Over 1.5",
"odd": "2.50"
},
{
"value": "Under 1.5",
"odd": "1.48"
},
{
"value": "Under 0.5",
"odd": "3.00"
},
{
"value": "Over 0.5",
"odd": "1.34"
},
{
"value": "Under 2.5",
"odd": "1.11"
},
{
"value": "Over 2.5",
"odd": "5.50"
}
]
},
{
"id": 6,
"name": "Goals Over/Under First Half",
"values": [
{
"value": "Under 0.5",
"odd": "2.35"
},
{
"value": "Over 0.5",
"odd": "1.53"
},
{
"value": "Under 2.5",
"odd": "1.04"
},
{
"value": "Over 2.5",
"odd": "8.25"
},
{
"value": "Under 1.5",
"odd": "1.28"
},
{
"value": "Over 1.5",
"odd": "3.30"
},
{
"value": "Under 3.5",
"odd": "1.01"
},
{
"value": "Over 3.5",
"odd": "21.00"
}
]
},
{
"id": 5,
"name": "Goals Over/Under",
"values": [
{
"value": "Under 5.5",
"odd": "1.01"
},
{
"value": "Over 3.5",
"odd": "4.20"
},
{
"value": "Under 3.5",
"odd": "1.19"
},
{
"value": "Over 1.5",
"odd": "1.44"
},
{
"value": "Over 5.5",
"odd": "15.00"
},
{
"value": "Under 0.5",
"odd": "6.25"
},
{
"value": "Over 0.5",
"odd": "1.09"
},
{
"value": "Under 2.5",
"odd": "1.55"
},
{
"value": "Over 2.5",
"odd": "2.35"
},
{
"value": "Under 4.5",
"odd": "1.05"
},
{
"value": "Over 4.5",
"odd": "8.00"
},
{
"value": "Under 1.5",
"odd": "2.60"
}
]
},
{
"id": 3,
"name": "Second Half Winner",
"values": [
{
"value": "Away",
"odd": "3.30"
},
{
"value": "Draw",
"odd": "2.20"
},
{
"value": "Home",
"odd": "2.85"
}
]
},
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Away",
"odd": "2.05"
},
{
"value": "Home",
"odd": "1.70"
}
]
},
{
"id": 1,
"name": "Match Winner",
"values": [
{
"value": "Away",
"odd": "2.95"
},
{
"value": "Draw",
"odd": "2.95"
},
{
"value": "Home",
"odd": "2.50"
}
]
},
{
"id": 9,
"name": "Handicap Result",
"values": [
{
"value": "Away -2",
"odd": "1.13"
},
{
"value": "Draw -2",
"odd": "7.00"
},
{
"value": "Home -2",
"odd": "12.00"
},
{
"value": "Home -1",
"odd": "5.25"
},
{
"value": "Away +2",
"odd": "15.00"
},
{
"value": "Draw +2",
"odd": "8.25"
},
{
"value": "Home +2",
"odd": "1.09"
},
{
"value": "Draw +1",
"odd": "4.40"
},
{
"value": "Away +1",
"odd": "6.75"
},
{
"value": "Home +1",
"odd": "1.36"
},
{
"value": "Draw -1",
"odd": "4.00"
},
{
"value": "Away -1",
"odd": "1.50"
}
]
},
{
"id": 30,
"name": "Win to Nil - Away",
"values": [
{
"value": "Yes",
"odd": "4.40"
},
{
"value": "No",
"odd": "1.17"
}
]
},
{
"id": 29,
"name": "Win to Nil - Home",
"values": [
{
"value": "No",
"odd": "1.22"
},
{
"value": "Yes",
"odd": "3.75"
}
]
},
{
"id": 8,
"name": "Both Teams Score",
"values": [
{
"value": "No",
"odd": "1.72"
},
{
"value": "Yes",
"odd": "2.00"
}
]
}
]
}
]
}
]
}
Mapping
Get the list of available fixtures id for the endpoint odds.

All fixtures, leagues id and date can be used in endpoint odds as filters.

This endpoint uses a pagination system, you can navigate between the different pages with to the page parameter.

Pagination : 100 results per page.

Update Frequency : This endpoint is updated every day.

Recommended Calls : 1 call per day.

query Parameters
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
/odds/mapping

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v3.football.api-sports.io/odds/mapping');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v3.football.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "odds/mapping",
"parameters": [ ],
"errors": [ ],
"results": 129,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"league": {
"id": 106,
"season": 2019
},
"fixture": {
"id": 154507,
"date": "2020-05-29T18:30:00+00:00",
"timestamp": 1590777000
},
"update": "2020-05-15T09:52:28+00:00"
},
{
"league": {
"id": 106,
"season": 2019
},
"fixture": {
"id": 154508,
"date": "2020-05-29T16:00:00+00:00",
"timestamp": 1590768000
},
"update": "2020-05-15T09:52:28+00:00"
},
{
"league": {
"id": 271,
"season": 2019
},
"fixture": {
"id": 182450,
"date": "2020-05-23T13:55:00+00:00",
"timestamp": 1590242100
},
"update": "2020-05-15T09:51:45+00:00"
},
{
"league": {
"id": 271,
"season": 2019
},
"fixture": {
"id": 182564,
"date": "2020-05-27T18:00:00+00:00",
"timestamp": 1590602400
},
"update": "2020-05-15T09:52:17+00:00"
}
]
}
Bookmakers
Get all available bookmakers.

All bookmakers id can be used in endpoint odds as filters.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

query Parameters
id	
integer
The id of the bookmaker

search	
string = 3 characters
The name of the bookmaker

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
/odds/bookmakers

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available bookmakers
get("https://v3.football.api-sports.io/odds/bookmakers");

// Get bookmaker from one {id}
get("https://v3.football.api-sports.io/odds/bookmakers?id=1");

// Allows you to search for a bookmaker in relation to a bookmakers {name}
get("https://v3.football.api-sports.io/odds/bookmakers?search=Betfair");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "odds/bookmakers",
"parameters": [ ],
"errors": [ ],
"results": 15,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"id": 1,
"name": "10Bet"
},
{
"id": 2,
"name": "Marathonbet"
},
{
"id": 3,
"name": "Betfair"
},
{
"id": 4,
"name": "Pinnacle"
},
{
"id": 5,
"name": "Sport Betting Online"
},
{
"id": 6,
"name": "Bwin"
},
{
"id": 7,
"name": "William Hill"
},
{
"id": 8,
"name": "Bet365"
},
{
"id": 9,
"name": "Dafabet"
},
{
"id": 10,
"name": "Ladbrokes"
},
{
"id": 11,
"name": "1xBet"
},
{
"id": 12,
"name": "BetFred"
},
{
"id": 13,
"name": "188Bet"
},
{
"id": 15,
"name": "Interwetten"
},
{
"id": 16,
"name": "Unibet"
}
]
}
Bets
Get all available bets for pre-match odds.

All bets id can be used in endpoint odds as filters, but are not compatible with endpoint odds/live for in-play odds.

Update Frequency : This endpoint is updated several times a week.

Recommended Calls : 1 call per day.

query Parameters
id	
string
The id of the bet name

search	
string = 3 characters
The name of the bet

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
/odds/bets

Request samples
Use CasesPhpPythonNodeJavaScriptCurlRuby

Copy
// Get all available bets
get("https://v3.football.api-sports.io/odds/bets");

// Get bet from one {id}
get("https://v3.football.api-sports.io/odds/bets?id=1");

// Allows you to search for a bet in relation to a bets {name}
get("https://v3.football.api-sports.io/odds/bets?search=winner");
Response samples
200204499500
Content type
application/json

Copy
Expand allCollapse all
{
"get": "odds/bets",
"parameters": {
"search": "under"
},
"errors": [ ],
"results": 7,
"paging": {
"current": 1,
"total": 1
},
"response": [
{
"id": 5,
"name": "Goals Over/Under"
},
{
"id": 6,
"name": "Goals Over/Under First Half"
},
{
"id": 26,
"name": "Goals Over/Under - Second Half"
},
{
"id": 45,
"name": "Corners Over Under"
},
{
"id": 57,
"name": "Home Corners Over/Under"
},
{
"id": 58,
"name": "Away Corners Over/Under"
},
{
"id": 74,
"name": "10 Over/Under"
}
]
}
