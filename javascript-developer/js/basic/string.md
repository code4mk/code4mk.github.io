---
description: String
keywords: js,operator
title: string
toc_max: 4
---
## string

* string is stored text type data
* string represent by one quote `' '` or double qoute `" "` and es6 back tick   ``

```js
let user = 'kamal';
console.log(user);
// kamal
```

* string concat by `+`

```js
let user = 'kamal';
let position = 'code artist';

console.log(users + ' ' + 'is a ' + position)
// kamal is a code artist
```

* string interpolation by es6


```js
let user = 'kamal';
let position = 'code artist';

console.log(`${user} is a ${position}`);
// kamal is a code artist
```


| name     | name    | name    | name     |
| :------------- | :------------- |:------------- |:------------- |
|fromCharCode|fromCodePoint|anchor|big|
|blink|bold|charAt|charCodeAt|
|charPointAt|concat|endsWith|fixed|
|fontColor|fontSize|includes|indexof|
|italics|lastIndexOf|link|localCompare|
|match|normalize|padEnd|padStart|
|repeat|replace|search|slice|
|small|split|startsWith|strike|
|sub|substr|substring|sup|
|toLocaleLowerCase|toLocaleUpperCase|toUpperCase|toUppercase|
|toSource|toString|trim(L,R)|valueOF|

### length

```js
let users = 'kamal is a code artist';
let len = users.length;
console.log(len);
// 23
```

### charAt

```js
let users = 'kamal is a code artist';
let result = users.charAt(1);
console.log(result);
// a
```

### charCodeAt

```js
let users = 'kamal is a code artist';
let result = users.charPointAt(1);
console.log(result);
// 97
```

### charPointAt

* same as charCodeAt
* non negative integer

### concat

```js
let users = 'kamal is a code artist';
let result = users.concat(' and web developer.');
console.log(result);
// kamal is a code artist and web developer
```

### includes

```js
let users = 'kamal is a code artist';
let result = users.includes('kamal',0);
console.log(result);
// true
```

### endsWith


```js
let users = 'kamal is a code artist';
let result = users.endsWith('artist',22);
console.log(result);
// true
```

### padEnd

```js
let name = 'kamal';
let result = name.padEnd(10,'a');
console.log(result);
// kamalaaaaa
```

### padStart

```js
let name = 'kamal';
let result = name.padStart(10,'a');
console.log(result);
// aaaaakamal
```

### repeat

```js
let name = 'kamal';
let result = name.repeat(2);
console.log(result);
// kamalkamal
```

### replace

```js
let name = 'kamal is a code artist';
let result = name.replace('kamal','code4mk');
console.log(result);
// code4mk is a code artist
```

### search

* found = positive integer (0 =>)
* not found = negative integer (-1....)

```js
let name = 'kamal is a code artist';
let result = name.search('code');
console.log(result);
// 11
```

### slice

```js
let name = 'kamal is a code artist';
let result = name.slice(13);
console.log(result);
// kamal is a co
```

### substr

```js
let name = 'kamal is a code artist';
let result = name.substr(0,13);
console.log(result);
// kamal is a co
```

### substring

* same as substr

```js
let name = 'kamal is a code artist';
let result = name.substring(0,13);
console.log(result);
// kamal is a co
```

### split

```js
let name = 'blog.facebook.com';
let result = name.split('.',2);
console.log(result);
// ["blog", "facebook"]
```

### toUpperCase

```js
let name = 'kamal is a code artist';
let result = name.toUpperCase();
console.log(result);
// KAMAL IS A CODE ARTIST
```

### toLowerCase

```js
let name = 'KAMAL IS A CODE ARTIST';
let result = name.toLowerCase();
console.log(result);
// kamal is a code artist
```

## resource

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
* [js info](https://javascript.info/string)
