
# event emit on

* 1. plugins/eventBus.js

```js
import Vue from 'vue'

const eventBus = {}

eventBus.install = (Vue) => {
Vue.prototype.$bus = new Vue()
}

Vue.use(eventBus)
```

* 2. register plugin

```js
plugins: [
  '~/plugins/eventBus'
],
```

* usage

```js
// event emit
this.$bus.$emit('activity');
// event on
this.$bus.$on('activity',()=>{
  console.log("here is kamal")
})
```

# emit

```js
// Input changed
this.$root.$emit('removeposition', { something: 'yes' })

// Component 2
this.$root.$on('removeposition', filter => { })
```

# event handling child component

* nested.vue

```js
<template>
  <nuxt-child @something="handle_something" />
</template>
```
* `nested/index.vue`

```js
<template>
  <button @click="$emit('something!')" >something</button>
</template>
```
