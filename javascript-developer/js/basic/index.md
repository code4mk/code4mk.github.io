---
description: JavaScript biodata
keywords: js
title: JavaScript biodata
toc_max: 4
---

### comments

 ~ `comments use for explaining the code`

* single line comment `//`

```js
// this is single line comment
```

* multi-line comment `/*...*/`

```js
/* this is
   multi-line comment */
```

### string

* `string` represent by double quote `" "` or single quote `' '`

```js
var name = 'kamal';
var users = "code4mk";
```

#### variable

* var
* let
* const

#### scope
 scope is a area or block . it is related with accesing variable .

#### global

* access variable `any-where` as your desired

 ```js
 let name = 'kamal';
 let users = () => {
   console.log(name);
 }
 users();
 // kamal
 ```

#### local

* can access only insdie of scope or block or that function
* can't access outside of the block .

```js
let users = () => {
  let name = 'kamal';
}
users();
console.log(kamal);
// Uncaught ReferenceError: kamal is not defined
```
