---
description: Routing Rails
keywords: ruby, rails, ruby on rails
title: Routing Rails
toc_max: 4
---

## create migrations

```bash
rails g migration CreateProducts name:string
rails g migration AddPartNumberToProducts part_number:string
rails g migration AddUserRefToProducts user:references
```

* [official link](http://guides.rubyonrails.org/active_record_migrations.html)
