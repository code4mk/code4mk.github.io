
# `require`



```bash
composer require vendor/package
composer require vendor/package:1.2.0
composer require "code4mk/multitrust:dev-master"
composer require "code4mk/multitrust": "1.0.x-dev"
```

# require-dev

```bash
composer require-dev vendor/package
```

# globally

```bash
composer global require vendor/package
composer global update vendor/package
composer global update
composer global remove vendor/package
```

```bash
composer global update laravel/installer
```

# install/i

* install command install all package from package.json . if has lock file that time install all  package's specifig verison from package-lock.json

```bash
composer install
```

# remove

```bash
composer remove vendor/package
```

# outdated

```bash
composer outdated
```

# update/u

```bash
composer update vendor/package
composer update "vendor/*"
```

# auto-load

* autoloading  from package.json

```bash
composer dump-autoload
```

# init

```bash
composer init
```
