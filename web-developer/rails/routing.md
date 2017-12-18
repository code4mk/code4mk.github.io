---
description: Routing Rails
keywords: ruby, rails, ruby on rails
title: Routing Rails
toc_max: 4
---

## What is routing ?





## routing demo structure

* `rake routes`

```bash
----------------------------------------------------------------
      Prefix   Verb   URI Pattern               Controller#Action
      ------   ----   -----------               ------------------
       users   GET    /users(.:format)          users#index
               POST   /users(.:format)          users#create
    new_user   GET    /users/new(.:format)      users#new
   edit_user   GET    /users/:id/edit(.:format) users#edit
        user   GET    /users/:id(.:format)      users#show
               PATCH  /users/:id(.:format)      users#update
               PUT    /users/:id(.:format)      users#update
               DELETE /users/:id(.:format)      users#destroy
 test_photos   GET    /test/photos(.:format)    test#photos
 ---------------------------------------------------------------
 ```
## Basic Routing

```rb
# config\routes.rb
get 'user', to: 'users#show'

get 'user', to: :show, controller: 'users'

get '/user/:id', to: 'users#show'
```

## resource (crud)

* `crud` base routing


```rb
resources :photos
# only index
resources :photos, only: [:index]
# except index
resources :images, except: [:create, :index, :edit]
```

* crud routes for photos

```bash
-----------------------------------------------------------------
Prefix      Verb   URI Pattern                Controller#Action
------      ----   -----------                -------------------
photos      GET    /photos(.:format)          photos#index
            POST   /photos(.:format)          photos#create
new_photo   GET    /photos/new(.:format)      photos#new
edit_photo  GET    /photos/:id/edit(.:format) photos#edit
 photo      GET    /photos/:id(.:format)      photos#show
            PATCH  /photos/:id(.:format)      photos#update
            PUT    /photos/:id(.:format)      photos#update
            DELETE /photos/:id(.:format)      photos#destroy
-----------------------------------------------------------------
```
### multiple resources

```rb
resources :photos, :books, :videos
# or
resources :photos
resources :books
resources :videos
```

## namespace

```rb
namespace :admin do
  resources :articles
end
```

```bash
------------------------------------------------------------------------------------
Prefix              Verb   URI Pattern                        Controller#Action
-------             ----   -----------                        ------------------
admin_articles      GET    /admin/articles(.:format)          admin/articles#index
                    POST   /admin/articles(.:format)          admin/articles#create
new_admin_article   GET    /admin/articles/new(.:format)      admin/articles#new
edit_admin_article  GET    /admin/articles/:id/edit(.:format) admin/articles#edit
admin_article       GET    /admin/articles/:id(.:format)      admin/articles#show
                    PATCH  /admin/articles/:id(.:format)      admin/articles#update
                    PUT    /admin/articles/:id(.:format)      admin/articles#update
                    DELETE /admin/articles/:id(.:format)      admin/articles#destroy
-------------------------------------------------------------------------------------
```

* without `/admin` / `namespace`

```rb
scope module: 'admin' do
  resources :articles
end
# or
resources :articles, module: 'admin'
```


```bash
------------------------------------------------------------------------------------
Prefix              Verb   URI Pattern                        Controller#Action
-------             ----   -----------                        ------------------
articles            GET    /articles(.:format)          admin/articles#index
                    POST   /articles(.:format)          admin/articles#create
new_article         GET    /articles/new(.:format)      admin/articles#new
edit_article        GET    /articles/:id/edit(.:format) admin/articles#edit
article             GET    /articles/:id(.:format)      admin/articles#show
                    PATCH  /articles/:id(.:format)      admin/articles#update
                    PUT    /articles/:id(.:format)      admin/articles#update
                    DELETE /articles/:id(.:format)      admin/articles#destroy
-------------------------------------------------------------------------------------
```

* without `namespace`  directory

```rb
scope '/admin' do
  resources :articles
end
# or
resources :articles, path: '/admin/articles'
```

```bash
---------------------------------------------------------------------------
Prefix        Verb   URI Pattern                        Controller#Action
------        ----   -----------                        -----------------
   articles   GET    /admin/articles(.:format)          articles#index
              POST   /admin/articles(.:format)          articles#create
new_article   GET    /admin/articles/new(.:format)      articles#new
edit_article  GET    /admin/articles/:id/edit(.:format) articles#edit
    article   GET    /admin/articles/:id(.:format)      articles#show
              PATCH  /admin/articles/:id(.:format)      articles#update
              PUT    /admin/articles/:id(.:format)      articles#update
              DELETE /admin/articles/:id(.:format)      articles#destroy
----------------------------------------------------------------------------
```
