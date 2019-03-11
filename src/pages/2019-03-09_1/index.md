---
path: "/20190309_1"
date: "2019-03-09"
title: "How to Fix Detached Head in Git"
author: "Gary Lai"
tags: ["Git"]
---

You did something and ended up in the detach head branch. You don’t know how you ended up here but you did. But you want to keep everything as they are right now and make the current branch the master, instead of merging. _(Note: to check your current branch, run `git branch`, the starred one is your current branch)_

Don’t freak out, but be careful what you do because one misstep might mean hours of work go right down the drain.

Before you do anything, I would suggest manually copy and paste your current code into a different folder in case you do fall off the cliff.

Ok, let’s try to fix this:

First, run `git checkout temp`. This will create a temp branch that is identical to the code you have now.

Next, run `git checkout master`. This will get rid of the detached head. You will see you code reverting to that of the original `master` branch, but don’t panic - you have the code saved elsewhere.

Now, run `git checkout temp` again, this will switch you to the `temp` branch so that you can delete that hideous master branch.

Run `git branch -d master` to delete the master branch.

Run `git branch -m master` to rename your temp branch as the new master branch.

Now you should only have one branch called master, with the identical copy of the code that you had in the Detached Head State. Now, if you want the change to be reflected in your git remote (such as GitHub), there are quite a few ways to do it, but if you don’t care about preserving the commit history and just wants to upload your current code to your git remote. You can simply delete the original repository and start a new one. When you are done, `run git push -u <remote> master`. Now you should have the code you want both in your local computer and in your git remote.
