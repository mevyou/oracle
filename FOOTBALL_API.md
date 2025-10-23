api-football logo
Search...
Introduction
Authentication
Architecture
Logos / Images
Sample Scripts
Changelog
Integrations
CDN
Databases Solutions
Widgets
Widgets
Endpoints
Timezone
Countries
Leagues
Teams
Venues
Standings
Fixtures
Injuries
Predictions
Coachs
Players
Transfers
Trophies
Sidelined
Odds (In-Play)
Odds (Pre-Match)
redocly logoAPI docs by Redocly
API-FOOTBALL (3.9.3)
support: https://dashboard.api-football.com
URL: https://www.api-football.com
Introduction
Welcome to Api-Football! You can use our API to access all API endpoints, which can get information about Football Leagues & Cups.

We have language bindings in C, C#, cURL, Dart, Go, Java, Javascript, NodeJs, Objective-c, OCaml, Php, PowerShell, Python, Ruby, Shell and Swift! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

The update frequency indicated in the documentation is given as an indication and may vary for certain competitions.

Authentication
We uses API keys to allow access to the API. You can register a new API key in our dashboard.

The accounts on RapidAPI and on our Dashboard are dissociated. Each of these registration methods has its own URL and API-KEY. You must therefore adapt your scripts according to your subscription by adapting the URL and your API-KEY.

RAPIDAPI : https://api-football-v1.p.rapidapi.com/v3/

API-SPORTS : https://v3.football.api-sports.io/

Our API expects for the API key to be included in all API requests to the server in a header that looks like the following:

Make sure to replace XxXxXxXxXxXxXxXxXxXxXxXx with your API key.

REQUESTS HEADERS & CORS

The API is configured to work only with GET requests and allows only the headers listed below:

x-rapidapi-host
x-rapidapi-key
x-apisports-key
If you make non-GET requests or add headers that are not in the list, you will receive an error from the API.

Some frameworks (especially in JS, nodeJS..) automatically add extra headers, you have to make sure to remove them in order to get a response from the API.

API-SPORTS Account
If you decided to subscribe directly on our site, you have a dashboard at your disposal at the following url: dashboard

It allows you to:

To follow your consumption in real time
Manage your subscription and change it if necessary
Check the status of our servers
Test all endpoints without writing a line of code.
You can also consult all this information directly through the API by calling the endpoint status.

This call does not count against the daily quota.

get("https://v3.football.api-sports.io/status");

// response
{
    "get": "status",
    "parameters": [],
    "errors": [],
    "results": 1,
    "response": {
        "account": {
            "firstname": "xxxx",
            "lastname": "XXXXXX",
            "email": "xxx@xxx.com"
        },
        "subscription": {
            "plan": "Free",
            "end": "2020-04-10T23:24:27+00:00",
            "active": true
        },
        "requests": {
            "current": 12,
            "limit_day": 100
        }
    }
}
Headers sent as response
When consuming our API, you will always receive the following headers appended to the response:

x-ratelimit-requests-limit: The number of requests allocated per day according to your subscription.
x-ratelimit-requests-remaining: The number of remaining requests per day according to your subscription.
X-RateLimit-Limit: Maximum number of API calls per minute.
X-RateLimit-Remaining: Number of API calls remaining before reaching the limit per minute.
Rate Limiting Policy
If you exceed your allowed request rate per minute, either through continuous excessive usage or by generating abnormal traffic spikes, your access may be temporarily or permanently blocked by our firewall without prior notice. This ensures service stability and fair usage for all customers.

Dashboard
dashboard

Requests
requests

Live tester
requests

RAPIDAPI Account
All information related to your subscription are available on the rapidApi developer dashboard.

The RapidAPI developer dashboard is where you can see all of your apps, locate API keys, view analytics, and manage billing settings.

To access the dashboard, simply login to RapidAPI and select 'My Apps' in the top-right menu. Alternatively, you can head directly to https://rapidapi.com/developer/dashboard.

