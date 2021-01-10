---
title: Vue Emoji Slider Component
featuredMedia: projects/emoji-slider.png
link: https://codepen.io/joshuajcollinsworth/pen/OYgGNK
order: 2
category: websites, code + apps
tags: [vue, app, silly]
summary: An interactive slider with an emoji face that updates as you change the input.
liked: I think this is one of my best little side project pens. Every aspect of it I think is both fun and pretty well executed, and I think the design works really well, too.
disliked: While it works, a lot of the code required to calculate things and move DOM elements based on those calculations is a little janky under the hood.
---

A custom slider built with Vue using emoji. The slider maintains accessibility by using CSS grid and z-index to place an actual range input HTML element over the top of the styled slider, at opacity 0. This way, the user is interacting with the semantic element (whether via mouse, touchscreen, keyboard or screen reader) while the styled slider is displayed onscreen.
