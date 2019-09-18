---
description: key code
keywords: js
title: key code
toc_max: 4
---

## key code

* [http://keycode.info/](http://keycode.info/)
* [mdn keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
* [css trick](https://css-tricks.com/snippets/javascript/javascript-keycodes/)
* [https://dmauro.github.io/Keypress/](https://dmauro.github.io/Keypress/)

## keyPress,keyUp,keyDown

* Down happens first
* Press happens second (when text is entered)
* Up happens last (when text input is complete).

```js
window.addEventListener("keyup", log);
window.addEventListener("keypress", log);
window.addEventListener("keydown", log);

function log(event){
  console.log( event.type );
}
```

## keyup with delay

```js
// Get the input box
var textInput = document.getElementById('test-input');

// Init a timeout variable to be used below
var timeout = null;

// Listen for keystroke events
textInput.onkeyup = function (e) {

    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        console.log('Input Value:', textInput.value);
    }, 500);
};
```