In the main dashboard, you will see account-wide analytics and account information. To get more detailed information, you can select tabs on the left-hand side of the screen.

App Specific Analytics
Using the RapidAPI dashboard, you can also view analytics specific to each app in your account. To do so, switch over to the 'Analytics' tab of your application in the dashboard.

On the top of the page, you'll be able to see a chart with all the calls being made to all the APIs your app is connected to. You'll also be able to see a log with all the request data. You are also able to filter these analytics to only show certain APIs within the app.

In each graph, you can view the following metrics:

API Calls: how many requests are being made
Error rates: how many requests are error some
Latency: how long (on average) requests take to execute
You may change the time period you're looking at by clicking the calendar icon and choosing a time range.

Headers sent as response
When consuming our API, you will always receive the following headers appended to the response:

server: The current version of the API proxy used by RapidAPI.
x-ratelimit-requests-limit: The number of requests the plan you are currently subscribed to allows you to make, before incurring overages.
x-ratelimit-requests-remaining: The number of requests remaining before you reach the limit of requests your application is allowed to make, before experiencing overage charges.
X-RapidAPI-Proxy-Response: This header is set to true when the RapidAPI proxy generates the response, (i.e. the response is not generated from our servers)
Architecture
image

Logos / Images
Calls to logos/images do not count towards your daily quota and are provided for free. However these calls are subject to a rate per second & minute, it is recommended to save this data on your side in order not to slow down or impact the user experience of your application or website. For this you can use CDNs such as bunny.net.

We have a tutorial available here, which explains how to set up your own media system with BunnyCDN.

Logos, images and trademarks delivered through the API are provided solely for identification and descriptive purposes (e.g., identifying leagues, teams, players or venues). We does not own any of these visual assets, and no intellectual property rights are claimed over them. Some images or data may be subject to intellectual property or trademark rights held by third parties (including but not limited to leagues, federations, or clubs). The use of such content in your applications, websites, or products may require additional authorization or licensing from the respective rights holders. You are fully responsible for ensuring that your usage of any logos, images, or branded content complies with applicable laws in your country or the countries where your services are made available. We are not affiliated with, sponsored by, or endorsed by any sports league, federation, or brand featured in the data provided.

Sample Scripts
Here are some examples of how the API is used in the main development languages.

You have to replace {endpoint} by the real name of the endpoint you want to call, like leagues or fixtures for example. In all the sample scripts we will use the leagues endpoint as example.

Also you will have to replace XxXxXxXxXxXxXxXxXxXxXx with your API-KEY provided in the dashboard or on rapidapi.

C
libcurl

CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "GET");
  curl_easy_setopt(curl, CURLOPT_URL, "https://v3.football.api-sports.io/leagues");
  curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
  curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
  struct curl_slist *headers = NULL;
  headers = curl_slist_append(headers, "x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx");
  headers = curl_slist_append(headers, "x-rapidapi-host: v3.football.api-sports.io");
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
  res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);
C#
RestSharp

var client = new RestClient("https://v3.football.api-sports.io/leagues");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
cURL
Curl

curl --request GET \
    --url https://v3.football.api-sports.io/leagues \
    --header 'x-rapidapi-host: v3.football.api-sports.io' \
    --header 'x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx'
Dart
http

var headers = {
  'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
  'x-rapidapi-host': 'v3.football.api-sports.io'
};
var request = http.Request('GET', Uri.parse('https://v3.football.api-sports.io/leagues'));

request.headers.addAll(headers);

http.StreamedResponse response = await request.send();

if (response.statusCode == 200) {
  print(await response.stream.bytesToString());
}
else {
  print(response.reasonPhrase);
}
Go
Native

package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://v3.football.api-sports.io/leagues"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx")
  req.Header.Add("x-rapidapi-host", "v3.football.api-sports.io")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
