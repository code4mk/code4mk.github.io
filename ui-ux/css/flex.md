---
description: Flex
keywords: css, ui, ux
title: Flex
toc_max: 4
---

## what is Flexbox ?

```scss
.flexbox-container {
  -webkit-display: -webkit-box;
  -webkit-display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

## flex

`flex:` `grow` , `shrink` , `basis`

## flex-basis
* initial width / height (max)
`flex-basis: 1 `, `flex-basis: 200px`
## flex-direction
* position (  horizontal or vertical)

`row` , `row-reverse` , `column` , `column-reverse`

```scss
flex-direction: row | row-reverse | column | column-reverse
```

## flex-flow

`flex-flow:` `flex-direction` `flex-wrap;`

## flex-grow
* as like width: 30%

Any positive number  `flex-grow: 1` , `flex-grow: 2`

## flex-shrink

It is also a positive number . Initial value is `0` . value `low` is `greater`.

## flex-wrap

* `one line` to `multi-line` system (device)

`nowrap` ,`wrap` , `wrap-reverse`
```scss
flex-wrap: nowrap | wrap | wrap-reverse
```

## justify-content
*  A type of float
`flex-start` | `flex-end` | `center` | `space-between` | `space-around`

```scss
justify-content: flex-start | flex-end | center | space-between | space-around
```
## order
Any integer number as like `order: 1` , `order: -1`

## align-content

* vertical position

`flex-start` | `flex-end` | `center` | `space-between` | `space-around` |

`vertical system`

```scss
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```

## align-items
`flex-start` | `flex-end` | `center` | `baseline` | `stretch`

```scss
align-items: flex-start | flex-end | center | baseline | stretch
```
## align-self

* individual  vertical position

`auto` | `flex-start` | `flex-end` | `center` | `baseline` | `stretch`
```scss
align-self: auto | flex-start | flex-end | center | baseline | stretch
```
* source: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

* source: [FreeCodeCamp](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35)

* source: [scotch](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

* source : [scotch demo](https://codepen.io/justd/full/yydezN/) `***`

* http://flexbox.help/

* https://codepen.io/mostafa6765/pen/aVvPzB

* https://tympanus.net/codrops/css_reference/flexbox/

* https://github.com/afonsopacifer/awesome-flexbox `***`
