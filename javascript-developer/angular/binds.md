---
description: Binds Angular
keywords: js, angular
title: Binds Angular
toc_max: 4
---

## binds
{'{ok}}
```html
<h1>"{^{danger}}"</h2>
<div [class]="is-danger"></div>
<div bind-class="is-danger"></div>
<!-- two way bind -->
<div [(class)]="is-danger"></div>
<div bindon-class="is-danger"></div>
<!-- ngclass -->
<div [ngClass]="{'special': isSpecial}"></div>
<div [class.special]="isSpecial">Special</div>
<button [style.color]="isSpecial ? 'red' : 'green'">
```

```html
<!-- Form bind -->
<input [(ngModel)]="hero.name">
```