Java
OkHttp

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
Unirest

Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://v3.football.api-sports.io/leagues")
  .header("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx")
  .header("x-rapidapi-host", "v3.football.api-sports.io")
  .asString();
Javascript
Fetch

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
jQuery

var settings = {
  "url": "https://v3.football.api-sports.io/leagues",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx",
    "x-rapidapi-host": "v3.football.api-sports.io"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
XHR

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://v3.football.api-sports.io/leagues");
xhr.setRequestHeader("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
xhr.setRequestHeader("x-rapidapi-host", "v3.football.api-sports.io");

xhr.send();
NodeJs
Axios

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://v3.football.api-sports.io/leagues',
  headers: {
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
Native

var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'v3.football.api-sports.io',
  'path': '/leagues',
  'headers': {
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v3.football.api-sports.io'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
Requests

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://v3.football.api-sports.io/leagues',
  'headers': {
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
Unirest

var unirest = require('unirest');
var req = unirest('GET', 'https://v3.football.api-sports.io/leagues')
  .headers({
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v3.football.api-sports.io'
  })
  .end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.raw_body);
  });
Objective-c
NSURLSession

#import <Foundation/Foundation.h>

dispatch_semaphore_t sema = dispatch_semaphore_create(0);

NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://v3.football.api-sports.io/leagues"]
  cachePolicy:NSURLRequestUseProtocolCachePolicy
  timeoutInterval:10.0];
NSDictionary *headers = @{
  @"x-rapidapi-key": @"XxXxXxXxXxXxXxXxXxXxXxXx",
  @"x-rapidapi-host": @"v3.football.api-sports.io"
};

[request setAllHTTPHeaderFields:headers];

[request setHTTPMethod:@"GET"];

NSURLSession *session = [NSURLSession sharedSession];
NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
  if (error) {
    NSLog(@"%@", error);
    dispatch_semaphore_signal(sema);
  } else {
    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
    NSError *parseError = nil;
    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];
    NSLog(@"%@",responseDictionary);
    dispatch_semaphore_signal(sema);
  }
}];
[dataTask resume];
dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);
OCaml
Cohttp

open Lwt
open Cohttp
open Cohttp_lwt_unix

