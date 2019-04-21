
# axios

* [axios github](https://github.com/axios/axios)

# header issue get and post

* https://github.com/axios/axios/issues/638#issuecomment-271119591 `get`
* https://stackoverflow.com/a/44617848 `post/get`
* https://github.com/axios/axios/issues/858#issuecomment-302257238 `post`
* https://github.com/axios/axios/issues/827#issuecomment-338290911 `post`

# get

```js
axios.get('https://t.co',{
  params:{
    name: 'kamal'
  },
  headers: {
    Authorization: 'mkk'
  }
})
.then((response) => {
  // response
})
.catch((error) => {
  // error
})
```

# delete

```js
axios.delete(url, {
  data:{
    username:"user",
    password:"pass"
  },
  headers:{
    Authorization: "token"
  }
})


```

# query string package

* [qs](https://github.com/ljharb/qs)
* [query string](https://github.com/sindresorhus/query-string)
