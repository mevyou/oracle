X-AI
Getting Started
The Hitchhiker's Guide to Grok
Welcome! In this guide, we'll walk you through the basics of using the xAI API.

Step 1: Create an xAI Account
First, you'll need to create an xAI account to access xAI API. Sign up for an account here.

Once you've created an account, you'll need to load it with credits to start using the API.

Step 2: Generate an API Key
Create an API key via the API Keys Page in the xAI API Console.

After generating an API key, we need to save it somewhere safe! We recommend you export it as an environment variable in your terminal or save it to a 
.env
 file.

bash


export XAI_API_KEY="your_api_key"
Step 3: Make your first request
With your xAI API key exported as an environment variable, you're ready to make your first API request.

Let's test out the API using 
curl
. Paste the following directly into your terminal.

bash


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
Step 4: Make a request from Python or Javascript
As well as a native xAI Python SDK, the majority our APIs are fully compatible with the OpenAI and Anthropic SDKs. For example, we can make the same request from Python or Javascript like so:


javascript


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
Certain models also support Structured Outputs, which allows you to enforce a schema for the LLM output.

For an in-depth guide about using Grok for text responses, check out our Chat Guide.

Step 5: Use Grok to analyze images
Certain grok models can accept both text AND images as an input. For example:


javascript


import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.XAI_API_KEY,
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const image_url =
"https://science.nasa.gov/wp-content/uploads/2023/09/web-first-images-release.png";

const completion = await client.chat.completions.create({
    model: "grok-4",
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "image_url",
                    image_url: {
                        url: image_url,
                        detail: "high",
                    },
                },
                {
                    type: "text",
                    text: "What's in this image?",
                },
            ],
        },
    ],
});

console.log(completion.choices[0].message.content);
And voila! Grok will tell you exactly what's in the image:

This image is a photograph of a region in space, specifically a part of the Carina Nebula, captured by the James Webb Space Telescope. It showcases a stunning view of interstellar gas and dust, illuminated by young, hot stars. The bright points of light are stars, and the colorful clouds are composed of various gases and dust particles. The image highlights the intricate details and beauty of star formation within a nebula.

To learn how to use Grok vision for more advanced use cases, check out our Image Understanding Guide.

Monitoring usage
As you use your API key, you will be charged for the number of tokens used. For an overview, you can monitor your usage on the xAI Console Usage Page.

If you want a more granular, per request usage tracking, the API response includes a usage object that provides detail on prompt (input) and completion (output) token usage.

json


"usage": {
    "prompt_tokens":37,
    "completion_tokens":530,
    "total_tokens":800,
    "prompt_tokens_details": {
        "text_tokens":37,
        "audio_tokens":0,
        "image_tokens":0,
        "cached_tokens":8
    },
    "completion_tokens_details": {
        "reasoning_tokens":233,
        "audio_tokens":0,
        "accepted_prediction_tokens":0,
        "rejected_prediction_tokens":0
    },
    "num_sources_used":0
}
If you send requests too frequently or with long prompts, you might run into rate limits and get an error response. For more information, read Consumption and Rate Limits.

Next steps
Now you have learned the basics of making an inference on xAI API. Check out Models page to start building with one of our latest models.


Guides
Structured Outputs
Structured Outputs is a feature that lets the API return responses in a specific, organized format, like JSON or other schemas you define. Instead of getting free-form text, you receive data that's consistent and easy to parse.

Ideal for tasks like document parsing, entity extraction, or report generation, it lets you define schemas using tools like Pydantic or Zod to enforce data types, constraints, and structure.

When using structured outputs, the LLM's response is guaranteed to match your input schema.

Supported models
Structured outputs is supported by all language models later than 
grok-2-1212
 and 
grok-2-vision-1212
.

Supported schemas
For structured output, the following types are supported for structured output:

string
minLength
 and 
maxLength
 properties are not supported
number
integer
float
object
array
minItems
 and 
maxItem
 properties are not supported
maxContains
 and 
minContains
 properties are not supported
boolean
enum
anyOf
allOf
 is not supported at the moment.

Example: Invoice Parsing
A common use case for Structured Outputs is parsing raw documents. For example, invoices contain structured data like vendor details, amounts, and dates, but extracting this data from raw text can be error-prone. Structured Outputs ensure the extracted data matches a predefined schema.

Let's say you want to extract the following data from an invoice:

Vendor name and address
Invoice number and date
Line items (description, quantity, price)
Total amount and currency
We'll use structured outputs to have Grok generate a strongly-typed JSON for this.

Step 1: Defining the Schema
You can use Pydantic or Zod to define your schema.


javascript


import { z } from "zod";

const CurrencyEnum = z.enum(["USD", "EUR", "GBP"]);

const LineItemSchema = z.object({
    description: z.string().describe("Description of the item or service"),
    quantity: z.number().int().min(1).describe("Number of units"),
    unit_price: z.number().min(0).describe("Price per unit"),
});

const AddressSchema = z.object({
    street: z.string().describe("Street address"),
    city: z.string().describe("City"),
    postal_code: z.string().describe("Postal/ZIP code"),
    country: z.string().describe("Country"),
});

const InvoiceSchema = z.object({
    vendor_name: z.string().describe("Name of the vendor"),
    vendor_address: AddressSchema.describe("Vendor's address"),
    invoice_number: z.string().describe("Unique invoice identifier"),
    invoice_date: z.string().date().describe("Date the invoice was issued"),
    line_items: z.array(LineItemSchema).describe("List of purchased items/services"),
    total_amount: z.number().min(0).describe("Total amount due"),
    currency: CurrencyEnum.describe("Currency of the invoice"),
});
Step 2: Prepare The Prompts
System Prompt
The system prompt instructs the model to extract invoice data from text. Since the schema is defined separately, the prompt can focus on the task without explicitly specifying the required fields in the output JSON.

text


Given a raw invoice, carefully analyze the text and extract the relevant invoice data into JSON format.
Example Invoice Text
text


Vendor: Acme Corp, 123 Main St, Springfield, IL 62704
Invoice Number: INV-2025-001
Date: 2025-02-10
Items:
- Widget A, 5 units, $10.00 each
- Widget B, 2 units, $15.00 each
Total: $80.00 USD
Step 3: The Final Code
Use the structured outputs feature of the the SDK to parse the invoice.


javascript


import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const CurrencyEnum = z.enum(["USD", "EUR", "GBP"]);

const LineItemSchema = z.object({
    description: z.string().describe("Description of the item or service"),
    quantity: z.number().int().min(1).describe("Number of units"),
    unit_price: z.number().min(0).describe("Price per unit"),
});

const AddressSchema = z.object({
    street: z.string().describe("Street address"),
    city: z.string().describe("City"),
    postal_code: z.string().describe("Postal/ZIP code"),
    country: z.string().describe("Country"),
});

const InvoiceSchema = z.object({
    vendor_name: z.string().describe("Name of the vendor"),
    vendor_address: AddressSchema.describe("Vendor's address"),
    invoice_number: z.string().describe("Unique invoice identifier"),
    invoice_date: z.string().date().describe("Date the invoice was issued"),
    line_items: z.array(LineItemSchema).describe("List of purchased items/services"),
    total_amount: z.number().min(0).describe("Total amount due"),
    currency: CurrencyEnum.describe("Currency of the invoice"),
});

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
});

const completion = await client.beta.chat.completions.parse({
    model: "grok-4",
    messages: [
    { role: "system", content: "Given a raw invoice, carefully analyze the text and extract the invoice data into JSON format." },
    { role: "user", content: `
    Vendor: Acme Corp, 123 Main St, Springfield, IL 62704
    Invoice Number: INV-2025-001
    Date: 2025-02-10
    Items:

    - Widget A, 5 units, $10.00 each
    - Widget B, 2 units, $15.00 each
      Total: $80.00 USD
      ` },
    ],
    response_format: zodResponseFormat(InvoiceSchema, "invoice"),
});

const invoice = completion.choices[0].message.parsed;
console.log(invoice);
Step 4: Type-safe Output
The output will always be type-safe and respect the input schema.