let reqBody =
  let uri = Uri.of_string "https://v3.football.api-sports.io/leagues" in
  let headers = Header.init ()
    |> fun h -> Header.add h "x-rapidapi-key" "XxXxXxXxXxXxXxXxXxXxXxXx"
    |> fun h -> Header.add h "x-rapidapi-host" "v3.football.api-sports.io"
  in
  Client.call ~headers `GET uri >>= fun (_resp, body) ->
  body |> Cohttp_lwt.Body.to_string >|= fun body -> body

let () =
  let respBody = Lwt_main.run reqBody in
  print_endline (respBody)
Php
cURL

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://v3.football.api-sports.io/leagues',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host: v3.football.api-sports.io'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
Request2

<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://v3.football.api-sports.io/leagues');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx',
  'x-rapidapi-host' => 'v3.football.api-sports.io'
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
Http

$client = new http\Client;
$request = new http\Client\Request;
$request->setRequestUrl('https://v3.football.api-sports.io/leagues');
$request->setRequestMethod('GET');
$request->setHeaders(array(
    'x-rapidapi-host' => 'v3.football.api-sports.io',
    'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();
PowerShell
RestMethod

$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx")
$headers.Add("x-rapidapi-host", "v3.football.api-sports.io")

$response = Invoke-RestMethod 'https://v3.football.api-sports.io/leagues' -Method 'GET' -Headers $headers
$response | ConvertTo-Json
Python
http.client

import http.client

conn = http.client.HTTPSConnection("v3.football.api-sports.io")

headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': "XxXxXxXxXxXxXxXxXxXxXxXx"
    }

conn.request("GET", "/leagues", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
Requests

url = "https://v3.football.api-sports.io/leagues"

payload={}
headers = {
  'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
  'x-rapidapi-host': 'v3.football.api-sports.io'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
Ruby
Net::HTTP

require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://v3.football.api-sports.io/leagues")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-host"] = 'v3.football.api-sports.io'
request["x-rapidapi-key"] = 'XxXxXxXxXxXxXxXxXxXxXxXx'

response = http.request(request)
puts response.read_body
Shell
Httpie

http --follow --timeout 3600 GET 'https://v3.football.api-sports.io/leagues' \
 x-rapidapi-key:'XxXxXxXxXxXxXxXxXxXxXxXx' \
 x-rapidapi-host:'v3.football.api-sports.io'
wget

wget --no-check-certificate --quiet \
  --method GET \
  --timeout=0 \
  --header 'x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx' \
  --header 'x-rapidapi-host: v3.football.api-sports.io' \
   'https://v3.football.api-sports.io/leagues'
Swift
URLSession

import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

var semaphore = DispatchSemaphore (value: 0)

var request = URLRequest(url: URL(string: "https://v3.football.api-sports.io/leagues")!,timeoutInterval: Double.infinity)
request.addValue("XxXxXxXxXxXxXxXxXxXxXxXx", forHTTPHeaderField: "x-rapidapi-key")
request.addValue("v3.football.api-sports.io", forHTTPHeaderField: "x-rapidapi-host")

request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in
  guard let data = data else {
    print(String(describing: error))
    semaphore.signal()
    return
  }
  print(String(data: data, encoding: .utf8)!)
  semaphore.signal()
}

task.resume()
semaphore.wait()
Changelog
3.9.3
Add endpoint players/profiles that returns the list of all available players

Add endpoint players/teams that returns the list of teams and seasons in which the player played during his career

Endpoint fixtures

Add field extra that returns the additional time played in a half
Add field standings indicating whether the fixture's competition covers standings (True | False)
Endpoint fixtures/rounds

Add the dates parameter that allows to retrieve the dates of each round in the response
Endpoint fixtures/statistics

Add the half parameter that allows to retrieve the halftime statistics in the response
Endpoint injuries

Add the ids parameter that allows to retrieve data from several fixtures in one call
Endpoint teams/statistics, more statistics added

Goals Over
Goals Under
Endpoint sidelined

Add the players and coachs parameters that allows to retrieve data from several players/coachs in one call
Endpoint trophies

Add the players and coachs parameters that allows to retrieve data from several players/coachs in one call
3.9.2
Endpoint odds

Add endpoint odds/live
Add endpoint odds/live/bets
Endpoint teams

Add parameter code
Add parameter venue
Add endpoint teams/countries
Endpoint fixtures

Add the ids parameter that allows to retrieve data from several fixtures including events, lineups, statistics and players in one Api call
Add the Possibility to add several status for the status parameter
Add parameter venue
Endpoint fixtures/headtohead

Add the Possibility to add several status for the status parameter
Add parameter venue
3.8.1
Add endpoint injuries
Add endpoint players/squads
Add endpoint players/topassists
Add endpoint players/topyellowcards
Add endpoint players/topredcards
Endpoint fixtures/lineups
Add players positions on the grid
Add players' jerseys colors
Endpoint fixtures/events
add VAR events
Endpoint teams
Add tri-code
Endpoint teams/statistics, more statistics added
Scoring minute
Cards per minute
Most played formation
Penalty statistics
Add Coaches Photos
CDN
Optimizing Sports Websites with BunnyCDN
BunnyCDN is a Content Delivery Network (CDN) that delivers a global content distribution experience. With strategically positioned servers, BunnyCDN ensures swift and reliable delivery of static content, optimizing website performance with features like intelligent image optimization, sophisticated caching, and advanced security measures.

Unlocking Media Delivery Excellence with BunnyCDN:

Quick Configuration: Set up your media CDN in just 5 minutes. Define cache times, customize your domain – it's that simple.
Global Accessibility: Leverage BunnyCDN's expansive server network for swift and dependable content delivery worldwide.
Customized Configuration: Tailor caching, define cache times, and implement CORS headers to create an efficient and seamless user experience.
Own Your Domain: Personalize your media delivery with your domain, enhancing your brand's online presence.
Robust Security: BunnyCDN integrates advanced security features, guaranteeing a secure environment for delivering your content.
Responsive Performance: Experience responsive performance without the need for prior media downloads. Discover the capabilities of BunnyCDN for optimized media delivery.
A tutorial is available here on our blog to help you configure it.

Databases Solutions
Enhance Your Data Management with Aiven
Integrating databases into your application can greatly enhance data management and storage. If you're looking for high-performing, flexible, and secure database solutions, we recommend checking out Aiven.

Aiven is a cloud platform that offers a range of managed database services, including relational databases, NoSQL databases, streaming data processing systems, and much more. Their offerings include PostgreSQL, MySQL, Cassandra, Redis, Kafka, and many other databases, all with simplified management, high availability, and advanced security.

Moreover, Aiven provides a free tier to get started, along with testing credits to explore their offerings. This opportunity allows you to evaluate their platform and determine if it meets your needs.

One particularly attractive feature of Aiven is that they work with multiple cloud providers, including Google Cloud, Amazon Web Services (AWS), Microsoft Azure, DigitalOcean, and more. This means you have the flexibility to choose the best cloud infrastructure for your project.

In terms of reliability, Aiven is committed to providing a 99.99% Service Level Agreement (SLA), ensuring continuous and highly available service.

To test their services, visit this page.
If you're a developer, explore their DEV center for technical information.
Check out Aiven's documentation for detailed information on their services and features.
By integrating Aiven with our API, you can efficiently store, manage, and analyze your data while taking advantage of their cloud database solutions' flexibility and scalability.

Real-Time Data Management with Firebase
When you're looking for a real-time data management solution for your application, Firebase's Realtime Database is a powerful choice. Explore how Firebase can enhance real-time data management for your application.

Firebase's Realtime Database offers a cloud-based real-time database that synchronizes data in real-time across users and devices. This makes it an ideal choice for applications that require instant data updates.

Why Choose Firebase's Realtime Database?

Real-Time Data: Firebase allows you to store real-time data, meaning that updates are instantly propagated to all connected users.
Easy Synchronization: Data is automatically synchronized across all devices, providing a consistent and real-time user experience.
Built-In Security: Firebase offers flexible security rules to control data access and ensure privacy.
Simplified Integration: Firebase's Realtime Database easily integrates with other Firebase services, simplifying backend management.
Helpful Links:

Explore Firebase's Realtime Database: Discover the features and advantages of Firebase's Realtime Database for efficient real-time data management.
Firebase's Realtime Database Documentation: Refer to the comprehensive documentation for Firebase's Realtime Database for a smooth integration.
A tutorial describing each step is available on our blog here.

Widgets
API-SPORTS widgets allow you to easily display dynamic sports data on your website.

They are designed to be:

Ultra-modular: each component is autonomous
Customisable: language, theme, content, behaviour
Easy to integrate: no framework required, a simple HTML tag is all you need
They use request from your API-SPORTS account and work with all plans, including the free plan.

Find all the documentation on widgets here


Security
Our widgets use your account's API-KEY, which must be specified in the data-key attribute of your widget configuration.

When using these widgets it is important to be aware that your API-KEY will be visible to the users of your site, it is possible to protect yourself from this by allowing only the desired domains or IP in our dashboard. This way no one else can use your API-KEY for you. If you have already set up your widget and have not activated this option, you can reset your API-KEY and activate this option after.

You can further enhance security by completely hiding your API-KEY from the source code by following this tutorial.

Caching Data
By using Widgets, each visit to a page on your website triggers one or more API requests to retrieve data. Without a caching system, your daily quota can be reached very quickly.

Example: If a page triggers a single API request per visitor and you receive 80 visits to that page in one minute, this results in 80 API requests. Over a full day, that can add up to 115 200 requests.

By implementing a caching system, even with a very short duration, such as 60 seconds, you can drastically reduce the number of requests. The first visit will trigger an API request, but the response will then be cached for the next 60 seconds. This means that if 80 visitors access the same page within that time frame, only the first request will reach the API, while the next 79 will be served directly from the cache.

With this system in place, you reduce usage from 115 200 requests per day to just 1 440.

A full tutorial is available here, explaining step by step how to set up an effective caching system.

Debugging
If the widget does not display the requested information, it is possible to set the data-show-errors tag to true to display error messages directly in the widget and in the console. This can be due to several things like : (Non-exhaustive list)

You have reached your daily number of requests
Tags are incorrectly filled in
Your API-KEY is incorrect
All available widgets
Below is a list of all available widgets:

games → list of matches
game → details of a match
team → team profile
player → player profile
standings → league table
league → schedule
leagues → list of all leagues
h2h → historical head-to-head
races, race, driver → Formula 1
fights, fight, fighter → MMA
Each widget adapts automatically based on the selected sport.

Before You Begin
Dynamic targeting
Some widgets, such as games, can dynamically open other widgets like game, standings, player, and more.
This interaction is enabled using the data-target-* attributes.

These attributes allow you to define where the opened widget should be rendered:

modal → renders the widget inside a modal.
CSS selector (#id or .class) → injects the widget into a specific HTML element on the page.
These targeting options are available for:

General sports widgets (Football, Basketball, etc.):

data-target-game
data-target-standings
data-target-team
data-target-player
data-target-league
Formula 1 specific:

data-target-race
data-target-ranking
data-target-driver
MMA specific:

data-target-fight
data-target-fighter
Target a container by ID

  <api-sports-widget data-type="games"></api-sports-widget>
  
  <div id="details"></div>

  <api-sports-widget
    data-type="config"
    data-key="Your-Api-Key-Here"
    data-sport="football"
    data-target-game="#details"
  ></api-sports-widget>
Target using modal

  <api-sports-widget data-type="games"></api-sports-widget>

  <api-sports-widget
    data-type="config"
    data-key="Your-Api-Key-Here"
    data-sport="football"
    data-target-game="modal"
  ></api-sports-widget>
Language
The data-lang attribute allows you to easily switch the interface language of all widgets.

Available languages:
en (English)
fr (French)
es (Spanish)
it (Italian)
Example usage

<api-sports-widget
  data-type="config"
  data-key="Your-Api-Key"
  data-sport="football"
  data-lang="en"
  data-custom-lang="https://yourdomain.com/lang/en.json"
></api-sports-widget>
Example


Custom translations:
For complete control over wording, you can load your own translation file using data-custom-lang.
This file must be a valid JSON object following the internal key structure.

You can download the translation file here.

It allows you to:

Override specific labels
Translate missing terms
Adapt terminology to your audience
Example JSON format:

{
  "all": "All",
  "live": "Now Live",
  "finished": "Completed",
  "scheduled": "Coming Up",
  "favorites": "Favorites",
}
You can use data-lang and data-custom-lang together.
If a key is defined in both, the custom file will take priority.

Exemple for custom translation

  <api-sports-widget data-type="games" data-target-game="modal"></api-sports-widget>

  <api-sports-widget
    data-type="config"
    data-key="Your-Api-Key-Here"
    data-sport="football"
    data-lang="custom"
    data-custom-lang="https://yourdomain.com/lang/custom.json"
  ></api-sports-widget>
You have a tutorial available here

Predefined themes
Four built-in themes are available by default. You can set them using the data-theme attribute on any widget.

white (default)
grey
dark
blue
Each theme adjusts background colors, text colors, button styles, borders, and more.

White
 Grey


Dark
 Blue

