---
title: How to Create Pages in Next.js with Static & Dynamic Data
date: 2021-10-01T15:59:53
categories:  Jamstack, Next.js, Tutorials
---
Next.js is a powerful web framework that allows developers to easily spin up new React applications, but what if we want to add data to our pages? We'll look at how we can use the Next.js data fetching APIs to create both static and dynamic pages.

## Why is creating pages important in React?

Before we dive into how this works, it's important to understand where page creation helps and what it's solving.

A basic React application that doesn't use a framework like Next.js works by mounting to an entrypoint in an HTML document (DOM node), where it then uses JavaScript to load all of the dynamic parts of the page.

The issue comes where the original HTML document and first request only includes that simple HTML to load the app, nothing along with it such as SEO metadata or other parts of the page that might be important to load before JavaScript kicks in.

This means that Google and other social media websites won't be able to see your dynamic meta tags, which will hurt your chances of ranking in search.

Like in the image above, this can be confusing when debugging with browser tools, as often the HTML you see when you inspect is the HTML after JavaScript has manipulated the page, whereas for SEO, you need to make that available for the first request HTML.

"Prerendering" the page whether statically during compilation or dynamically on the server also helps with performance, where you're able to give your visitors something to look at and potentially interact with before JavaScript loads.

The good news is Next.js has a ton of support for making sure we're delivering everything we can for a performant and SEO-friendly website or app, starting with generally how we can create new pages.