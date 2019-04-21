
* https://www.tsdurjoy.com/2019/01/laravel-multiple-data-insert-into.html

```php
$pro = \Request::all();


// count how many raw you want
   $max = sizeof($pro{'product_name'});
// end

    for($i = 0; $i < $max;$i++)
    {
        $product =  new Product;
        $product->product_name = $pro{'product_name'}[$i];
        $product->brand = $pro{'brand'}[$i];
        $product->save();
    }
    });
    ```

    ```html
    <td><input type="text" name="product_name[]" class="form-control amount"></td>
     <td><input type="text" name="brand[]" class="form-control amount"></td>

    ```
