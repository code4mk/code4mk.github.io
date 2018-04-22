---
description: html elements
keywords: dom, js
title: html elements
toc_max: 4
---

## image

```js
var doc = document.getElementById('bio')
var img1 = new Image(); // HTML5 Constructor
img1.src = 'http://res.cloudinary.com/duzdotcoi/image/upload/c_scale,h_500,w_890/v1522890619/sample.jpg';
img1.alt = 'alt';
img1.height = '200';
img1.width = '200';
img1.style.borderRadius = '50%';
doc.appendChild(img1);
```

~ [image mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image)
