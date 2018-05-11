

Map is collection of data as key value pairs.

~ `map methods`

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
