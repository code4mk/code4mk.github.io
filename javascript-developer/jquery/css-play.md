---
description: css manipulation jquery
keywords: react, mobx
title: css manipulation jquery
toc_max: 4
---

## addClass

```js
$("div").addClass("my-class");
```

## removeClass

```js
$("div").removeClass("my-class");
```

## toggleClass

```js
$(function() {
    $("button").click(function() {
        $("p").toggleClass("red");
    });
});
```

## .css()

```js
$("p").css({"color": "red", "font-size": "200%"});
```

## dimention

* .height()
* .innerHeight()
* .outerHeight()
* .width()
* .innerWidth()
* .outerWidth()

```js
$("div").css("background-color", "red");
$("div").width(100);
$("div").height(100);
```

<img src="https://api.sololearn.com/DownloadFile?id=3120" alt="height">

~ img courtesy : sololearn
