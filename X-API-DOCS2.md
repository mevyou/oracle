X-API
SDKs
​
Introduction
A software development kit (SDK) is a set of software tools and programs tailored for a specific platform or API. The purpose of an SDK is to build or extend functionality of applications by providing libraries or codebases that developers can use within their applications, efficiently and with minimal coding. This significantly speeds up the development process, saving time, money, and effort.
The X Developer Platform now offers 2 official SDKs for those who develop in TypeScript/Javascript and Java. These will allow developers to build more effectively by eliminating the need to manually program the complexities around the X API v2, utilizing the pre-built functions for all available v2 endpoints as well as simplifying the authentication process. As these are built and maintained by the Developer Platform team, they will always be up to date with future releases to the X API v2
Since these SDKs wrap the X API, you must have a developer account to authenticate requests using the credentials from a developer App, located within a Project.
​
Installing
Java
TypeScript
This package supports Node.js 14+, to install, run the following command in the directory of the Node project: npm install twitter-api-sdk
​
Client basics
Import the classes (Java) and package (TypeScript) at the top of a working file to gain access to the authentication and library clients. In order to use the methods from the library client, authentication credentials must be passed, this could either be Bearer Token (App-only) or client id/client secret if authenticating with OAuth 2.0 user context.
Here are examples of how this would look:
Java
TypeScript

Copy

Ask AI
//Import package
import { Client, auth } from "twitter-api-sdk";

// Initialize auth client first
const authClient = new auth.OAuth2User({
 client_id: process.env.CLIENT_ID as string,
 client_secret: process.env.CLIENT_SECRET as string,
 callback: "YOUR-CALLBACK",
 scopes: ["tweet.read", "users.read", "offline.access"],
});

 // Pass auth credentials to the library client
 const twitterClient = new Client(authClient);
​
Authentication Flow
If you are using the application only option to authenticate the SDKs, you will only need to provide the token and the library client will be ready to use the endpoint methods right away. Keep in mind, application only tokens cannot be used on endpoints that require user context authentication.
OAuth 2.0 user context authentication requires a few extra steps after creating the auth client.
Generate authorization URL
Authorize the application from the authorization URL
Redirects to callback (this should be matching the callback URL set in the auth settings page in the Developer Portal).
Parse code verifier to exchange for access token
The SDKs provide methods on the auth client that simplifies these steps. For a full example of how to make a request authenticating with OAuth 2.0 user context, check out the GitHub repositories.
TypeScript
Java
​
Endpoint methods
The methods provided within the library client are clearly named to correspond with every endpoint and all parameters are passed in as arguments. Here is an example of Post lookup by ID:
Java
TypeScript

Copy

Ask AI
const lookupTweetById = await client.tweets.findTweetById(
  // Tweet ID
  "1511757922354663425",
  {
    // Optional parameters
    expansions: ["author_id"],
    "user.fields": ["created_at", "description", "name"],
  }
);


// Get Tweet objects by ID, using bearer token authentication
// https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/quick-start

const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/tweets?ids=";

async function getRequest() {

    // These are the parameters for the API request
    // specify Tweet IDs to fetch, and any additional fields that are required
    // by default, only the Tweet ID and text are returned
    const params = {
        "ids": "1278747501642657792,1255542774432063488", // Edit Tweet IDs to look up
        "tweet.fields": "lang,author_id", // Edit optional query parameters here
        "user.fields": "created_at" // Edit optional query parameters here
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2TweetLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();



// Get Tweet objects by ID, using user authentication
// https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/quick-start

const got = require('got');
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const qs = require('querystring');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// The code below sets the consumer key and consumer secret from your environment variables
// To set environment variables on macOS or Linux, run the export commands below from the terminal:
// export CONSUMER_KEY='YOUR-KEY'
// export CONSUMER_SECRET='YOUR-SECRET'
const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret = process.env.CONSUMER_SECRET;

// These are the parameters for the API request
// specify Tweet IDs to fetch, and any additional fields that are required
// by default, only the Tweet ID and text are returned
const tweetIDs = '1278747501642657792,1275828087666679809'; // Edit the Tweet IDs to look up
const params = 'tweet.fields=lang,author_id&user.fields=created_at'; // Edit optional query parameters here

const endpointURL = `https://api.twitter.com/2/tweets?ids=${tweetIDs}&${params}`;

// this example uses PIN-based OAuth to authorize the user
const requestTokenURL = 'https://api.twitter.com/oauth/request_token?oauth_callback=oob';
const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
const accessTokenURL = 'https://api.twitter.com/oauth/access_token';

const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});

async function input(prompt) {
  return new Promise(async (resolve, reject) => {
    readline.question(prompt, (out) => {
      readline.close();
      resolve(out);
    });
  });
}

