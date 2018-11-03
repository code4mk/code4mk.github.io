---
description: custom directive
keywords: vue,vusjs
title: custom directive
toc_max: 4
---

* https://www.youtube.com/watch?v=3-fLYMEKOU0

* https://vuejs.org/v2/guide/custom-directive.html

* https://css-tricks.com/power-custom-directives-vue/

* https://alligator.io/vuejs/custom-directives/

## global directive

```js
Vue.directive('name',{
  inserted: function(el,binding,Vnode) {
    // code is here
  }
})
```

* `v-name`

## local directive

```js
directives: {
  name: {
    // directive definition
    inserted: function (el) {
      el.focus()
    }
  }
}
```

* `v-name`

## discriptions

`v-name:arg.modifier.modifier="value"`


## tips

* `bind` - `This occurs once the directive is attached to the element.`

* `inserted` - `This hook occurs once the element is inserted into the parent DOM.`

* `update` - `This hook is called when the element updates, but children haven't been updated yet.`

* `componentUpdated` - `This hook is called once the component and the children have been updated.`

* `unbind` - `This hook is called once the directive is removed.`
