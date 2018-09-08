
# if

```php
$a = 5;
if ($a === 5) {
  echo "${a}";
}
# 5
```

# else

```php
$a = 6;
if ($a === 5) {
  echo "${a}";
} else {
  echo "not 5"
}
# 5
```

# elseif

```php
$a = 6;
if ($a === 5) {
  echo "${a}";
} elseif ($a == 6) {
  echo "${a}"
} else {
  echo "not exist"
}
# 6
```

# tenary condition

```php
$a = 6;
$status = $a === 5 ? 'true' : 'false';
echo $status;
# false
```

# resources

* [condition](http://www.php.net/manual/en/language.control-structures.php)
