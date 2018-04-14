---
description: Regex group and set
keywords: regex, js
title: Regex group and set
toc_max: 4
---

## group

group represent by `()` .

```js
/(kamal)(\s)(the)(\s)(boss)(\.)/
// kamal the boss.
```
* [demo](https://regexr.com/3nt77)

## set

set represent by `[]`

### set a-z

```js
/[a-z]/
//kamal is a developer of node.js . He is head of Idea's of Nishi IT Ltd.
```

* [demo](https://regexr.com/3nt7a)

### set A-Z

```js
/[A-Z]/
//kamal is a developer of node.js . He is head of Idea's of Nishi IT Ltd.
```

* [demo](https://regexr.com/3nt7d)

### set package

```js
/[a-zA-Z0-9]/
//kamal is a developer of node.js . He is head of Idea's of Nishi IT Ltd.  017512
```

* [demo](https://regexr.com/3nt7g)

### set [kid]

```js
/[kid]/
//kamal is a developer of node.js . He is head of Idea's of Nishi IT Ltd.
```

* [demo](https://regexr.com/3nt7p)

### set not

```js
/[^kid]/
//kamal is a developer of node.js . He is head of Idea's of Nishi IT Ltd.
```

* [demo](https://regexr.com/3nt7s)

### limit bracket

```js
/[0-9]{1,4}/
// 5.12765487565656554545454545454545454545455465
```

* [demo](https://regexr.com/3nt7v)

### limit bracket 2

```js
/[0-9]{2,4}/
/[\d]{2,4}/
// 5.12765487565656554545454545454545454545455465
```

`[0-9] and [\d] same`

* [demo](https://regexr.com/3nt82)
