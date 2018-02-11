---
description: Attribute jquery
keywords: react, mobx
title: Attribute jquery
toc_max: 4
---

## Attribute & content

`href`, `src`, `id`, `class`, `style`

```js
$(function() {
  var val = $("a").attr("href");
  alert(val);
});
```

### removeAttribute

```js
$(function() {
    $("table").removeAttr("border");
    $("table").removeAttr("class");
});
```

## content

* retrive html

```js
$(function() {
  var val = $("p").html();
  alert(val);
});
```

* retrive text

```js
$(function() {
  var val = $("p").text();
  alert(val);
});
```

* retrive input value

```js
$(function() {
  alert($("#name").val());
});
```

## add content

* `append()` inserts content at the end of the selected elements.
* `prepend()` inserts content at the beginning of the selected elements.
* `after()` inserts content after the selected elements.
* `before()` inserts content before the selected elements.

```js
$(function() {
    $("#demo").append("kamal");
});
```

```js
$(function() {
    $("#demo").prepend("David kamal");
});
```

```js
$(function() {
    $("#demo").before("<i>this is before</i>");
    $("#demo").after("<b>after ending</b>");
});
```
