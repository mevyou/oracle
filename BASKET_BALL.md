Introduction
Welcome to Api-Basketball! You can use our API to access all API endpoints, which can get information about Basketball Leagues & Cups.

We have language bindings in C, C#, cURL, Dart, Go, Java, Javascript, NodeJs, Objective-c, OCaml, Php, PowerShell, Python, Ruby, Shell and Swift! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

Authentication
We uses API keys to allow access to the API. You can register a new API key in rapidapi or directly on our dashboard.

The accounts on RapidAPI and on our Dashboard are dissociated. Each of these registration methods has its own URL and API-KEY. You must therefore adapt your scripts according to your subscription by adapting the URL and your API-KEY.

RAPIDAPI : https://api-basketball.p.rapidapi.com/

API-SPORTS : https://v1.basketball.api-sports.io/

Our API expects for the API key to be included in all API requests to the server in a header that looks like the following:

Make sure to replace XxXxXxXxXxXxXxXxXxXxXxXx with your API key.

REQUESTS HEADERS & CORS

The API is configured to work only with GET requests and allows only the headers listed below:

x-rapidapi-host
x-rapidapi-key
x-apisports-key
If you make non-GET requests or add headers that are not in the list, you will receive an error from the API.

Some frameworks (especially in JS, nodeJS..) automatically add extra headers, you have to make sure to remove them in order to get a response from the API.

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
API-SPORTS Account
If you decided to subscribe directly on our site, you have a dashboard at your disposal at the following url: dashboard

It allows you to:

To follow your consumption in real time
Manage your subscription and change it if necessary
Check the status of our servers
Test all endpoints without writing a line of code.
You can also consult all this information directly through the API by calling the endpoint status.

This call does not count against the daily quota.

get("https://v1.basketball.api-sports.io/status");

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
Dashboard
dashboard

Requests
requests

Live tester
requests

Architecture
image

Logos / Images
Calls to logos/images do not count towards your daily quota and are provided for free. However these calls are subject to a rate per second & minute, it is recommended to save this data on your side in order not to slow down or impact the user experience of your application or website. For this you can use CDNs such as bunny.net.

We have a tutorial available here, which explains how to set up your own media system with BunnyCDN.

Logos, images and trademarks delivered through the API are provided solely for identification and descriptive purposes (e.g., identifying leagues, teams, players or venues). We does not own any of these visual assets, and no intellectual property rights are claimed over them. Some images or data may be subject to intellectual property or trademark rights held by third parties (including but not limited to leagues, federations, or clubs). The use of such content in your applications, websites, or products may require additional authorization or licensing from the respective rights holders. You are fully responsible for ensuring that your usage of any logos, images, or branded content complies with applicable laws in your country or the countries where your services are made available. We are not affiliated with, sponsored by, or endorsed by any sports league, federation, or brand featured in the data provided.

Sample Scripts
Here are some examples of how the API is used in the main development languages.

You have to replace {endpoint} by the real name of the endpoint you want to call, like leagues or games for example. In all the sample scripts we will use the leagues endpoint as example.

Also you will have to replace XxXxXxXxXxXxXxXxXxXxXx with your API-KEY provided in the dashboard or on rapidapi.

C
libcurl

CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "GET");
  curl_easy_setopt(curl, CURLOPT_URL, "https://v1.basketball.api-sports.io/leagues");
  curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
  curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
  struct curl_slist *headers = NULL;
  headers = curl_slist_append(headers, "x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx");
  headers = curl_slist_append(headers, "x-rapidapi-host: v1.basketball.api-sports.io");
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
  res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);
C#
RestSharp

var client = new RestClient("https://v1.basketball.api-sports.io/leagues");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
request.AddHeader("x-rapidapi-host", "v1.basketball.api-sports.io");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
cURL
Curl

curl --request GET \
    --url https://v1.basketball.api-sports.io/leagues \
    --header 'x-rapidapi-host: v1.basketball.api-sports.io' \
    --header 'x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx'
Dart
http

var headers = {
  'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
  'x-rapidapi-host': 'v1.basketball.api-sports.io'
};
var request = http.Request('GET', Uri.parse('https://v1.basketball.api-sports.io/leagues'));

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

  url := "https://v1.basketball.api-sports.io/leagues"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx")
  req.Header.Add("x-rapidapi-host", "v1.basketball.api-sports.io")

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
myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
Unirest

Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://v1.basketball.api-sports.io/leagues")
  .header("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx")
  .header("x-rapidapi-host", "v1.basketball.api-sports.io")
  .asString();
Javascript
Fetch

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.basketball.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
jQuery

