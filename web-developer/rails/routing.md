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
get 'users', to: 'users#show'

get 'users', to: :show, controller: 'users'
# params
get '/users/:id', to: 'users#show'
# redirect
get '/stories', to: redirect('/articles')
# root path '/'
root to: 'pages#main'
root 'pages#main'
```

### constraints

```rb
get 'users/:id', to: 'users#show', constraints: { id: /[A-Z]\d{5}/
get 'users/:id', to: 'users#show', id: /[A-Z]\d{5}/
get '/:id', to: 'articles#show', constraints: { id: /^\d/ }
```

## resource (crud)

* `crud` base routing


```rb
resources :photos
# only index
resources :photos, only: [:index]
# except index
resources :photos, except: [:create, :index, :edit]
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

## concern

`concern` is a reusable process for rails routing.

```rb
concern :commentable do
  resources :comments
end
resources :messages, concerns: :commentable
```

```bash
-----------------------------------------------------------------------------------------
Prefix               Verb   URI Pattern                                 Controller#Action
------               ----   -----------                                 -----------------
message_comments     GET    /messages/:message_id/comments              comments#index
                     POST   /messages/:message_id/comments              comments#create
new_message_comment  GET    /messages/:message_id/comments/new          comments#new
edit_message_comment GET    /messages/:message_id/comments/:id/edit     comments#edit
     message_comment GET    /messages/:message_id/comments/:id          comments#show
                     PATCH  /messages/:message_id/comments/:id          comments#update
                     PUT    /messages/:message_id/comments/:id          comments#update
                     DELETE /messages/:message_id/comments/:id          comments#destroy
            messages GET    /messages                                   messages#index
                     POST   /messages                                   messages#create
         new_message GET    /messages/new                               messages#new
        edit_message GET    /messages/:id/edit                          messages#edit
             message GET    /messages/:id                               messages#show
                     PATCH  /messages/:id                               messages#update
                     PUT    /messages/:id                               messages#update
                     DELETE /messages/:id                               messages#destroy
----------------------------------------------------------------------------------------
```

## link routes

```bash
resources :magazines do
  resources :ads
end

<%= link_to 'Ad details', magazine_ad_path(@magazine, @ad) %>
<%= link_to 'Ad details', url_for([@magazine, @ad]) %>
<%= link_to 'Ad details', [@magazine, @ad] %>
<%= link_to 'Magazine details', @magazine %>
<%= link_to 'Edit Ad', [:edit, @magazine, @ad] %>
```

* [official rails routing](http://guides.rubyonrails.org/routing.html)
