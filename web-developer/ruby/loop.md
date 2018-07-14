---
description: Loop Ruby
keywords: ruby
title: Loop Ruby
toc_max: 4
---

## Loop / simple

```ruby
loop do
  puts "This will keep printing until you hit Ctrl + c "
  #break
end
```
* skip / break

```ruby
i = 0
loop do
  i += 2
  if i == 4
    next        # skip rest of the code in this iteration
  end
  puts i
  if i == 10
    break
  end
end
# 2 6 8 10
```

## while

```ruby
x = gets.chomp.to_i

while x >= 0
  puts x
  x = x - 1
end

puts "Done!"
```



## until

```ruby
x = gets.chomp.to_i

until x < 0
  puts x
  x -= 1
end

puts "Done!"

```

## for

```ruby
x = gets.chomp.to_i

for i in 1..x do
  puts i
end

puts "Done!"
```

## range

* `1..5` [1,2,3,4,5]

## source

* [launchschool](https://launchschool.com/books/ruby/read/loops_iterators#simpleloop)
* [wikibook](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures#Loops)
* [ruby doc](https://ruby-doc.org/core-2.2.0/doc/syntax/control_expressions_rdoc.html#label-while+Loop)
