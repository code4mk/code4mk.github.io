---
description: Animation
keywords: css, ui, ux
title: Animation
toc_max: 4
---
## what is animation
An animation lets an element gradually change from one style to another.CSS animations are like mini movies where you are the director giving out instructions (CSS rules) to your actors (HTML elements) for different scenes (keyframes).
 Animation properties:
* `name`: the animation’s name
* `duration`: how long the transition lasts
* `timing-function`: how the intermediate states are calculated
* `delay`: to start the animation after a certain amount of time
* `iteration-count`: how many times the animation should be performed
* `direction`: if the animation should be reversed or not
* `fill-mode`: what styles are applied before the animation starts and after it ends

## animation
Shorthand property for `animation-name` `animation-duration` `animation-timing-function` `animation-delay` `animation-iteration-count` `animation-direction` a`nimation-fill-mode` and `animation-play-state.`

## animation-name
Defines which animation `keyframes` to use.

## animation-duration
Defines how long the animation lasts

## animation-timing-function
Defines how the values between the start and the end of the animation are calculated.
`ease`,`ease-in`,`ease-out`,`ease-in-out`,`linear`,`step-start`,`step-end`,`steps(4,end)`
The animation-timing-function property can have the following values:

ease - specifies an animation with a slow start, then fast, then end slowly (this is default)
* linear - specifies an animation with the same speed from start to end
* ease-in - specifies an animation with a slow start
* ease-out - specifies an animation with a slow end
* ease-in-out - specifies an animation with a slow start and end
* cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

## animation-delay
Defines how long the animation has to wait before starting. The animation will only be delayed on its first iteration. you can use seconds  `s` or milliseconds  `ms` as timing .It defaults to `0s`, which means no animation at all.

```scss
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;

```
## animation-iteration-count
Defines how many times the animation is played.

`animation-iteration-count: infinite;`

`animation-iteration-count: 1;`

## animation-direction

Defines in which direction the animation is played.
`animation-direction: normal;`

value : `normal` , `reverse` , `alternate` , `alternate-reverse`

* `normal`: starts at 0%, ends at 100%, starts at 0% again
* `reverse`: starts at 100%, ends at 0%, starts at 100% again
* `alternate`: starts at 0%, goes to 100%, goes to 0%
* `alternate-reverse`: starts at 100%, goes to 0%, goes to 100%

~ It’s easier to visualise if the animation’s `iteration count` is set to `infinite`.


## animation-fill-mode
Defines what happens before an animation starts and after it ends. The fill mode allows to tell the browser if the animation’s styles should also be applied outside of the animation.
`Backwards`,`forwards`,`both` , `none`



## animation-play-state
Defines if an animation is playing or not.
`animation-play-state: running;`
`animation-play-state: paused;`

## `@keyframes`
The `@keyframes` rule specifies the animation code.

`@keyframes animationname {keyframes-selector {css-styles;}}`

```css
@-webkit-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
```
