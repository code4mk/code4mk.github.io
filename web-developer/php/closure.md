


```php
DB::table('users')->where(function ($query) use ($activated,$var2) {
    $query->where('activated', '=', $activated);
    $query->where('var2', '>', $var2);
})->get();
```

* https://stackoverflow.com/questions/29548073/laravel-advanced-wheres-how-to-pass-variable-into-function
* http://php.net/manual/en/functions.anonymous.php
