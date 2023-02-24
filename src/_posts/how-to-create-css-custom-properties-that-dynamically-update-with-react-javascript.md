---
title: How to Create CSS Custom Properties That Dynamically Update with React & JavaScript
date: 2021-10-20T13:26:55
categories:  CSS, React, Tutorials
---
CSS variables have been around with tools like Sass, but only recently have they become native to CSS. Now that we have them available right in our browsers, how can we use JavaScript and tools like React to dynamically update the values?

## What are CSS Custom Properties?

tl;dr they're variables!

They're the CSS Spec's way of providing a variable-like capability native to the browser.

The basic syntax include setting a variable name with two hyphens (`--`) as a prefix such as:

```
--my-favorite-color: blueviolet;
```

In order for this to work though, you need to give that custom property "scope" by setting it on a selector, such as:

```
.my-element {
  --my-favorite-color: blueviolet;
}
```

Now in the case of the above, that property is only available on `.my-element`, so instead, you'll typically see those properties set on the root instead so it can be used globally, such as:

```
:root {
  --my-favorite-color: blueviolet;
}
```

Once you make that property available though, you can use the `var()` function within a CSS definition to make use of that value, such as:

```
:root {
  --my-favorite-color: blueviolet;
}

.my-element {
  background-color: var(--my-favorite-color);
}
```

This is the basic gist, but what makes CSS custom properties powerful is you can also use JavaScript to both get and modify those values on the fly.