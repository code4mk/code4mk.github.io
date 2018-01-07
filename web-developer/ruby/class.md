---
description: class Ruby
keywords: ruby
title: class Ruby
toc_max: 4
---

## class

class is a blueprint

* class keyword
* CamelCase

```ruby
class Name
 # some code describing the class behavior
end

yo = Name.new
```

* `anObject = MyClass.new(parameters)`

## methods calling

```ruby
class Name
 def method_1
   puts 'methods 1'
 end
 def method_2
   puts 'methods 2'
 end
 def method_3
   puts 'methods 3'
 end
end

yo = Name.new
yo.method_1
yo.method_2
yo.method_3

```

## Inheritence

```ruby
class Age
 puts 'age is 21'
end

class Name < Age
  puts 'name is kamal'
end
```



## self

```ruby
class Integer
  def more
    return self + 1
  end
end
6.more # -> 7
```

* [source](https://ruby-doc.org/core-2.2.0/Class.html)
* [wikibook](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)
* [wikibook 1](https://en.wikibooks.org/wiki/Ruby_Programming/Classes_and_objects)
