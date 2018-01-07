---
description: Variable ruby
keywords: ruby
title: Variable ruby
toc_max: 4
---

## local variable

* start with downcase or
* underscore

```ruby
name = "Mostafa Kamal"
_age = 54
```

## Constant variable

* start with Upcase

```ruby
AgeKamal = 21
```
## Parallel assign variables

```ruby
name1, name2 = 'kamal', 'jamal'
```

## symbol variables

## instance variable

```ruby
@insVar = 'This is instance variable'
```
## class variable
*  class variable access from toplevel

```ruby
@@classVar = "This is class variable"
```

## global variable

```ruby
$globalVar = "This is global variable"
```

## psuedo variables

```ruby
=begin
 self , true, false, nil, __FILE__, __LINE__
=end
```

## access variables

```ruby
puts name
puts "he is #{AgeKamal} and #{age}"
```
## input from user

```ruby
name = gets
name = gets.chomp
```
# source
* [wiki book](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants)
* [launchschool](https://launchschool.com/books/ruby/read/variables#whatisavariable)
