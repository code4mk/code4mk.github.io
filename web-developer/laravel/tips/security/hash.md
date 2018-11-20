
# `hash => bcrypt , argon2`


* `Hash::make(password)`
* `Hash::check('plain-text', $hashedPassword)`

# `encryption`

* `encrypt($secret)`
* `decrypt($encryptedValue)`

~ [encrypt github laravel framework](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Encryption/Encrypter.php)

* `use Illuminate\Encryption\Encrypter`

* step 2

```php
use Illuminate\Support\Facades\Crypt;

$encrypted = Crypt::encryptString('Hello world.');

$decrypted = Crypt::decryptString($encrypted);

```
