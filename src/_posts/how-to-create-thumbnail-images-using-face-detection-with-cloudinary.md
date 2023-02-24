---
title: How to Create Thumbnail Images Using Face Detection with Cloudinary
date: 2021-11-10T16:30:50
categories:  Media, Next.js, React, Tutorials
---
Creating a gallery of images on a page can be trivial, but what if you don't have control over how the images are created? Ending up with different sizes and formats can turn a good looking gallery into a mess. Instead, we can use Cloudinary image transformations and Face Detection to make sure we're always optimally showing our media.

## What is Cloudinary?

[Cloudinary](https://cloudinary.com/) is a media platform that has a wide variety of features to host, manage, and deliver images and videos.

Part of that feature set includes being able to transform those images and videos, such as being able to resize, optimize, and crop them.

The issue with cropping though is it can be tricky depending on how much control over your images you have. You need to be confident that all images follow a typical layout, otherwise you may end up with awkward cropping or even cropping people out of an image unintentionally.

## What is Face Detection?

Instead of cropping and hoping for the best, we can intelligently crop out images using [Face Detection](https://cloudinary.com/documentation/face_detection_based_transformations).

Cloudinary can determine if there's a face in the image, figure out the coordinates of that face, and make sure the crop is focused on that location.

This is perfect if for instance, we have a gallery of people where we might not have much control (or no control) over the composition of those images.