var settings = {
  "url": "https://v1.basketball.api-sports.io/leagues",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx",
    "x-rapidapi-host": "v1.basketball.api-sports.io"
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

xhr.open("GET", "https://v1.basketball.api-sports.io/leagues");
xhr.setRequestHeader("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
xhr.setRequestHeader("x-rapidapi-host", "v1.basketball.api-sports.io");

xhr.send();
NodeJs
Axios

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://v1.basketball.api-sports.io/leagues',
  headers: {
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v1.basketball.api-sports.io'
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
  'hostname': 'v1.basketball.api-sports.io',
  'path': '/leagues',
  'headers': {
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v1.basketball.api-sports.io'
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
  'url': 'https://v1.basketball.api-sports.io/leagues',
  'headers': {
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v1.basketball.api-sports.io'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
Unirest

var unirest = require('unirest');
var req = unirest('GET', 'https://v1.basketball.api-sports.io/leagues')
  .headers({
    'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host': 'v1.basketball.api-sports.io'
  })
  .end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.raw_body);
  });
Objective-c
NSURLSession

#import <Foundation/Foundation.h>

dispatch_semaphore_t sema = dispatch_semaphore_create(0);

NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://v1.basketball.api-sports.io/leagues"]
  cachePolicy:NSURLRequestUseProtocolCachePolicy
  timeoutInterval:10.0];
NSDictionary *headers = @{
  @"x-rapidapi-key": @"XxXxXxXxXxXxXxXxXxXxXxXx",
  @"x-rapidapi-host": @"v1.basketball.api-sports.io"
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
  let uri = Uri.of_string "https://v1.basketball.api-sports.io/leagues" in
  let headers = Header.init ()
    |> fun h -> Header.add h "x-rapidapi-key" "XxXxXxXxXxXxXxXxXxXxXxXx"
    |> fun h -> Header.add h "x-rapidapi-host" "v1.basketball.api-sports.io"
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
  CURLOPT_URL => 'https://v1.basketball.api-sports.io/leagues',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx',
    'x-rapidapi-host: v1.basketball.api-sports.io'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
Request2

<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://v1.basketball.api-sports.io/leagues');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx',
  'x-rapidapi-host' => 'v1.basketball.api-sports.io'
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
$request->setRequestUrl('https://v1.basketball.api-sports.io/leagues');
$request->setRequestMethod('GET');
$request->setHeaders(array(
    'x-rapidapi-host' => 'v1.basketball.api-sports.io',
    'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();
PowerShell
RestMethod

$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx")
$headers.Add("x-rapidapi-host", "v1.basketball.api-sports.io")

$response = Invoke-RestMethod 'https://v1.basketball.api-sports.io/leagues' -Method 'GET' -Headers $headers
$response | ConvertTo-Json
Python
http.client

import http.client

conn = http.client.HTTPSConnection("v1.basketball.api-sports.io")

headers = {
    'x-rapidapi-host': "v1.basketball.api-sports.io",
    'x-rapidapi-key': "XxXxXxXxXxXxXxXxXxXxXxXx"
    }

conn.request("GET", "/leagues", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
Requests

url = "https://v1.basketball.api-sports.io/leagues"

payload={}
headers = {
  'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
  'x-rapidapi-host': 'v1.basketball.api-sports.io'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
Ruby
Net::HTTP

require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://v1.basketball.api-sports.io/leagues")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-host"] = 'v1.basketball.api-sports.io'
request["x-rapidapi-key"] = 'XxXxXxXxXxXxXxXxXxXxXxXx'

response = http.request(request)
puts response.read_body
Shell
Httpie

http --follow --timeout 3600 GET 'https://v1.basketball.api-sports.io/leagues' \
 x-rapidapi-key:'XxXxXxXxXxXxXxXxXxXxXxXx' \
 x-rapidapi-host:'v1.basketball.api-sports.io'
wget

wget --no-check-certificate --quiet \
  --method GET \
  --timeout=0 \
  --header 'x-rapidapi-key: XxXxXxXxXxXxXxXxXxXxXxXx' \
  --header 'x-rapidapi-host: v1.basketball.api-sports.io' \
   'https://v1.basketball.api-sports.io/leagues'
Swift
URLSession

import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

var semaphore = DispatchSemaphore (value: 0)

var request = URLRequest(url: URL(string: "https://v1.basketball.api-sports.io/leagues")!,timeoutInterval: Double.infinity)
request.addValue("XxXxXxXxXxXxXxXxXxXxXxXx", forHTTPHeaderField: "x-rapidapi-key")
request.addValue("v1.basketball.api-sports.io", forHTTPHeaderField: "x-rapidapi-host")

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
(1.5.6)
Endpoint leagues

Add field coverage
Endpoint games

Add endpoint games/statistics/teams
Add endpoint games/statistics/players
Add field venue
Add endpoint players

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
timezone
Get the list of available timezone to be used in the games endpoint.

This endpoint does not require any parameters.

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/timezone

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/timezone');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "timezone",
"parameters": [ ],
"errors": [ ],
"results": 425,
"response": [
"Africa/Abidjan",
"Africa/Accra",
"Africa/Addis_Ababa",
"Africa/Algiers",
"Africa/Asmara"
]
}
Seasons
seasons
All seasons can be used in other endpoints as filters.

This endpoint does not require any parameters.

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/seasons

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/seasons');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "seasons",
"parameters": [ ],
"errors": [ ],
"results": 8,
"response": [
"2015-2016",
"2016-2017",
2017,
"2017-2018",
2018,
"2018-2019",
2019,
"2019-2020"
]
}
Countries
countries
Get the list of available countries.

The id name and code fields can be used in other endpoints as filters.

All the parameters of this endpoint can be used together.

query Parameters
id	
integer
The id of the country

name	
string
Example: name=USA
The name of the country

code	
string = 2 characters
Example: code=EN
The code of the country

search	
string >= 3 characters
Example: search=USA
header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/countries

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/countries');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "countries",
"parameters": {
"search": "usa"
},
"errors": [ ],
"results": 1,
"response": [
{
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-football.com/flags/us.svg"
}
]
}
Leagues
leagues
Get the list of available leagues and cups.

The league id are unique in the API and leagues keep it across all seasons

This endpoint also returns the coverage of each competition, which makes it possible to know what is available for leagues or cups.

The values returned by the coverage indicate the data available at the moment you call the API, so for a competition that has not yet started, it is normal to have all the features set to False. This will be updated once the competition has started.

The coverage of a competition can vary from season to season and values set to True do not guarantee 100% data availability.

You can find all the leagues ids on our Dashboard.

Most of the parameters of this endpoint can be used together.

query Parameters
id	
integer
The id of the league

name	
string
Example: name=NBA
The name of the league

country_id	
integer
The id of the country

country	
string
Example: country=USA
The name of the country

type	
string
Enum: "league" "cup"
Example: type=league
The type of the league

season	
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

search	
string >= 3 characters
Example: search=NBA
The name of the league

code	
string = 2 characters
Example: code=FR
The code of the country

header Parameters
x-rapidapi-key
required
string
You rapidAPI Key

Responses
200 OK

get
/leagues

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/leagues');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "leagues",
"parameters": {
"id": "12",
"season": "2023-2024"
},
"errors": [ ],
"results": 1,
"response": [
{
"id": 12,
"name": "NBA",
"type": "League",
"logo": "https://media.api-sports.io/basketball/leagues/12.png",
"country": {
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-sports.io/flags/us.svg"
},
"seasons": [
{
"season": "2023-2024",
"start": "2023-10-05",
"end": "2024-04-14",
"coverage": {
"games": {
"statistics": {
"teams": true,
"players": true
}
},
"standings": true,
"players": true,
"odds": true
}
}
]
}
]
}
Teams
teams
Get data about teams.

The team id are unique in the API and teams keep it among all the leagues/cups in which they participate.

You can find all the teams ids on our Dashboard.

This endpoint requires at least one parameter.

query Parameters
id	
integer
The id of the team

name	
string
Example: name=Denver Nuggets
The name of the team

country_id	
integer
The id of the country

country	
string
The name of the country

league	
integer
The id of the league

season	
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

search	
string >= 3 characters
Example: search=Denver
The name of the team

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/teams

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/teams');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'id' => '139'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "teams",
"parameters": {
"name": "Denver Nuggets"
},
"errors": [ ],
"results": 1,
"response": [
{
"id": 139,
"name": "Denver Nuggets",
"nationnal": false,
"logo": null,
"country": {
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-football.com/flags/us.svg"
}
}
]
}
statistics
query Parameters
league
required
integer
The id of the league

season
required
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

team
required
integer
The id of the team

date	
stringYYYY-MM-DD
Example: date=2021-05-12
A Limit Date

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/statistics

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/statistics');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'season' => '2019-2020',
	'team' => '139',
	'league' => '12'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "statistics",
"parameters": {
"league": "12",
"season": "2019-2020",
"team": "139"
},
"errors": [ ],
"results": 5,
"response": {
"league": {
"id": 12,
"name": "NBA",
"type": "League",
"season": "2019-2020",
"logo": null
},
"country": {
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-football.com/flags/us.svg"
},
"team": {
"id": 139,
"name": "Denver Nuggets",
"logo": null
},
"games": {
"played": {
"home": 9,
"away": 9,
"all": 18
},
"wins": {
"home": {
"total": 7,
"percentage": "0.778"
},
"away": {
"total": 8,
"percentage": "0.889"
},
"all": {
"total": 15,
"percentage": "0.833"
}
},
"draws": {
"home": {
"total": 0,
"percentage": "0.000"
},
"away": {
"total": 0,
"percentage": "0.000"
},
"all": {
"total": 0,
"percentage": "0.000"
}
},
"loses": {
"home": {
"total": 2,
"percentage": "0.222"
},
"away": {
"total": 1,
"percentage": "0.111"
},
"all": {
"total": 3,
"percentage": "0.167"
}
}
},
"points": {
"for": {
"total": {
"home": 956,
"away": 961,
"all": 1917
},
"average": {
"home": "106.2",
"away": "106.8",
"all": "106.5"
}
},
"against": {
"total": {
"home": 911,
"away": 902,
"all": 1813
},
"average": {
"home": "101.2",
"away": "100.2",
"all": "100.7"
}
}
}
}
}
Players
players
Get data about players.

