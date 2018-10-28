---
description: directives
keywords: vue,vusjs
title: directives
toc_max: 4
---

## general

# interpolation

* `{{  }}` blade

```vue
<h1> {{ username }} </h1>
```

# v-text
* as like `interpolation`

```html
<h1 v-text="username"></h1>
```
# v-html

```html
<div v-html="core_html">

</div>
```

# v-once

* variable is `imutable`

```html
<p v-once> {{ usename }} </p>
```

## conditional

* v-if
* v-else-if
* v-else

~ `it's task as like programming condition`

```html
<div>
  <p v-if="firstCheck"> condition v-if </p>
  <p v-else-if="secondCheck"> condition v-else-if </p>
  <p v-else="thirdCheck"> condition v-else </p>
</div>
```
# v-show

* return true when return `truthy`

```html
<div>
  <h1 v-show="isTrue"> yah truthy value </h1>
</div>
```

## lists

* `v-for` as like forEach
* `v-for="(item,index) in items"`
~ additional `key`

```html
<ul>
  <li v-for="(item,key,index) in items" :key="item.id">
    {{ index }} = {{ key }} is {{ item }}
  </li>
</ul>
```


## bind

* `v-bind:class="--"` or `v-bind:-----= "--"`
* short form `:`
* `:class="--"` = `v-bind:class="--"`
* `one way binding`

```html
<a :href="uri">{{ source }}</a>
```

# class bind

* `:class="data"`
 * `data` can be `object` or `string`
* `:class={}`
  * pass condition inside class bind
  * `:class="{ test: isTest, btn: isBtn }"`
   * `isTest = true` that time `test` class will be `active`. same isBtn
* `:class=[a,b,c]`
 * pass class array
 * `a,b,c` will be `string` or `object` from `data`
 * `:class=[{cond: isCond}, a]` . array with  condition.

## model bind

* `v-model` ( `2 way binding` )
* `v-model="--"`

```html
<input v-model="vModel">
```

## events

* `v-on:--="--"`
* shaort hand `@`
* `@.--="--"` = `v-on:--="--"`
