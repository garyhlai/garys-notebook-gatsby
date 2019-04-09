---
path: "/20190409_2"
date: "2019-04-09"
title: "How to Use Google Translate in Your Node App in 3 Steps"
author: "Gary Lai"
tags: ["Google Cloud", "Node.js"]
---

The <a href="https://cloud.google.com/translate/docs/quickstart-client-libraries" class="inPage">official documentation</a> on this leaves quite a few gaps and took a while to figure out so I'm sharing a quick tutorial here.

Note: If you fail to set up the environmental variable, chances are you will get this error message:<br />

<i>"Cloud Translation API has not been used in project xxxxxxxx before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/translate.googleapis.com/overview?project=xxxxxxxx then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."</i>

Here I will explain the 3 major steps easily and resolve that bug if that's the issue you're having. <i class="em em-face_with_cowboy_hat"></i>

<h3>Step 1: Set up the GCP console project and enable billing. Straightforward. </h3>

Set up a <a href="https://console.cloud.google.com/" class="inPage">GCP Console Project</a>, download the private key as JSON. I will not go into depth for this depth as you simply follow the instructions. (Suggestion: add it in .gitignore, topic for another post, but for now just don’t git commit it)

<h3>Step 2: Set up the environmental variable. A big gap in the official documentation but don't worry, I am here.</h3>

The environmental variable is a variable that verifies your identity as the one calling the API. You don't want some rando using calling APIs under your name and have the charges go to your bill.

Here’s how to set up the required environment variable `GOOGLE_APPLICATION_CREDENTIALS`. Basically this variable will store the path to the JSON file that you downloaded in step 1.

In your server directory (make sure you're in the right directory), create a file called .env, in it, write:

```
GOOGLE_APPLICATION_CREDENTIALS=“./path_to_your_JSON_file”
```

Note: do not write the “export" in front as the official documentation suggests in this case in particualr.

Then `run npm i dotenv` to install this module called <a href="https://github.com/motdotla/dotenv" class="inPage">dotenv</a>. This 0-dependency module is very well-maintained and allows you to access environmental variable directly from your node js file.

In your node.js file (I suppose it is called "app.js" or "index.js"), write:

```javascript
const dotenv = require("dotenv").config(); //super important! Without this line, your Translation API call won’t work because you won’t be able to properly access the .env.
```

And you should be all done with the setup from now on and your translation should work! <i class="em em-white_check_mark"></i>

Debug tip: to check whether you’re configuring the dotenv directly, use this line:

```javascript
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
```

<br/>

<h3>Step 3: install google translate library and translate! Also straightforward.</h3>

Run `npm install --save @google-cloud/translate`

Then add these code to your node.js file and you should be all setup to use google translate!

```javascript
async function quickstart(
  projectId = "YOUR_PROJECT_ID" // Your GCP Project Id
) {
  // Imports the Google Cloud client library
  const { Translate } = require("@google-cloud/translate");

  // Instantiates a client
  const translate = new Translate({ projectId });

  // The text to translate
  const text = "Hello, world!";

  // The target language, we choose Russian as an example
  const target = "ru";

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);

  console.log(`Text: ${text}`);

  console.log(`Translation: ${translation}`);
}

//Now remember to run this function
quickStart();
```

<br/>

Happy translating! <i class="em em-slightly_smiling_face"></i>