The players id are unique in the API and players keep it among all the leagues/cups in which they participate.

This endpoint requires at least one parameter.

query Parameters
id	
integer
The id of the player

team	
integer
The id of the team

season	
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2023-2024
A valid season

search	
string >= 3 characters
Example: search=Malith
The name of the player

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/players

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/players');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'team' => '1'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "players",
"parameters": {
"team": "1",
"season": "2023-2024"
},
"errors": [ ],
"results": 16,
"response": [
{
"id": 11636,
"name": "B. Newley",
"number": null,
"country": null,
"position": null,
"age": null
},
{
"id": 4,
"name": "Blogg Campbell",
"number": "3",
"country": "Australia",
"position": "Guard",
"age": 20
},
{
"id": 13,
"name": "Bowen Kyle",
"number": "14",
"country": "Australia",
"position": "Forward",
"age": 23
},
{
"id": 5,
"name": "Cameron Flynn",
"number": "11",
"country": "New Zealand",
"position": "Guard",
"age": 23
},
{
"id": 6,
"name": "Clark Ian",
"number": "21",
"country": "USA",
"position": "Guard",
"age": 32
},
{
"id": 7,
"name": "Dellavedova Matthew",
"number": "8",
"country": "Australia",
"position": "Guard",
"age": 33
},
{
"id": 8,
"name": "Goulding Chris",
"number": "43",
"country": "Australia",
"position": "Guard",
"age": 35
},
{
"id": 1,
"name": "Hukporti Ariel",
"number": "15",
"country": "Germany",
"position": "Center",
"age": 21
},
{
"id": 9,
"name": "Ili Shea",
"number": "51",
"country": "New Zealand",
"position": "Guard",
"age": 31
},
{
"id": 14,
"name": "Koppens Tom",
"number": "30",
"country": "Australia",
"position": "Forward",
"age": 20
},
{
"id": 10,
"name": "Krebs Tanner",
"number": "13",
"country": "Australia",
"position": "Guard",
"age": 28
},
{
"id": 2,
"name": "Loe Rob",
"number": "2",
"country": "New Zealand",
"position": "Center",
"age": 32
},
{
"id": 3,
"name": "Lual-Acuil Joseph",
"number": null,
"country": "South Sudan",
"position": "Center",
"age": 29
},
{
"id": 11,
"name": "Machar Malith",
"number": "9",
"country": "Australia",
"position": "Guard",
"age": null
},
{
"id": 15,
"name": "Travers Luke",
"number": "23",
"country": "Australia",
"position": "Forward",
"age": 22
},
{
"id": 12,
"name": "Triplett Zac",
"number": "1",
"country": "Australia",
"position": "Guard",
"age": 22
}
]
}
Standings
standings
Get the standings for a league.

