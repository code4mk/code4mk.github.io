

## element

### attributes

```js
var doc = document.getElementById('bio');
var attr = doc.attributes;
console.log(attr);
```

### classList

```js
var doc = document.getElementById('bio');
doc.classList.add('class-add');
doc.classList.remove('class-remove');
doc.classList.toggle('toggle_class');
doc.classList.replace('old_class','new_class');

```

### className

```js
var doc = document.getElementById('main');
 if(doc.className === 'main-area'){
   console.log('yes, bio class is here');
 }else{
   console.log('sorry, no bio class');
 }
```

### id

```js
var doc = document.getElementById('bio');
var newChild = document.createElement('div')
 newChild.id = 'newChild';
```

### appendChild

```js
var doc = document.getElementById('bio');
var newChild = document.createElement('div')
doc.appendChild(newChild);
```

### innerHTML

```js
var doc = document.getElementById('bio');
var innerMe = `
  <p> welcome here</p>
  <h1> this is another </h1>
  <a href="https://code4mk.org">code4mk</a>
  `
  doc.innerHTML = innerMe;
  console.log(doc);
```
