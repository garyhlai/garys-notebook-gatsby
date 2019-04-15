---
path: "/20190414_1"
date: "2019-04-14"
title: "How to Run a Python Script in Your Node Backend"
author: "Gary Lai"
tags: ["Python", "Nodejs"]
---

While javascript is awesome, you're not obligated to use it throughout your entire stack. There will come a time where it is more conveninent to run a python script in your nodejs backend. <i class="em em-robot_face"></i> This short tutorial will teach you how to take an input posted to your node backend, run it through your python script and return back the output of that python program. (Note though, this tutorial assumes that you know the basic of routing using express in node)

First, in your python file, make sure you take the input as a argv from sys, and direct the output to stdout:

```python

import sys
#take input
input = sys.argv[1]

# ... your program here

#direct output
sys.stdout.flush(your_output)

```

Then in your node app.js or index.js file, write:

```javascript
app.post("/yourRoute", function(req, res) {
  // sanitize the input posted to your route for security
  input = req.sanitize(req.body.post);

  // import the node helper function
  const { spawn } = require("child_process");

  // run the python process with input posted in the route
  const pythonProcess = spawn("python3", ["path_to_your_python_file", input]);

  // take the output from the python stdout process
  pythonProcess.stdout.on("data", data => {
    output = data.toString();
  });
});
```

And that's it! You have set it up so that you can take input posted to your node route, run it through the python program, and then return that output back to your node app. Let me know if you have any questions!