Return a table of one or more rankings according to the league / cup. Some competitions have several rankings in a year, regular season, pre season etc…

To know the list of available stages or groups you have to use the endpoint standings/stages or standings/groups

Standings are updated every hours

query Parameters
league
required
integer
The id of the league

season
required
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

team	
integer
The id of the team

stage	
string
Example: stage=NBA - Regular Season
A valid stage

group	
string
Example: group=Eastern Conference
A valid group

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/standings

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/standings');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'league' => '12',
	'season' => '2019-2020'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "standings",
"parameters": {
"league": "12",
"season": "2019-2020",
"team": "137"
},
"errors": [ ],
"results": 1,
"response": [
[
{
"position": 14,
"stage": "NBA - Regular Season",
"group": {
"name": "Eastern Conference",
"points": null
},
"team": {
"id": 137,
"name": "Cleveland Cavaliers",
"logo": null
},
"league": {
"id": 12,
"name": "NBA",
"type": "League",
"season": "2019-2020",
"logo": null
},
"country": {
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-football.com/flags/us.svg"
},
"games": {
"played": 15,
"win": {
"total": 4,
"percentage": "0.267"
},
"lose": {
"total": 11,
"percentage": "0.733"
}
},
"points": {
"for": 1559,
"against": 1682
},
"form": "LLLLL",
"description": null
}
]
]
}
standings/stages
Get the list of available stages for a league to be used in the standings endpoint.

query Parameters
league
required
integer
The id of the league

season
required
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/standings/stages

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/standings/stages');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "standings/stages",
"parameters": {
"league": "12",
"season": "2019-2020"
},
"errors": [ ],
"results": 1,
"response": [
"NBA - Regular Season"
]
}
standings/groups
Get the list of available groups for a league to be used in the standings endpoint.

query Parameters
league
required
integer
The id of the league

season
required
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK
201 Created

get
/standings/groups

