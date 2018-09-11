---
description: namespace
keywords: php
title: namespace
toc_max: 4
---

### what is namespace

namespace is a indicator for file  . you can use specific file with specific namespace . namespace keyword is `namespace`

* `namespace` `live` `top` level in the `file` . (`first declare`)
* `case-insensitive`
* sub directory with `\` backslash

### why use namespace

* `escape` name `collision` with others `file/folder/code`
* ability to use `large file` name with alias `as` very `shortyly`.

```php
<?php
namespace User\Info;

class profile {
  function user() {
  echo("function name isn't case-sensitive");
  }
}

?>
```

### how access namespace

* access by `use` keyword
* alias wirh `as` keyword

```php
<?php
use User\Info;
user User\Info as client;
class Test{

}
```
