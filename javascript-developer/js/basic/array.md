---
description: array
keywords: js
title: array
toc_max: 4
---

## Array

Array represent by `[]`


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
// output: true
let users = ['kamal','jamal','maruf','sadia','karim'];
console.log(users.every(t => t == ''));
// output: false
```

## fill

* `fill(byValue,from_position,end_position)`
* start with  1 not 0

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterFill = users.fill('rahim',1,4);
console.log(afterFill)
// output: kamal,rahim,rahim,rahim,karim
```

## filter

* check then if fullfill any element that will be return

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterFilter = users.filter(t => t.match('k'));
console.log(afterFilter)
// output: kamal,karim
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
// output: 4;
```
## forEach

```JS
let users = ['kamal','jamal','maruf','sadia','karim'];
users.forEach(t => {
  console.log(t)
});
// output : kamal,jamal,maruf,sadia,karim
```
## includes

* search exist or not
* with position
* include(searchElement,positionCheck)

```js
let users = ['kamal','jamal','maruf','sadia','karim'];
let afterInclusers = users.includes('jamal',1);
console.log(afterInclusers);
// output: true
```

## indexOf

* indexOf(element,afterIndex)

```js
let users = ['kamal','jamal','maruf','sadia','karim','jamal'];
let result = users.indexOf('jamal');
console.log(result);
// output: 1
let users = ['kamal','jamal','maruf','sadia','karim','jamal'];
let result = users.indexOf('jamal',3);
console.log(result);
// output: 5
```
## join

```js
let users = ['kamal','jamal','maruf','sadia','karim','jamal'];
let result = users.join('-');
console.log(result);
// output: kamal-jamal-maruf-sadia-karim-jamal
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
* [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
