---
title: How to Export Sass Variables to JavaScript with Next.js
date: 2021-10-12T13:21:31
categories:  CSS, Next.js, Sass & SCSS, Tutorials
---
Building web apps with Sass helps to give you CSS superpowers, but it's another tool where you typically have to manage another set of configurations and settings outside of JavaScript. How can we make both Sass and a Next.js JavaScript app play nicely so we only have to define those configurations in one spot?

## What are Sass variables?

To start, [Sass](https://sass-lang.com/) is a CSS extension that gives you the ability to use a [bunch of features](https://www.youtube.com/watch?v=C1-hmauMht0) on top of CSS that aren't typically available.

Some of my personal favorites include [nesting](https://sass-lang.com/guide#topic-3), [built-in color functions](https://sass-lang.com/documentation/modules/color), and [mixins](https://sass-lang.com/documentation/at-rules/mixin) which essentially allows you to define repeatable blocks of CSS.

But variables are also another great feature native to Sass.

```
$my-color: blueviolet;

.my-class {
  color: $my-color;
}
```

While CSS now has custom properties, there's still a big use case for maintaining variables right inside of Sass, especially if you're typically working inside of Sass on a project.

## Why do we want to use Sass variables in JavaScript and Next.js?

When buying into the Sass ecosystem, you typically maintain all of your settings and colors within that ecosystem so you can easily share them across all of your styles.

Part of the problem though is sometimes you need to reference those colors in JavaScript, whether it's an imported component that only takes colors as a prop or maybe you're doing some custom styling that requires JavaSCript to be dynamic.

Either way, without sharing the variables, you're stuck having to maintain those variables in two locations.