Request samples
PhpPythonNodeJavaScriptCurlRuby

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/standings/groups');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "standings/groups",
"parameters": {
"league": "12",
"season": "2019-2020"
},
"errors": [ ],
"results": 8,
"response": [
"Western Conference",
"Eastern Conference",
"Atlantic",
"Southeast",
"Central",
"Northwest",
"Pacific",
"Southwest"
]
}
Games
games
For all requests to games you can add the query parameter timezone to your request in order to retrieve the list of games in the time zone of your choice like “Europe/London“

To know the list of available time zones you have to use the endpoint timezone

Available status

NS : Not Started
Q1 : Quarter 1 (In Play)
Q2 : Quarter 2 (In Play)
Q3 : Quarter 3 (In Play)
Q4 : Quarter 4 (In Play)
OT : Over Time (In Play)
BT : Break Time (In Play)
HT : Halftime (In Play)
FT : Game Finished (Game Finished)
AOT : After Over Time (Game Finished)
POST : Game Postponed
CANC : Game Cancelled
SUSP : Game Suspended
AWD : Game Awarded
ABD : Game Abandoned
Games are updated every 15 seconds

This endpoint requires at least one parameter.

query Parameters
id	
integer
The id of the game

date	
stringYYYY-MM-DD
Example: date=2019-11-23
A valid date

league	
integer
The id of the league

season	
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

team	
integer
The id of the team

timezone	
string
Example: timezone=Europe/London
A valid timezone

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/games

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/games');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'date' => '2019-11-23'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "games",
"parameters": {
"league": "12",
"date": "2019-11-23",
"team": "134",
"timezone": "europe/london",
"season": "2019-2020"
},
"errors": [ ],
"results": 1,
"response": [
{
"id": 1911,
"date": "2019-11-23T00:30:00+00:00",
"time": "00:30",
"timestamp": 1574469000,
"timezone": "europe/london",
"stage": null,
"week": null,
"venue": null,
"status": {
"long": "Game Finished",
"short": "FT",
"timer": null
},
"league": {
"id": 12,
"name": "NBA",
"type": "League",
"season": "2019-2020",
"logo": null
},
"country": {
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-football.com/flags/us.svg"
},
"teams": {
"home": {
"id": 134,
"name": "Brooklyn Nets",
"logo": null
},
"away": {
"id": 157,
"name": "Sacramento Kings",
"logo": null
}
},
"scores": {
"home": {
"quarter_1": 26,
"quarter_2": 30,
"quarter_3": 30,
"quarter_4": 30,
"over_time": null,
"total": 116
},
"away": {
"quarter_1": 23,
"quarter_2": 26,
"quarter_3": 21,
"quarter_4": 27,
"over_time": null,
"total": 97
}
}
}
]
}
teams statistics
Get teams statistics from one or several games ids.

Statistics are updated every 30-120 seconds

This endpoint need at least one parameter.

query Parameters
id	
string
The id of the game

ids	
stringMaximum of 20 games ids
Value: "id-id-id"
One or more games ids

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/games/statistics/teams

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/games/statistics/teams');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'id' => '391053'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "games",
"parameters": {
"id": "391053"
},
"errors": [ ],
"results": 2,
"response": [
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"field_goals": {
"total": 22,
"attempts": 66,
"percentage": 33
},
"threepoint_goals": {
"total": 8,
"attempts": 29,
"percentage": 27
},
"freethrows_goals": {
"total": 26,
"attempts": 34,
"percentage": 76
},
"rebounds": {
"total": 38,
"offence": 10,
"defense": 28
},
"assists": 14,
"steals": 11,
"blocks": 2,
"turnovers": 11,
"personal_fouls": 23
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"field_goals": {
"total": 30,
"attempts": 70,
"percentage": 44
},
"threepoint_goals": {
"total": 8,
"attempts": 22,
"percentage": 36
},
"freethrows_goals": {
"total": 14,
"attempts": 21,
"percentage": 66
},
"rebounds": {
"total": 47,
"offence": 10,
"defense": 37
},
"assists": 18,
"steals": 4,
"blocks": 6,
"turnovers": 17,
"personal_fouls": 27
}
]
}
players statistics
Get players statistics from one or several games ids.

Also possible to get all statistics from a player id and a season.

Statistics are updated every 30-120 seconds

This endpoint need at least one parameter.

query Parameters
id	
string
The id of the game

ids	
stringMaximum of 20 games ids
Value: "id-id-id"
One or more games ids

player	
integer
The id of the player

