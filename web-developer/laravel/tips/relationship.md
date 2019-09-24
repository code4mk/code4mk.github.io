---
description: Laravel Relationships
keywords: laravel, relation, relationship
title: Laravel Relationships
toc_max: 4
---

## relationship

### one to one

* `hasOne('Model\Name','foreign_key','local_key')`
* `belongsTo('Model\Name','foreign_key','local_key')`

### one to many

* `hasMany('Model\Name','foreign_key','local_key')`
* `belongsTo('Model\Name','foreign_key','local_key')`

### many to many

* `belongsToMany('App\Role', 'role_user', 'user_id', 'role_id')`
* `role_user table`

~

* `role->attach($id|array $ids)`
* `role->detach($id|array $ids) / role->detach()`
* `role->sync([])`
* `role->toggle([])`

### hasOneThrough

* `hasOneThrough('Model\Name','Model\Name1','foreign_key1','foreign_key','local_key','local_key1')`

### hasManyThrough

* `hasManyThrough('Model\Name','Model\Name1','foreign_key1','foreign_key','local_key','local_key1')`

### Polymorphic

* `$this->morphTo();` -> `App\Image`
* `$this->morphOne('App\Image', 'imageable')`

~

* `imageable_type -> model/name`
* `imageable_id -> id`

## Eager Loading

```php
$user = User::with(['message'])->get();
# retrive specific column
$user = User::with(['message:title,time'])->get();
# nested
# reply function inside message model
$user = User::with(['message.reply'])->get();

```

* access

```php
foreach ($users as $user) {
    echo $user->message->title;
}
```


## resource

* [pivot](https://laraveldaily.com/pivot-tables-and-many-to-many-relationships/)
