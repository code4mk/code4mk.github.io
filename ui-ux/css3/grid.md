---
description: Grid
keywords: css, ui, ux, grid
title: Grid
toc_max: 4
---

## Grid

Grid is new feature for ui/ux developer .

## grid-template-column

grid-template-column is describe `column numbers with width`

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

## grid-gap

* grid-gap = grid-column-gap + grid-row-gap

## justify-items

| Header One     | Header Two     |
| :------------- | :------------- |
| Justify       | row axis  or horizonal  |
| align | column axis or vertical |


## align-items

*  `items` position on `vertical or cross axis`


## justify-content

* `content` position on `horizontal or main axis `


## align-content

*  `content` position on `vertical or cross axis`

## align-self

* vertical position of individual items.

## justify-self

* horizontal position of individual items.

## grid-auto-columns

* `grid-auto-columns` as like `grid-template-cloumns` but it is for undefined (implicitly) columns.

## grid-auto-rows

* `grid-auto-rows` as like `grid-template-rows` but it is for undefined (implicitly) columns.

## grid-column

* `grid-column` = `grid-column-start` + `grid-column-end`

```css
.test{
  display: grid;
  grid-column: 1/4
  /* start from 1 and end to 4*/
}
```

### span

 `span 3` means total width `3 times` `grid-template` .

## grid-row

* `grid-row` = `grid-row-start` + `grid-row-end`

## grid-auto-flow

* grid-auto-flow describes which direction grid -  x axis or y axis .




## resource

* [cssreference](https://cssreference.io/css-grid/)

* [https://github.com/valentinogagliardi/awesome-css-grid](https://github.com/valentinogagliardi/awesome-css-grid)
* [https://alialaa.github.io/css-grid-cheat-sheet/](https://alialaa.github.io/css-grid-cheat-sheet/)

* [http://griddy.io/](http://griddy.io/)

* [cssgrid videocast](https://cssgrid.io/)

* [sitepoint](https://www.sitepoint.com/introducing-the-css-grid-layout/)

* [css trick](https://css-tricks.com/snippets/css/complete-guide-grid/)
