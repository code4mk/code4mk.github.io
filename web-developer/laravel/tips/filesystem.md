
# `Storage::laravel`

* `Illuminate\Filesystem`
* `Illuminate\Contracts\Filesystem\Filesystem.php`
* [laravel doc filesystem storage](https://laravel.com/docs/5.7/filesystem)

* [ filesystem official github laravel](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Filesystem/Filesystem.php)

* [thephpleague/flysystem official laravels](https://github.com/thephpleague/flysystem)

# symfony filesystem

* [symfony filesystem](https://symfony.com/doc/current/components/filesystem.html)


# `Storage::__`

```php
Storage::disk('s3');
Storage::disk('local')->put('file.txt', 'Contents');
Storage::disk('local')->get('file.jpg');
Storage::disk('s3')->exists('file.jpg');
Storage::get('file.jpg');
Storage::put('file.jpg', $contents);
Storage::size('file1.jpg');
Storage::lastModified('file1.jpg');
Storage::copy('old/file1.jpg', 'new/file1.jpg');
Storage::move('old/file1.jpg', 'new/file1.jpg');
Storage::prepend('file.log', 'Prepended Text');
Storage::append('file.log', 'Appended Text');
Storage::delete(['file1.jpg', 'file2.jpg']);
Storage::files($directory);
Storage::allFiles($directory);
Storage::directories($directory);
Storage::allDirectories($directory);
Storage::makeDirectory($directory);
Storage::deleteDirectory($directory);
```
