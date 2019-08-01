
* nuxt.config.js
  * build (`loader,webpack,transpilation`)
  * css
  * dev
  * env
  * generate
  * head
  * loading
  * modules
  * plugins
  * rootDir
  * router
  * server
  * dir
  * transition

# build

* `loader,webpack,transpilation`
* `Object`
* [config api](https://nuxtjs.org/api/configuration-build)

# css

* `array`

```js
export default {
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ]
}
```

# env  

* environment variable
* object

```js
export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
```

# head

* defalut meta tag
* default seo

# loading

* preloading before data fetch

```js
export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
 }
```

* [loading api](https://nuxtjs.org/api/configuration-loading)

# module

* module as like package
* nuxt community core package

# env

* set environment variable
* object
* access by `process.env.*` or ``{env}`` context

# generate

* when command nuxt generate that time `generate` works .
* basically custom route generate


# plugin

* add vue package with plugin system
* array
* mode(client or server)

```js
export default {
  plugins: [
    { src: '~/plugins/both-sides.js' },
    { src: '~/plugins/client-only.js', mode: 'client' },
    { src: '~/plugins/server-only.js', mode: 'server' }
  ]
}
```

* `plugins/event.js`

~ `$emit/$on`

```js
import Vue from 'vue'

const eventBus = {}

eventBus.install = (Vue) => {
Vue.prototype.$bus = new Vue()
}

Vue.use(eventBus)
```

~ another example

```js
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' // Per Ant Design's docs

Vue.use(Antd)
```

# router

* router configuration.
* object

```js
export default {
  router: {
    base: '/app/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    mode: 'hash',
    middleware: 'user-agent'
    // extend custom route start >> ..
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
    // extend custom route end ..<<

  }
}

```