json


{
  "vendor_name": "Acme Corp",
  "vendor_address": {
    "street": "123 Main St",
    "city": "Springfield",
    "postal_code": "62704",
    "country": "IL"
  },
  "invoice_number": "INV-2025-001",
  "invoice_date": "2025-02-10",
  "line_items": [
    { "description": "Widget A", "quantity": 5, "unit_price": 10.0 },
    { "description": "Widget B", "quantity": 2, "unit_price": 15.0 }
  ],
  "total_amount": 80.0,
  "currency": "USD"
}



Guides
Chat
Text in, text out. Chat is the most popular feature on the xAI API, and can be used for anything from summarizing articles, generating creative writing, answering questions, providing customer support, to assisting with coding tasks.

Prerequisites
xAI Account: You need an xAI account to access the API.
API Key: Ensure that your API key has access to the chat endpoint and the chat model is enabled.
If you don't have these and are unsure of how to create one, follow the Hitchhiker's Guide to Grok.

You can create an API key on the xAI Console API Keys Page.

Set your API key in your environment:

bash


export XAI_API_KEY="your_api_key"
A Basic Chat Completions Example
You can also stream the response, which is covered in Streaming Response.

The user sends a request to the xAI API endpoint. The API processes this and returns a complete response.


javascript


import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const completion = await client.chat.completions.create({
    model: "grok-4",
    messages: [
        {
            role: "system",
            content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."
        },
        {
            role: "user",
            content: "What is the meaning of life, the universe, and everything?"
        },
    ],
});
console.log(completion.choices[0].message);
Response:


javascript


{
  role: 'assistant',
  content: `Ah, the ultimate question! According to Douglas Adams' "The Hitchhiker's Guide to the Galaxy," the answer to the ultimate question of life, the universe, and everything is **42**. However, the guide also notes that the actual question to which this is the answer is still unknown. Isn't that delightfully perplexing? Now, if you'll excuse me, I'll just go ponder the intricacies of existence.`
  refusal: null
}
Conversations
The xAI API is stateless and does not process new request with the context of your previous request history.

However, you can provide previous chat generation prompts and results to a new chat generation request to let the model process your new request with the context in mind.

An example message:

json


{
  "role": "system",
  "content": [{ "type": "text", "text": "You are a helpful and funny assistant."}]
}
{
  "role": "user",
  "content": [{ "type": "text", "text": "Why don't eggs tell jokes?" }]
},
{
  "role": "assistant",
  "content": [{ "type": "text", "text": "They'd crack up!" }]
},
{
  "role": "user",
  "content": [{"type": "text", "text": "Can you explain the joke?"}],
}
By specifying roles, you can change how the the model ingests the content. The 
system
 role content should define, in an instructive tone, the way the model should respond to user request. The 
user
 role content is usually used for user requests or data sent to the model. The 
assistant
 role content is usually either in the model's response, or when sent within the prompt, indicates the model's response as part of conversation history.

Message role order flexibility
Unlike some models from other providers, one of the unique aspects of xAI API is its flexibility with message role ordering:

No Order Limitation: You can mix 
system
, 
user
, or 
assistant
 roles in any order for your conversation context.
Example 1 - Multiple System Messages:

json


[
  { "role": "system", "content": "..." },
  { "role": "system", "content": "..." },
  { "role": "user", "content": "..." },
  { "role": "user", "content": "..." }
]
Example 2 - User Messages First:

json


[
  { "role": "user", "content": "..." },
  { "role": "user", "content": "..." },
  { "role": "system", "content": "..." }



Guides
Stateful Response with Responses API
Responses API is a new way of interacting with our models via API. It allows a stateful interaction with our models, where previous input prompts, reasoning content and model responses are saved by us. A user can continue the interaction by appending new prompt messages, rather than sending all of the previous messages.

Although you don't need to enter the conversation history in the request body, you will still be billed for the entire conversation history when using Responses API. The cost might be reduced as the conversation history might be automatically cached.

The responses will be stored for 30 days, after which they will be removed. If you want to continue a response after 30 days, please store your responses history as well as the encrypted thinking content to create a new response. The encrypted thinking content can then be sent in the request body to give you a better result. See Returning encrypted thinking content for more information on retrieving encrypted content.

Prerequisites
xAI Account: You need an xAI account to access the API.
API Key: Ensure that your API key has access to the chat endpoint and the chat model is enabled.
If you don't have these and are unsure of how to create one, follow the Hitchhiker's Guide to Grok.

You can create an API key on the xAI Console API Keys Page.

Set your API key in your environment:

bash


export XAI_API_KEY="your_api_key"
Creating a new model response
The first step in using Responses API is analogous to using Chat Completions API. You will create a new response with prompts.

instructions
 parameter is currently not supported. The API will return an error if it is specified.

When sending images, it is advised to set 
store
 parameters to 
false
. Otherwise the request may fail.


javascript


import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const response = await client.responses.create({
    model: "grok-4",
    input: [
        {
            role: "system",
            content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."
        },
        {
            role: "user",
            content: "What is the meaning of life, the universe, and everything?"
        },
    ],
});

console.log(response);

// The response id that can be used to recall the conversation later
console.log(response.id);
If no system prompt is desired, for non-xAI SDK users, the request's input parameter can be simplified as a string user prompt:


javascript


import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const response = await client.responses.create({
    model: "grok-4",
    input: "What is 101*3?",
});

console.log(response);

// The response id that can be used to recall the conversation later
console.log(response.id);
Returning encrypted thinking content
If you want to return the encrypted thinking traces, you need to specify 
use_encrypted_content=True
 in xAI SDK or gRPC request message, or 
include: ["reasoning.encrypted_content"]
 in the request body.

Modify the steps to create a chat client (xAI SDK) or change the request body as following:


javascript


const response = await client.responses.create({
    model: "grok-4",
    input: [
        {"role": "system", "content": "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."},
        {"role": "user", "content": "What is the meaning of life, the universe, and everything?"},
    ],
    include: ["reasoning.encrypted_content"],
});
See Adding encrypted thinking content on how to use the returned encrypted thinking content.

Chaining the conversation
We now have the 
id
 of the first response. With Chat Completions API, we typically send a stateless new request with all the previous messages.

With Responses API, we can send the 
id
 of the previous response, and the new messages to append to it.


javascript


// Previous steps
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const response = await client.responses.create({
    model: "grok-4",
    input: [
        {
            role: "system",
            content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."
        },
        {
            role: "user",
            content: "What is the meaning of life, the universe, and everything?"
        },
    ],
});

console.log(response);

// The response id that can be used to recall the conversation later
console.log(response.id);

const secondResponse = await client.responses.create({
    model: "grok-4",
    previous_response_id: response.id,
    input: [
        {"role": "user", "content": "What is the meaning of 42?"},
    ],
});

console.log(secondResponse);

// The response id that can be used to recall the conversation later
console.log(secondResponse.id);
Adding encrypted thinking content
After returning the encrypted thinking content, you can also add it to a new response's input:


javascript


// Previous steps
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const response = await client.responses.create({
    model: "grok-4",
    input: [
        {
            role: "system",
            content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."
        },
        {
            role: "user",
            content: "What is the meaning of life, the universe, and everything?"
        },
    ],
    include: ["reasoning.encrypted_content"],
});

console.log(response);

// The response id that can be used to recall the conversation later
console.log(response.id);

const secondResponse = await client.responses.create({
    model: "grok-4",
    input: [
        ...response.output,  // Use response.output instead of the stored response
        {"role": "user", "content": "What is the meaning of 42?"},
    ],
});

console.log(secondResponse);

// The response id that can be used to recall the conversation later
console.log(secondResponse.id);
Retrieving a previous model response
If you have a previous response's ID, you can retrieve the content of the response.


javascript


import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const response = await client.responses.retrieve("<The previous response's id>");

console.log(response);
Delete a model response
If you no longer want to store the previous model response, you can delete it.


javascript


import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const response = await client.responses.delete("<The previous response's id>");

console.log(response);



Guides
Reasoning
grok-4-non-reasoning
 variants are based on 
grok-4
 with reasoning disabled.

presencePenalty
, 
frequencyPenalty
 and 
stop
 parameters are not supported by reasoning models. Adding them in the request would result in error.

Key Features
Think Before Responding: Thinks through problems step-by-step before delivering an answer.
Math & Quantitative Strength: Excels at numerical challenges and logic puzzles.
Reasoning Trace: The model's thoughts are available via the 
reasoning_content
 or 
encrypted_content
 field in the response completion object (see example below).
You can access the model's raw thinking trace via the 
message.reasoning_content
 of the chat completion response.

grok-4
 does not return 
reasoning_content
. It may optionally return encrypted reasoning content instead.
Encrypted Reasoning Content
For 
grok-4
, the reasoning content is encrypted by us and sent back if 
use_encrypted_content
 is set to 
true
. You can send the encrypted content back to provide more context to a previous conversation. See Stateful Response with Responses API for more details on how to use the content.

Control how hard the model thinks
reasoning_effort
 is not supported by 
grok-4
. Specifying 
reasoning_effort
 parameter will get an error response.

The 
reasoning_effort
 parameter controls how much time the model spends thinking before responding. It must be set to one of these values:

low
: Minimal thinking time, using fewer tokens for quick responses.
high
: Maximum thinking time, leveraging more tokens for complex problems.
Choosing the right level depends on your task: use 
low
 for simple queries that should complete quickly, and 
high
 for harder problems where response latency is less important.

Usage Example
Here’s a simple example using 
grok-4
 to multiply 101 by 3.


javascript


import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Override default timeout with longer timeout for reasoning models
});

