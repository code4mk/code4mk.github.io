---
description: node
keywords: dom, js
title: node
toc_max: 4
---

### childNodes

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes;
console.log(doc1);
```

### childNodes array

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].parentNode;
console.log(doc1);
```
### firstChild

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].firstChild;
console.log(doc1);
```

### lastChild

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].LastChild;
console.log(doc1);

```

### firstElementChild

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].firstElementChild;
console.log(doc1);
```

### LastElementChild

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].LastElementChild;
console.log(doc1);
```

### isConnected

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].isConnected;
console.log(doc1);
```

### previousSibling

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].previousSibling;
console.log(doc1);
```

### previousElementSibling

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].previousElementSibling;
console.log(doc1);

```

### nextSibling
```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].nextSibling;
console.log(doc1);
```

### nextElementSibling

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[1].nextElementSibling;
console.log(doc1);
```

### nodeName


### nodeType


### cloneNode

```js
var doc = document.getElementById('main');
var doc1 = doc.childNodes[3].previousElementSibling;
var doc2 = doc1.cloneNode(true);
console.log(doc2);
```

### hasChildSibling


### nodeValue


### insertBefore


### remove Child


#### replace child
