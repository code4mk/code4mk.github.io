# ajax

* [sitepoint](https://www.sitepoint.com/use-jquerys-ajax-function/)

* ` <meta name="csrf-token" content="{{ csrf_token() }}">`
* https://itsolutionstuff.com/post/laravel-58-ajax-crud-tutorial-using-datatable-jsexample.html

```js
$ajax({
  accept: {
    //
  },
  converters: {
    //
  },
  dataType: 'string',
  beforeSend: function(){},
  url: 'string',
  method: 'string',
  data: {

  },
  headers: {
		        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		    }

})

```

```js
var editForm = $('#form-edit-contact');    				
  editForm.find('input[name="first_name"]').val(response.data.first_name);
  editForm.find('input[name="last_name"]').val(response.data.last_name);
  editForm.find('input[name="phone"]').val(response.data.phone);
  editForm.find('input[name="email"]').val(response.data.email);  
  $("#contact_id").val(response.data.id);  
  $("#modal-edit-contact").modal('show');
```

* `$.ajaxSetup({headers: {"X-Test-Header": "test-value"}})`

```js
$.ajax({
            url: URL,
            type: 'GET',
            dataType: 'json',
            headers: {
                'header1': 'value1',
                'header2': 'value2'
            },
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
               // CallBack(result);
            },
            error: function (error) {

            }
        });
```
