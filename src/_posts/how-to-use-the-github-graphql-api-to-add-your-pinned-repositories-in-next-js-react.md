---
title: How to Use the GitHub GraphQL API to Add Your Pinned Repositories In Next.js & React
date: 2021-09-21T02:28:23
categories:  GraphQL, Next.js, React, Tutorials
---
OSS projects can be hard work and when you're spending your time working on them, you want to be able to proudly display those projects. While GitHub has a Pinned mechanism, you would need a custom solution to do the same for your own website. How can we instead use the GitHub GraphQL API to bring our Pinned Repositories to our website?

## What is the GitHub GraphQL API?

In order to actually request data from GitHub we're going to take advantage of it's GraphQL API.

If you're more familiar with the [REST](https://docs.github.com/en/rest) side of things, you likely could make requests to get similar data, but using [GraphQL](https://graphql.org/) as our request mechanism gives us a lot more flexibility and options for how we're able to request data based on complicated relationships.

The [GitHub GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer) is a great way to see this in action. If you head over there and log in, you're able to dynamically look through all of the data GitHub makes available through its API.

## What are Pinned Repositories?

Pinned Repositories are GitHub's way to allow you to feature a few of your favorite projects easily on your profile.

You're allowed to pin a maximum of 6 repositories and rearrange them to your liking.

We can take advantage of this same mechanism to make a request for these repositories so that we can show them off on our own custom website!
