

# add extra elements

```php
$roles['y'] = 'y';
```

```php
$posts->map(function ($post) {
    $post['url'] = 'http://your.url/here';
    return $post;
});
```

* loop inside loop add exta

```php
$permissons[$key]{'hasPermissionThisRole'} = $hasPermission ;
```

* access object by `$me{'name'}`

# tips and resource

* https://tutsforweb.com/15-laravel-collection-methods/
