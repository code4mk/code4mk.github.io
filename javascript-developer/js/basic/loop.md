---
description: Loop
keywords: js,operator
title: loop
toc_max: 4
---

## loop type

* while
* do -- while
* for
* forEach
* for ... in
* for ... of

## while

```js
while(yourCondition) {
  statement
  increment/decrement
}
```

```js
let num = 1;
while (num < 10) {
  console.log(num);
  num++;
}
```

## do while

```js
do () {
  Statements,
  inc/dec
} while (yourCondition);

```

```js
let num = 1;
do {
  console.log(num);
  num++;
} while (num < 10);
// output: 1,2,3,4,5,6,7,8,9
```

* do statement return first then other task

```js
let num = 11;
do {
  console.log(num);
  num++;
} while (num < 10);
// output: 11
```

## for

```js
for (initialization; condition; inc/dec) {
  statement;
}

```

```js
for (let num = 1; num < 10; num++) {
  console.log(num);
}
// output: 1,2,3,4,5,6,7,8,9
```

### break

* loop stop (if fullfill condition)

```js
for (let num = 1; num < 10; num++) {
  if(num == 5) {
    break;
  }
  console.log(num);
}
// output: 1,2,3,4
```

### continue

* skip (not condition fullfill)

```js
for (let num = 1; num < 10; num++) {
  if(num % 2 != 0) {
    continue;
  }
  console.log(num);
}
// output:
// 2,4,6,8,10
```

## for...in

* for...in return array index

```js
let users = ['kamal','jamal','maruf','sadia','kalam','karim'];
for (user in users) {
  console.log(user);
}
//output
// 0
// 1
// 2
// 3
// 4
// 5

```

## for...of

* return array value

```js
let users = ['kamal','jamal','maruf','sadia','kalam','karim'];
for (user of users) {
  console.log(user);
}
// output
// kamal
// jamal
// maruf
// sadia
// kalam
// karim
```

## forEach

```js
let users = ['kamal','jamal','maruf','sadia','kalam','karim'];
users.forEach ((name,index) => {
  console.log(index +' user name '+ 'is' + ' ' + name);
})
// output:
// 0 user name is kamal
// 1 user name is jamal
// 2 user name is maruf
// 3 user name is sadia
// 4 user name is kalam
// 5 user name is karim
```

## references

* [mdn while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
* [mdn do while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
* [mdn for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
* [mdn for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
* [mdn for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
* [mdn forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
