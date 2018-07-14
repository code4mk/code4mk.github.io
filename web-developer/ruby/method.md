---
description: methods Ruby
keywords: ruby
title: methods Ruby
toc_max: 4
---

## methods

methods is a function . it start with `def` keyword.

```ruby
def method_name(parameters)

end
```
* demo 1

```ruby
def method_name
  ## method body goes here
end
```
* demo 2 / parameter

```ruby
def method_name(msg)
  puts msg
end
```
* demo 3 / multiple parameters

```ruby
def method_name(msg, body)
  puts "This is " + msg + "body is here" + body
end
```

## default parameter

```ruby
def add_three(number,age=21)
  return number + age
end

returned_value = add_three(4)
puts returned_value
# 25
```

## rest parameter

```ruby
def add_three(number,*num)
  return  num
end

returned_value = add_three(4,5,5)
puts returned_value
# 5 5
```

## return

```ruby
def add_three(number)
  return number + 3
end

returned_value = add_three(4)
puts returned_value
```

## source

* [ruby doc](https://ruby-doc.org/core-2.2.0/Method.html)
* [wikibook](https://en.wikibooks.org/wiki/Ruby_Programming/Writing_methods)
* [launchschool](https://launchschool.com/books/ruby/read/methods)