const completion = await client.chat.completions.create({
    model: "grok-4",
    messages: [
        {
            "role": "system",
            "content": "You are a highly intelligent AI assistant.",
        },
        {
            "role": "user",
            "content": "What is 101*3?",
        },
    ],
});


console.log("\nFinal Response:", completion.choices[0].message.content);

console.log("\nNumber of completion tokens (input):", completion.usage.completion_tokens);

console.log("\nNumber of reasoning tokens (input):", completion.usage.completion_tokens_details.reasoning_tokens);
Sample Output
output



Final Response:
The result of 101 multiplied by 3 is 303.

Number of completion tokens:
14

Number of reasoning tokens:
310
Notes on Consumption
When you use a reasoning model, the reasoning tokens are also added to your final consumption amount. The reasoning token consumption will likely increase when you use a higher 
reasoning_effort
 setting.



Guides
Overview
The xAI API supports agentic server-side tool calling which enables the model to autonomously explore, search, and execute code to solve complex queries. Unlike traditional tool-calling where clients must handle each tool invocation themselves, xAI's agentic API manages the entire reasoning and tool-execution loop on the server side.

Version 1.3.1 of the xai-sdk package is required to use the agentic tool calling API.

Tools Pricing
Agentic requests are priced based on two components: token usage and tool invocations. Since the agent autonomously decides how many tools to call, costs scale with query complexity.

For more details of Tools pricing, please check out the pricing page.

Agentic Tool Calling
When you provide server-side tools to a request, the xAI server orchestrates an autonomous reasoning loop rather than returning tool calls for you to execute. This creates a seamless experience where the model acts as an intelligent agent that researches, analyzes, and responds automatically.

Behind the scenes, the model follows an iterative reasoning process:

Analyzes the query and current context to determine what information is needed
Decides what to do next: Either make a tool call to gather more information or provide a final answer
If making a tool call: Selects the appropriate tool and parameters based on the reasoning
Executes the tool in real-time on the server and receives the results
Processes the tool response and integrates it with previous context and reasoning
Repeats the loop: Uses the new information to decide whether more research is needed or if a final answer can be provided
Returns the final response once the agent determines it has sufficient information to answer comprehensively
This autonomous orchestration enables complex multi-step research and analysis to happen automatically, with clients seeing the final result as well as optional real-time progress indicators like tool call notifications during streaming.

Core Capabilities
Web Search: Real-time search across the internet with the ability to both search the web and browse web pages.
X Search: Semantic and keyword search across X posts, users, and threads.
Code Execution: The model can write and execute Python code for calculations, data analysis, and complex computations.
Image/Video Understanding: Optional visual content understanding and analysis for the search results encountered (video understanding is only available for X posts).
Quick Start
We strongly recommend using the xAI Python SDK in streaming mode when using agentic tool calling. Doing so grants you the full feature set of the API, including the ability to get real-time observability and immediate feedback during potentially long-running requests.

Here is a quick start example of using the agentic tool calling API.

python (xAI SDK)


import os

from xai_sdk import Client
from xai_sdk.chat import user
from xai_sdk.tools import web_search, x_search, code_execution

client = Client(api_key=os.getenv("XAI_API_KEY"))
chat = client.chat.create(
    model="grok-4-fast",  # reasoning model
    # All server-side tools active
    tools=[
        web_search(),
        x_search(),
        code_execution(),
    ],
)

# Feel free to change the query here to a question of your liking
chat.append(user("What are the latest updates from xAI?"))

is_thinking = True
for response, chunk in chat.stream():
    # View the server-side tool calls as they are being made in real-time
    for tool_call in chunk.tool_calls:
        print(f"\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")
    if response.usage.reasoning_tokens and is_thinking:
        print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)
    if chunk.content and is_thinking:
        print("\n\nFinal Response:")
        is_thinking = False
    if chunk.content and not is_thinking:
        print(chunk.content, end="", flush=True)

print("\n\nCitations:")
print(response.citations)
print("\n\nUsage:")
print(response.usage)
print(response.server_side_tool_usage)
print("\n\nServer Side Tool Calls:")
print(response.tool_calls)
You will be able to see output like:

output


Thinking... (270 tokens)
Calling tool: x_user_search with arguments: {"query":"xAI official","count":1}
Thinking... (348 tokens)
Calling tool: x_user_search with arguments: {"query":"xAI","count":5}
Thinking... (410 tokens)
Calling tool: x_keyword_search with arguments: {"query":"from:xai","limit":10,"mode":"Latest"}
Thinking... (667 tokens)
Calling tool: web_search with arguments: {"query":"xAI latest updates site:x.ai","num_results":5}
Thinking... (850 tokens)
Calling tool: browse_page with arguments: {"url": "https://x.ai/news"}
Thinking... (1215 tokens)

Final Response:
### Latest Updates from xAI (as of October 12, 2025)

xAI primarily shares real-time updates via their official X (Twitter) account (@xai), with more formal announcements on their website (x.ai). Below is a summary of the most recent developments...

... full response omitted for brevity

Citations:
[
'https://x.com/i/user/1912644073896206336',
'https://x.com/i/user/1019237602585645057',
'https://x.com/i/status/1975607901571199086',
'https://x.com/i/status/1975608122845896765',
'https://x.com/i/status/1975608070245175592',
'https://x.com/i/user/1603826710016819209',
'https://x.com/i/status/1975608007250829383',
'https://status.x.ai/',
'https://x.com/i/user/150543432',
'https://x.com/i/status/1975608184711880816',
'https://x.com/i/status/1971245659660718431',
'https://x.com/i/status/1975608132530544900',
'https://x.com/i/user/1661523610111193088',
'https://x.com/i/status/1977121515587223679',
'https://x.ai/news/grok-4-fast',
'https://x.com/i/status/1975608017396867282',
'https://x.ai/',
'https://x.com/i/status/1975607953391755740',
'https://x.com/i/user/1875560944044273665',
'https://x.ai/news',
'https://docs.x.ai/docs/release-notes'
]


Usage:
completion_tokens: 1216
prompt_tokens: 29137
total_tokens: 31568
prompt_text_tokens: 29137
reasoning_tokens: 1215
cached_prompt_text_tokens: 22565
server_side_tools_used: SERVER_SIDE_TOOL_X_SEARCH
server_side_tools_used: SERVER_SIDE_TOOL_X_SEARCH
server_side_tools_used: SERVER_SIDE_TOOL_X_SEARCH
server_side_tools_used: SERVER_SIDE_TOOL_WEB_SEARCH
server_side_tools_used: SERVER_SIDE_TOOL_WEB_SEARCH

