
# instance slug with attribute id

```php
$article->save();
$articleID = $article->id;
$article->slug = $articleID.'-'.Str::slug($article->name, '-');
$article->save();
```


# id or slug find attribute

```js
Route::get('/courses/{param}', 'CourseDetailsController@index');
public function index($param)
{
    $post = Post::where('id', $param)
            ->orWhere('slug', $param)
            ->firstOrFail();
}
```

# find with slug
