


## basename

* `basename` return `last portion` of path

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// quux.html
```

## dirname


## extname


## format

```js
path.format({
  root:'/ignore',
  dir:'/home/test',
  base:'mk.html'
})
// /home/test/mk.html
```

## isAbsolute


## join

```js
path.join('/a', '/b') // Outputs '/a/b'
```

## normalize


## parse


## relative

## path.resolve

```js
path.join('/a', '/b') // Outputs '/a/b'

path.resolve('/a', '/b') // Outputs '/b'
```



* [path](https://nodejs.org/docs/latest/api/path.html)
* [path official github](https://github.com/jinder/path)
