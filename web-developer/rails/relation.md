---
description: Associations / Relation Rails
keywords: ruby, rails, ruby on rails
title: Associations / Relation Rails
toc_max: 4
---

## What is Associations?




## types of Associations

6 types

* belongs_to
* has_one
* has_many
* has_many :through
* has_one :through
* has_and_belongs_to_many

## belongs_to

```rb
# book (author_id) <- author model
class Book < ApplicationRecord
  belongs_to :author
end
```

```rb
# author(book_id) <- book
class Author < ApplicationRecord
  belongs_to :book
end
```

## has_one

```rb
# book (author_id) <- author
class Author < ApplicationRecord
  has_one :book
end
```

## has_many

* ` one-to-many` reletionship

```rb
# book (author_id) <- author ( a  lot of authors)
class Author < ApplicationRecord
  has_many :book
end
```

## has_many :through
* `many to many` reletionship

```rb
class Physician < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments
end

class Appointment < ApplicationRecord
  belongs_to :physician
  belongs_to :patient
end

class Patient < ApplicationRecord
  has_many :appointments
  has_many :physicians, through: :appointments
end
```

* https://github.com/bodrovis/Sitepoint-source/blob/master/AR_Relations/app/models/user.rb
* http://guides.rubyonrails.org/association_basics.html
* https://youtu.be/zjyP_TThxNc?list=PLxxm_pv0QrIx9QtWDjuMWUQFJ3NCvxB1R