{'SERVER_SIDE_TOOL_X_SEARCH': 3, 'SERVER_SIDE_TOOL_WEB_SEARCH': 2}


Server Side Tool Calls:
[id: "call_51132959"
function {
  name: "x_user_search"
  arguments: "{"query":"xAI official","count":1}"
}
, id: "call_00956753"
function {
  name: "x_user_search"
  arguments: "{"query":"xAI","count":5}"
}
, id: "call_07881908"
function {
  name: "x_keyword_search"
  arguments: "{"query":"from:xai","limit":10,"mode":"Latest"}"
}
, id: "call_43296276"
function {
  name: "web_search"
  arguments: "{"query":"xAI latest updates site:x.ai","num_results":5}"
}
, id: "call_70310550"
function {
  name: "browse_page"
  arguments: "{"url": "https://x.ai/news"}"
}
]
Understanding the Agentic Tool Calling Response
The agentic tool calling API provides rich observability into the autonomous research process. This section dives deep into the original code snippet above, covering key ways to effectively use the API and understand both real-time streaming responses and final results:

Real-time server-side tool calls
When executing agentic requests using streaming, you can observe every tool call decision the model makes in real-time via the 
tool_calls
 attribute on the 
chunk
 object. This shows the exact parameters the agent chose for each tool invocation, giving you visibility into its search strategy. Occasionally the model may decide to invoke multiple tools in parallel during a single turn, in which case each entry in the list of 
tool_calls
 would represent one of those parallel tool calls; otherwise, only a single entry would be present in 
tool_calls
.

Note: Only the tool call invocations themselves are shown - server-side tool call outputs are not returned in the API response. The agent uses these outputs internally to formulate its final response, but they are not exposed to the user.

When using the xAI Python SDK in streaming mode, it will automatically accumulate the 
tool_calls
 into the 
response
 object for you, letting you access a final list of all the server-side tool calls made during the agentic loop, this is demonstrated in the section below.

python


for tool_call in chunk.tool_calls:
    print(f"\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")
output


Calling tool: x_user_search with arguments: {"query":"xAI official","count":1}
Calling tool: x_user_search with arguments: {"query":"xAI","count":5}
Calling tool: x_keyword_search with arguments: {"query":"from:xai","limit":10,"mode":"Latest"}
Calling tool: web_search with arguments: {"query":"xAI latest updates site:x.ai","num_results":5}
Calling tool: browse_page with arguments: {"url": "https://x.ai/news"}
Citations
The 
citations
 attribute on the 
response
 object provides a comprehensive list of URLs for all sources the agent encountered during its search process. They are only returned when the agentic request completes and are not available in real-time during streaming. Citations are automatically collected from successful tool executions and provide full traceability of the agent's information sources.

Note that not every URL here will necessarily be relevant to the final answer, as the agent may examine a particular source and determine it is not sufficiently relevant to the user's original query.

python


response.citations
output


[
'https://x.com/i/user/1912644073896206336',
'https://x.com/i/status/1975607901571199086',
'https://x.ai/news',
'https://docs.x.ai/docs/release-notes',
...
]
Server-side Tool Calls vs Tool Usage
The API provides two related but distinct metrics for server-side tool executions:

tool_calls
 - All Attempted Calls

python


response.tool_calls
Returns a list of all attempted tool calls made during the agentic process. Each entry is a ToolCall object containing:

id
: Unique identifier for the tool call
function.name
: The name of the specific server-side tool called
function.arguments
: The parameters passed to the server-side tool
This includes every tool call attempt, even if some fail.

output


[id: "call_51132959"
function {
  name: "x_user_search"
  arguments: "{"query":"xAI official","count":1}"
}
, id: "call_07881908"
function {
  name: "x_keyword_search"
  arguments: "{"query":"from:xai","limit":10,"mode":"Latest"}"
}
, id: "call_43296276"
function {
  name: "web_search"
  arguments: "{"query":"xAI latest updates site:x.ai","num_results":5}"
}
]
server_side_tool_usage
 - Successful Calls (Billable)

python


response.server_side_tool_usage
Returns a map of successfully executed tools and their invocation counts. This represents only the tool calls that returned meaningful responses and is what determines your billing.

output


{'SERVER_SIDE_TOOL_X_SEARCH': 3, 'SERVER_SIDE_TOOL_WEB_SEARCH': 2}
Tool Call Function Names vs Usage Categories
The function names in 
tool_calls
 represent the precise/exact name of the tool invoked by the model, while the entries in 
server_side_tool_usage
 provide a more high-level categorization that aligns with the original tool passed in the 
tools
 array of the request.

Function Name to Usage Category Mapping:

Usage Category	Function Name(s)
SERVER_SIDE_TOOL_WEB_SEARCH
web_search
, 
web_search_with_snippets
, 
browse_page
SERVER_SIDE_TOOL_X_SEARCH
x_user_search
, 
x_keyword_search
, 
x_semantic_search
, 
x_thread_fetch
SERVER_SIDE_TOOL_CODE_EXECUTION
code_execution
SERVER_SIDE_TOOL_VIEW_X_VIDEO
view_x_video
SERVER_SIDE_TOOL_VIEW_IMAGE
view_image
When Tool Calls and Usage Differ
In most cases, 
tool_calls
 and 
server_side_tool_usage
 will show the same tools. However, they can differ when:

Failed tool executions: The model attempts to browse a non-existent webpage, fetch a deleted X post, or encounters other execution errors
Invalid parameters: Tool calls with malformed arguments that can't be processed
Network or service issues: Temporary failures in the tool execution pipeline
The agentic system is robust enough to handle these failures gracefully, updating its trajectory and continuing with alternative approaches when needed.

Billing Note: Only successful tool executions (
server_side_tool_usage
) are billed. Failed attempts are not charged.

Understanding Token Usage
Agentic requests have unique token usage patterns compared to standard chat completions. Here's how each token field in the usage object is calculated:

completion_tokens
Represents only the final text output of the model - the comprehensive answer returned to the user. This is typically much smaller than you might expect for such rich, research-driven responses, as the agent performs all its intermediate reasoning and tool orchestration internally.

prompt_tokens
Represents the cumulative input tokens across all inference requests made during the agentic process. Since agentic workflows involve multiple reasoning steps with tool calls, the model makes several inference requests throughout the research process. Each request includes the full conversation history up to that point, which grows as the agent progresses through its research.

While this can result in higher 
prompt_tokens
 counts, agentic requests benefit significantly from prompt caching. The majority of the prompt (the conversation prefix) remains unchanged between inference steps, allowing for efficient caching of the shared context. This means that while the total 
prompt_tokens
 may appear high, much of the computation is optimized through intelligent caching of the stable conversation history, leading to better cost efficiency overall.

reasoning_tokens
Represents the tokens used for the model's internal reasoning process during agentic workflows. This includes the computational work the agent performs to plan tool calls, analyze results, and formulate responses, but excludes the final output tokens.

cached_prompt_text_tokens
Indicates how many prompt tokens were served from cache rather than recomputed. This shows the efficiency gains from prompt caching - higher values indicate better cache utilization and lower costs.

prompt_image_tokens
Represents the tokens derived from visual content that the agent processes during the request. These tokens are produced when visual understanding is enabled and the agent views images (e.g., via web browsing) or analyzes video frames on X. They are counted separately from text tokens and reflect the cost of ingesting visual features alongside the textual context. If no images or videos are processed, this value will be zero.

prompt_text_tokens
 and 
total_tokens
prompt_text_tokens
 reflects the actual text tokens in prompts (excluding any special tokens), while 
total_tokens
 is the sum of all token types used in the request.

Synchronous Agentic Requests (Non-streaming)
Although not typically recommended, for simpler use cases or when you want to wait for the complete agentic workflow to finish before processing the response, you can use synchronous requests:

python


import os

from xai_sdk import Client
from xai_sdk.chat import user
from xai_sdk.tools import code_execution, web_search, x_search

