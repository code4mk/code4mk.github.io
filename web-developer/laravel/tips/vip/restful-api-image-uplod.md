---
description: Laravel RESTful api or ajax file upload
keywords: laravel, php, file , restapi
title: Laravel RESTful api file upload
toc_max: 4
---
# RESTful api image upload

## single image upload

* html

```html
<form class="" id="image-upload-form">
    <input type='file' name="select_file" id="myfile" />
    <button type="submit" name="button">submit</button>
</form>
```

* js  

```js
document.getElementById('myfile').addEventListener('change', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    var formData = new FormData();
    formData.append("file", document.getElementById("myfile").files[0]);
    $.ajax({
         data: formData,
         url: '{{ route('file.upload.test')}}',
         type: "POST",
         dataType: 'json',
         processData: false,
         contentType: false,
         xhr: function() {
             var xhr = new window.XMLHttpRequest();
             xhr.upload.addEventListener("progress", function(evt) {
                 if (evt.lengthComputable) {
                     var percentComplete = (evt.loaded / evt.total) * 100;
                     //Do something with upload progress here
                     console.log(percentComplete);
                 }
            }, false);
            return xhr;
         },
         success: function (data) {
             console.log(data)
         },
         error: function (data) {
             //console.log('Error:', data);
         }
     })
}
```

* laravel php

```php
use File;
use Storage;
use Illuminate\Http\Request;
class Test extends controllers {
    public function store(Request $request)
    {
        $file = $request->file('file');
        Storage::disk('local')
                ->put($file->getClientOriginalName(),File::get($file));
    }
}

```

## Multiple image upload

* html

```html
<form>
    <input type='file' name="select_file[]" id="myfile" multiple />
</form>
```

* js  

```js
document.getElementById('myfile').addEventListener('change', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    var formData = new FormData();
    var filesLength=document.getElementById('myfile').files.length;
    for(var i=0;i<filesLength;i++){
        formData.append("files[]", document.getElementById('myfile').files[i]);
    }
  formData.append("msg", 'This is kamal');
    $.ajax({
         data: formData,
         url: '{{ route('file.upload.test')}}',
         type: "POST",
         dataType: 'json',
         processData: false,
         contentType: false,
         xhr: function() {
             var xhr = new window.XMLHttpRequest();
             xhr.upload.addEventListener("progress", function(evt) {
                 if (evt.lengthComputable) {
                     var percentComplete = (evt.loaded / evt.total) * 100;
                     //Do something with upload progress here
                     console.log(percentComplete);
                 }
            }, false);
            return xhr;
         },
         success: function (data) {
             console.log(data)
         },
         error: function (data) {
             //console.log('Error:', data);
         }
     })
}
```

* laravel php

```php
use File;
use Storage;
use Illuminate\Http\Request;
class Test extends controllers {
    public function store(Request $request)
    {
        if ($request->hasfile('files')) {
            foreach ($request->file('files') as $file) {
                Storage::disk('local')
                    ->put('kamal/'.$file->getClientOriginalName(),File::get($file));
            }
        }
    }
}
```
