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


## onclick

```js
<p onclick="myFunction(this, 'red')">Click me to change my text color.</p>

<script>
function myFunction(elmnt,clr) {
  elmnt.style.color = clr;
}
</script>
```

```js
$('body').on('click', '.editProduct', function () {
      var product_id = $(this).data('id');
//
```

```html
<a data-id="123">link</a>
$(this).data("id")
```
