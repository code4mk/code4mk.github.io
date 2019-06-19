
# asyncData()

asyncData is a `function` . it is called everytime before loading page.it will be called `server-side` and `client-side`.

```js
export default {
  data () {
    return { project: 'default' }
  },
  asyncData (context) {
    return { project: 'nuxt' }
  }
}
```

```js
export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://my-api/posts/${params.id}`)
    return { title: data.title }
  }
}
```

* `you can't access data with this keyword inside asyncData`.

~ resource

* [async-data](https://nuxtjs.org/guide/async-data)
* [async-data api](https://nuxtjs.org/api)

# fetch

`fetch` is  `function` and same as asyncData. fetch can't accept `component data`.

* `function`
* `✘ component data ✘ `

# layout

* `string` , `function`
