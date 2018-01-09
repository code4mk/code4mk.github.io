---
description: Intro sass
keywords: react, react.js, js
title: Intro sass
toc_max: 4
---
## Variables
Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the `$` symbol to make something a variable .

<iframe width="100%" height="320" src="//jsfiddle.net/mostafa6765/jykb1kp9/embedded/css,html,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Nesting
When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't.

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice. `Nested active only property`

<iframe width="100%" height="420" src="//jsfiddle.net/mostafa6765/rxuyrc2n/embedded/css,html,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Partials
You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is simply a Sass file named with a leading underscore. You might name it something like `_partial.scss`. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the `@import` directive. See partial example here: [Click Here](https://github.com/twbs/bootstrap-sass/tree/master/assets/stylesheets/bootstrap)

<iframe width="100%" height="300" src="//jsfiddle.net/mostafa6765/5vp87c9y/embedded/css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Import
CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use @import in CSS it creates another HTTP request. See Partial Part .
## Mixins
Its like a function . you can pass one or more parameter. `@mixin` , `@include `. See Mixin example [Click Here](https://github.com/twbs/bootstrap-sass/tree/master/assets/stylesheets/bootstrap/mixins)

<iframe width="100%" height="300" src="//jsfiddle.net/mostafa6765/sp072yqz/embedded/css,html,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Inheritance
This is one of the most useful features of Sass. Using `@extend` lets you share a set of CSS properties from one selector to another.

<iframe width="100%" height="500" src="//jsfiddle.net/mostafa6765/moemhcrb/embedded/css,html,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Operators

Doing math in your CSS is very helpful. Sass has a handful of standard math operators like `+, -, *, /, and %.`
