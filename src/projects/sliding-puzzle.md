---
title: Sliding Puzzle in Vue
featuredMedia: projects/sliding-puzzle.png
link: https://codepen.io/collinsworth/pen/XwPXrM
order: 3
category: websites, code + apps
tags: [app, game, vue, javascript]
summary: The classic puzzle game recreated in Vue and custom CSS.
liked: It was a very interesting challenge figuring out how to do this, how to make it work with keyboard, mouses and touchscreens, and on top of all that, to ensure there were no impossible randomizations.
disliked: There's probably a much better way to do the randomizations that isn't so taxing on the browser. I'd also like to revisit the accessibility of the project, and in retrospect, while that progress bar is fun, I don't think it actually adds anything.
---

Inspired to put Vue’s built-in transition-group element to good use, I decided to try recreating a classic sliding puzzle with Vue and CSS grid.

That took an evening; then I spent the next week scope-creeping myself into ensuring solvability within the random tile distribution; adding a progress bar; highlighting tiles in the proper position; highlighting possible moves; some animations; and adding support for mouse, keyboard, and swipe.

Update: [there’s another version here](https://codepen.io/collinsworth/pen/MMagLb) with custom images instead of numbers and more gameplay options.
