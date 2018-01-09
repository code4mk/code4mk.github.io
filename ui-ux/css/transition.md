---
description: Transition
keywords: css, ui, ux
title: Transition
toc_max: 4
---
## Transition
CSS transitions allow to smoothly go from one element’s state to another. How it works is that individual properties are animated from an initial to a final state.
* `property` , `durations` ,  `timing-function` , `delay`

* `transition-property`: which properties to animate
* `transition-duration`: how long the animation lasts
* `transition-timing-function`: how the intermediate states are calculated
* `transition-delay`: to start the animation after a certain amount of time

## transition-property
Defines which properties will transition.
as like -
* background
* color
* transform

## transition-duration
Defines how long the transition lasts.

## transition-timing-function
 same as animation timing function

## transition-delay
Defines how long the transition has to wait before starting.

## Transform-basic
`Fashioning unique shapes`.CSS transforms are a collection of functions that allow to shape elements in particular ways:

## transform
* translate: moves the element along up to 3 axis (x,y and z)
* rotate: moves the element around a central point
* scale: resizes the element
* skew: distorts the element

## transform-origin

```css
transform-origin:50% 50%; /* center (default)*/
transform-origin: 10px 0; /* 10 px right offset*/
transform-origin: left bottom; /*bottom left*/
```
