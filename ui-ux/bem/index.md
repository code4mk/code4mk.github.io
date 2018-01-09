---
description: Intro of BEM
keywords: css, bem, ui, ux
title: Intro of BEM
toc_max: 4
---

## What is BEM ?

BEM stand for `Block Element Modifier`  , `Block__Element--Modifier` . It  is a methodology that helps you to create reusable components and code sharing in front-end development .

It is developed by the team at Yandex .

* ex:

```css
.block {}
.block__element {}
.block--modifier {}
```
* ex:

```css
/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__course {}

/* Modifier that changes the style of the block */
.btn--success {}
.btn--info {}
```

* ex

`.block__element--modifier` this is proper pattern of bem .

```html
<form class="search">
  <div class="search__wrapper">
    <label for="s" class="search__label">Search for: </label>
    <input type="text" id="s" class="search__input"/>
    <button type="submit" class="search__submit btn--info">Search</button>
  </div>
</form>
```

## why use BEM
* It’s easy for new team members to read the markup and CSS, and understand its  behavior
* Adding more developers increases team productivity
* Consistent naming reduces the possibility of class name collisions and side effects
* CSS is independent of markup
* CSS is highly reusable

## BEM Practise :

* [http://getbem.com/introduction/](http://getbem.com/introduction/)
* [https://en.bem.info/](https://en.bem.info/)
* [https://css-tricks.com/bem-101/](https://css-tricks.com/bem-101/)
* [https://www.sitepoint.com/css-architecture-block-element-modifier-bem/](https://www.sitepoint.com/css-architecture-block-element-modifier-bem/)
* [https://en.bem.info/platform/libs/bem-components/6.0.0/](https://en.bem.info/platform/libs/bem-components/6.0.0/)
* [http://getbem.com/naming/](http://getbem.com/naming/)
##  component
* [https://github.com/bem/bem-components](https://github.com/bem/bem-components)
