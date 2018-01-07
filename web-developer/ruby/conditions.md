---
description: Conditions ruby
keywords: ruby
title: Conditions ruby
toc_max: 4
---
## flow control

`<, >, <=, >=, ==, !=, &&, ||`

## if/else

```ruby
puts "Put in a number"
a = gets.chomp.to_i

if a == 3
  puts "a is 3"
elsif a == 4
  puts "a is 4"
else
  puts "a is neither 3, nor 4"
end
```

## case
case is basically switch case

```ruby
a = 5

case a
when 5
  puts "a is 5"
when 6
  puts "a is 6"
else
  puts "a is neither 5, nor 6"
end
```
## source

* [launchschool](https://launchschool.com/books/ruby/read/flow_control##conditionals)
* [wikibook](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures)
* [ruby doc](https://ruby-doc.org/core-2.2.0/doc/syntax/control_expressions_rdoc.html)
