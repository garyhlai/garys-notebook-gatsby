---
path: "/20190409_1"
date: "2019-04-09"
title: "Add Syntax Highlighting to Your Gatsby Blog in 2 Minutes"
author: "Gary Lai"
tags: ["Gatsby", "CSS"]
---

This is a quick tutorial on how to add syntax highlighting for your Gatsby blog in 4 steps. <i class="em em-four_leaf_clover"></i>

First, run `npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs`

Second, go to your `gatsby-config.js` file, find the array of `plugins: []`. Add in this object into this array (Don't forget to put a comma after the previous object in the array or it'll throw an array):

```javascript
{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: "language-",
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: null,
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            // This toggles the display of line numbers globally alongside the code.
            // To use it, add the following line in src/layouts/index.js
            // right after importing the prism color scheme:
            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            // Defaults to false.
            // If you wish to only show line numbers on certain code blocks,
            // leave false and use the {numberLines: true} syntax below
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
```

<br />

Third, in your `gatsby-browser.js` file, add the following code:

```javascript
/* Feel free to substitute "solarizedlight" for other themes such as "coy","dark", "funky", "okaidia", "tomorrow", "twilight" depending on your taste
 */
require("prismjs/themes/prism-solarizedlight.css");
```

<br />

Lastly (the most important step), when you're typing your code in your markdown file, make sure your specifies the type of highlighting your want. If you want to highlight javascript files, start your code block with:

` ```javascript `

If you want to highlight html files, write:
` ```html `

And that's it! Go highlight that baby. DM me on Twitter if you have any questions. <i class="em em-stuck_out_tongue"></i>
