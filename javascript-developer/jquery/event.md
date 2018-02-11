---
description: events jQuery
keywords: js, jquery
title: events jQuery
toc_max: 4
---

## click

```js
$(function() {
    $("#demo").click(function() {
        $("body").html(Date());
        alert("ok");
    });
});
```