season	
string
A valid season

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/games/statistics/players

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/games/statistics/players');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'id' => '391053'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "games",
"parameters": {
"id": "391053"
},
"errors": [ ],
"results": 18,
"response": [
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4235,
"name": "Simonis Zygimantas"
},
"type": "starters",
"minutes": "27:35",
"field_goals": {
"total": 0,
"attempts": 6,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 2,
"percentage": null
},
"freethrows_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"rebounds": {
"total": 5
},
"assists": 1,
"points": 0
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4237,
"name": "Beliavicius Paulius"
},
"type": "starters",
"minutes": "32:53",
"field_goals": {
"total": 0,
"attempts": 1,
"percentage": null
},
"threepoint_goals": {
"total": 4,
"attempts": 10,
"percentage": null
},
"freethrows_goals": {
"total": 4,
"attempts": 4,
"percentage": null
},
"rebounds": {
"total": 4
},
"assists": 1,
"points": 16
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4239,
"name": "Sulskis Vytautas"
},
"type": "starters",
"minutes": "34:04",
"field_goals": {
"total": 4,
"attempts": 9,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"freethrows_goals": {
"total": 6,
"attempts": 7,
"percentage": null
},
"rebounds": {
"total": 5
},
"assists": 1,
"points": 14
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4232,
"name": "Domarkas Dominykas"
},
"type": "starters",
"minutes": "34:12",
"field_goals": {
"total": 0,
"attempts": 1,
"percentage": null
},
"threepoint_goals": {
"total": 2,
"attempts": 6,
"percentage": null
},
"freethrows_goals": {
"total": 3,
"attempts": 4,
"percentage": null
},
"rebounds": {
"total": 6
},
"assists": 6,
"points": 9
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4230,
"name": "Dimsa Egidijus"
},
"type": "starters",
"minutes": "24:57",
"field_goals": {
"total": 4,
"attempts": 7,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"freethrows_goals": {
"total": 2,
"attempts": 7,
"percentage": null
},
"rebounds": {
"total": 5
},
"assists": 4,
"points": 10
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4233,
"name": "Kliucinykas Tautvydas"
},
"type": "bench",
"minutes": "22:19",
"field_goals": {
"total": 1,
"attempts": 5,
"percentage": null
},
"threepoint_goals": {
"total": 2,
"attempts": 7,
"percentage": null
},
"freethrows_goals": {
"total": 4,
"attempts": 4,
"percentage": null
},
"rebounds": {
"total": 5
},
"assists": 1,
"points": 12
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4238,
"name": "Nausedas Justas"
},
"type": "bench",
"minutes": "12:39",
"field_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 3,
"percentage": null
},
"freethrows_goals": {
"total": 3,
"attempts": 4,
"percentage": null
},
"rebounds": {
"total": 0
},
"assists": 0,
"points": 3
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4236,
"name": "Vilys Domantas"
},
"type": "bench",
"minutes": "9:17",
"field_goals": {
"total": 2,
"attempts": 3,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"freethrows_goals": {
"total": 2,
"attempts": 2,
"percentage": null
},
"rebounds": {
"total": 0
},
"assists": 0,
"points": 6
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4240,
"name": "Udras Antanas"
},
"type": "bench",
"minutes": "9:05",
"field_goals": {
"total": 0,
"attempts": 2,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 1,
"percentage": null
},
"freethrows_goals": {
"total": 2,
"attempts": 2,
"percentage": null
},
"rebounds": {
"total": 1
},
"assists": 0,
"points": 2
},
{
"game": {
"id": 391053
},
"team": {
"id": 813
},
"player": {
"id": 4229,
"name": "Bergaudas Giedrius"
},
"type": "bench",
"minutes": "17:59",
"field_goals": {
"total": 3,
"attempts": 3,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"freethrows_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"rebounds": {
"total": 3
},
"assists": 0,
"points": 6
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 7634,
"name": "Stankevicius Rokas"
},
"type": "starters",
"minutes": "36:34",
"field_goals": {
"total": 5,
"attempts": 11,
"percentage": null
},
"threepoint_goals": {
"total": 1,
"attempts": 4,
"percentage": null
},
"freethrows_goals": {
"total": 2,
"attempts": 4,
"percentage": null
},
"rebounds": {
"total": 10
},
"assists": 2,
"points": 15
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 7633,
"name": "Labutis Ignas"
},
"type": "starters",
"minutes": "37:08",
"field_goals": {
"total": 1,
"attempts": 2,
"percentage": null
},
"threepoint_goals": {
"total": 2,
"attempts": 4,
"percentage": null
},
"freethrows_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"rebounds": {
"total": 6
},
"assists": 1,
"points": 8
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 21495,
"name": "J. Nurse"
},
"type": "starters",
"minutes": "23:31",
"field_goals": {
"total": 6,
"attempts": 10,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"freethrows_goals": {
"total": 0,
"attempts": 1,
"percentage": null
},
"rebounds": {
"total": 11
},
"assists": 1,
"points": 12
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 12049,
"name": "K. Anderson"
},
"type": "starters",
"minutes": "22:34",
"field_goals": {
"total": 3,
"attempts": 8,
"percentage": null
},
"threepoint_goals": {
"total": 1,
"attempts": 2,
"percentage": null
},
"freethrows_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"rebounds": {
"total": 3
},
"assists": 4,
"points": 9
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 7630,
"name": "Zaunieriunas Modestas"
},
"type": "starters",
"minutes": "33:12",
"field_goals": {
"total": 1,
"attempts": 3,
"percentage": null
},
"threepoint_goals": {
"total": 2,
"attempts": 5,
"percentage": null
},
"freethrows_goals": {
"total": 7,
"attempts": 7,
"percentage": null
},
"rebounds": {
"total": 0
},
"assists": 5,
"points": 15
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 7626,
"name": "Daunys Edvinas"
},
"type": "bench",
"minutes": "17:38",
"field_goals": {
"total": 3,
"attempts": 4,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 0,
"percentage": null
},
"freethrows_goals": {
"total": 2,
"attempts": 3,
"percentage": null
},
"rebounds": {
"total": 2
},
"assists": 0,
"points": 8
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 7632,
"name": "Bancevicius Armandas"
},
"type": "bench",
"minutes": "29:22",
"field_goals": {
"total": 2,
"attempts": 4,
"percentage": null
},
"threepoint_goals": {
"total": 2,
"attempts": 5,
"percentage": null
},
"freethrows_goals": {
"total": 1,
"attempts": 4,
"percentage": null
},
"rebounds": {
"total": 5
},
"assists": 1,
"points": 11
},
{
"game": {
"id": 391053
},
"team": {
"id": 2316
},
"player": {
"id": 7628,
"name": "Pazarauskas Titas"
},
"type": "bench",
"minutes": "25:00",
"field_goals": {
"total": 2,
"attempts": 6,
"percentage": null
},
"threepoint_goals": {
"total": 0,
"attempts": 2,
"percentage": null
},
"freethrows_goals": {
"total": 2,
"attempts": 2,
"percentage": null
},
"rebounds": {
"total": 4
},
"assists": 4,
"points": 6
}
]
}
h2h
Get heads to heads between two teams.

