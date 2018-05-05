---
description: array
keywords: js
title: array
toc_max: 4
---

## Array

Array store a collections of values in a single variable . Array is actually a object.

Array represent by `[]`

```js
let users  = ['kamal','jamal','maruf']
```

```js
let users = new Array('kamal','jamal','maruf');
```

| name | name     |name     |name     |name     |
| :------------- | :------------- |:------------- |:------------- |:------------- |
|from|isArray|of|concat|copyWithin|
|entries|every|fill|filter|find|
|findIndex|flatMap|flatten|forEach|includes|
|indexOf|join|keys|lastIndexOf|map|
|pop|push|reduce|reduceRight|reverse|
|shift|slice|some|sort|splice|
|toSource|toString|unShift|values|.|

## isArray

```js
Array.isArray([1,2,3]);
```
## every()

* check all elements
* all satiesfied that time return true otherwise false

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
console.log(users.every(t => t != ''));
//  true
let users = ['kamal','jamal','maruf','sadia','karim'];
console.log(users.every(t => t == ''));
//  false
```

## fill

* `fill(byValue,from_position,end_position)`
* start with  1 not 0

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterFill = users.fill('rahim',1,4);
console.log(afterFill)
//  kamal,rahim,rahim,rahim,karim
```

## filter

* check then if fullfill any element that will be return

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterFilter = users.filter(t => t.match('k'));
console.log(afterFilter)
//  kamal,karim
```

## find

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterFind = users.find(t => t.match('jamal'));
console.log(afterFind)
```

## findIndex

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterFindIndex = users.findIndex(t => t.match('karim'));
console.log(afterFindIndex)
//  4;
```
## forEach

```JS
let users = ['kamal','jamal','maruf','sadia','karim'];
users.forEach(t => {
  console.log(t)
});

//  kamal,jamal,maruf,sadia,karim
```
## includes

* search exist or not
* with position
* include(searchElement,positionCheck)

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterInclusers = users.includes('jamal',1);
console.log(afterInclusers);
//  true
```

## indexOf

* indexOf(element,afterIndex)

```js
let users = ['kamal','jamal','maruf','sadia','karim','jamal'];
let result = users.indexOf('jamal');
console.log(result);
//  1
let users = ['kamal','jamal','maruf','sadia','karim','jamal'];
let result = users.indexOf('jamal',3);
console.log(result);
//  5
```
## join

```js
let users = ['kamal','jamal','maruf','sadia','karim','jamal'];
let result = users.join('-');
console.log(result);
//  kamal-jamal-maruf-sadia-karim-jamal
```

## keys

```js
let users = ['kamal','jamal','maruf','sadia','karim','jamal'];
let result = users.keys();
for (t of result) {
  console.log(t);
}
```

## pop

* delete last element

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
let result = users.pop();
console.log(users);
// pop: karim
// kamal,maruf,jamal,sadia
```

## push

* add new element at last position

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
 users.push('Human');
console.log(users);
 //["kamal", "maruf", "jamal", "sadia", "karim", "Human"]
```

## reverse

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
 users.reverse()
console.log(users);
// ["karim", "sadia", "jamal", "maruf", "kamal"]
```

## shift

* delete 1st element

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
 users.shift()
console.log(users);
// [ "maruf", "jamal", "sadia", "karim"]
```

## slice

* `slice(begin,end)`

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
let result = users.slice(1,4);
console.log(result);
// ["maruf", "jamal", "sadia"]
```

## some

* any element fullfill the constion return turn

```js
let users = ['kamal','maruf','jamal','','sadia','karim', ''];
let result = users.some(t => t == '');
console.log(result);
// true
```

## sort

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
let result = users.sort()
console.log(users);
// ["jamal", "kamal", "karim", "maruf", "sadia"]
```

## splice

* increase element / constant element
* set element a desired position
* `splice(position,howManyDelete,value)`

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
let result = users.splice(1,0,'hasibur');
console.log(users);
// ["kamal", "hasibur", "maruf", "jamal", "sadia", "karim"]
```

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
let result = users.splice(1,0,'hasibur');
console.log(users);
// ["kamal", "hasibur", "jamal", "sadia", "karim"]
```

```js
let users = ['kamal','maruf','jamal','sadia','karim'];
let result = users.splice(1,2,'hasibur','masud');
console.log(users);
// ["kamal", "hasibur", "masud", "sadia", "karim"]
```

* [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
