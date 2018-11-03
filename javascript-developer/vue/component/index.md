---
description: components
keywords: vue,vusjs
title: components
toc_max: 4
---

# components main 3 parts

1. template
2. script
3. css

```vue
<template lang="html">

</template>

<script>
export default {

}
</script>

<style lang="css" scoped >

</style>
```

# join multiple components

```vue
<template lang="html">
  <child-one/>
  <child-two/>
</template>

<script>
import ChildOne from '@/components/....'
import childTwo from '@/components/....'
export default {
  components: {
    'child-one': ChildOne,
    'child-two': childTwo
  }
}
</script>

<style lang="css" scoped >

</style>
```

# props

```vue
/* parent component */
<template lang="html">
  <child-one :propsData="posts"/>
</template>

<script>
import ChildOne from '@/components/....'
export default {
  data: () {
    return {
      posts: []
    }
  }
  components: {
    'child-one': ChildOne,
  }
}
</script>

<style lang="css" scoped >

</style>
```

```vue
/* child component */
<template lang="html">
  <ul v-for="post in propsData"  :key="post.id">
    <li>{{ post.something }}</li>
  </ul>
</template>

<script>
import ChildOne from '@/components/....'
export default {
  props: {
    propsData: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="css" scoped >

</style>
```


# emit

```vue
/* parent component */
<template lang="html">
  <button class="button is-dark" @emitME="emitParent(e)">$emit</button>
</template>

<script>
import ChildOne from '@/components/....'
export default {
  data () {
    return {
      name: 'parent data'
    }
  }
  methods: {
    emitParent: (e) {
      this.name = e
    }
  }
}
</script>

<style lang="css" scoped >

</style>
```


```vue
/* child component */
<template lang="html">
  <button class="button is-dark" @click="emitME">$emit</button>
</template>

<script>
import ChildOne from '@/components/....'
export default {
  data () {
    return {
      status: 'child data'
    }
  }
  methods: {
    emitME: () {
      this.$emit(emitME, this.status)
    }
  }
}
</script>

<style lang="css" scoped >

</style>
```

# slot

```vue
/* child.vue components */
<template>
  <div class="main">
    <h1> kamal is here </h1>
    <slot/>
  </div>
</template>
```

```vue
/* parent.vue components */
<template>
  <div class="parent-main">
    <h1> parents </h1>
    <child>
      <h2> slot is here </h2>
    </child>
  </div>
</template>
```
# slot naming

```vue
/* child.vue components */
<template>
  <div class="main">
    <slot name="before">
    <h1> kamal is here </h1>
    <slot name="after">
  </div>
</template>
```

```vue
/* parent.vue components */
<template>
  <div class="parent-main">
    <h1> parents </h1>
    <child>
      <h3 slot="before"> this is before slot </h3>
      <h3 slot="after"> this is after slot </h3>
    </child>
  </div>
</template>
```


# scripting methods

```vue
<script>
  props: {
    contextualStyle: {
      type: String,
      required: false
    }
  }
  components: {
      VLayout,
      VCard,
    }
    data () {
      return {

      }
    }
    created: () => {

    }
    mounted: () => {

    }

    methods: {
      countUp: () => {

      }
    }
    computed: {
      countUp: () => {

      }
    }
    filters: {
      capitalize: (value) => {

      }
    }
</script>
```

## components register

* `kabab-case-component`
* `PascalCaseComponent`

~ global

```js
Vue.component('component-name',{
  // code
})
```

~ local

* `components is  object`

```js
components: {
  'kabab-case-component': ImportedComponent
}
```

* [officil](https://vuejs.org/v2/guide/components-registration.html)
* [style guide](https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended)
