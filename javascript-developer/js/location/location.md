---
description: window location
keywords: location, js
title: window location
toc_max: 4
---

## location

* `document.location`
* `window.location`
* `document.location===window.location`

## properties

| name     | name     | name| name | name|
| :------------- | :------------- |:-------------|:-------------|:-------------|
|protocol|host|hostname|port|pathname|
|href|search|hash|username|password|
|origin|.|.|.|.|


### href

```js
document.location.href
//return: https://code4mk.org/js/search?test=mk
```

### protocol

`:` before

```js
document.location.protocol
//return: https:
```

### host

`:` after

```js
document.location.host
//return: code4mk.org
```

### hostname

`:` after

```js
document.location.hostname
//return: code4mk.org
```

### port

```js
document.location.port
//return:  :8080
```

### pathname

```js
document.location.pathname
// return:  /js/
```

### search

```js
document.location.search
// return:  ?test=mk
```

#### URLSearchParams

* [https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams](https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams)

## resource

* [https://developer.mozilla.org/en-US/docs/Web/API/Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
* [https://developer.mozilla.org/en-US/docs/Web/API/URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
