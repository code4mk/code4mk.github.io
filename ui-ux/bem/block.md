---
description: Block
keywords: css, bem, ui, ux
title: Block
toc_max: 4
---

## Block
A functionally independent page component that can be reused. In HTML, blocks are represented by the `class` attribute

* The `block name` describes its purpose ("What is it?" — menu or button), not its state ("What does it look like?" — red or big).

```html
<!-- Correct. The `error` block is semantically meaningful -->
<div class="error"></div>

<!-- Incorrect. It describes the appearance -->
<div class="red-text"></div>
```

* You  shouldn't use CSS `tag` or `ID` selectors when using BEM

## Nested Block

You can use nested block .

```html
<!-- `header` block -->
<header class="header">
    <!-- Nested `logo` block -->
    <div class="logo"></div>

    <!-- Nested `search-form` block -->
    <form class="search-form"></form>
</header>
```
Here header is block , logo is block and search-form is also a block .
