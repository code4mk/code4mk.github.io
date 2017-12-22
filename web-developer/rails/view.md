---
description: view Rails
keywords: ruby, rails, ruby on rails
title: view Rails
toc_max: 4
---

## what is view  

```bash
rails generate scaffold article
```


##  parts of views
* template
* partials
* layouts

~ extension is `.erb` that mean `embedded ruby`

## basic

|`<% %>` |`<%= %>`  |
|---|---|
|no output| output |
|conditions, loops or blocks | html |
|execute ruby | output as view|

## partials

```bash
<%= render "menu" %>
```

## render

```bash
render :edit
render action: :edit
render "edit"
render "edit.html.erb"
render action: "edit"
render action: "edit.html.erb"
render "books/edit"
render "books/edit.html.erb"
render template: "books/edit"
render template: "books/edit.html.erb"
render "/path/to/rails/app/views/books/edit"
render "/path/to/rails/app/views/books/edit.html.erb"
render file: "/path/to/rails/app/views/books/edit"
render file: "/path/to/rails/app/views/books/edit.html.erb"
render inline: "<% products.each do |p| %><p><%= p.name %></p><% end %>"
render plain: "OK"
render html: "<strong>Not Found</strong>".html_safe
render json: @product
render xml: @product
render js: "alert('Hello Rails');"
render body: "raw"
render status: 500
render status: :forbidden
```

* [status code](https://code4mk.org/web-developer/rails/status-code)


## Structuring Layouts

* Assets tag
* yeild tag (content_for)
* partials

### Assets tag

|tag |tag  |  tag |
|---|---|---|
auto_discovery_link_tag|javascript_include_tag|stylesheet_link_tag|
|image_tag|video_tag|audio_tag|


#### javascript_include_tag

```bash
<%= javascript_include_tag "main" %>
# output
<script src='/assets/main.js'></script>
```

```bash
<%= javascript_include_tag "main", "columns" %>
<%= javascript_include_tag "https://example.com/main.js" %>
```

#### stylesheet_link_tag

```bash
<%= stylesheet_link_tag "main" %>
<%= stylesheet_link_tag "main", "photos/columns" %>
# output
 app/assets/stylesheets/main.css and app/assets/stylesheets/photos/columns.css
# direct cdn
<%= stylesheet_link_tag "http://example.com/main.css" %>
```

#### image_tag

```bash
<%= image_tag "icons/delete.gif" %>
<%= image_tag "icons/delete.gif", {height: 45} %>
<%= image_tag "home.gif", alt: "Home" %>
# full demo of image tag
<%= image_tag "home.gif", alt: "Go Home", id: "HomeImage", class: "nav_bar" %>
```

#### video_tag

```bash
<video src="/videos/movie.ogg" />
```

#### audio_tag

```bash
<%= audio_tag "music/first_song.mp3" %>
```

* [official link](http://guides.rubyonrails.org/layouts_and_rendering.html)

### yield

yield is a inserted process.

```rb
<html>
  <head>
  <%= yield :head %>
  </head>
  <body>
  <%= yield %>
  </body>
</html>
```

#### content_for

this is use for named yeild `:head`

```bash
<% content_for :head do %>
  <title>This is a content for part</title>
<% end %>
```
