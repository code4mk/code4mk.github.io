---
description: Array Ruby
keywords: ruby
title: Array Ruby
toc_max: 4
---

```ruby
arr = [1, 2, 3, 4, 5, 6]
arr.first #=> 1
arr.last  #=> 6
arr[2]    #=> 3
arr[100]  #=> nil
arr[-3]   #=> 4
arr[2, 3] #=> [3, 4, 5]
arr[1..4] #=> [2, 3, 4, 5]
arr[1..-3] #=> [2, 3, 4]
arr.take(3) #=> [1, 2, 3]
arr.drop(3) #=> [4, 5, 6]
arr.include?(7) #=> false
arr.push(5) #=> [1, 2, 3, 4, 5]
arr << 6    #=> [1, 2, 3, 4, 5, 6]
```

# looping array

```ruby
arr = [1, 2, 3, 4, 5]
arr.each { |a| print a -= 10, " " }
# prints: -9 -8 -7 -6 -5
#=> [1, 2, 3, 4, 5]
```

* [source](https://ruby-doc.org/core-2.2.0/Array.html)
