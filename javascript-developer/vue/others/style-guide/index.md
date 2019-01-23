
# vue style guide

## component  inside vue (multi)

* snake case compient

```js
'component-one'
```

* `name` will be `PascleCase`

## data property

```js
data () {
  return{
    // your data object here
  }
}
```

# componet file

* PascleCase
* meaning full

## props

* will be camelCase (`inside templete`)
* describe the type of props

~ props type is  objects

```js
props: {
  propeName:{
    type: String
  }
}
```

# style

* will be add `scoped` for avoiding conflicting with others

## multi atrributes elements

* break line

## v-condition `key`

* use `key="anything"`
