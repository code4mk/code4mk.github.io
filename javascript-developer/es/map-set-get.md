---
description: Map
keywords: es,es6,js
title: map
toc_max:  4
---

Map is collection of data as key value pairs.

~ `map methods`
~ `A JavaScript “Set” object can store only keys but “Map” can store key and value pairs.`

* size (properies)
* clear
* delete
* entries
* forEach
* get
* set
* has
* keys
* values

`Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.`


The main methods are:

```js
  new Map() – creates the map.
  map.set(key, value) – stores the value by the key.
  map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
  map.has(key) – returns true if the key exists, false otherwise.
  map.delete(key) – removes the value by the key.
  map.clear() – clears the map
  map.size – returns the current element count.
```

## set

```js
    let users = new Map()
    users.set('name','kamal');
    users.set('age',21);
    users.set('status','dev');
    console.log(users);
    console.log(users.get(54))
```

## get

```js
    let users = new Map()
    users.set('name','kamal');
    users.set('age',21);
    users.set('status','dev');
    console.log(users.get('name'));
    // kamal
```

```js
let users = new Map([
  ['name','kamal'],
  ['age',21],
  ['phone',{
    home: 999,
    office: 121
  }]
])
console.log(users.get('phone').office);
// 121
```

## has

```js
    let users = new Map()
    users.set('name','kamal');
    users.set('age',21);
    users.set('status','dev');
    console.log(users.has('name'));
    // true
```

## size
```js
    let users = new Map()
    users.set('name','kamal');
    users.set('age',21);
    users.set('status','dev');
    console.log(users.size);
    // 3
```

## clear

```js
  <script type="text/javascript">
    let users = new Map()
    users.set('name','kamal');
    users.set('age',21);
    users.set('status','dev');
    let result = users.clear();
    console.log(users);
 //
```
## delete

```js
  <script type="text/javascript">
    // let users = new Map()
    // users.set('name','kamal');
    // users.set('age',21);
    // users.set('status','dev');
    // let result = users.delete('name');
    // console.log(users);
  </script>
```



## keys

```js
    let users = new Map()
    users.set('name','kamal');
    users.set('age',21);
    users.set('status','dev');
    console.log(users.keys());
    // {"name", "age", "status"}
```

## values

```js
     let users = new Map()
     users.set('name','kamal');
     users.set('age',21);
     users.set('status','dev');
     console.log(users.values());
    // {"kamal", 21, "dev"}
```

## entries

```js
     let users = new Map()
     users.set('name','kamal');
     users.set('age',21);
     users.set('status','dev');
     console.log(users.entries()); -->
    // {"name" => "kamal", "age" => 21, "status" => "dev"}
```
## forEach

```js
    let users = new Map()
    users.set('name','kamal');
    users.set('age',21);
    users.set('status','dev');

    users.forEach(t => {
      console.log(t);
    })
    // kamal
    // 21
    // dev
```

# soureces

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [http://qnimate.com/javascript-map-object/](http://qnimate.com/javascript-map-object/)
