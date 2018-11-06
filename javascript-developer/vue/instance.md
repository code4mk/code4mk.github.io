---
description: instance
keywords: vue,vusjs
title: instance
toc_max: 4
---

## vue instance

```js
let vm = new Vue({
  // code
})
```

* `vm means "view model"`

* Instance Properties

| instance | instance     | instance|
| :------------- | :------------- | :------------- |
| vm.$data       | vm.$el       | vm.$props |
|vm.$options|vm.$parent|vm.$root|
|vm.$children|vm.$slots|vm.$refs|
|vm.$scopedSlots|vm.$server|vm.$attr|

* Instance lifecycle

| instance | instance     | instance| instance |
| :------------- | :------------- | :------------- |:------------- |
|vm.$mount()|vm.$forceUpdate()|vm.$nextTick()|vm.$destroy()|

## resources

* [guide](https://vuejs.org/v2/guide/instance.html)
* [api](https://vuejs.org/v2/api/#Instance-Properties)
