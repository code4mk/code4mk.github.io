

## set

* store reference
* grabage


```js
let set = new Set(),
    key = {null};
set.add(key);
console.log(set.size);
// 1
```

## waekset

* don't store reference
* no garbage

```js
let set = new WeakSet(),
    key = {null};
set.add(key);
console.log(set.size);
// undefined
```