client = Client(api_key=os.getenv("XAI_API_KEY"))
chat = client.chat.create(
    model="grok-4-fast",  # reasoning model
    tools=[
        web_search(),
        x_search(),
        code_execution(),
    ],
)

chat.append(user("What is the latest update from xAI?"))

# Get the final response in one go once it's ready
response = chat.sample()

print("\n\nFinal Response:")
print(response.content)

# Access the citations of the final response
print("\n\nCitations:")
print(response.citations)

# Access the usage details from the entire search process
print("\n\nUsage:")
print(response.usage)
print(response.server_side_tool_usage)

# Access the server side tool calls of the final response
print("\n\nServer Side Tool Calls:")
print(response.tool_calls)
Synchronous requests will wait for the entire agentic process to complete before returning the response. This is simpler for basic use cases but provides less visibility into the intermediate steps compared to streaming.

Using Tools with OpenAI Responses API
We also support using the OpenAI Responses API in both streaming and non-streaming modes.


python (OpenAI SDK)


import os
from openai import OpenAI

api_key = os.getenv("XAI_API_KEY")
client = OpenAI(
    api_key=api_key,
    base_url="https://api.x.ai/v1",
)

response = client.responses.create(
    model="grok-4-fast",
    input=[
        {
            "role": "user",
            "content": "what is the latest update from xAI?",
        },
    ],
    tools=[
        {
            "type": "web_search",
        },
        {
            "type": "x_search",
        },
    ],
)

print(response)
Agentic Tool Calling Requirements and Limitations
Model Compatibility
Supported Models: 
grok-4
, 
grok-4-fast
, 
grok-4-fast-non-reasoning
Strongly Recommended: 
grok-4-fast
 - specifically trained to excel at agentic tool calling
Tool Configuration
Server-side only: Cannot mix server-side tools with client-side tools in the same request
Request Constraints
No batch requests: 
n > 1
 not supported
No response format: Structured output not yet available with agentic tool calling
Limited sampling params: Only 
temperature
 and 
top_p
 are respected
Continuation of previous conversation not supported: 
previous_response_id
 cannot be set
Note: These constraints may be relaxed in future releases based on user feedback.



Guides
Search Tools
Agentic search represents one of the most compelling applications of agentic tool calling, with 
grok-4-fast
 specifically trained to excel in this domain. Leveraging its speed and reasoning capabilities, the model iteratively calls search tools—analyzing responses and making follow-up queries as needed—to seamlessly navigate web pages and X posts, uncovering difficult-to-find information or insights that would otherwise require extensive human analysis.

Version 1.3.1 of the xai-sdk package is required to use the agentic tool calling API.

Available Search Tools
You can use the following server-side search tools in your request:

Web Search - allows the agent to search the web and browse pages
X Search - allows the agent to perform keyword search, semantic search, user search, and thread fetch on X
You can customize which tools are enabled in a given request by listing the needed tools in the 
tools
 parameter in the request.

