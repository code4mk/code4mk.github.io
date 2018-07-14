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

## set & get

```rb
class User
  def initialize(name)
    @name = name
  end
  def set=(name)
    @name = name
  end
  def get
     puts @name
  end
end

p = User.new("mk")
p.set=("kamal")

p.get

# kamal
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
## module

* `module`, and `include` keywords

```ruby
module Swimmable
  def swim
    "I'm swimming!"
  end
end

class Animal; end

class Fish < Animal
  include Swimmable         # mixing in Swimmable module
end

class Mammal < Animal
end
```
## call class inside module

```ruby
module Mammal
  class Dog
    def speak(sound)
      p "#{sound}"
    end
  end

  class Cat
    def say_name(name)
      p "#{name}"
    end
  end
end
buddy = Mammal::Dog.new
kitty = Mammal::Cat.new
buddy.speak('Arf!')           # => "Arf!"
kitty.say_name('kitty')       # => "kitty"
```
* [module ruby doc](https://ruby-doc.org/core-2.2.0/Module.html)

## Inheritance vs Modules

| Inheritance  | Modules  |
|---|---|
|one class| multiple class|
|"is-a" relationship| "has-a" relationship|


## source

* [ruby doc](https://ruby-doc.org/core-2.2.0/Class.html)
* [wikibook](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)
* [wikibook 1](https://en.wikibooks.org/wiki/Ruby_Programming/Classes_and_objects)
* [launchschool oop ruby](https://launchschool.com/books/oo_ruby/read/inheritance#classinheritance)
