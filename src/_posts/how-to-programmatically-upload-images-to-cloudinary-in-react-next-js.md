---
title: How to Programmatically Upload Images to Cloudinary in React & Next.js
date: 2021-11-23T15:50:17
categories:  Media, Next.js, React, Tutorials
---
Image and asset managers like Cloudinary give you a lot of power in being able to automatically optimize and transform images, but when building an app, you can't expect each user to upload manually in your dashboard. How can you share that power and give your visitors the ability to upload their own images from your app?

## What is Image and Asset management?

The most basic way to manage your images and other media like video is to directly access them from your project, but that limits some of your options for how you can serve and transform those images, which is where an image manager comes in.

Instead, tools like [Cloudinary](https://cloudinary.com/) allow you to upload your media to their platform, where you can then serve your images directly from their CDN.

This comes with a lot of additional features, such as automatic [image optimization](https://cloudinary.com/documentation/image_optimization), using [modern formats and compression techniques](https://cloudinary.com/blog/how_to_adopt_avif_for_images_with_cloudinary) when the browser supports it, and a ton of [transformations](https://cloudinary.com/documentation/image_transformations) you can apply to those images including basic things like cropping and resizing to advanced layering and text additions.

If we're building an application, we can do these things manually as we're working with and uploading our media, but what if we wanted to give control to our visitors?

## Why would we want to allow our visitors to upload images?

There are a lot of use cases for giving your site visitors the ability to upload media beyond trying to be the next big image hosting solution.

That can include simple examples like uploading a profile photo or avatar to more complex examples like an in-browser image editor. You could even be generating new images based on that uploaded media after running it through AI-based transformations!

Regardless, we ultimately need to be able to accept the ability for someone to select an image and upload that image, then either provide that URL to our visitor or store it somewhere to use at a later time.