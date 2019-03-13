
* [git github](https://gist.github.com/martincruzot/6a802f274681a7e543d6)
* [official](https://devcenter.heroku.com/articles/getting-started-with-laravel)
* [official deploy git](https://devcenter.heroku.com/articles/git)

```bash
heroku login
```

```bash
cd your-project
touch Procfile
```

# edit Procfile

```bash
web: vendor/bin/heroku-php-apache2 public/
```

# remote heroku project

```bash
git init
heroku git:remote -a heroky-app-name
git add -A
# OR
git add .
git commit -am "make it now"
# or
git commit -m "make it now"
git push heroku master
```

# env file

* heroku follow .gitignore  so skip to upload all .gitignore

~ key generate

* copy key code and paste heroku set config

```bash
php artisan key:generate --show
```

~ set config

```bash
heroku config:set APP_KEY=key-code
heroku open
```

# remove env (alternative set config)

* if you want try this
* alternative of set config
* remove env from .gitignore