Tool	xAI SDK	OpenAI Responses API
Web Search	
web_search
web_search
X Search	
x_search
x_search
Retrieving Citations
Citations provide traceability for sources used during agentic search. Access them from the response object:


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is xAI?"
        }
    ],
    "tools": [
        {
            "type": "web_search",
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)

# Access the citations of the final response
print(response.json())
As mentioned in the overview page, the citations array contains the URLs of all sources the agent encountered during its search process, meaning that not every URL here will necessarily be relevant to the final answer, as the agent may examine a particular source and determine it is not sufficiently relevant to the user's original query.

For complete details on citations, including when they're available and usage notes, see the overview page.

Applying Search Filters to Control Agentic Search
Each search tool supports a set of optional search parameters to help you narrow down the search space and limit the sources/information the agent is exposed to during its search process.

Tool	Supported Filter Parameters
Web Search	
allowed_domains
, 
excluded_domains
, 
enable_image_understanding
X Search	
allowed_x_handles
, 
excluded_x_handles
, 
from_date
, 
to_date
, 
enable_image_understanding
, 
enable_video_understanding
Web Search Parameters
Only Search in Specific Domains
Use 
allowed_domains
 to make the web search only perform the search and web browsing on web pages that fall within the specified domains.

allowed_domains
 can include a maximum of five domains.

allowed_domains
 cannot be set together with 
excluded_domains
 in the same request.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is xAI?"
        }
    ],
    "tools": [
        {
            "type": "web_search",
            "allowed_domains": ["wikipedia.org"],
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
Exclude Specific Domains
Use 
excluded_domains
 to prevent the model from including the specified domains in any web search tool invocations and from browsing any pages on those domains.

excluded_domains
 can include a maximum of five domains.

excluded_domains
 cannot be set together with 
allowed_domains
 in the same request.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is xAI?"
        }
    ],
    "tools": [
        {
            "type": "web_search",
            "excluded_domains": ["wikipedia.org"],
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
Enable Image Understanding
Setting 
enable_image_understanding
 to true equips the agent with access to the 
view_image
 tool, allowing it to invoke this tool on any image URLs encountered during the search process. The model can then interpret and analyze image contents, incorporating this visual information into its context to potentially influence the trajectory of follow-up tool calls.

When the model invokes this tool, you will see it as an entry in 
chunk.tool_calls
 and 
response.tool_calls
 with the 
image_url
 as a parameter. Additionally, 
SERVER_SIDE_TOOL_VIEW_IMAGE
 will appear in 
response.server_side_tool_usage
 along with the number of times it was called when using the xAI Python SDK.

Note that enabling this feature increases token usage, as images are processed and represented as image tokens in the model's context.

Enabling this parameter for Web Search will also enable the image understanding for X Search tool if it's also included in the request.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is included in the image in xAI's official website?"
        }
    ],
    "tools": [
        {
            "type": "web_search",
            "enable_image_understanding": True,
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
X Search Parameters
Only Consider X Posts from Specific Handles
Use 
allowed_x_handles
 to consider X posts only from a given list of X handles. The maximum number of handles you can include is 10.

allowed_x_handles
 cannot be set together with 
excluded_x_handles
 in the same request.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is the current status of xAI?"
        }
    ],
    "tools": [
        {
            "type": "x_search",
            "allowed_x_handles": ["elonmusk"],
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
Exclude X Posts from Specific Handles
Use 
excluded_x_handles
 to prevent the model from including X posts from the specified handles in any X search tool invocations. The maximum number of handles you can exclude is 10.

excluded_x_handles
 cannot be set together with 
allowed_x_handles
 in the same request.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is the current status of xAI?"
        }
    ],
    "tools": [
        {
            "type": "x_search",
            "excluded_x_handles": ["elonmusk"],
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
Date Range
You can restrict the date range of search data used by specifying 
from_date
 and 
to_date
. This limits the data to the period from 
from_date
 to 
to_date
, including both dates.

Both fields need to be in ISO8601 format, e.g., "YYYY-MM-DD". If you're using the xAI Python SDK, the 
from_date
 and 
to_date
 fields can be passed as 
datetime.datetime
 objects.

The fields can also be used independently. With only 
from_date
 specified, the data used will be from the 
from_date
 to today, and with only 
to_date
 specified, the data used will be all data until the 
to_date
.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is the current status of xAI?"
        }
    ],
    "tools": [
        {
            "type": "x_search",
            "from_date": "2025-10-01",
            "to_date": "2025-10-10",
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
Enable Image Understanding
Setting 
enable_image_understanding
 to true equips the agent with access to the 
view_image
 tool, allowing it to invoke this tool on any image URLs encountered during the search process. The model can then interpret and analyze image contents, incorporating this visual information into its context to potentially influence the trajectory of follow-up tool calls.

When the model invokes this tool, you will see it as an entry in 
chunk.tool_calls
 and 
response.tool_calls
 with the 
image_url
 as a parameter. Additionally, 
SERVER_SIDE_TOOL_VIEW_IMAGE
 will appear in 
response.server_side_tool_usage
 along with the number of times it was called when using the xAI Python SDK.

Note that enabling this feature increases token usage, as images are processed and represented as image tokens in the model's context.

Enabling this parameter for X Search will also enable the image understanding for Web Search tool if it's also included in the request.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What images are being shared in recent xAI posts?"
        }
    ],
    "tools": [
        {
            "type": "x_search",
            "enable_image_understanding": True,
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
Enable Video Understanding
Setting 
enable_video_understanding
 to true equips the agent with access to the 
view_x_video
 tool, allowing it to invoke this tool on any video URLs encountered in X posts during the search process. The model can then analyze video content, incorporating this information into its context to potentially influence the trajectory of follow-up tool calls.

When the model invokes this tool, you will see it as an entry in 
chunk.tool_calls
 and 
response.tool_calls
 with the 
video_url
 as a parameter. Additionally, 
SERVER_SIDE_TOOL_VIEW_X_VIDEO
 will appear in 
response.server_side_tool_usage
 along with the number of times it was called when using the xAI Python SDK.

Note that enabling this feature increases token usage, as video content is processed and represented as tokens in the model's context.


python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is the latest video talking about from the xAI official X account?"
        }
    ],
    "tools": [
        {
            "type": "x_search",
            "enable_video_understanding": True,
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())



Guides
Advanced Usage
In this section we explore advanced usage patterns for agentic tool calling, including:

Requests with Multiple Active Tools - Send requests with multiple server-side tools active simultaneously, enabling comprehensive analysis with web search, X search, and code execution tools working together
Image Integration - Include images in your tool-enabled conversations for visual analysis and context-aware searches
Version 1.3.1 of the xai-sdk package is required to use the agentic tool calling API.

Tool Combinations
Equipping your requests with multiple tools is straightforward - simply include the tools you want to activate in the 
tools
 array of your request. The model will intelligently orchestrate between them based on the task at hand.

Suggested Tool Combinations
Here are some common patterns for combining tools, depending on your use case:

If you're trying to...	Consider activating...	Because...
Research & analyze data	Web Search + Code Execution	Web search gathers information, code execution analyzes and visualizes it
Aggregate news & social media	Web Search + X Search	Get comprehensive coverage from both traditional web and social platforms
Extract insights from multiple sources	Web Search + X Search + Code Execution	Collect data from various sources then compute correlations and trends
Monitor real-time discussions	X Search + Web Search	Track social sentiment alongside authoritative information

python (xAI SDK)


from xai_sdk.tools import web_search, x_search, code_execution

# Example tool combinations for different scenarios
research_setup = [web_search(), code_execution()]
news_setup = [web_search(), x_search()]
comprehensive_setup = [web_search(), x_search(), code_execution()]
Using Tool Combinations in Different Scenarios
When you want to search for news on the Internet, you can activate all search tools:
Web search tool
X search tool

python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "what is the latest update from xAI?"
        }
    ],
    "tools": [
        {
            "type": "web_search",
        },
        {
            "type": "x_search",
        }
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
When you want to collect up-to-date data from the Internet and perform calculations based on the Internet data, you can choose to activate:
Web search tool
Code execution tool

python (requests)


import os
import requests

url = "https://api.x.ai/v1/responses"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('XAI_API_KEY')}"
}
payload = {
    "model": "grok-4-fast",
    "input": [
        {
            "role": "user",
            "content": "What is the average market cap of the companies with the top 5 market cap in the US stock market today?"
        }
    ],
    # research_tools
    "tools": [
        {
            "type": "web_search",
        },
        {
            "type": "code_interpreter",
        },
    ]
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
Using Images in the Context
You can bootstrap your requests with an initial conversation context which can include images.

In the code sample below, we pass an image into the context of the conversation before initiating agentic request.

python (xAI SDK)


import os

from xai_sdk import Client
from xai_sdk.chat import image, user
from xai_sdk.tools import web_search, x_search

# Create the client and define the server-side tools to use
client = Client(api_key=os.getenv("XAI_API_KEY"))
chat = client.chat.create(
    model="grok-4-fast",  # reasoning model
    tools=[web_search(), x_search()],
)

# Add an image to the conversation
chat.append(
    user(
        "Search the internet and tell me what kind of dog is in the image below.",
        "And what is the typical lifespan of this dog breed?",
        image(
            "https://pbs.twimg.com/media/G3B7SweXsAAgv5N?format=jpg&name=900x900"
        ),
    )
)

is_thinking = True
for response, chunk in chat.stream():
    # View the server-side tool calls as they are being made in real-time
    for tool_call in chunk.tool_calls:
        print(f"\nCalling tool: {tool_call.function.name} with arguments: {tool_call.function.arguments}")
    if response.usage.reasoning_tokens and is_thinking:
        print(f"\rThinking... ({response.usage.reasoning_tokens} tokens)", end="", flush=True)
    if chunk.content and is_thinking:
        print("\n\nFinal Response:")
        is_thinking = False
    if chunk.content and not is_thinking:
        print(chunk.content, end="", flush=True)

print("\n\nCitations:")
print(response.citations)
print("\n\nUsage:")
print(response.usage)
print(response.server_side_tool_usage)
print("\n\nServer Side Tool Calls:")
print(response.tool_calls)



Guides
Streaming Response
Streaming outputs is supported by all models with text output capability (Chat, Image Understanding, etc.). It is not supported by models with image output capability (Image Generation).

Streaming outputs uses Server-Sent Events (SSE) that let the server send back the delta of content in event streams.

Streaming responses are beneficial for providing real-time feedback, enhancing user interaction by allowing text to be displayed as it's generated.

To enable streaming, you must set 
"stream": true
 in your request.

When using streaming output with reasoning models, you might want to manually override request timeout to avoid prematurely closing connection.


javascript


import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: "<api key>",
    baseURL: "https://api.x.ai/v1",
    timeout: 360000, // Timeout after 3600s for reasoning models
});

const stream = await openai.chat.completions.create({
    model: "grok-4",
    messages: [
        { role: "system", content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy." },
        {
            role: "user",
            content: "What is the meaning of life, the universe, and everything?",
        }
    ],
    stream: true
});

for await (const chunk of stream) {
    console.log(chunk.choices[0].delta.content);
}
You'll get the event streams like these:

bash


data: {
    "id":"<completion_id>","object":"chat.completion.chunk","created":<creation_time>,
    "model":"grok-4",
    "choices":[{"index":0,"delta":{"content":"Ah","role":"assistant"}}],
    "usage":{"prompt_tokens":41,"completion_tokens":1,"total_tokens":42,
    "prompt_tokens_details":{"text_tokens":41,"audio_tokens":0,"image_tokens":0,"cached_tokens":0}},
    "system_fingerprint":"fp_xxxxxxxxxx"
}

data: {
    "id":"<completion_id>","object":"chat.completion.chunk","created":<creation_time>,
    "model":"grok-4",
    "choices":[{"index":0,"delta":{"content":",","role":"assistant"}}],
    "usage":{"prompt_tokens":41,"completion_tokens":2,"total_tokens":43,
    "prompt_tokens_details":{"text_tokens":41,"audio_tokens":0,"image_tokens":0,"cached_tokens":0}},
    "system_fingerprint":"fp_xxxxxxxxxx"
}

data: [DONE]
It is recommended that you use a client SDK to parse the event stream.

Example streaming responses in Python/Javascript:

output


Ah, the ultimate question! According to Douglas Adams, the answer is **42**. However, the trick lies in figuring out what the actual question is. If you're looking for a bit more context or a different perspective:

- **Philosophically**: The meaning of life might be to seek purpose, happiness, or to fulfill one's potential.
- **Biologically**: It could be about survival, reproduction, and passing on genes.
- **Existentially**: You create your own meaning through your experiences and choices.

But let's not forget, the journey to find this meaning might just be as important as the answer itself! Keep exploring, questioning, and enjoying the ride through the universe. And remember, don't panic!



curl https://api.x.ai/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $XAI_API_KEY" \
-m 3600 \
-d '{
    "messages": [
        {
            "role": "system",
            "content": "You are Grok, a chatbot inspired by the Hitchhikers Guide to the Galaxy."
        },
        {
            "role": "user",
            "content": "What is the meaning of life, the universe, and everything?"
        }
    ],
    "model": "grok-4",
    "stream": true
}'



