---
description: Functions sass
keywords: react, react.js, js
title: Functions sass
toc_max: 4
---
## List_function
Lists in Sass are immutable; all list functions return a new list rather than updating the existing list in-place.

All list functions work for maps as well, treating them as lists of pairs.

`length($list)` : Returns the length of a list.

`nth($list, $n) `: Returns a specific item in a list.

`set-nth($list, $n, $value) `: Replaces the nth item in a list.

`join($list1, $list2, [$separator, $bracketed])` : Joins together two lists into one.

`append($list1, $val, [$separator])` : Appends a single value onto the end of a list.

`zip($lists...)` : Combines several lists into a single multidimensional list.

`index($list, $value) `: Returns the position of a value within a list.

`list-separator($list)` : Returns the separator of a list.

`is-bracketed($list)` : Returns whether a list has square brackets.

## Awesome Function:

* [https://gist.github.com/AllThingsSmitty/3bcc79da563df756be46](https://gist.github.com/AllThingsSmitty/3bcc79da563df756be46)
* [http://thesassway.com/advanced/pure-sass-functions](http://thesassway.com/advanced/pure-sass-functions)
* [http://compass-style.org/index/functions/](http://compass-style.org/index/functions/)
* [https://www.sitepoint.com/sass-basics-function-directive/](https://www.sitepoint.com/sass-basics-function-directive/)
* [https://devhints.io/sass](https://devhints.io/sass)
