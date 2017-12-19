---
description: Callbacks Rails
keywords: ruby, rails, ruby on rails, callback, model
title: Callbacks Rails
toc_max: 4
---

## Callbacks
### 1

|callback |Creating  |  Updating |  Destroying |
|---|---|---|---|
|before_validation| ✔ | ✔ |✘|
|after_validation| ✔ | ✔ |✘|
|before_save| ✔ | ✔ |✘|
|around_save| ✔ | ✔ |✘|
|before_create| ✔ | ✔ |✘|
|around_create| ✔ | ✔ |✘|
|after_create| ✔ | ✔ |✘|
|after_save| ✔ | ✔ |✘|
|after_commit/after_rollback|✘|✘| ✔ |
|before_destroy|✘ | ✘| ✔ |
|around_destroy|✘ | ✘| ✔  |
|after_destroy|✘ | ✘| ✔  |

### 2

|callback |callback  |  callback |  callback |
|---|---|---|---|
|after_initialize|after_find|after_touch|

### 3 Running Callbacks

|callback |callback  |  callback |  callback |
|---|---|---|---|
|create|create!|destroy|destroy!|
|destroy_all|save|save!|save(validate: false)|
|toggle!|update_attribute|update|update!|
|valid?|.|.|.|

### 4 Skipping Callbacks

|callback |callback  |  callback |  callback |
|---|---|---|---|
|decrement|decrement_counter|delete|delete_all|
|increment|increment_counter|toggle|touch|
|update_column|update_columns|update_all|update_counters|


* [Ofiicila link](http://guides.rubyonrails.org/active_record_callbacks.html)
