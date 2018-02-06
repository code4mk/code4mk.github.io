---
description: Grid
keywords: css, ui, ux
title: Grid
toc_max: 4
---

## Grid

Grid is new feature for ui/ux developer .

## grid-template-column (width)

grid-template-column is like `width`

* value -  (200px, 1fr)
* percentage - (30%)
* minmax(min_value,max_value)
* repeat(repeat_number,width_value)
* auto
* fit-content

```css
.test{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

## grid-template-rows

`grid-template-rows`  is like `height`

* value -  (200px, 1fr)
* percentage - (30%)
* minmax(min_value,max_value)
* repeat(repeat_number,width_value)
* auto
* fit-content

```css
.test{
  display: grid;
  grid-template-rows: 1fr 1fr;
}
```

## grid-template-areas

* `grid-template-areas ` <- `grid-area`

```css
.test{
  display: grid;
  grid-template-areas: "selector selector"
                       "selector selector"
                       "selector selector";
}
.test > hero {
  grid-area: selector;
}
```
## grid-template

* `grid-template` = `grid-template-rows` + `grid-template-columns`

## grid-column-gap

`grid-column-gap` is `vertically gap`

```css
.test{
  grid-column-gap: 10px;
}
```

## grid-row-gap

`grid-row-gap` is `horizontally gap`

```css
.test{
  grid-row-gap: 10px;
}
```

## justify-items

| Header One     | Header Two     |
| :------------- | :------------- |
| Justify       | row axis  or horizonal  |
| align | column axis or vertical |

##align-items

*  `items` position on `vertical or cross axis`


## justify-content

* `content` position on `horizontal or main axis `


## align-content

*  `content` position on `vertical or cross axis`

## align-self


## justify-self


## grid-auto-columns


## grid-auto-rows

## grid-column

* `grid-column` = `grid-column-start` + `grid-column-end`

## grid-row

* `grid-row` = `grid-row-start` + `grid-row-end`

## grid-auto-flow


## resource

* [https://github.com/valentinogagliardi/awesome-css-grid](https://github.com/valentinogagliardi/awesome-css-grid)
* [https://alialaa.github.io/css-grid-cheat-sheet/](https://alialaa.github.io/css-grid-cheat-sheet/)

* [http://griddy.io/](http://griddy.io/)

* [cssgrid videocast](https://cssgrid.io/)

* [sitepoint](https://www.sitepoint.com/introducing-the-css-grid-layout/)
* [css trick](https://css-tricks.com/snippets/css/complete-guide-grid/)
