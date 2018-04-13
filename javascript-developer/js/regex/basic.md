



## basic 1

```js
/a/
// kamal is the developer of code4mk organization.
```

output :

> k<font style='color:green'>a</font>m<font style='color:green'>a</font>l is the developer of code4mk org<font style='color:green'>a</font>niz<font style='color:green'>a</font>tion.

* [basic-1 demo](https://regexr.com/3nnms)

## basic 2

`^` tick means select from `first`

```js
/^ka/
// kamal is the developer of code4mk organization.
```

output :

> <font style='color:green'>ka</font>mal is the developer of code4mk organization.

* [basic-2 demo](https://regexr.com/3nnpj)


## basic 3
`$` last position

```js
/ion$/
// kamal is the developer of code4mk organization organization
```

> kamal is the developer of code4mk organization organizat<font style='color:green'>ion</font>

* [basic-3 demo](https://regexr.com/3nnrf)


## basic 4

`dot` is decimal point.

* it count `space`  as a position.

```js
/..oper/
/.oper/
//kamal is the developer of code4mk organization.
```

> kamal is the dev<font style='color:green'>eloper</font> of code4mk organization.

.

> kamal is the deve<font style='color:green'>loper</font> of code4mk organization.

* [basic 4](https://regexr.com/3nnsd)

## basic 5

`\` blackslash use for escape specialess (`*`,`d`,`n`...)

```js
/\*al/
//kam*l is the developer of code4mk organization.
```

> kam<font style='color:green'>*l</font> is the developer of code4mk organization.

* [basic 5](https://regexr.com/3nnt5)

## basic 6

```js
/be+/
// be
// bee
// bebe
// beeeeeebee
// beee
```

output

> <font style='color:green'>be</font>

.

> <font style='color:green'>bee</font>

.

> <font style='color:green'>bebe</font>

.

> <font style='color:green'>beeeeeebee</font>

.

> <font style='color:green'>beee</font>


* [basic 6 demo](https://regexr.com/3nnur)


## basic 7


```js
/colou?/
// color
// colour
```

> <font style='color:green'>colo</font>r

.

> <font style='color:green'>colou</font>r

* [basic 7 demo](https://regexr.com/3no49)
