---
path: "/20190826_2"
date: "2019-08-26"
title: "Adding Images to Gatsby Blog in Markdown"
author: "Gary Lai"
tags: ["Gatsby", "Markdown"]
---

Ok I spent the past 3 hours trying to find out this annoying little thing. Spoiler alert: You DON'T NEED any Gatsby plugins. Stop reading these lies.

All you need:

1. Create a folder in your "public" folder. Call it "images". Put your image files into this folder.

2. Refer to your image in your markdown file by typing this:

`![](./images/image_name.png)`

3. You need to commit your public folder. Run `git add -f /public/images` because usually your public folder is in git ignore
