

# `Illuminate\Mail`

* [Illuminate\mail](https://github.com/laravel/framework/tree/5.7/src/Illuminate/Mail)
* [mail facades](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Support/Facades/Mail.php)


* https://scotch.io/tutorials/ultimate-guide-on-sending-email-in-laravel

* [mail laracast video](https://laracasts.com/search?q=mail)


## mail process

* `make:mail WelcomeMailHere`
  * http/mail/welcome/WelcomeMailHere.php
    * `public variable auto accessable by view`
    * `pass data by ->with['name'=>$this->user]` and `access` by view `$name` variable

    *  ```php
        public $name;
        public __construct($name) {
          $this->name = $name;
        }
        function build(){
          return $this->from('your_company_email')
                      ->subject('subject')
                      ->view('parrot.mails.welcome')
                      ->with(['user'=>$this->name]);
        }
        ```
* `controller`
  ```php
  use mailNamespace (WelcomeMailHere);
  $data = new WelcomeMailHere($pass_data);
  Mail::to('customer@gmail.com')->send($data)
  ```

* `blade`

  ```php
  {{ $user }}
  ```
   * configure viewConfig
    * set path `realpath(base_path('parrot'))`
