---
path: "/20190310_1"
date: "2019-03-10"
title: "How to Add External Javascript Script Tag in Gatsby"
author: "Gary Lai"
tags: ["Gatsby"]
---

This is a tricky topic and there are few good resources out there that teach how to do it. After a few hours of flapping around I finally figured out how to do this. I will use the example of adding the Materialize javascript cdn tag and initializing Materialize tooltip for the Twitter and Medium icons at the bottom of this blog page you are reading. Feel free to follow along exactly what I am doing so that you understand this process first and then adapt for your own use case. As reference, you can find the source code <a class="link" href="https://github.com/ghlai9665/garys-notebook-gatsby">here</a>.

<!-- prettier-ignore -->
First, according to Gatsby's <a class="link" href="https://www.gatsbyjs.org/docs/custom-html/">official doc</a>, you need to run:

`cp .cache/default-html.js src/html.js`

in your root directory to get access to the main html file.

Then, open `html.js` file and in the `<head>` section, add in:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js">
{}
</script>
```

Feel free to substitute the url in `src=""` for the url in your own use case. (Note: the official doc tells you to use `dangerouslySetInnerHTML` to add script tags, but this doesn't seem to work for adding external tags. Above is what worked for me.)

By now, we are pretty much done in terms of loading an external javascript tag. You can pretty much leave this article if you know how to proceed.

<p class="center-align"><strong>   ******                </strong> </p>

Now I am going to continue to show how to call variables from the loaded external script. In this particular use case, if you call this block of code

```
var elems = document.querySelectorAll(".tooltipped");
const M = window.M;
var instances = M.Tooltip.init(elems);
```

in the html.js using `dangerouslySetInnerHTML`, it would only work once when the page loads for the first time. In other words, when the page first loads, the tooltips will show on hover; however, if you navigate away from the main page to another page, the tooltips will no longer show. This is because the tooltip buttons are in a component called `Subscribe`, you would have to initialize it every time this component reloads. Therefore, the solution is adding this block of code to the component `Subscribe` that contains the tooltip buttons.

```
 componentDidMount() {
    var elems = document.querySelectorAll(".tooltipped");
    const M = window.M;
    var instances = M.Tooltip.init(elems);
    console.log("new script was loaded");
  }
```

Happy Gatsby-ing!
