---
description: Intro of CSS
keywords: css, ui, ux
title: Intro of CSS
toc_max: 4
---
## What is CSS

CSS stands for `Cascading Style Sheets`. Its purpose is to style markup languages (like HTML or XML). Therefore, CSS is worthless on its own, unless associated with an HTML document.

CSS brings an HTML document to life, by choosing fonts, applying colors, defining margins, positioning elements, animating interactions, and much more.

## How CSS work
CSS is a 3-part process:

* the `selector{}` defines who is targeted, which HTML `element(s)`/ `atrributes(id,class)`
* the `property:` defines what charateristic to alter
* the `value;` defines how to alter that charateristic

~~ selector - elements ---

<iframe width="100%" height="300" src="//jsfiddle.net/mostafa6765/99cmtuqz/embedded/css,html,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Selector
## elements

```css
a{ /* Links */ }
p{ /* Paragraphs */ }
ul{ /* Unordered lists */ }
li{ /* List items */ }
```
## classes `.`
Of all HTML attributes, the `class` attribute is the most important for CSS. It allows us to define a group of HTML elements that we can target specifically. Just put a dot `.` in front of the class name you want to use:

```css
.test {
  color: red;
}
```

## IDs `#`

You can also use the `id` attribute in your HTML, and target it with a hash `#` in your CSS:
`#test{ color: orange;}`

## Universal selector `*`
An asterisk `* `is the universal selector for CSS. It matches a single element of any type . a common universal selector you can find below...

<iframe width="100%" height="200" src="//jsfiddle.net/mostafa6765/zunpxdf7/embedded/css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Child selectors `>`
The `>` combinator separates two selectors and matches only those elements matched by the second selector that are direct children of elements matched by the first
`selector1 > selector2 { style properties }`

## Hierarchy selectors
A space in a selector defines a ancestor/descendant relationship

```css
header a {
  color: red;
}
```

## Grouping selector `,`
If you have elements with the same style definition that time use this.
ex: `#maincontent p, #maincontent ul { padding-top: 1em; }`

<iframe width="100%" height="300" src="//jsfiddle.net/mostafa6765/shkn6zae/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Pseudo-class selectors
Pseudo-class selectors are attached to usual selectors and start with a colon `:`




## CSS BASIC

* [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [https://www.w3schools.com/css/](https://www.w3schools.com/css/)
* [https://hellolaravel/mk/developer/css](https://hellolaravel/mk/developer/css)
* [http://marksheet.io/](http://marksheet.io/)


## CSS MASTER

* [http://cssreference.io/](http://cssreference.io/)
* [https://github.com/sotayamashita/awesome-css](https://github.com/sotayamashita/awesome-css)
* [http://www.cssmatic.com/](http://www.cssmatic.com/)
* [http://caniuse.com](http://caniuse.com)
* [https://codepen.io](https://codepen.io)
* [http://cubic-bezier.com/#.17,.67,.83,.67](http://cubic-bezier.com/#.17,.67,.83,.67)
* [http://css3menu.com/builder/](http://css3menu.com/builder/)
* [https://uigradients.com/#SunontheHorizon](https://uigradients.com/#SunontheHorizon)
* [https://google.github.io/styleguide/htmlcssguide.html](https://google.github.io/styleguide/htmlcssguide.html)

## News/blog
* [https://css-tricks.com/](https://css-tricks.com/)
* [https://webdesign.tutsplus.com/tutorials/search/css](https://webdesign.tutsplus.com/tutorials/search/css)
* [https://cssauthor.com/](https://cssauthor.com/)
* [https://tympanus.net/codrops/?s=css&search-type=posts](https://tympanus.net/codrops/?s=css&search-type=posts)
* [http://www.cssportal.com/](http://www.cssportal.com/)

## validation
* [https://csstree.github.io/docs/validator.html](https://csstree.github.io/docs/validator.html)

## cheatsheet

* [https://websitesetup.org/wp-content/uploads/2016/10/wsu-css-cheat-sheet.pdf](https://websitesetup.org/wp-content/uploads/2016/10/wsu-css-cheat-sheet.pdf)

* [http://www.elizabethcastro.com/html/extras/cssref.html](http://www.elizabethcastro.com/html/extras/cssref.html)
* [https://cssauthor.com/html-and-css-cheat-sheets/](https://cssauthor.com/html-and-css-cheat-sheets/)


* [http://htmlcheatsheet.com/css/](http://htmlcheatsheet.com/css/)
* [https://adam-marsden.co.uk/css-cheat-sheet](https://adam-marsden.co.uk/css-cheat-sheet)
