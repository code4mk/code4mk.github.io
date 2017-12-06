---
description: component Angular
keywords: js, angular
title: component Angular
toc_max: 4
---

## ngModule

Angular js @ngModule is a decorator . decorators modify javascript class.


| ngModule Element | Description |
| ---- | ----------- |
|declarations |      |
|exports |  |
|imports |  |
|providers | |
|bootstrap |  |

### ngModule pattern

```ts
//app.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## What is component ?

Component is a smal peiece of ui . component reuseable .

### Components are 4 parts

 | parts | Description |
 | ---- | ----------- |
 | * my-component.component.css| ...|
 | * my-component.component.html| ...|
 | * my-component.component.spec.ts| ...|
 | * my-component.component.ts| ...|

### component.ts (Metadata) pattern

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```


* `selector` works to implement your component with parent component `<app-my></app-my>`

* `templateUrl` indicate which hypertext (html / template) file use inside selector

* `styleUrls` represents templateUrl's stylesheet

`*ngSwitch`
