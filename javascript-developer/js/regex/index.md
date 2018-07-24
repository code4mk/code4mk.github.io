---
description:  Regex
keywords: regex, js
title: Regex
toc_max: 4
---


## regex tips

|short    | description     |
| :------------- | :------------- |
|`^`|start|
|`$`|end|
|`pipe`|or / alternate|
|`*`|0 or more|
|`+`|1 or more|
|`\`|escape specialess|
|`?`|0 or one|
|`{3}`|exact 3|
|`{3,}`|3 or more|
|`{3,5}`|3,4 or 5|
|`()`|group|
|`[]`|set|
|`[^abc]`|not abc|
|`[abc]`|a.b or c|
|`[A-Z]`| uppercase A to Z|
|`[a-z]`| lowercase a to z|
|`[a-zA-Z]`| lowercase and uppercase a to z|
|`[0-9]`|0 to 9|

* NB:  `pipe` = `|`

## basic 2 regex


|short    | description     |
| :------------- | :------------- |
|`\n`|newline|
|`\t`|tab|
|`\r`|Carriage return|
|`\f`|Form feed|


## character set table


| short  | description     |
| :------------- | :------------- |
| `\w `    | alphanumeric `[a-zA-Z0-9_]` |
|`\W`| non alphanumeric `[a-zA-Z0-9_]` . [\W] = `[^\w]`|
|`\d`|digit [0-9]|
|`\D`|non digit [0-9]|
|`\s`|whitespace `[\t\n\f\r\p{Z}]`|
|`\S`|non whitespace|

## flag

| short  | description     |
| :------------- | :------------- |
| g    | global |
|m| multi-line|
|i|case i­nse­nsitive|

## methods (js)

* [exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
* [test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
* [match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
* [search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
* [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
* [spilt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