query Parameters
h2h
required
stringid-id
Example: h2h=132-134
The ids of the teams

date	
stringYYYY-MM-DD
Example: date=2019-12-05
A valid date

league	
integer
The id of the league

season	
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

timezone	
string
Example: timezone=Europe/London
A valid timezone

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/games/h2h

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/games');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'h2h' => '132-134'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "games",
"parameters": {
"league": "12",
"h2h": "132-134",
"season": "2019-2020"
},
"errors": [ ],
"results": 4,
"response": [
{
"id": 2003,
"date": "2019-12-05T00:30:00+00:00",
"time": "00:30",
"timestamp": 1575505800,
"timezone": "UTC",
"stage": null,
"week": null,
"venue": null,
"status": {
"long": "Not Started",
"short": "NS",
"timer": null
},
"league": {
"id": 12,
"name": "NBA",
"type": "League",
"season": "2019-2020",
"logo": null
},
"country": {
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-football.com/flags/us.svg"
},
"teams": {
"home": {
"id": 132,
"name": "Atlanta Hawks",
"logo": null
},
"away": {
"id": 134,
"name": "Brooklyn Nets",
"logo": null
}
},
"scores": {
"home": {
"quarter_1": null,
"quarter_2": null,
"quarter_3": null,
"quarter_4": null,
"over_time": null,
"total": null
},
"away": {
"quarter_1": null,
"quarter_2": null,
"quarter_3": null,
"quarter_4": null,
"over_time": null,
"total": null
}
}
}
]
}
Odds
odds
Get odds from games or leagues.

We provide pre-match odds between 1 and 7 days before the game.

We keep a 7-day history (The availability of odds may vary according to the leagues, seasons, games and bookmakers)

Odds are updated once a day

query Parameters
league	
integer
The id of the league

season	
string [ 4 .. 9 ] characters YYYY or YYYY-YYYY
Example: season=2021-2022
The season of the league

game	
integer
The id of the game

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
Your RapidAPI Key

Responses
200 OK

get
/odds

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/odds');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
	'season' => '2019-2020',
	'bet' => '1',
	'bookmaker' => '6',
	'game' => '1912',
	'league' => '12'
)));

