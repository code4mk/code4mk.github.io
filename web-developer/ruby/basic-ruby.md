---
description: Basic Ruby
keywords: ruby
title: Basic Ruby
toc_max: 4
---

## comments

```ruby
# Single line comments
=begin
This is multi line comment with begin and end
=end
```

## print / puts

* `puts` print with a new line
* `print` print only with one line

## String

```ruby
puts 'single qoute string'
puts "Double qoute string"
```

## symbol

* `:` symbol keyword
* fixed object id

```ruby
name = :'mostafa'
name2 = 'mostafa'

puts name.object_id
puts name2.object_id
```
