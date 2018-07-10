---
description: loop
keywords: python
title: loop
toc_max: 4
---

## for loop

```py
users = ["kamal","jamal","maruf","sadia"]

for name in users:
  print(name)
```

### break

```py
for i in range(1,10):
  if i == 5:
    break
  print(i)
# 1 2 3 4
```

### continue

```py
for i in range(1,10):
  if i == 5:
    continue
  print(i)
# 1 2 3 4 6 7 8 9
```

## while

```py
i = 0
while i <= 5:
  print(i)
  i = i + 1
# 0 1 2 3 4 5
```
