
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

# axios chaining

```js
axios.get(...)
  .then((response) => {
    return axios.get(...); // using response.data
  })
  .then((response) => {
    console.log('Response', response);
  });
```

* [axios  issue 708](https://github.com/axios/axios/issues/708)
* [axios issue 371](https://github.com/axios/axios/issues/371#issuecomment-231529074)

* [stackoverflow 44182951](https://stackoverflow.com/questions/44182951/axios-chaining-multiple-api-requests)
* [stackoverflow 50627968](https://stackoverflow.com/questions/50627968/axios-put-inside-axios-get)

# query string package

* [qs](https://github.com/ljharb/qs)
* [query string](https://github.com/sindresorhus/query-string)
