---
path: "/20190314_1"
date: "2019-03-14"
title: "How to Use Materialize with React: The Easier Way"
author: "Gary Lai"
tags: ["React", "Materialize"]
---

Before npm installing any package, or use Material-UI or react-materialize, let me tell you that there is a more straightforward way of using materialize with react that resembles how you would use materialize in a plain html & css project.

First, go to your `index.html` file, in the `<header>` section, include the Materialize CDN:

```html
<!-- Compiled and minified CSS -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

At this point, you should already see the Materialize.css style applied to your page.

The only thing that is left now is to show you how to initialize the cool javascript things like **modal, scrollspy, parallax** etc.

Go to your App component, in the constructor, write:

```javascript
class App extends Component {
  constructor() {
    super();
    ...
    this.M = window.M; /*"window.M" will make sure that you have access to the M included in the earlier materialize cdn script tag, so that you don't get errors like "M is undefined" */
    ...
  }
```

And then under the constructor, write:

```javascript
componentDidMount() {
    var elems1 = document.querySelectorAll(".modal");
    var instances1 = this.M.Modal.init(elems1);

    var elems2 = document.querySelectorAll('.scrollspy');
    var instances1 = this.M.ScrollSpy.init(elems2);

    /*Follow the pattern and initialize whatever you need here*/

    ...
}
```

And that's it. Go ahead and add Materialize to your React application! =)
