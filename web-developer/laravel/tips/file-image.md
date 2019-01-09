# image

* https://artisansweb.net/resize-image-laravel-using-intervention-image-library/
* http://image.intervention.io/api/mask
* https://youtu.be/N_i3UFw0_84
* https://www.youtube.com/watch?v=jy2SUxx6uHc
* https://youtu.be/jy2SUxx6uHc
* https://github.com/thedevdojo/laravel-user-image/blob/master/app/Http/Controllers/UserController.php
* `Illuminate\Http\UploadedFile`
* http://php.net/manual/en/class.splfileinfo.php
* https://api.symfony.com/3.0/Symfony/Component/HttpFoundation/File/UploadedFile.html


```php
use Dropbox\Client;
use League\Flysystem\Filesystem;
use League\Flysystem\Adapter\Dropbox as Adapter;

$client = new Client($token, $appName);
$filesystem = new Filesystem(new Adapter($client, 'path/optional'));

$img = Image::make($filepath);
$img->widen(50);
$img->encode('png');

$d = $filesystem->put('test.png', (string) $img);
```
