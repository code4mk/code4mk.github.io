
```php
Route::get('/lang/{locale?}',function($locale = 'en'){
 App::setLocale($locale);
 dump(trans('validation.accepted'));
});
```

* https://github.com/themsaid/laravel-langman
* https://laravel-news.com/wrangling-translations
* https://laravel-news.com/laravel-translation-package-frontend
* https://github.com/barryvdh/laravel-translation-manager
* https://github.com/joedixon/laravel-translation

# yandex and google

* https://github.com/JoggApp/laravel-google-translate/blob/master/google.md
* https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/
* https://github.com/yandex-php/translate-api
* https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/#api-overview__languages
* https://tech.yandex.com/translate/doc/dg/reference/getLangs-docpage/

* https://github.com/matheuss/google-translate-api `free goole api`

# js

* https://www.npmjs.com/package/yandex-translate
* https://jsfiddle.net/alexriz/AEnyZ/
* https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/#api-overview__languages

# vue

* https://github.com/Polyconseil/vue-gettext

* https://stackoverflow.com/questions/45935089/vue-i18n-how-to-use-inside-vue-instance-filter `solve`

# core

* https://github.com/illuminate/translation


# number i18n

* https://github.com/zf1/zend-locale