async function requestToken() {

  const authHeader = oauth.toHeader(oauth.authorize({
    url: requestTokenURL,
    method: 'POST'
  }));

  const req = await got.post(requestTokenURL, {
    headers: {
      Authorization: authHeader["Authorization"]
    }
  });

  if (req.body) {
    return qs.parse(req.body);
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}

async function accessToken({
  oauth_token,
  oauth_token_secret
}, verifier) {

  const authHeader = oauth.toHeader(oauth.authorize({
    url: accessTokenURL,
    method: 'POST'
  }));

  const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`

  const req = await got.post(path, {
    headers: {
      Authorization: authHeader["Authorization"]
    }
  });

  if (req.body) {
    return qs.parse(req.body);
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}

async function getRequest({
  oauth_token,
  oauth_token_secret
}) {

  const token = {
    key: oauth_token,
    secret: oauth_token_secret
  };

  const authHeader = oauth.toHeader(oauth.authorize({
    url: endpointURL,
    method: 'GET'
  }, token));

  const req = await got(endpointURL, {
    headers: {
      Authorization: authHeader["Authorization"],
      'user-agent': "v2TweetLookupJS"
    }
  });

  if (req.body) {
    return JSON.parse(req.body);
  } else {
    throw new Error('Unsuccessful request');
  }
}

(async () => {
  try {

    // Get request token
    const oAuthRequestToken = await requestToken();

    // Get authorization
    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);
    console.log('Please go here and authorize:', authorizeURL.href);
    const pin = await input('Paste the PIN here: ');

    // Get the access token
    const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());

    // Make the request
    const response = await getRequest(oAuthAccessToken);
    console.dir(response, {
      depth: null
    });

  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
})();



X API endpoint map
The following table maps the X API v2 endpoints to the corresponding standard v1.1, and enterprise endpoints. To learn more about each of these versions and tiers, please visit our X API getting started guide.
You’ll notice that we still have several items marked as [Coming Soon]. If you notice anything within this table that is marked as [Replacement Under Consideration] or [No Replacement Planned], and you would like to see us release a v2 version of that endpoint, please let us know via our community forum or your enterprise account manager. 
Standard v1.1	Enterprise	X API v2
Posts	GET statuses/show
GET statuses/lookup		Posts lookup
POST statuses/update
POST statuses/destroy/:id		Manage Posts
GET statuses/user_timeline
GET statuses/mentions_timeline
GET statuses/home_timeline		Timelines
- User Post timeline
- User mention timeline
- Reverse chronological home timeline
GET search/tweets	Search API
- 30 day
- Full-archive	Search Tweets
- Recent search
- 30 day [No Replacement Planned]
- Full-archive search
Search API
- 30 day
- Full-archive	Tweet counts
- Recent Tweet counts
- 30 day [No Replacement Planned]
- Full-archive Tweet counts
GET statuses/filter	PowerTrack API	Filtered stream
- Connect to stream
- Add/delete rules
- Retrieve rules
GET statuses/sample (1%)	Decahose API
Firehose API	Volume stream
- 1% sampled stream
- 10% decahose stream 
- 100% firehose stream
GET statuses/retweeters/:ids
GET statuses/retweets/:id		Retweets lookup
Quote Tweets lookup
POST statuses/retweet/:id
POST statuses/unretweet/:id		Manage Retweets
- Retweet a Tweet
- Undo a Retweet
GET favorites/list		Likes lookup
- Posts liked by a user
- Users who have liked a Post
POST favorites/create
POST favorites/destroy		Manage Likes
- Like a Post
- Unlike a Post
Hide replies
GET statuses/oembed		[No Replacement Planned]
GET statuses/retweets_of_me		[No Replacement Planned]
Users	GET users/show
GET users/lookup		Users lookup
GET users/search		Get user/search
GET followers/ids
GET followers/list
GET friends/ids
GET friends/list		Follows lookup
GET friendships/incoming
GET friendships/lookup
GET friendships/no_retweets/ids
GET friendships/outgoing
GET friendships/show		Connection_status
GET friendships/create
GET friendships/destroy		Manage follows
- Follow a user
- Unfollow a user
POST friendships/update		[No Replacement Planned]
GET blocks/ids
GET blocks/list		Blocks lookup
POST blocks/create
POST blocks/destroy		Manage blocks
- Block a user
- Unblock a user
GET mutes/users/ids
GET mutes/users/list		Mutes lookup
POST mutes/users/create
POST mutes/users/destroy		Manage mutes
- Mute a user
- Unmute a user
GET account/verify_credentials		[No Changes Planned]
[No Replacement Planned]
GET saved_searches/show/:id
GET saved_searches/list
POST saved_searches/create
POST saved_searches/destroy/:id		[No Replacement Planned]
POST users/report_spam		[No Replacement Planned]
Account Activity API	[Migrating in 2025]
Spaces			Spaces lookup
Spaces search
Ticketed user lookup
Tweets shared in a Space lookup
Direct Messages			Direct Messages lookup
Manage Direct Messages
Lists	GET lists/show		Lists lookup
POST lists/create
POST lists/destroy
POST lists/update		Manage Lists
GET lists/statuses		Lists Tweets lookup
GET lists/members
GET lists/memberships
POST lists/members/create
POST lists/members/destroy		List members
GET lists/subscribers
GET lists/subscriptions
GET lists/lists
POST lists/subscribers/create
POST lists/subscribers/destroy		Lists follows
GET lists/ownerships		Owned Lists lookup
Pinned Lists
GET lists/members/show
GET lists/subscribers/show		[No Replacement Planned]
POST lists/members/create_all
POST lists/members/destroy_all		[No Replacement Planned]
Media			Media Upload
Trends			Trends v2
Geo			[No Replacement Planned]
Collections	GET collections/entries
GET collections/list
GET collections/show
POST collections/create
POST collections/destroy
POST collections/entries/add
POST collections/entries/curate
POST collections/entries/move
POST collections/entries/remove
POST collections/update		[No Replacement Planned]
Metrics		Engagement API
- /totals
- /28hr
- /historical	/totals - data is built into v2 responses
/28hr - [Here]
/historical - [Here]
Compliance			Batch compliance
Compliance firehose	Compliance streams
Utilities		Usage API	Usage API
GET application/rate_limit_status		[No Replacement Planned]
GET help/languages		[No Replacement Planned]
Authentication			[No Changes Planned]
Streaming Likes		Streaming Likes	[Coming Soon]





Search
Introduction
Searching for Posts is an important feature used to surface X conversations about a specific topic or event. While this functionality is present in X, these endpoints provide greater flexibility and power when filtering for and ingesting Posts so you can find relevant data for your research more easily; build out near-real-time ‘listening’ applications; or generally explore, analyze, and/or act upon Posts related to a topic of interest. 
We offer two endpoints that allow you to search for Posts: Recent search and full-archive search. Both of these REST endpoints share a common design and features, including their use of a single search query to filter for Posts around a specific topic. These search queries are created with a set of operators that match on Post and user attributes, such as message keywords, hashtags, and URLs. Operators can be combined into queries with boolean logic and parentheses to help refine the queries matching behavior. 
Both the recent search and the full-archive search endpoints provide edited Post metadata. All objects for Posts created since September 29, 2022, include Post edit metadata, even if the Post was never edited. Each time a Post is edited, a new Post ID is created. A Post’s edit history is documented by an array of Post IDs, starting with the original ID.
These endpoints will always return the most recent edit, along with any edit history. Any Post collected after its 30-minute edit window will represent its final version. To learn more about Edit Post metadata, check out the Edit Posts fundamentals page.
Once you’ve set up your query and start receiving Posts, these endpoints support navigating the results both by time and Post ID ranges. This is designed to support two common use cases: 
Get historical: Requests are for a period of interest, with no focus on the real-time nature of the data. A single request is made, and all matching data is delivered using pagination as needed. This is the default mode for Search Posts.
Polling or listening: Requests are made in a “any new Posts since my last request?” mode. Requests are made on a continual basis, and typically there is a use case focused on near real-time ‘listening’ for Posts of interest.
Many operators and query limits are exclusive to Enterprise access, meaning that you must use keys and tokens from an App within a Project with Enterprise access to utilize the additional functionality. You can learn more about this in the endpoint sections below.
Both the recent search and the full-archive search endpoints returned Posts contribute to the monthly Post cap.
Account setup
To access these endpoints, you will need:
An approved developer account.
To authenticate using the keys and tokens from a developer App that is located within a Project. 
Learn more about getting access to the X API v2 endpoints in our getting started guide.
​
Recent search
The recent search endpoint allows you to programmatically access filtered public Posts posted over the last week, and is available to all developers who have a developer account and are using keys and tokens from an App within a Project.
You can authenticate your requests with OAuth 1.0a User Context, OAuth 2.0 App-Only, or OAuth 2.0 Authorization Code with PKCE. However, if you would like to receive private metrics, or a breakdown of organic and promoted metrics within your Post results, you will have to use OAuth 1.0a User Context or OAuth 2.0 Authorization Code with PKCE, and pass user Access Tokens that are associated with the user that published the given content. 
This endpoint can deliver up to 100 Posts per request in reverse-chronological order, and pagination tokens are provided for paging through large sets of matching Posts. 
When using a Project with regular access, you can use the basic set of operators and can make queries up to 512 characters long. When using a Project with Enterprise access, you have access to additional operators. Projects with Enterprise Access can make queries up to 4096 characters long.
Learn more about access levels.
​
Full-archive search
The v2 full-archive search endpoint is only available to Projects with Pro access and Enterprise access. The endpoint allows you to programmatically access public Posts from the complete archive dating back to the first Post in March 2006, based on your search query.
You can authenticate your requests to this endpoint using OAuth 2.0 App-Only, and the App Access Token must come from an App that is within a Project that has Pro or Enterprise access. Since you cannot make a request on behalf of other users (OAuth 1.0a User Context or OAuth 2.0 Authorization Code with PKCE) with this endpoint, you will not be able to pull private metrics. 
This endpoint can deliver up to 500 Posts per request in reverse-chronological order, and pagination tokens are provided for paging through large sets of matching Posts.
Note: If requesting annotations through the tweet.fields parameter, the max_results parameter is currently limited to a max value of 100. This may change in the future, but please be mindful of this limitation.
Since this endpoint is only available to those that have been approved for Pro and Enterprise access, you have access to the full set of search operators and can make queries up to 1024 characters long.

Quick start


Sample code


Search Posts Python client


Search Posts Ruby client


Run in Postman


Try with API Explorer


Supporting resources
Learn how to use Postman to make requests
Troubleshoot an error
Visit the API reference page




Search
Search all Posts
Retrieves Posts from the full archive matching a search query.

GET
/
2
/
tweets
/
search
/
all

Try it
Authorizations
​
Authorization
stringheaderrequired
Bearer authentication header of the form Bearer <token>, where <token> is your auth token.

Query Parameters
​
query
stringrequired
One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.

Required string length: 1 - 4096
Example:
"(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet"

​
start_time
string<date-time>
YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).

​
end_time
string<date-time>
YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).

​
since_id
string
Returns results with a Post ID greater than (that is, more recent than) the specified ID.

Example:
"1346889436626259968"

​
until_id
string
Returns results with a Post ID less than (that is, older than) the specified ID.

Example:
"1346889436626259968"

​
max_results
integerdefault:10
The maximum number of search results to be returned by a request.

Required range: 10 <= x <= 500
​
next_token
string
This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

Minimum length: 1
​
pagination_token
string
This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

Minimum length: 1
​
sort_order
enum<string>
This order in which to return results.

Available options: recency, relevancy 
​
tweet.fields
enum<string>[]
A comma separated list of Tweet fields to display.

Minimum length: 1
Show child attributes

Example:
[
  "article",
  "attachments",
  "author_id",
  "card_uri",
  "community_id",
  "context_annotations",
  "conversation_id",
  "created_at",
  "display_text_range",
  "edit_controls",
  "edit_history_tweet_ids",
  "entities",
  "geo",
  "id",
  "in_reply_to_user_id",
  "lang",
  "media_metadata",
  "non_public_metrics",
  "note_tweet",
  "organic_metrics",
  "possibly_sensitive",
  "promoted_metrics",
  "public_metrics",
  "referenced_tweets",
  "reply_settings",
  "scopes",
  "source",
  "suggested_source_links",
  "text",
  "withheld"
]
​
expansions
enum<string>[]
A comma separated list of fields to expand.

Minimum length: 1
Show child attributes

Example:
[
  "article.cover_media",
  "article.media_entities",
  "attachments.media_keys",
  "attachments.media_source_tweet",
  "attachments.poll_ids",
  "author_id",
  "edit_history_tweet_ids",
  "entities.mentions.username",
  "geo.place_id",
  "in_reply_to_user_id",
  "entities.note.mentions.username",
  "referenced_tweets.id",
  "referenced_tweets.id.attachments.media_keys",
  "referenced_tweets.id.author_id"
]
​
media.fields
enum<string>[]
A comma separated list of Media fields to display.

Minimum length: 1
Show child attributes

Example:
[
  "alt_text",
  "duration_ms",
  "height",
  "media_key",
  "non_public_metrics",
  "organic_metrics",
  "preview_image_url",
  "promoted_metrics",
  "public_metrics",
  "type",
  "url",
  "variants",
  "width"
]
​
poll.fields
enum<string>[]
A comma separated list of Poll fields to display.

Minimum length: 1
Show child attributes

Example:
[
  "duration_minutes",
  "end_datetime",
  "id",
  "options",
  "voting_status"
]
​
user.fields
enum<string>[]
A comma separated list of User fields to display.

Minimum length: 1
Show child attributes

Example:
[
  "affiliation",
  "confirmed_email",
  "connection_status",
  "created_at",
  "description",
  "entities",
  "id",
  "is_identity_verified",
  "location",
  "most_recent_tweet_id",
  "name",
  "parody",
  "pinned_tweet_id",
  "profile_banner_url",
  "profile_image_url",
  "protected",
  "public_metrics",
  "receives_your_dm",
  "subscription",
  "subscription_type",
  "url",
  "username",
  "verified",
  "verified_followers_count",
  "verified_type",
  "withheld"
]
​
place.fields
enum<string>[]
A comma separated list of Place fields to display.

Minimum length: 1
Show child attributes

Example:
[
  "contained_within",
  "country",
  "country_code",
  "full_name",
  "geo",
  "id",
  "name",
  "place_type"
]
Response

200

application/json
The request has succeeded.

​
data
object[]
Minimum length: 1
Hide child attributes

​
attachments
object
Specifies the type of attachments (if any) present in this Tweet.

Hide child attributes

​
attachments.media_keys
string[]
A list of Media Keys for each one of the media attachments (if media are attached).

Minimum length: 1
The Media Key identifier for this attachment.

​
attachments.media_source_tweet_id
string[]
A list of Posts the media on this Tweet was originally posted in. For example, if the media on a tweet is re-used in another Tweet, this refers to the original, source Tweet..

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
attachments.poll_ids
string[]
A list of poll IDs (if polls are attached).

Minimum length: 1
Unique identifier of this poll.

​
author_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
community_id
string
The unique identifier of this Community.

Example:
"1146654567674912769"

​
context_annotations
object[]
Minimum length: 1
Hide child attributes

​
domain
objectrequired
Represents the data for the context annotation domain.

Hide child attributes

​
domain.id
stringrequired
The unique id for a context annotation domain.

​
domain.description
string
Description of the context annotation domain.

​
domain.name
string
Name of the context annotation domain.

​
entity
objectrequired
Represents the data for the context annotation entity.

Hide child attributes

​
entity.id
stringrequired
The unique id for a context annotation entity.

​
entity.description
string
Description of the context annotation entity.

​
entity.name
string
Name of the context annotation entity.

​
conversation_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
created_at
string<date-time>
Creation time of the Tweet.

Example:
"2021-01-06T18:40:40.000Z"

​
display_text_range
integer[]
Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. start must be smaller than end. The start index is inclusive, the end index is exclusive.

Required array length: 2 elements
​
edit_controls
object
Hide child attributes

​
edit_controls.editable_until
string<date-time>required
Time when Tweet is no longer editable.

Example:
"2021-01-06T18:40:40.000Z"

​
edit_controls.edits_remaining
integerrequired
Number of times this Tweet can be edited.

​
edit_controls.is_edit_eligible
booleanrequired
Indicates if this Tweet is eligible to be edited.

Example:
false

​
edit_history_tweet_ids
string[]
A list of Tweet Ids in this Tweet chain.

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
entities
object
Hide child attributes

​
entities.annotations
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is inclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
normalized_text
string
Text used to determine annotation.

Example:
"Barack Obama"

​
probability
number
Confidence factor for annotation type.

Required range: 0 <= x <= 1
​
type
string
Annotation type.

Example:
"Person"

​
entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
geo
object
The location tagged on the Tweet, if the user provided one.

Hide child attributes

​
geo.coordinates
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.coordinates.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.coordinates.type
enum<string>required
Available options: Point 
Example:
"Point"

​
geo.place_id
string
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
in_reply_to_user_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
lang
string
Language of the Tweet, if detected by X. Returned as a BCP47 language tag.

Example:
"en"

​
non_public_metrics
object
Nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
non_public_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
note_tweet
object
The full-content of the Tweet, including text beyond 280 characters.

Hide child attributes

​
note_tweet.entities
object
Hide child attributes

​
note_tweet.entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
note_tweet.entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
note_tweet.entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
note_tweet.entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
note_tweet.text
string
The note content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
organic_metrics
object
Organic nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
organic_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
organic_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
organic_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
organic_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
possibly_sensitive
boolean
Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.

Example:
false

​
promoted_metrics
object
Promoted nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
promoted_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
promoted_metrics.like_count
integer
Number of times this Tweet has been liked.

​
promoted_metrics.reply_count
integer
Number of times this Tweet has been replied to.

​
promoted_metrics.retweet_count
integer
Number of times this Tweet has been Retweeted.

​
public_metrics
object
Engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
public_metrics.bookmark_count
integerrequired
Number of times this Tweet has been bookmarked.

​
public_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
public_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
public_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
public_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
public_metrics.quote_count
integer
Number of times this Tweet has been quoted.

​
referenced_tweets
object[]
A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.

Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
type
enum<string>required
Available options: retweeted, quoted, replied_to 
​
reply_settings
enum<string>
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.

Available options: everyone, mentionedUsers, following, other, subscribers, verified 
​
scopes
object
The scopes for this tweet

Hide child attributes

​
scopes.followers
boolean
Indicates if this Tweet is viewable by followers without the Tweet ID

Example:
false

​
source
string
This is deprecated.

​
suggested_source_links
object[]
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
text
string
The content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
username
string
The X handle (screen name) of this user.

​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.copyright
booleanrequired
Indicates if the content is being withheld for on the basis of copyright infringement.

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates whether the content being withheld is the tweet or a user.

Available options: tweet, user 
​
errors
object[]
Minimum length: 1
Hide child attributes

​
title
stringrequired
​
type
stringrequired
​
detail
string
​
status
integer
​
includes
object
Hide child attributes

​
includes.media
object[]
Minimum length: 1
Hide child attributes

​
type
stringrequired
​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
includes.places
object[]
Minimum length: 1
Hide child attributes

​
full_name
stringrequired
The full name of this place.

Example:
"Lakewood, CO"

​
id
stringrequired
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
contained_within
string[]
Minimum length: 1
The identifier for this place.

​
country
string
The full name of the county in which this place exists.

Example:
"United States"

​
country_code
string
A two-letter ISO 3166-1 alpha-2 country code.

Example:
"US"

​
geo
object
Hide child attributes

​
geo.bbox
number[]required
Required array length: 4 elements
Example:
[
  -105.193475,
  39.60973,
  -105.053164,
  39.761974
]
​
geo.properties
objectrequired
​
geo.type
enum<string>required
Available options: Feature 
​
geo.geometry
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.geometry.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.geometry.type
enum<string>required
Available options: Point 
Example:
"Point"

​
name
string
The human readable name of this place.

Example:
"Lakewood"

​
place_type
enum<string>
Available options: poi, neighborhood, city, admin, country, unknown 
Example:
"city"

​
includes.polls
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this poll.

Example:
"1365059861688410112"

​
options
object[]required
Required array length: 2 - 4 elements
Hide child attributes

​
label
stringrequired
The text of a poll choice.

Required string length: 1 - 25
​
position
integerrequired
Position of this choice in the poll.

​
votes
integerrequired
Number of users who voted for this choice.

​
duration_minutes
integer
Required range: 5 <= x <= 10080
​
end_datetime
string<date-time>
​
voting_status
enum<string>
Available options: open, closed 
​
includes.topics
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Topic.

​
name
stringrequired
The name of the given topic.

Example:
"Technology"

​
description
string
The description of the given topic.

Example:
"All about technology"

​
includes.tweets
object[]
Minimum length: 1
Hide child attributes

​
attachments
object
Specifies the type of attachments (if any) present in this Tweet.

Hide child attributes

​
attachments.media_keys
string[]
A list of Media Keys for each one of the media attachments (if media are attached).

Minimum length: 1
The Media Key identifier for this attachment.

​
attachments.media_source_tweet_id
string[]
A list of Posts the media on this Tweet was originally posted in. For example, if the media on a tweet is re-used in another Tweet, this refers to the original, source Tweet..

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
attachments.poll_ids
string[]
A list of poll IDs (if polls are attached).

Minimum length: 1
Unique identifier of this poll.

​
author_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
community_id
string
The unique identifier of this Community.

Example:
"1146654567674912769"

​
context_annotations
object[]
Minimum length: 1
Show child attributes

​
conversation_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
created_at
string<date-time>
Creation time of the Tweet.

Example:
"2021-01-06T18:40:40.000Z"

​
display_text_range
integer[]
Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. start must be smaller than end. The start index is inclusive, the end index is exclusive.

Required array length: 2 elements
​
edit_controls
object
Hide child attributes

​
edit_controls.editable_until
string<date-time>required
Time when Tweet is no longer editable.

Example:
"2021-01-06T18:40:40.000Z"

​
edit_controls.edits_remaining
integerrequired
Number of times this Tweet can be edited.

​
edit_controls.is_edit_eligible
booleanrequired
Indicates if this Tweet is eligible to be edited.

Example:
false

​
edit_history_tweet_ids
string[]
A list of Tweet Ids in this Tweet chain.

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
entities
object
Hide child attributes

​
entities.annotations
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is inclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
normalized_text
string
Text used to determine annotation.

Example:
"Barack Obama"

​
probability
number
Confidence factor for annotation type.

Required range: 0 <= x <= 1
​
type
string
Annotation type.

Example:
"Person"

​
entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
geo
object
The location tagged on the Tweet, if the user provided one.

Hide child attributes

​
geo.coordinates
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.coordinates.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.coordinates.type
enum<string>required
Available options: Point 
Example:
"Point"

​
geo.place_id
string
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
in_reply_to_user_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
lang
string
Language of the Tweet, if detected by X. Returned as a BCP47 language tag.

Example:
"en"

​
non_public_metrics
object
Nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
non_public_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
note_tweet
object
The full-content of the Tweet, including text beyond 280 characters.

Hide child attributes

​
note_tweet.entities
object
Hide child attributes

​
note_tweet.entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.urls
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.text
string
The note content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
organic_metrics
object
Organic nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
organic_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
organic_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
organic_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
organic_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
possibly_sensitive
boolean
Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.

Example:
false

​
promoted_metrics
object
Promoted nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
promoted_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
promoted_metrics.like_count
integer
Number of times this Tweet has been liked.

​
promoted_metrics.reply_count
integer
Number of times this Tweet has been replied to.

​
promoted_metrics.retweet_count
integer
Number of times this Tweet has been Retweeted.

​
public_metrics
object
Engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
public_metrics.bookmark_count
integerrequired
Number of times this Tweet has been bookmarked.

​
public_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
public_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
public_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
public_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
public_metrics.quote_count
integer
Number of times this Tweet has been quoted.

​
referenced_tweets
object[]
A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.

Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
type
enum<string>required
Available options: retweeted, quoted, replied_to 
​
reply_settings
enum<string>
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.

Available options: everyone, mentionedUsers, following, other, subscribers, verified 
​
scopes
object
The scopes for this tweet

Hide child attributes

​
scopes.followers
boolean
Indicates if this Tweet is viewable by followers without the Tweet ID

Example:
false

​
source
string
This is deprecated.

​
suggested_source_links
object[]
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
text
string
The content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
username
string
The X handle (screen name) of this user.

​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.copyright
booleanrequired
Indicates if the content is being withheld for on the basis of copyright infringement.

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates whether the content being withheld is the tweet or a user.

Available options: tweet, user 
​
includes.users
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
name
stringrequired
The friendly name of this User, as shown on their profile.

​
username
stringrequired
The X handle (screen name) of this user.

​
affiliation
object
Metadata about a user's affiliation.

Hide child attributes

​
affiliation.badge_url
string<uri>
The badge URL corresponding to the affiliation.

​
affiliation.description
string
The description of the affiliation.

​
affiliation.url
string<uri>
The URL, if available, to details about an affiliation.

​
affiliation.user_id
string[]
Minimum length: 1
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
connection_status
enum<string>[]
Returns detailed information about the relationship between two users.

Hide child attributes

​
enum<string>
Type of connection between users.

Available options: follow_request_received, follow_request_sent, blocking, followed_by, following, muting 
​
created_at
string<date-time>
Creation time of this User.

​
description
string
The text of this User's profile description (also known as bio), if the User provided one.

​
entities
object
A list of metadata found in the User's profile description.

Hide child attributes

​
entities.description
object
Hide child attributes

​
entities.description.annotations
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is inclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
normalized_text
string
Text used to determine annotation.

Example:
"Barack Obama"

​
probability
number
Confidence factor for annotation type.

Required range: 0 <= x <= 1
​
type
string
Annotation type.

Example:
"Person"

​
entities.description.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
entities.description.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
entities.description.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
entities.description.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Show child attributes

​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
entities.url
object
Expanded details for the URL specified in the User's profile, with start and end indices.

Hide child attributes

​
entities.url.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
location
string
The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.

​
most_recent_tweet_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
pinned_tweet_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
profile_banner_url
string<uri>
The URL to the profile banner for this User.

​
profile_image_url
string<uri>
The URL to the profile image for this User.

​
protected
boolean
Indicates if this User has chosen to protect their Posts (in other words, if this User's Posts are private).

​
public_metrics
object
A list of metrics for this User.

Hide child attributes

​
public_metrics.followers_count
integerrequired
Number of Users who are following this User.

​
public_metrics.following_count
integerrequired
Number of Users this User is following.

​
public_metrics.listed_count
integerrequired
The number of lists that include this User.

​
public_metrics.tweet_count
integerrequired
The number of Posts (including Retweets) posted by this User.

​
public_metrics.like_count
integer
The number of likes created by this User.

​
receives_your_dm
boolean
Indicates if you can send a DM to this User

​
subscription_type
enum<string>
The X Blue subscription type of the user, eg: Basic, Premium, PremiumPlus or None.

Available options: Basic, Premium, PremiumPlus, None 
​
url
string
The URL specified in the User's profile.

​
verified
boolean
Indicate if this User is a verified X User.

​
verified_type
enum<string>
The X Blue verified type of the user, eg: blue, government, business or none.

Available options: blue, government, business, none 
​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates that the content being withheld is a user.

Available options: user 
​
meta
object
Hide child attributes

​
meta.newest_id
string
The newest id in this response.

​
meta.next_token
string
The next token.

Minimum length: 1
​
meta.oldest_id
string
The oldest id in this response.

​
meta.result_count
integer
The number of results returned in this response.




Post Lookup
Get Posts by IDs
Retrieves details of multiple Posts by their IDs.

GET
/
2
/
tweets

Try it
Authorizations

BearerToken
​
Authorization
stringheaderrequired
Bearer authentication header of the form Bearer <token>, where <token> is your auth token.

Query Parameters
​
ids
string[]required
A comma separated list of Post IDs. Up to 100 are allowed in a single request.

Required array length: 1 - 100 elements
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
tweet.fields
enum<string>[]
A comma separated list of Tweet fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: article, attachments, author_id, card_uri, community_id, context_annotations, conversation_id, created_at, display_text_range, edit_controls, edit_history_tweet_ids, entities, geo, id, in_reply_to_user_id, lang, media_metadata, non_public_metrics, note_tweet, organic_metrics, possibly_sensitive, promoted_metrics, public_metrics, referenced_tweets, reply_settings, scopes, source, suggested_source_links, text, withheld 
Example:
[
  "article",
  "attachments",
  "author_id",
  "card_uri",
  "community_id",
  "context_annotations",
  "conversation_id",
  "created_at",
  "display_text_range",
  "edit_controls",
  "edit_history_tweet_ids",
  "entities",
  "geo",
  "id",
  "in_reply_to_user_id",
  "lang",
  "media_metadata",
  "non_public_metrics",
  "note_tweet",
  "organic_metrics",
  "possibly_sensitive",
  "promoted_metrics",
  "public_metrics",
  "referenced_tweets",
  "reply_settings",
  "scopes",
  "source",
  "suggested_source_links",
  "text",
  "withheld"
]
​
expansions
enum<string>[]
A comma separated list of fields to expand.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: article.cover_media, article.media_entities, attachments.media_keys, attachments.media_source_tweet, attachments.poll_ids, author_id, edit_history_tweet_ids, entities.mentions.username, geo.place_id, in_reply_to_user_id, entities.note.mentions.username, referenced_tweets.id, referenced_tweets.id.attachments.media_keys, referenced_tweets.id.author_id 
Example:
[
  "article.cover_media",
  "article.media_entities",
  "attachments.media_keys",
  "attachments.media_source_tweet",
  "attachments.poll_ids",
  "author_id",
  "edit_history_tweet_ids",
  "entities.mentions.username",
  "geo.place_id",
  "in_reply_to_user_id",
  "entities.note.mentions.username",
  "referenced_tweets.id",
  "referenced_tweets.id.attachments.media_keys",
  "referenced_tweets.id.author_id"
]
​
media.fields
enum<string>[]
A comma separated list of Media fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: alt_text, duration_ms, height, media_key, non_public_metrics, organic_metrics, preview_image_url, promoted_metrics, public_metrics, type, url, variants, width 
Example:
[
  "alt_text",
  "duration_ms",
  "height",
  "media_key",
  "non_public_metrics",
  "organic_metrics",
  "preview_image_url",
  "promoted_metrics",
  "public_metrics",
  "type",
  "url",
  "variants",
  "width"
]
​
poll.fields
enum<string>[]
A comma separated list of Poll fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: duration_minutes, end_datetime, id, options, voting_status 
Example:
[
  "duration_minutes",
  "end_datetime",
  "id",
  "options",
  "voting_status"
]
​
user.fields
enum<string>[]
A comma separated list of User fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: affiliation, confirmed_email, connection_status, created_at, description, entities, id, is_identity_verified, location, most_recent_tweet_id, name, parody, pinned_tweet_id, profile_banner_url, profile_image_url, protected, public_metrics, receives_your_dm, subscription, subscription_type, url, username, verified, verified_followers_count, verified_type, withheld 
Example:
[
  "affiliation",
  "confirmed_email",
  "connection_status",
  "created_at",
  "description",
  "entities",
  "id",
  "is_identity_verified",
  "location",
  "most_recent_tweet_id",
  "name",
  "parody",
  "pinned_tweet_id",
  "profile_banner_url",
  "profile_image_url",
  "protected",
  "public_metrics",
  "receives_your_dm",
  "subscription",
  "subscription_type",
  "url",
  "username",
  "verified",
  "verified_followers_count",
  "verified_type",
  "withheld"
]
​
place.fields
enum<string>[]
A comma separated list of Place fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: contained_within, country, country_code, full_name, geo, id, name, place_type 
Example:
[
  "contained_within",
  "country",
  "country_code",
  "full_name",
  "geo",
  "id",
  "name",
  "place_type"
]
Response

200

application/json
The request has succeeded.

​
data
object[]
Minimum length: 1
Hide child attributes

​
attachments
object
Specifies the type of attachments (if any) present in this Tweet.

Hide child attributes

​
attachments.media_keys
string[]
A list of Media Keys for each one of the media attachments (if media are attached).

Minimum length: 1
The Media Key identifier for this attachment.

​
attachments.media_source_tweet_id
string[]
A list of Posts the media on this Tweet was originally posted in. For example, if the media on a tweet is re-used in another Tweet, this refers to the original, source Tweet..

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
attachments.poll_ids
string[]
A list of poll IDs (if polls are attached).

Minimum length: 1
Unique identifier of this poll.

​
author_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
community_id
string
The unique identifier of this Community.

Example:
"1146654567674912769"

​
context_annotations
object[]
Minimum length: 1
Hide child attributes

​
domain
objectrequired
Represents the data for the context annotation domain.

Hide child attributes

​
domain.id
stringrequired
The unique id for a context annotation domain.

​
domain.description
string
Description of the context annotation domain.

​
domain.name
string
Name of the context annotation domain.

​
entity
objectrequired
Represents the data for the context annotation entity.

Hide child attributes

​
entity.id
stringrequired
The unique id for a context annotation entity.

​
entity.description
string
Description of the context annotation entity.

​
entity.name
string
Name of the context annotation entity.

​
conversation_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
created_at
string<date-time>
Creation time of the Tweet.

Example:
"2021-01-06T18:40:40.000Z"

​
display_text_range
integer[]
Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. start must be smaller than end. The start index is inclusive, the end index is exclusive.

Required array length: 2 elements
​
edit_controls
object
Hide child attributes

​
edit_controls.editable_until
string<date-time>required
Time when Tweet is no longer editable.

Example:
"2021-01-06T18:40:40.000Z"

​
edit_controls.edits_remaining
integerrequired
Number of times this Tweet can be edited.

​
edit_controls.is_edit_eligible
booleanrequired
Indicates if this Tweet is eligible to be edited.

Example:
false

​
edit_history_tweet_ids
string[]
A list of Tweet Ids in this Tweet chain.

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
entities
object
Hide child attributes

​
entities.annotations
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is inclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
normalized_text
string
Text used to determine annotation.

Example:
"Barack Obama"

​
probability
number
Confidence factor for annotation type.

Required range: 0 <= x <= 1
​
type
string
Annotation type.

Example:
"Person"

​
entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
geo
object
The location tagged on the Tweet, if the user provided one.

Hide child attributes

​
geo.coordinates
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.coordinates.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.coordinates.type
enum<string>required
Available options: Point 
Example:
"Point"

​
geo.place_id
string
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
in_reply_to_user_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
lang
string
Language of the Tweet, if detected by X. Returned as a BCP47 language tag.

Example:
"en"

​
non_public_metrics
object
Nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
non_public_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
note_tweet
object
The full-content of the Tweet, including text beyond 280 characters.

Hide child attributes

​
note_tweet.entities
object
Hide child attributes

​
note_tweet.entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
note_tweet.entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
note_tweet.entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
note_tweet.entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
note_tweet.text
string
The note content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
organic_metrics
object
Organic nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
organic_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
organic_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
organic_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
organic_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
possibly_sensitive
boolean
Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.

Example:
false

​
promoted_metrics
object
Promoted nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
promoted_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
promoted_metrics.like_count
integer
Number of times this Tweet has been liked.

​
promoted_metrics.reply_count
integer
Number of times this Tweet has been replied to.

​
promoted_metrics.retweet_count
integer
Number of times this Tweet has been Retweeted.

​
public_metrics
object
Engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
public_metrics.bookmark_count
integerrequired
Number of times this Tweet has been bookmarked.

​
public_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
public_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
public_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
public_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
public_metrics.quote_count
integer
Number of times this Tweet has been quoted.

​
referenced_tweets
object[]
A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.

Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
type
enum<string>required
Available options: retweeted, quoted, replied_to 
​
reply_settings
enum<string>
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.

Available options: everyone, mentionedUsers, following, other, subscribers, verified 
​
scopes
object
The scopes for this tweet

Hide child attributes

​
scopes.followers
boolean
Indicates if this Tweet is viewable by followers without the Tweet ID

Example:
false

​
source
string
This is deprecated.

​
suggested_source_links
object[]
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
text
string
The content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
username
string
The X handle (screen name) of this user.

​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.copyright
booleanrequired
Indicates if the content is being withheld for on the basis of copyright infringement.

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates whether the content being withheld is the tweet or a user.

Available options: tweet, user 
​
errors
object[]
Minimum length: 1
Hide child attributes

​
title
stringrequired
​
type
stringrequired
​
detail
string
​
status
integer
​
includes
object
Hide child attributes

​
includes.media
object[]
Minimum length: 1
Hide child attributes

​
type
stringrequired
​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
includes.places
object[]
Minimum length: 1
Hide child attributes

​
full_name
stringrequired
The full name of this place.

Example:
"Lakewood, CO"

​
id
stringrequired
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
contained_within
string[]
Minimum length: 1
The identifier for this place.

​
country
string
The full name of the county in which this place exists.

Example:
"United States"

​
country_code
string
A two-letter ISO 3166-1 alpha-2 country code.

Example:
"US"

​
geo
object
Hide child attributes

​
geo.bbox
number[]required
Required array length: 4 elements
Example:
[
  -105.193475,
  39.60973,
  -105.053164,
  39.761974
]
​
geo.properties
objectrequired
​
geo.type
enum<string>required
Available options: Feature 
​
geo.geometry
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.geometry.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.geometry.type
enum<string>required
Available options: Point 
Example:
"Point"

​
name
string
The human readable name of this place.

Example:
"Lakewood"

​
place_type
enum<string>
Available options: poi, neighborhood, city, admin, country, unknown 
Example:
"city"

​
includes.polls
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this poll.

Example:
"1365059861688410112"

​
options
object[]required
Required array length: 2 - 4 elements
Hide child attributes

​
label
stringrequired
The text of a poll choice.

Required string length: 1 - 25
​
position
integerrequired
Position of this choice in the poll.

​
votes
integerrequired
Number of users who voted for this choice.

​
duration_minutes
integer
Required range: 5 <= x <= 10080
​
end_datetime
string<date-time>
​
voting_status
enum<string>
Available options: open, closed 
​
includes.topics
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Topic.

​
name
stringrequired
The name of the given topic.

Example:
"Technology"

​
description
string
The description of the given topic.

Example:
"All about technology"

​
includes.tweets
object[]
Minimum length: 1
Hide child attributes

​
attachments
object
Specifies the type of attachments (if any) present in this Tweet.

Hide child attributes

​
attachments.media_keys
string[]
A list of Media Keys for each one of the media attachments (if media are attached).

Minimum length: 1
The Media Key identifier for this attachment.

​
attachments.media_source_tweet_id
string[]
A list of Posts the media on this Tweet was originally posted in. For example, if the media on a tweet is re-used in another Tweet, this refers to the original, source Tweet..

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
attachments.poll_ids
string[]
A list of poll IDs (if polls are attached).

Minimum length: 1
Unique identifier of this poll.

​
author_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
community_id
string
The unique identifier of this Community.

Example:
"1146654567674912769"

​
context_annotations
object[]
Minimum length: 1
Show child attributes

​
conversation_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
created_at
string<date-time>
Creation time of the Tweet.

Example:
"2021-01-06T18:40:40.000Z"

​
display_text_range
integer[]
Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. start must be smaller than end. The start index is inclusive, the end index is exclusive.

Required array length: 2 elements
​
edit_controls
object
Hide child attributes

​
edit_controls.editable_until
string<date-time>required
Time when Tweet is no longer editable.

Example:
"2021-01-06T18:40:40.000Z"

​
edit_controls.edits_remaining
integerrequired
Number of times this Tweet can be edited.

​
edit_controls.is_edit_eligible
booleanrequired
Indicates if this Tweet is eligible to be edited.

Example:
false

​
edit_history_tweet_ids
string[]
A list of Tweet Ids in this Tweet chain.

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
entities
object
Hide child attributes

​
entities.annotations
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is inclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
normalized_text
string
Text used to determine annotation.

Example:
"Barack Obama"

​
probability
number
Confidence factor for annotation type.

Required range: 0 <= x <= 1
​
type
string
Annotation type.

Example:
"Person"

​
entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
geo
object
The location tagged on the Tweet, if the user provided one.

Hide child attributes

​
geo.coordinates
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.coordinates.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.coordinates.type
enum<string>required
Available options: Point 
Example:
"Point"

​
geo.place_id
string
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
in_reply_to_user_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
lang
string
Language of the Tweet, if detected by X. Returned as a BCP47 language tag.

Example:
"en"

​
non_public_metrics
object
Nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
non_public_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
note_tweet
object
The full-content of the Tweet, including text beyond 280 characters.

Hide child attributes

​
note_tweet.entities
object
Hide child attributes

​
note_tweet.entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.urls
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.text
string
The note content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
organic_metrics
object
Organic nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
organic_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
organic_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
organic_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
organic_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
possibly_sensitive
boolean
Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.

Example:
false

​
promoted_metrics
object
Promoted nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
promoted_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
promoted_metrics.like_count
integer
Number of times this Tweet has been liked.

​
promoted_metrics.reply_count
integer
Number of times this Tweet has been replied to.

​
promoted_metrics.retweet_count
integer
Number of times this Tweet has been Retweeted.

​
public_metrics
object
Engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
public_metrics.bookmark_count
integerrequired
Number of times this Tweet has been bookmarked.

​
public_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
public_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
public_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
public_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
public_metrics.quote_count
integer
Number of times this Tweet has been quoted.

​
referenced_tweets
object[]
A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.

Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
type
enum<string>required
Available options: retweeted, quoted, replied_to 
​
reply_settings
enum<string>
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.

Available options: everyone, mentionedUsers, following, other, subscribers, verified 
​
scopes
object
The scopes for this tweet

Hide child attributes

​
scopes.followers
boolean
Indicates if this Tweet is viewable by followers without the Tweet ID

Example:
false

​
source
string
This is deprecated.

​
suggested_source_links
object[]
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
text
string
The content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
username
string
The X handle (screen name) of this user.

​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.copyright
booleanrequired
Indicates if the content is being withheld for on the basis of copyright infringement.

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates whether the content being withheld is the tweet or a user.

Available options: tweet, user 
​
includes.users
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
name
stringrequired
The friendly name of this User, as shown on their profile.

​
username
stringrequired
The X handle (screen name) of this user.

​
affiliation
object
Metadata about a user's affiliation.

Hide child attributes

​
affiliation.badge_url
string<uri>
The badge URL corresponding to the affiliation.

​
affiliation.description
string
The description of the affiliation.

​
affiliation.url
string<uri>
The URL, if available, to details about an affiliation.

​
affiliation.user_id
string[]
Minimum length: 1
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
connection_status
enum<string>[]
Returns detailed information about the relationship between two users.

Hide child attributes

​
enum<string>
Type of connection between users.

Available options: follow_request_received, follow_request_sent, blocking, followed_by, following, muting 
​
created_at
string<date-time>
Creation time of this User.

​
description
string
The text of this User's profile description (also known as bio), if the User provided one.

​
entities
object
A list of metadata found in the User's profile description.

Hide child attributes

​
entities.description
object
Hide child attributes

​
entities.description.annotations
object[]
Minimum length: 1
Hide child attributes

​
entities.description.cashtags
object[]
Minimum length: 1
Hide child attributes

​
entities.description.hashtags
object[]
Minimum length: 1
Hide child attributes

​
entities.description.mentions
object[]
Minimum length: 1
Hide child attributes

​
entities.description.urls
object[]
Minimum length: 1
Hide child attributes

​
entities.url
object
Expanded details for the URL specified in the User's profile, with start and end indices.

Hide child attributes

​
entities.url.urls
object[]
Minimum length: 1
Hide child attributes

​
location
string
The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.

​
most_recent_tweet_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
pinned_tweet_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
profile_banner_url
string<uri>
The URL to the profile banner for this User.

​
profile_image_url
string<uri>
The URL to the profile image for this User.

​
protected
boolean
Indicates if this User has chosen to protect their Posts (in other words, if this User's Posts are private).

​
public_metrics
object
A list of metrics for this User.

Hide child attributes

​
public_metrics.followers_count
integerrequired
Number of Users who are following this User.

​
public_metrics.following_count
integerrequired
Number of Users this User is following.

​
public_metrics.listed_count
integerrequired
The number of lists that include this User.

​
public_metrics.tweet_count
integerrequired
The number of Posts (including Retweets) posted by this User.

​
public_metrics.like_count
integer
The number of likes created by this User.

​
receives_your_dm
boolean
Indicates if you can send a DM to this User

​
subscription_type
enum<string>
The X Blue subscription type of the user, eg: Basic, Premium, PremiumPlus or None.

Available options: Basic, Premium, PremiumPlus, None 
​
url
string
The URL specified in the User's profile.

​
verified
boolean
Indicate if this User is a verified X User.

​
verified_type
enum<string>
The X Blue verified type of the user, eg: blue, government, business or none.

Available options: blue, government, business, none 
​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates that the content being withheld is a user.

Available options: user 


Post Lookup
Get Post by ID
Retrieves details of a specific Post by its ID.

GET
/
2
/
tweets
/
{id}

Try it
Authorizations

BearerToken
​
Authorization
stringheaderrequired
Bearer authentication header of the form Bearer <token>, where <token> is your auth token.

Path Parameters
​
id
stringrequired
A single Post ID.

Example:
"1346889436626259968"

Query Parameters
​
tweet.fields
enum<string>[]
A comma separated list of Tweet fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: article, attachments, author_id, card_uri, community_id, context_annotations, conversation_id, created_at, display_text_range, edit_controls, edit_history_tweet_ids, entities, geo, id, in_reply_to_user_id, lang, media_metadata, non_public_metrics, note_tweet, organic_metrics, possibly_sensitive, promoted_metrics, public_metrics, referenced_tweets, reply_settings, scopes, source, suggested_source_links, text, withheld 
Example:
[
  "article",
  "attachments",
  "author_id",
  "card_uri",
  "community_id",
  "context_annotations",
  "conversation_id",
  "created_at",
  "display_text_range",
  "edit_controls",
  "edit_history_tweet_ids",
  "entities",
  "geo",
  "id",
  "in_reply_to_user_id",
  "lang",
  "media_metadata",
  "non_public_metrics",
  "note_tweet",
  "organic_metrics",
  "possibly_sensitive",
  "promoted_metrics",
  "public_metrics",
  "referenced_tweets",
  "reply_settings",
  "scopes",
  "source",
  "suggested_source_links",
  "text",
  "withheld"
]
​
expansions
enum<string>[]
A comma separated list of fields to expand.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: article.cover_media, article.media_entities, attachments.media_keys, attachments.media_source_tweet, attachments.poll_ids, author_id, edit_history_tweet_ids, entities.mentions.username, geo.place_id, in_reply_to_user_id, entities.note.mentions.username, referenced_tweets.id, referenced_tweets.id.attachments.media_keys, referenced_tweets.id.author_id 
Example:
[
  "article.cover_media",
  "article.media_entities",
  "attachments.media_keys",
  "attachments.media_source_tweet",
  "attachments.poll_ids",
  "author_id",
  "edit_history_tweet_ids",
  "entities.mentions.username",
  "geo.place_id",
  "in_reply_to_user_id",
  "entities.note.mentions.username",
  "referenced_tweets.id",
  "referenced_tweets.id.attachments.media_keys",
  "referenced_tweets.id.author_id"
]
​
media.fields
enum<string>[]
A comma separated list of Media fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: alt_text, duration_ms, height, media_key, non_public_metrics, organic_metrics, preview_image_url, promoted_metrics, public_metrics, type, url, variants, width 
Example:
[
  "alt_text",
  "duration_ms",
  "height",
  "media_key",
  "non_public_metrics",
  "organic_metrics",
  "preview_image_url",
  "promoted_metrics",
  "public_metrics",
  "type",
  "url",
  "variants",
  "width"
]
​
poll.fields
enum<string>[]
A comma separated list of Poll fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: duration_minutes, end_datetime, id, options, voting_status 
Example:
[
  "duration_minutes",
  "end_datetime",
  "id",
  "options",
  "voting_status"
]
​
user.fields
enum<string>[]
A comma separated list of User fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: affiliation, confirmed_email, connection_status, created_at, description, entities, id, is_identity_verified, location, most_recent_tweet_id, name, parody, pinned_tweet_id, profile_banner_url, profile_image_url, protected, public_metrics, receives_your_dm, subscription, subscription_type, url, username, verified, verified_followers_count, verified_type, withheld 
Example:
[
  "affiliation",
  "confirmed_email",
  "connection_status",
  "created_at",
  "description",
  "entities",
  "id",
  "is_identity_verified",
  "location",
  "most_recent_tweet_id",
  "name",
  "parody",
  "pinned_tweet_id",
  "profile_banner_url",
  "profile_image_url",
  "protected",
  "public_metrics",
  "receives_your_dm",
  "subscription",
  "subscription_type",
  "url",
  "username",
  "verified",
  "verified_followers_count",
  "verified_type",
  "withheld"
]
​
place.fields
enum<string>[]
A comma separated list of Place fields to display.

Minimum length: 1
Hide child attributes

​
enum<string>
Available options: contained_within, country, country_code, full_name, geo, id, name, place_type 
Example:
[
  "contained_within",
  "country",
  "country_code",
  "full_name",
  "geo",
  "id",
  "name",
  "place_type"
]
Response

200

application/json
The request has succeeded.

​
data
object
Hide child attributes

​
data.attachments
object
Specifies the type of attachments (if any) present in this Tweet.

Hide child attributes

​
data.attachments.media_keys
string[]
A list of Media Keys for each one of the media attachments (if media are attached).

Minimum length: 1
The Media Key identifier for this attachment.

​
data.attachments.media_source_tweet_id
string[]
A list of Posts the media on this Tweet was originally posted in. For example, if the media on a tweet is re-used in another Tweet, this refers to the original, source Tweet..

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
data.attachments.poll_ids
string[]
A list of poll IDs (if polls are attached).

Minimum length: 1
Unique identifier of this poll.

​
data.author_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
data.community_id
string
The unique identifier of this Community.

Example:
"1146654567674912769"

​
data.context_annotations
object[]
Minimum length: 1
Hide child attributes

​
domain
objectrequired
Represents the data for the context annotation domain.

Hide child attributes

​
domain.id
stringrequired
The unique id for a context annotation domain.

​
domain.description
string
Description of the context annotation domain.

​
domain.name
string
Name of the context annotation domain.

​
entity
objectrequired
Represents the data for the context annotation entity.

Hide child attributes

​
entity.id
stringrequired
The unique id for a context annotation entity.

​
entity.description
string
Description of the context annotation entity.

​
entity.name
string
Name of the context annotation entity.

​
data.conversation_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
data.created_at
string<date-time>
Creation time of the Tweet.

Example:
"2021-01-06T18:40:40.000Z"

​
data.display_text_range
integer[]
Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. start must be smaller than end. The start index is inclusive, the end index is exclusive.

Required array length: 2 elements
​
data.edit_controls
object
Hide child attributes

​
data.edit_controls.editable_until
string<date-time>required
Time when Tweet is no longer editable.

Example:
"2021-01-06T18:40:40.000Z"

​
data.edit_controls.edits_remaining
integerrequired
Number of times this Tweet can be edited.

​
data.edit_controls.is_edit_eligible
booleanrequired
Indicates if this Tweet is eligible to be edited.

Example:
false

​
data.edit_history_tweet_ids
string[]
A list of Tweet Ids in this Tweet chain.

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
data.entities
object
Hide child attributes

​
data.entities.annotations
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is inclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
normalized_text
string
Text used to determine annotation.

Example:
"Barack Obama"

​
probability
number
Confidence factor for annotation type.

Required range: 0 <= x <= 1
​
type
string
Annotation type.

Example:
"Person"

​
data.entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
data.entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
data.entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
data.entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
data.geo
object
The location tagged on the Tweet, if the user provided one.

Hide child attributes

​
data.geo.coordinates
object
A GeoJson Point geometry object.

Hide child attributes

​
data.geo.coordinates.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
data.geo.coordinates.type
enum<string>required
Available options: Point 
Example:
"Point"

​
data.geo.place_id
string
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
data.id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
data.in_reply_to_user_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
data.lang
string
Language of the Tweet, if detected by X. Returned as a BCP47 language tag.

Example:
"en"

​
data.non_public_metrics
object
Nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
data.non_public_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
data.note_tweet
object
The full-content of the Tweet, including text beyond 280 characters.

Hide child attributes

​
data.note_tweet.entities
object
Hide child attributes

​
data.note_tweet.entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
data.note_tweet.entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
data.note_tweet.entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
data.note_tweet.entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
data.note_tweet.text
string
The note content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
data.organic_metrics
object
Organic nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
data.organic_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
data.organic_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
data.organic_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
data.organic_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
data.possibly_sensitive
boolean
Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.

Example:
false

​
data.promoted_metrics
object
Promoted nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
data.promoted_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
data.promoted_metrics.like_count
integer
Number of times this Tweet has been liked.

​
data.promoted_metrics.reply_count
integer
Number of times this Tweet has been replied to.

​
data.promoted_metrics.retweet_count
integer
Number of times this Tweet has been Retweeted.

​
data.public_metrics
object
Engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
data.public_metrics.bookmark_count
integerrequired
Number of times this Tweet has been bookmarked.

​
data.public_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
data.public_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
data.public_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
data.public_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
data.public_metrics.quote_count
integer
Number of times this Tweet has been quoted.

​
data.referenced_tweets
object[]
A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.

Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
type
enum<string>required
Available options: retweeted, quoted, replied_to 
​
data.reply_settings
enum<string>
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.

Available options: everyone, mentionedUsers, following, other, subscribers, verified 
​
data.scopes
object
The scopes for this tweet

Hide child attributes

​
data.scopes.followers
boolean
Indicates if this Tweet is viewable by followers without the Tweet ID

Example:
false

​
data.source
string
This is deprecated.

​
data.suggested_source_links
object[]
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Show child attributes

​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
data.text
string
The content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
data.username
string
The X handle (screen name) of this user.

​
data.withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
data.withheld.copyright
booleanrequired
Indicates if the content is being withheld for on the basis of copyright infringement.

​
data.withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
data.withheld.scope
enum<string>
Indicates whether the content being withheld is the tweet or a user.

Available options: tweet, user 
Example:
{
  "author_id": "2244994945",
  "created_at": "Wed Jan 06 18:40:40 +0000 2021",
  "id": "1346889436626259968",
  "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i",
  "username": "XDevelopers"
}
​
errors
object[]
Minimum length: 1
Hide child attributes

​
title
stringrequired
​
type
stringrequired
​
detail
string
​
status
integer
​
includes
object
Hide child attributes

​
includes.media
object[]
Minimum length: 1
Hide child attributes

​
type
stringrequired
​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
includes.places
object[]
Minimum length: 1
Hide child attributes

​
full_name
stringrequired
The full name of this place.

Example:
"Lakewood, CO"

​
id
stringrequired
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
contained_within
string[]
Minimum length: 1
The identifier for this place.

​
country
string
The full name of the county in which this place exists.

Example:
"United States"

​
country_code
string
A two-letter ISO 3166-1 alpha-2 country code.

Example:
"US"

​
geo
object
Hide child attributes

​
geo.bbox
number[]required
Required array length: 4 elements
Example:
[
  -105.193475,
  39.60973,
  -105.053164,
  39.761974
]
​
geo.properties
objectrequired
​
geo.type
enum<string>required
Available options: Feature 
​
geo.geometry
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.geometry.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.geometry.type
enum<string>required
Available options: Point 
Example:
"Point"

​
name
string
The human readable name of this place.

Example:
"Lakewood"

​
place_type
enum<string>
Available options: poi, neighborhood, city, admin, country, unknown 
Example:
"city"

​
includes.polls
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this poll.

Example:
"1365059861688410112"

​
options
object[]required
Required array length: 2 - 4 elements
Hide child attributes

​
label
stringrequired
The text of a poll choice.

Required string length: 1 - 25
​
position
integerrequired
Position of this choice in the poll.

​
votes
integerrequired
Number of users who voted for this choice.

​
duration_minutes
integer
Required range: 5 <= x <= 10080
​
end_datetime
string<date-time>
​
voting_status
enum<string>
Available options: open, closed 
​
includes.topics
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Topic.

​
name
stringrequired
The name of the given topic.

Example:
"Technology"

​
description
string
The description of the given topic.

Example:
"All about technology"

​
includes.tweets
object[]
Minimum length: 1
Hide child attributes

​
attachments
object
Specifies the type of attachments (if any) present in this Tweet.

Hide child attributes

​
attachments.media_keys
string[]
A list of Media Keys for each one of the media attachments (if media are attached).

Minimum length: 1
The Media Key identifier for this attachment.

​
attachments.media_source_tweet_id
string[]
A list of Posts the media on this Tweet was originally posted in. For example, if the media on a tweet is re-used in another Tweet, this refers to the original, source Tweet..

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
attachments.poll_ids
string[]
A list of poll IDs (if polls are attached).

Minimum length: 1
Unique identifier of this poll.

​
author_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
community_id
string
The unique identifier of this Community.

Example:
"1146654567674912769"

​
context_annotations
object[]
Minimum length: 1
Hide child attributes

​
domain
objectrequired
Represents the data for the context annotation domain.

Hide child attributes

​
domain.id
stringrequired
The unique id for a context annotation domain.

​
domain.description
string
Description of the context annotation domain.

​
domain.name
string
Name of the context annotation domain.

​
entity
objectrequired
Represents the data for the context annotation entity.

Hide child attributes

​
entity.id
stringrequired
The unique id for a context annotation entity.

​
entity.description
string
Description of the context annotation entity.

​
entity.name
string
Name of the context annotation entity.

​
conversation_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
created_at
string<date-time>
Creation time of the Tweet.

Example:
"2021-01-06T18:40:40.000Z"

​
display_text_range
integer[]
Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. start must be smaller than end. The start index is inclusive, the end index is exclusive.

Required array length: 2 elements
​
edit_controls
object
Hide child attributes

​
edit_controls.editable_until
string<date-time>required
Time when Tweet is no longer editable.

Example:
"2021-01-06T18:40:40.000Z"

​
edit_controls.edits_remaining
integerrequired
Number of times this Tweet can be edited.

​
edit_controls.is_edit_eligible
booleanrequired
Indicates if this Tweet is eligible to be edited.

Example:
false

​
edit_history_tweet_ids
string[]
A list of Tweet Ids in this Tweet chain.

Minimum length: 1
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
entities
object
Hide child attributes

​
entities.annotations
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is inclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
normalized_text
string
Text used to determine annotation.

Example:
"Barack Obama"

​
probability
number
Confidence factor for annotation type.

Required range: 0 <= x <= 1
​
type
string
Annotation type.

Example:
"Person"

​
entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
Example:
"TWTR"

​
entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
tag
stringrequired
The text of the Hashtag.

Example:
"MondayMotivation"

​
entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
username
stringrequired
The X handle (screen name) of this user.

​
id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
entities.urls
object[]
Minimum length: 1
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
geo
object
The location tagged on the Tweet, if the user provided one.

Hide child attributes

​
geo.coordinates
object
A GeoJson Point geometry object.

Hide child attributes

​
geo.coordinates.coordinates
number[]required
A GeoJson Position in the format [longitude,latitude].

Required array length: 2 elements
Example:
[-105.18816086351444, 40.247749999999996]
​
geo.coordinates.type
enum<string>required
Available options: Point 
Example:
"Point"

​
geo.place_id
string
The identifier for this place.

Example:
"f7eb2fa2fea288b1"

​
id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
in_reply_to_user_id
string
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
lang
string
Language of the Tweet, if detected by X. Returned as a BCP47 language tag.

Example:
"en"

​
non_public_metrics
object
Nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
non_public_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
note_tweet
object
The full-content of the Tweet, including text beyond 280 characters.

Hide child attributes

​
note_tweet.entities
object
Hide child attributes

​
note_tweet.entities.cashtags
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.hashtags
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.mentions
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.entities.urls
object[]
Minimum length: 1
Hide child attributes

​
note_tweet.text
string
The note content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
organic_metrics
object
Organic nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
organic_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
organic_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
organic_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
organic_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
possibly_sensitive
boolean
Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.

Example:
false

​
promoted_metrics
object
Promoted nonpublic engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
promoted_metrics.impression_count
integer
Number of times this Tweet has been viewed.

​
promoted_metrics.like_count
integer
Number of times this Tweet has been liked.

​
promoted_metrics.reply_count
integer
Number of times this Tweet has been replied to.

​
promoted_metrics.retweet_count
integer
Number of times this Tweet has been Retweeted.

​
public_metrics
object
Engagement metrics for the Tweet at the time of the request.

Hide child attributes

​
public_metrics.bookmark_count
integerrequired
Number of times this Tweet has been bookmarked.

​
public_metrics.impression_count
integerrequired
Number of times this Tweet has been viewed.

​
public_metrics.like_count
integerrequired
Number of times this Tweet has been liked.

​
public_metrics.reply_count
integerrequired
Number of times this Tweet has been replied to.

​
public_metrics.retweet_count
integerrequired
Number of times this Tweet has been Retweeted.

​
public_metrics.quote_count
integer
Number of times this Tweet has been quoted.

​
referenced_tweets
object[]
A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.

Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
type
enum<string>required
Available options: retweeted, quoted, replied_to 
​
reply_settings
enum<string>
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.

Available options: everyone, mentionedUsers, following, other, subscribers, verified 
​
scopes
object
The scopes for this tweet

Hide child attributes

​
scopes.followers
boolean
Indicates if this Tweet is viewable by followers without the Tweet ID

Example:
false

​
source
string
This is deprecated.

​
suggested_source_links
object[]
Hide child attributes

​
end
integerrequired
Index (zero-based) at which position this entity ends. The index is exclusive.

Required range: x >= 0
Example:
61

​
start
integerrequired
Index (zero-based) at which position this entity starts. The index is inclusive.

Required range: x >= 0
Example:
50

​
url
string<uri>required
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
description
string
Description of the URL landing page.

Example:
"This is a description of the website."

​
display_url
string
The URL as displayed in the X client.

Example:
"twittercommunity.com/t/introducing-…"

​
expanded_url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
images
object[]
Minimum length: 1
Hide child attributes

​
height
integer
The height of the media in pixels.

Required range: x >= 0
​
url
string<uri>
A validly formatted URL.

Example:
"https://developer.twitter.com/en/docs/twitter-api"

​
width
integer
The width of the media in pixels.

Required range: x >= 0
​
media_key
string
The Media Key identifier for this attachment.

​
status
integer
HTTP Status Code.

Required range: 100 <= x <= 599
​
title
string
Title of the page the URL points to.

Example:
"Introducing the v2 follow lookup endpoints"

​
unwound_url
string<uri>
Fully resolved url.

Example:
"https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118"

​
text
string
The content of the Tweet.

Example:
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the X API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"

​
username
string
The X handle (screen name) of this user.

​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.copyright
booleanrequired
Indicates if the content is being withheld for on the basis of copyright infringement.

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates whether the content being withheld is the tweet or a user.

Available options: tweet, user 
​
includes.users
object[]
Minimum length: 1
Hide child attributes

​
id
stringrequired
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"2244994945"

​
name
stringrequired
The friendly name of this User, as shown on their profile.

​
username
stringrequired
The X handle (screen name) of this user.

​
affiliation
object
Metadata about a user's affiliation.

Hide child attributes

​
affiliation.badge_url
string<uri>
The badge URL corresponding to the affiliation.

​
affiliation.description
string
The description of the affiliation.

​
affiliation.url
string<uri>
The URL, if available, to details about an affiliation.

​
affiliation.user_id
string[]
Minimum length: 1
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

​
connection_status
enum<string>[]
Returns detailed information about the relationship between two users.

Hide child attributes

​
enum<string>
Type of connection between users.

Available options: follow_request_received, follow_request_sent, blocking, followed_by, following, muting 
​
created_at
string<date-time>
Creation time of this User.

​
description
string
The text of this User's profile description (also known as bio), if the User provided one.

​
entities
object
A list of metadata found in the User's profile description.

Hide child attributes

​
entities.description
object
Hide child attributes

​
entities.description.annotations
object[]
Minimum length: 1
Hide child attributes

​
entities.description.cashtags
object[]
Minimum length: 1
Hide child attributes

​
entities.description.hashtags
object[]
Minimum length: 1
Hide child attributes

​
entities.description.mentions
object[]
Minimum length: 1
Hide child attributes

​
entities.description.urls
object[]
Minimum length: 1
Hide child attributes

​
entities.url
object
Expanded details for the URL specified in the User's profile, with start and end indices.

Hide child attributes

​
entities.url.urls
object[]
Minimum length: 1
Hide child attributes

​
location
string
The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.

​
most_recent_tweet_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
pinned_tweet_id
string
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

Example:
"1346889436626259968"

​
profile_banner_url
string<uri>
The URL to the profile banner for this User.

​
profile_image_url
string<uri>
The URL to the profile image for this User.

​
protected
boolean
Indicates if this User has chosen to protect their Posts (in other words, if this User's Posts are private).

​
public_metrics
object
A list of metrics for this User.

Hide child attributes

​
public_metrics.followers_count
integerrequired
Number of Users who are following this User.

​
public_metrics.following_count
integerrequired
Number of Users this User is following.

​
public_metrics.listed_count
integerrequired
The number of lists that include this User.

​
public_metrics.tweet_count
integerrequired
The number of Posts (including Retweets) posted by this User.

​
public_metrics.like_count
integer
The number of likes created by this User.

​
receives_your_dm
boolean
Indicates if you can send a DM to this User

​
subscription_type
enum<string>
The X Blue subscription type of the user, eg: Basic, Premium, PremiumPlus or None.

Available options: Basic, Premium, PremiumPlus, None 
​
url
string
The URL specified in the User's profile.

​
verified
boolean
Indicate if this User is a verified X User.

​
verified_type
enum<string>
The X Blue verified type of the user, eg: blue, government, business or none.

Available options: blue, government, business, none 
​
withheld
object
Indicates withholding details for withheld content.

Hide child attributes

​
withheld.country_codes
string[]required
Provides a list of countries where this content is not available.

Minimum length: 1
A two-letter ISO 3166-1 alpha-2 country code.

​
withheld.scope
enum<string>
Indicates that the content being withheld is a user.

Available options: user 



X-AI
curl https://api.x.ai/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer XAI_API_KEY" \
    -d '{
      "messages": [
        {
          "role": "system",
          "content": "You are a test assistant."
        },
        {
          "role": "user",
          "content": "Testing. Just say hi and hello world and nothing else."
        }
      ],
      "model": "grok-4-latest",
      "stream": false,
      "temperature": 0
    }'


curl https://api.x.ai/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $XAI_API_KEY" \
-m 3600 \
-d '{
    "messages": [
        {
            "role": "system",
            "content": "You are Grok, a highly intelligent, helpful AI assistant."
        },
        {
            "role": "user",
            "content": "What is the meaning of life, the universe, and everything?"
        }
    ],
    "model": "grok-4",
    "stream": false
}'





// In your terminal, first run:
// npm install openai

import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: "your_api_key",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const completion = await client.chat.completions.create({
    model: "grok-4",
    messages: [
        {
            role: "system",
            content:
            "You are Grok, a highly intelligent, helpful AI assistant.",
        },
        {
            role: "user",
            content:
            "What is the meaning of life, the universe, and everything?",
        },
    ],
});

console.log(completion.choices[0].message.content);


