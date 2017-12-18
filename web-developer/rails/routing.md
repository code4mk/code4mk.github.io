---
description: Routing Rails
keywords: ruby, rails, ruby on rails
title: Routing Rails
toc_max: 4
---

## What is routing ?





## routing demo structure

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

get '/user/:id', to: 'users#show'
```

## resource (crud)

* `crud` base routing


```rb
resources :photos
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
