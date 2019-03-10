---
path: "/20190220_1"
date: "2019-02-20"
title: "Git Cheatsheet: Commands That Actually Work"
author: "Gary Lai"
tags: ["Git"]
---

This is a constantly updating notebook on git commands that actually work for me.

**First, some vocabulary to help you read the docs and my notes:**

<!-- prettier-ignore -->
`<remote>`: name of a remote respository, it could be `<origin>` or `<upstream>`. <br/>
`<origin>`: name of your own remote github repository, can be named anything but convention is to name it origin. <br/>
`<upstream>`: name of someone else's remote github repository that you cloned from, can be named anything but convention is to name it upstream. <br/>
`<your_branch_name>`: you can find this by typing "git branch" in the terminal.<br/>
`<feature_branch>`: name of a new branch (that is not master branch) you want.

**Working with a Github repository**

Add a remote repository:<br/>
`git remote add <nickname> <url>`
_<sub> (Note: You find the url by clicking on the "clone or download" on the repository's page)</sub>_

Push to remote:<br/>
`git push -u <nickname> master`

Fetch a remote and merge it with your own: <br/>
`git pull <remote>`

**Working with Branches**

Create a new branch: <br/>
`git branch <feature_branch>`

Switch to the feature branch: <br/>
`git checkout <feature_branch>`

To clone a specific branch: <br/>
`git clone --single-branch --branch <feature_branch> <remote>`

List all git branch: <br/>
`git branch -a`

**Working with Git Commits**

Undo git add:<br/>
`git reset`