Guides
Deferred Chat Completions
Deferred Chat Completions are currently available only via REST requests or xAI SDK.

Deferred Chat Completions allow you to create a chat completion, get a 
response_id
, and retrieve the response at a later time. The result would be available to be requested exactly once within 24 hours, after which it would be discarded.

Deferred chat flow
After sending the request to the xAI API, the chat completion result will be available at 
https://api.x.ai/v1/chat/deferred-completion/{request_id}
. The response body will contain 
{'request_id': 'f15c114e-f47d-40ca-8d5c-8c23d656eeb6'}
, and the 
request_id
 value can be inserted into the 
deferred-completion
 endpoint path. Then, we send this GET request to retrieve the deferred completion result.

When the completion result is not ready, the request will return 
202 Accepted
 with an empty response body.

You can access the model's raw thinking trace via the 
message.reasoning_content
 of the chat completion response.

grok-4
 does not return 
reasoning_content
Example
An example code is provided below, where we retry retrieving the result until it have been processed:


bash


RESPONSE=$(curl -s https://api.x.ai/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $XAI_API_KEY" \
-d '{
    "messages": [
        {"role": "system", "content": "You are Zaphod Beeblebrox."},
        {"role": "user", "content": "126/3=?"}
    ],
    "model": "grok-4",
    "deferred": true
}')

REQUEST_ID=$(echo "$RESPONSE" | jq -r '.request_id')
echo "Request ID: $REQUEST_ID"

sleep 10

curl -s https://api.x.ai/v1/chat/deferred-completion/$REQUEST_ID \
-H "Authorization: Bearer $XAI_API_KEY"
The response body will be the same as what you would expect with non-deferred chat completions:

json


{
  "id": "3f4ddfca-b997-3bd4-80d4-8112278a1508",
  "object": "chat.completion",
  "created": 1752077400,
  "model": "grok-4",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Whoa, hold onto your improbability drives, kid! This is Zaphod Beeblebrox here, the two-headed, three-armed ex-President of the Galaxy, and you're asking me about 126 divided by 3? Pfft, that's kid stuff for a guy who's stolen starships and outwitted the universe itself.\n\nBut get this\u2014126 slashed by 3 equals... **42**! Yeah, that's right, the Ultimate Answer to Life, the Universe, and Everything! Deep Thought didn't compute that for seven and a half million years just for fun, you know. My left head's grinning like a Vogon poet on happy pills, and my right one's already planning a party. If you need more cosmic math or a lift on the Heart of Gold, just holler. Zaphod out! 🚀",
        "refusal": null
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 26,
    "completion_tokens": 168,
    "total_tokens": 498,
    "prompt_tokens_details": {
      "text_tokens": 26,
      "audio_tokens": 0,
      "image_tokens": 0,
      "cached_tokens": 4
    },
    "completion_tokens_details": {
      "reasoning_tokens": 304,
      "audio_tokens": 0,
      "accepted_prediction_tokens": 0,
      "rejected_prediction_tokens": 0
    },
    "num_sources_used": 0
  },
  "system_fingerprint": "fp_44e53da025"
}
For more details, refer to Chat completions and Get deferred chat completions in our REST API Reference.



Guides
Asynchronous Requests
When working with the xAI API, you may need to process hundreds or even thousands of requests. Sending these requests sequentially can be extremely time-consuming.

To improve efficiency, you can use 
AsyncClient
 from 
xai_sdk
 or 
AsyncOpenAI
 from 
openai
, which allows you to send multiple requests concurrently. The example below is a Python script demonstrating how to use 
AsyncClient
 to batch and process requests asynchronously, significantly reducing the overall execution time:

The xAI API does not currently offer a batch API.

Rate Limits
Adjust the 
max_concurrent
 param to control the maximum number of parallel requests.

You are unable to concurrently run your requests beyond the rate limits shown in the API console.


python (OpenAI SDK)


import asyncio
import os
import httpx
from asyncio import Semaphore
from typing import List

from openai import AsyncOpenAI

client = AsyncOpenAI(
    api_key=os.getenv("XAI_API_KEY"),
    base_url="https://api.x.ai/v1",
    timeout=httpx.Timeout(3600.0) # Override default timeout with longer timeout for reasoning models
)

async def send_request(sem: Semaphore, request: str) -> dict:
"""Send a single request to xAI with semaphore control."""
# The 'async with sem' ensures only a limited number of requests run at once
    async with sem:
        return await client.chat.completions.create(
            model="grok-4",
            messages=[{"role": "user", "content": request}]
        )

async def process_requests(requests: List[str], max_concurrent: int = 2) -> List[dict]:
"""Process multiple requests with controlled concurrency."""
    # Create a semaphore that limits how many requests can run at the same time # Think of it like having only 2 "passes" to make requests simultaneously
    sem = Semaphore(max_concurrent)

    # Create a list of tasks (requests) that will run using the semaphore
    tasks = [send_request(sem, request) for request in requests]

    # asyncio.gather runs all tasks in parallel but respects the semaphore limit
    # It waits for all tasks to complete and returns their results
    return await asyncio.gather(*tasks)

async def main() -> None:
"""Main function to handle requests and display responses."""
    requests = [
        "Tell me a joke",
        "Write a funny haiku",
        "Generate a funny X post",
        "Say something unhinged"
    ]

    # This starts processing all asynchronously, but only 2 at a time
    # Instead of waiting for each request to finish before starting the next,
    # we can have 2 requests running at once, making it faster overall
    responses = await process_requests(requests)

    # Print each response in order
    for i, response in enumerate(responses):
        print(f"# Response {i}:")
        print(response.choices[0].message.content)

if **name** == "**main**":
asyncio.run(main())





Guides
Function calling
Connect the xAI models to external tools and systems to build AI assistants and various integrations.

With stream response, the function call will be returned in whole in a single chunk, instead of being streamed across chunks.

Introduction
Function calling enables language models to use external tools, which can intimately connect models to digital and physical worlds.

This is a powerful capability that can be used to enable a wide range of use cases.

Calling public APIs for actions ranging from looking up football game results to getting real-time satellite positioning data
Analyzing internal databases
Browsing web pages
Executing code
Interacting with the physical world (e.g. booking a flight ticket, opening your tesla car door, controlling robot arms)
Walkthrough
The request/response flow for function calling can be demonstrated in the following illustration.

Function call request/response flow example
You can think of it as the LLM initiating RPCs (Remote Procedure Calls) to user system. From the LLM's perspective, the "2. Response" is an RPC request from LLM to user system, and the "3. Request" is an RPC response with information that LLM needs.

One simple example of a local computer/server, where the computer/server determines if the response from Grok contains a 
tool_call
, and calls the locally-defined functions to perform user-defined actions:

Local computer/server setup for function calling
The whole process looks like this in pseudocode:

pseudocode


// ... Define tool calls and their names

messages = []

/* Step 1: Send a new user request */

messages += {<new user request message>}
response = send_request_to_grok(message)

messages += response.choices[0].message  // Append assistant response

while (true) {
    /* Step 2: Run tool call and add tool call result to messages */
    if (response contains tool_call) {
        // Grok asks for tool call

        for (tool in tool_calls) {
            tool_call_result = tool(arguments provided in response) // Perform tool call
            messages += tool_call_result  // Add result to message
        }
    }

    read(user_request)

    if (user_request) {
        messages += {<new user request message>}
    }

    /* Step 3: Send request with tool call result to Grok*/
    response = send_request_to_grok(message)

    print(response)
}

We will demonstrate the function calling in the following Python script. First, let's create an API client:


python (OpenAI SDK)


import os
import json
from openai import OpenAI

XAI_API_KEY = os.getenv("XAI_API_KEY")

client = OpenAI(
    api_key=XAI_API_KEY,
    base_url="https://api.x.ai/v1",
)
Preparation - Define tool functions and function mapping
Define tool functions as callback functions to be called when model requests them in response.