$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "odds",
"parameters": {
"bet": "2",
"game": "1912"
},
"errors": [ ],
"results": 1,
"response": [
{
"league": {
"id": 12,
"name": "NBA",
"type": "League",
"season": "2019-2020",
"logo": null
},
"country": {
"id": 5,
"name": "USA",
"code": "US",
"flag": "https://media.api-football.com/flags/us.svg"
},
"game": {
"id": 1912
},
"bookmakers": [
{
"id": 1,
"name": "bwin",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.30"
},
{
"value": "Away",
"odd": "3.60"
}
]
}
]
},
{
"id": 7,
"name": "10Bet",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.33"
},
{
"value": "Away",
"odd": "3.45"
}
]
}
]
},
{
"id": 4,
"name": "bet365",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.34"
},
{
"value": "Away",
"odd": "3.35"
}
]
}
]
},
{
"id": 2,
"name": "Marathon",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.36"
},
{
"value": "Away",
"odd": "3.44"
}
]
}
]
},
{
"id": 8,
"name": "5Dimes",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.36"
},
{
"value": "Away",
"odd": "3.55"
}
]
}
]
},
{
"id": 9,
"name": "Betfair",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.33"
},
{
"value": "Away",
"odd": "3.25"
}
]
}
]
},
{
"id": 10,
"name": "188bet",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.32"
},
{
"value": "Away",
"odd": "3.60"
}
]
}
]
},
{
"id": 11,
"name": "Intertops",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.33"
},
{
"value": "Away",
"odd": "3.50"
}
]
}
]
},
{
"id": 12,
"name": "Pncl",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.34"
},
{
"value": "Away",
"odd": "3.51"
}
]
}
]
},
{
"id": 13,
"name": "Sbo",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.32"
},
{
"value": "Away",
"odd": "3.38"
}
]
}
]
},
{
"id": 3,
"name": "1xBet",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.37"
},
{
"value": "Away",
"odd": "3.42"
}
]
}
]
},
{
"id": 14,
"name": "BetFred",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.33"
},
{
"value": "Away",
"odd": "3.25"
}
]
}
]
},
{
"id": 5,
"name": "Bovada",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.33"
},
{
"value": "Away",
"odd": "3.50"
}
]
}
]
},
{
"id": 15,
"name": "BetUS",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.36"
},
{
"value": "Away",
"odd": "3.35"
}
]
}
]
},
{
"id": 6,
"name": "Betcris",
"bets": [
{
"id": 2,
"name": "Home/Away",
"values": [
{
"value": "Home",
"odd": "1.32"
},
{
"value": "Away",
"odd": "3.39"
}
]
}
]
}
]
}
]
}
bookmakers
Get all available bookmakers.

All bookmakers id can be used in endpoint odds as filters.

query Parameters
id	
integer
The id of the bookmaker

search	
string >= 3 characters
Example: search=Bwin
The name of the bookmaker

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/bookmakers

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/bookmakers');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "bookmakers",
"parameters": [ ],
"errors": [ ],
"results": 15,
"response": [
{
"id": 1,
"name": "Bwin"
},
{
"id": 2,
"name": "Marathon Bet"
},
{
"id": 3,
"name": "1xBet"
},
{
"id": 4,
"name": "Bet365"
},
{
"id": 5,
"name": "Bovada"
},
{
"id": 6,
"name": "Betcris"
},
{
"id": 7,
"name": "10Bet"
},
{
"id": 8,
"name": "5Dimes"
},
{
"id": 9,
"name": "Betfair"
},
{
"id": 10,
"name": "188bet"
},
{
"id": 11,
"name": "Intertops"
},
{
"id": 12,
"name": "Pinnacle"
},
{
"id": 13,
"name": "Sport Betting Online"
},
{
"id": 14,
"name": "BetFred"
},
{
"id": 15,
"name": "BetUS"
}
]
}
bets
Get all available bets.

All bets id can be used in endpoint odds as filters

query Parameters
id	
integer
The id of the bet

search	
string >= 3 characters
Example: search=under
The name of the bet

header Parameters
x-rapidapi-key
required
string
Your RapidAPI Key

Responses
200 OK

get
/bets

Request samples
PhpPythonNodeJavaScriptCurlRubyUse Cases

Copy
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://v1.basketball.api-sports.io/bets');
$request->setRequestMethod('GET');
$request->setHeaders(array(
	'x-rapidapi-host' => 'v1.basketball.api-sports.io',
	'x-rapidapi-key' => 'XxXxXxXxXxXxXxXxXxXxXxXx'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
Response samples
200
Content type
application/json

Copy
Expand allCollapse all
{
"get": "bets",
"parameters": {
"search": "under"
},
"errors": [ ],
"results": 7,
"response": [
{
"id": 1,
"name": "3Way Result"
},
{
"id": 2,
"name": "Home/Away"
},
{
"id": 3,
"name": "Asian Handicap"
},
{
"id": 4,
"name": "Over/Under"
},
{
"id": 5,
"name": "Over/Under 1st Half"
},
{
"id": 6,
"name": "Highest Scoring Half"
},
{
"id": 7,
"name": "Double Chance"
},
{
"id": 8,
"name": "1st Half 3Way Result"
},
{
"id": 9,
"name": "Handicap Result 1st Half"
},
{
"id": 10,
"name": "Asian Handicap First Half"
},
{
"id": 11,
"name": "Asian Handicap 2nd Qtr"
},
{
"id": 12,
"name": "Odd/Even (Including OT)"
},
{
"id": 13,
"name": "Odd/Even 1st Half"
},
{
"id": 14,
"name": "3Way Result - 1st Qtr"
},
{
"id": 15,
"name": "HT/FT (Including OT)"
},
{
"id": 16,
"name": "Over/Under 1st Qtr"
},
{
"id": 17,
"name": "Asian Handicap 1st Qtr"
},
{
"id": 18,
"name": "Home/Away - 1st Half"
},
{
"id": 19,
"name": "Home/Away - 1st Qtr"
}
]
}