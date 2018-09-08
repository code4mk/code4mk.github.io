# variable

* start with `$` sign

```php
$name = "kamal"
echo $name
echo "${name}"
// kamal
// kamal
```

## scope variable

```php
$name = "kamal"
function user(){
  $name = "jamal"
  echo $name
}
user()
echo $name
# jamal
# kamal
```
## global

```php
$name = "kamal"
function user(){
  global $name
  $name = "jamal"
  echo $name
}
users()
echo $name
# jamal
# jamal
```

* `global` alternative `$GLOBAL[]`

```php
$name = "kamal"
function user(){
  $GLOBALS['name'] = "jamal"
  echo $name
}
users()
echo $name
# jamal
# jamal
```

# static

~ `static variable` only call once

* without

```php
function amount(){
  $loan = 1000
  echo "$loan\n"
  $loan = $loan + 200
}
amount()
amount()
// 1000
// 1000

```

* with static


```php
function amount(){
  static $loan = 1000
  echo "$loan\n"
  $loan = $loan + 200
}
amount()
amount()
// 1000
// 1200

```

## variables variable

```php
$name = "kamal";
$who = "name";
echo $$who;
# kamal
# who => name => kamal
```

## constant

* outside of class

```php
define("VERSION", "1.0.0");
echo VERSION;
# 1.0.0
```

* inside class

```php
const VERSION = "1.0.0"
echo VERSION;
# 1.0.0
```
