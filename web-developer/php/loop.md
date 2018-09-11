---
description: loop
keywords: php
title: loop
toc_max: 4
---

### while

```php
$a = 1;
while ($a <= 10) {
  echo $a;
  $a = $a + 1;
}
# 1,2,3,4,5,6,7,8,9
```

### do while

* execute one time then check condition

```php
$a = 0;
do {
  echo $i;
  $a = $a + 1;
} while ($a < 1);
#  0
```

### for

```php
for ($a = 0 ; $a < 10 ; $a++) {
  echo "${a}";
}
#  0,1,2,3,4,5,6,7,8,9
```

###### break

```php
for ($a = 0 ; $a < 10 ; $a++) {
  if ($a === 5) {
    break;
  }
  echo "${a}";
}
#  0,1,2,3,4
```

### continue

```php
for ($a = 0 ; $a < 10 ; $a++) {
  if ($a === 5) {
    continue;
  }
  echo "${a}";
}
# 0,1,2,3,4,6,7,8,9
```


### foreach

```php
$users = ["kamal","jamal","sadia","maruf"];
foreach($users as $key => $user){
  echo "${key} = ${user}\n";
}
# 0 = kamal
# 1 = jamal
# 2 = sadia
# 3 = maruf
```

### switch

* `code4mk is JS lover `

```php
switch("b") {
  case "a": {
    echo "yo a";
    break;
  }
  case "b": {
    echo "yo b";
    break;
  }
  default: {
    echo "not exist";
  }
}
#  yo b
```
