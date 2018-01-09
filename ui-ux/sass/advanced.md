---
description: Advanced sass
keywords: css, sass, scss, ui, ux
title: Advanced sass
toc_max: 4
---
## Embrace Placeholders
Sass supports a special type of selector called a "placeholder selector". These look like class and id selectors, except the` # or .` is replaced by `%`.

` %foo`  represent Placeholders selector . and then `@extend`

<iframe width="100%" height="500" src="//jsfiddle.net/mostafa6765/w5t8q3pv/embedded/css,html,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## Lists
Lists are the Sass equivalent of arrays, which we can find almost any programming language. They are a data structure containing one or several values, possibly including lists, leading to nested lists. but sass list start from `1 / non-zero` ..
 * [list_functions](/mk/developer/sass/functions.html#List-function)

https://www.sitepoint.com/sass-reference/lists/

* List Delimiters : Two Delimiters space or comma.

```scss
$list: 'foo' 'bar';
$type: type-of($list); // list
$separator: list-separator($list); // space

$list: 'foo', 'bar';
$type: type-of($list); // list
$separator: list-separator($list); // comma
$item: nth($list, 1); // 'foo'
$count: length($list); // 0
$list: append($list, 'test'); // ('foo' 'bar' 'test')
$list: join('test', $list, 'comma'); // ('test', 'foo' 'bar');

```
## `@function`
It is possible to define your own functions in sass and use them in any value or script context

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
```
Becomes:
```css
#sidebar {
  width: 240px; }
```
## `@if`/`@else`
The `@if` directive takes a SassScript expression and uses the styles nested beneath it if the expression returns anything other than false or null:

```scss
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
```

## `@for`
The `@for` directive repeatedly outputs a set of styles. For each repetition, a counter variable is used to adjust the output. The directive has two forms: `@for $var from <start> through <end>` and `@for` $var from <start> to <end>. Note the difference in the keywords through and to. `$var` can be any variable name, like $i; <start> and <end> are SassScript expressions that should return integers. When <start> is greater than <end> the counter will decrement instead of increment.

The `@for` statement sets `$var` to each successive number in the specified range and each time outputs the nested styles using that value of `$var`. For the form from ... through, the range includes the values of <start> and <end>, but the form `from ... to` runs up to but not including the value of <end>. Using the through syntax,

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```
is compiled to:

```css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```


## `@each`
The `@each` directive usually has the form @each $var in <list or map>. $var can be any variable name, like $length or `$name`, and` <list or map> `is a SassScript expression that returns a list or a map.

The `@each` rule sets $var to each item in the list or map, then outputs the styles it contains using that value of $var. For example:

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```
is compiled to:

```css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```
## `@content`
```scss
@mixin button() {
    display: block;
    font-size: 20px;
    text-decoration: none;
    @content;
}

.alert {
    @include button {
        color: #F00;
    }
}
.cancel {
    @include button {
        border: solid 1px #999;
    }   
}
```
output:

```css
.alert {
    display: block;
    font-size: 20px;
    text-decoration: none;
    color: #F00;
}
.cancel {
    display: block;
    font-size: 20px;
    text-decoration: none;
    border: solid 1px #999;
}
```
## Maps
`key` and `value`

$map: (key1: value1, key2: value2, key3: value3);

```scss
/* Define the Sassy Map called $icons */
$icons: (
  checkmark: a,
  plus: b,
  minus: c
);

/* For each key in the map, created an own class */
@each $name, $value in $icons {
  .icon--#{$name} {
    content: $value;
  }
}
```
output
```css
/* Define the Sassy Map called $icons */
/* For each key in the map, created an own class */
.icon--checkmark {
  content: a;
}

.icon--plus {
  content: b;
}

.icon--minus {
  content: c;
}
```
* multiple map

```scss
// _m-buttons.scss
$buttons: (
  error: (#d82d2d, #666),
  success: (#52bf4a, #fff),
  warning: (#c23435, #fff)
);

.m-button {
  display: inline-block;
  padding: .5em;
  background: #ccc;
  color: #666;

  @each $name, $colors in $buttons {
    $bgcolor: nth($colors, 1);
    $fontcolor: nth($colors, 2);

    &--#{$name} {
      background-color: $bgcolor;
      color: $fontcolor;
    }  
  }
}
```
output

```css
.m-button {
  display: inline-block;
  padding: .5em;
  background: #ccc;
  color: #666;
}
.m-button--error {
  background-color: #d82d2d;
  color: #666;
}
.m-button--success {
  background-color: #52bf4a;
  color: #fff;
}
.m-button--warning {
  background-color: #c23435;
  color: #fff;
}
```
## Comments
Sass supports standard multiline CSS comments with `/* Multi comment */`, as well as single-line comments with `//single comment` .
