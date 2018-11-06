---
description: plugin
keywords: vue,vusjs
title: plugin
toc_max: 4
---

## add vue plugin

* `Vue.use(name)`

```js
Vue.use(pluginName) {
  someOption: true
}
```

## create plugin

```js
const pluginName = {
  install(Vue, options = {}) {
    if (this.installed) {
      return
    }
    this.installed = true
    // plugin code

  }
}
// automatic plugin add
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(pluginName);
}

export default pluginName
```

## resoures

* [plugins](https://vuejs.org/v2/guide/plugins.html)
* [alligator](https://alligator.io/vuejs/creating-custom-plugins/)
* [codeburst](https://codeburst.io/creating-a-basic-vue-plugin-a-quick-and-practical-example-cb56fa9a7d09)