Normally, these functions would either retrieve data from a database, or call another API endpoint, or perform some actions. For demonstration purposes, we hardcode to return 59° Fahrenheit/15° Celsius as the temperature, and 15,000 feet as the cloud ceiling.

The parameters definition will be sent in the initial request to Grok, so Grok knows what tools and parameters are available to be called.

To reduce human error, you can define the tools partially using Pydantic.

Function definition using Pydantic:


python (OpenAI SDK)


from typing import Literal

from pydantic import BaseModel, Field

class TemperatureRequest(BaseModel):
    location: str = Field(description="The city and state, e.g. San Francisco, CA")
    unit: Literal["celsius", "fahrenheit"] = Field(
        "fahrenheit", description="Temperature unit"
    )

class CeilingRequest(BaseModel):
    location: str = Field(description="The city and state, e.g. San Francisco, CA")

def get_current_temperature(request: TemperatureRequest):
    temperature = 59 if request.unit.lower() == "fahrenheit" else 15
    return {
        "location": request.location,
        "temperature": temperature,
        "unit": request.unit,
    }

def get_current_ceiling(request: CeilingRequest):
    return {
        "location": request.location,
        "ceiling": 15000,
        "ceiling_type": "broken",
        "unit": "ft",
    }

# Generate the JSON schema from the Pydantic models

get_current_temperature_schema = TemperatureRequest.model_json_schema()
get_current_ceiling_schema = CeilingRequest.model_json_schema()

# Definition of parameters with Pydantic JSON schema

tool_definitions = [
    {
        "type": "function",
        "function": {
            "name": "get_current_temperature",
            "description": "Get the current temperature in a given location",
            "parameters": get_current_temperature_schema,
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_current_ceiling",
            "description": "Get the current cloud ceiling in a given location",
            "parameters": get_current_ceiling_schema,
        }
    },
]
Function definition using raw dictionary:


python (OpenAI SDK)


from typing import Literal

def get_current_temperature(location: str, unit: Literal["celsius", "fahrenheit"] = "fahrenheit"):
    temperature = 59 if unit == "fahrenheit" else 15
    return {
        "location": location,
        "temperature": temperature,
        "unit": unit,
    }

def get_current_ceiling(location: str):
    return {
        "location": location,
        "ceiling": 15000,
        "ceiling_type": "broken",
        "unit": "ft",
    }

# Raw dictionary definition of parameters

tool_definitions = [
    {
        "type": "function",
        "function": {
            "name": "get_current_temperature",
            "description": "Get the current temperature in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "default": "fahrenheit"
                    }
                },
            "required": ["location"]
        }
    }
},
{
    "type": "function",
    "function": {
    "name": "get_current_ceiling",
    "description": "Get the current cloud ceiling in a given location",
    "parameters": {
    "type": "object",
    "properties": {
    "location": {
    "type": "string",
    "description": "The city and state, e.g. San Francisco, CA"
    }
    },
    "required": ["location"]
    }
    }
}
]
Create a string -> function mapping, so we can call the function when model sends it's name. e.g.

python


tools_map = {
    "get_current_temperature": get_current_temperature,
    "get_current_ceiling": get_current_ceiling,
}
1. Send initial message
With all the functions defined, it's time to send our API request to Grok!

Now before we send it over, let's look at how the generic request body for a new task looks like.

Here we assume a previous tool call has Note how the tool call is referenced three times:

By 
id
 and 
name
 in "Mesage History" assistant's first response
By 
tool_call_id
 in "Message History" tool's content
In the 
tools
 field of the request body
Function call new request body
Now we compose the request messages in the request body and send it over to Grok. Grok should return a response that asks us for a tool call.


python (OpenAI SDK)


messages = [{"role": "user", "content": "What's the temperature like in San Francisco?"}]
response = client.chat.completions.create(
    model="grok-4",
    messages=messages,
    tools=tool_definitions, # The dictionary of our functions and their parameters
    tool_choice="auto",
)

# You can inspect the response which contains a tool call

print(response.choices[0].message)
2. Run tool functions if Grok asks tool call and append function returns to message
We retrieve the tool function names and arguments that Grok wants to call, run the functions, and add the result to messages.

At this point, you can choose to only respond to tool call with results or add a new user message request.

The 
tool
 message would contain the following:

json


{
    "role": "tool",
    "content": <json string of tool function's returned object>,
    "tool_call_id": <tool_call.id included in the tool call response by Grok>,
}
The request body that we try to assemble and send back to Grok. Note it looks slightly different from the new task request body:

Request body after processing tool call
The corresponding code to append messages:


python (OpenAI SDK)


# Append assistant message including tool calls to messages

messages.append(response.choices[0].message)

# Check if there is any tool calls in response body

# You can also wrap this in a function to make the code cleaner

if response.choices[0].message.tool_calls:
    for tool_call in response.choices[0].message.tool_calls:

        # Get the tool function name and arguments Grok wants to call
        function_name = tool_call.function.name
        if function_name not in tools_map:
            messages.append({
                    "role": "tool",
                    "content": json.dumps({"error": f"Function {function_name} not found"}),
                    "tool_call_id": tool_call.id
                })
            continue
        function_args = json.loads(tool_call.function.arguments)

        # Call one of the tool function defined earlier with arguments
        result = tools_map[function_name](**function_args)

        # Append the result from tool function call to the chat message history,
        # with "role": "tool"
        messages.append(
            {
                "role": "tool",
                "content": json.dumps(result),
                "tool_call_id": tool_call.id  # tool_call.id supplied in Grok's response
            })
3. Send the tool function returns back to the model to get the response

python (OpenAI SDK)


response = client.chat.completions.create(
    model="grok-4",
    messages=messages,
    tools=tool_definitions,
    tool_choice="auto"
    )
print(response.choices[0].message.content)
4. (Optional) Continue the conversation
You can continue the conversation following Step 2. Otherwise you can terminate.

Function calling modes
By default, the model will automatically decide whether a function call is necessary and select which functions to call, as determined by the 
tool_choice: "auto"
 setting.

We offer three ways to customize the default behavior:

To force the model to always call one or more functions, you can set 
tool_choice: "required"
. The model will then always call function. Note this could force the model to hallucinate parameters.
To force the model to call a specific function, you can set 
tool_choice: {"type": "function", "function": {"name": "my_function"}}
.
To disable function calling and force the model to only generate a user-facing message, you can either provide no tools, or set 
tool_choice: "none"
.
Parallel function calling
By default, parallel function calling is enabled, so you can process multiple function calls in one request/response cycle. When two or more tool calls are required, all of the tool call requests will be included in the response body. You can disable it by setting 
parallel_function_calling : "false"
.



Guides
Fingerprint
For each request to the xAI API, the response body will include a unique 
system_fingerprint
 value. This fingerprint serves as an identifier for the current state of the backend system's configuration.

Example:

bash


curl https://api.x.ai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $XAI_API_KEY" \
  -d '{
        "messages": [
          {
            "role": "system",
            "content": "You are Grok, a chatbot inspired by the Hitchhikers Guide to the Galaxy."
          },
          {
            "role": "user",
            "content": "What is the meaning of life, the universe, and everything?"
          }
        ],
        "model": "grok-4",
        "stream": false,
        "temperature": 0
      }'
Response:

json


{..., "system_fingerprint":"fp_6ca29cf396"}
You can automate your system to keep track of the 
system_fingerprint
 along with token consumption and other metrics.

Usage of fingerprint
Monitoring System Changes: The system fingerprint acts as a version control for the backend configuration. If any part of the backend system—such as model parameters, server settings, or even the underlying infrastructure—changes, the fingerprint will also change. This allows developers to track when and how the system has evolved over time. This is crucial for debugging, performance optimization, and ensuring consistency in API responses.
Security and Integrity: The fingerprint can be used to ensure the integrity of the response. If a response's fingerprint matches the expected one based on a recent system configuration, it helps in verifying that the data hasn't been tampered with during transmission or that the service hasn't been compromised. The fingerprint will change over time and it is expected.
Compliance and Auditing: For regulated environments, this fingerprint can serve as part of an audit trail, showing when specific configurations were in use for compliance purposes.



