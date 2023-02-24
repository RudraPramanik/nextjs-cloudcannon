---
title: How to Schedule Daily Email Reports with GitHub Actions, Gmail, & Cron
date: 2021-10-26T15:16:20
categories:  Automation, GitHub Actions, node.js, Tutorials
---
GitHub Actions are a great way to automate our daily code tasks, but what about that report you have to generate every day for your boss's boss? How can we use GitHub actions and cron to generate and email a daily report?

## What are GitHub Actions?

GitHub Actions are configurable tasks that run a set of instructions based on a specified trigger.

They're controlled through YML-based files located right inside of your GitHub repository, allowing you to tell GitHub what you want to run, with which parameters, and when.

Typically this includes things like running tests when a new Pull Request is created or when code is pushed to the main branch, but GitHub additionally provides a way to provide a time-based trigger with cron so you can schedule your tasks to run instead.

## What is cron?

Cron is a utility that allows tasks to be ran based on a given schedule.

Historically cron "jobs" were created and managed using "crontab" (cron table) on a server where these jobs would be configured and stored.

While the syntax can vary ever so slightly between tools, generally the format looks like the following:

The idea is you specify the interval you want your cron to run on which could be time-based, on certain days, or however you want to configure your job between the available column types.

With tools like GitHub Actions, we can use the same scheduling syntax to automate code-based tasks from our repository's workflow file(s).