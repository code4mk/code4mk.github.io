

* [pivot](https://laraveldaily.com/pivot-tables-and-many-to-many-relationships/)

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
