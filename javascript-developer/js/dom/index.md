---
description: Basic DOM
keywords: dom, js
title: Basic DOM
toc_max: 4
---

## DOM

The `document object model` (dom) is a programming `interface` of `HTML/XML` document. DOM access by `document` or `window`

* [MDN dom](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [w3 dom](https://www.w3.org/DOM/)
* [whatwg dom](https://dom.spec.whatwg.org/)

## Document

### basic method

* `document`
* `documnet.all`
* `document.body`
* `document.characterSet`
* `document.charset`
* `document.compatMode`
* `document.contentType`
* `document.docType`
* `document.domain`
* `document.documentURI`
* `document.documentElement`
* `document.forms`
* `document.head`
* `document.implementation`
* `document.images`
* `document.scripts`
* `document.title`
* `document.URL`

### create method

 * `document.createComment('comment')`
 * `document.createDocumentFragment()`
 * `document.createElement('div')`
 * `documment.createTextNode('your text')`

### get methods

* `document.getElementByID('idName')`
* `document.getElementsByTagName('p')`
* `document.getElementsByClassName('className')`
* `document.querySelector('selector/id/class')`
* `document.querySelectorAll('selector/id/class')`

~ [mdn document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## element

when `get` `class , id or selector` that time `document is  element`.

* `---.attributes`
* `---.classList`
* `---.className`
* `---.clientHeight`
* `---.clientLeft`
* `---.clientTop`
* `---.clientWidth`
* `---.id`
* `---.innerHTML`
* `---.localName`
* `---.namespaceURI`
* `---.outterHTML`
* `---.prefix`
* `---.tagName`
* `---.appendChild()`
* `---.remove()`
* `---.style.---`
* `---.style.cssText`

~ [mdn element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Node

* `--.childNodes`
* `--.childNodes[i]`
* `--.parentNode`
* `---.firstChild`
* `---.lastChild`
* `---.firstElementChild` (`skiping white space`)
* `---.lastElementChild` (`skiping white space`)
* `---.isConnected`
* `--.prevoiusSibling`
* `--.nextSibling`
* `--.previousElementSibling` (`skiping white space`)
* `--.nextElementSibling` (`skiping white space`)
* `--.textContent`
* `--.nodeName`
* `---.nodeType`
* `---.nodeValue`
* `---.cloneNode`
* `--.hasChildSibling`
* `---.inserBefore`
* `---.contains`
* `---.removeChild`
* `---.replaceChild`

~ [node mdn](https://developer.mozilla.org/en-US/docs/Web/API/Node)

## event

* `---.currentTarget`
* `---.preventDefault`

## window

* `window.innerHeight`
* `window.innerWidth`
* `window.open()`
* `window.self`
* `window.alert`
* `window.document`
* `window.location`

~ [window mdn](https://developer.mozilla.org/en-US/docs/Web/API/Window)
