---
description: view Rails
keywords: ruby, rails, ruby on rails
title: view Rails
toc_max: 4
---

## what is view  


##  parts of views
* template
* partials
* layouts

~ extension is `.erb` embedded ruby

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

### video_tag

```bash
<video src="/videos/movie.ogg" />
```

#### audio_tag 

```bash
<%= audio_tag "music/first_song.mp3" %>
```
