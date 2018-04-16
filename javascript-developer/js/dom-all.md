## dom

`dom = document object model`

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)


| Method     |Searches by     |
| :------------- | :------------- |
|getElementById|	id|
|getElementsByName|	name|
|getElementsByTagName|	tag|
|getElementsByClassName|	class|
|querySelector|	CSS-selector|
|querySelectorAll|	CSS-selector|

## create element

```js
var createPart = document.createElement(tagName[, options])
```

## append child

```js
createPart.appendChild(tagName);
```

## add id

```js
createPart.id = 'tester';
```

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)

## get id

```js
document.getElementById('myId');
```

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

## add class

* `add`, `remove`, `toggle`, `replace`

```js
createPart.classList  = 'foo';
```

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
* [mdn 2](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)


## get class

```js
document.getElementsByClassName(name);
```

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

## Element

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Element)


## querySelector

* id or class , selector

```js
document.querySelector('.my-class');
document.querySelector('#my-id');
```
* [w3](https://www.w3schools.com/jsref/met_document_queryselector.asp)

## style

```js
myTag.style.color = 'red';

```

### cssText

## css properties

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)

## textContent


## innerHtml

---

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)



* https://developer.mozilla.org/en-US/docs/Web/API/Document/anchors

* [w3](https://www.w3schools.com/jsref/dom_obj_document.asp)


## node

* [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Node)
* [js info](https://javascript.info/dom-navigation)
