---
description: Routing Rails
keywords: ruby, rails, ruby on rails
title: Routing Rails
toc_max: 4
---

## What is routing ?





## routing demo structure

```bash
      Prefix Verb   URI Pattern               Controller#Action
       users GET    /users(.:format)          users#index
             POST   /users(.:format)          users#create
    new_user GET    /users/new(.:format)      users#new
   edit_user GET    /users/:id/edit(.:format) users#edit
        user GET    /users/:id(.:format)      users#show
             PATCH  /users/:id(.:format)      users#update
             PUT    /users/:id(.:format)      users#update
             DELETE /users/:id(.:format)      users#destroy
 test_photos GET    /test/photos(.:format)    test#photos
 ```
