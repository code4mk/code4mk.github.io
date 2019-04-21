
# usage

# middleware

Kapi has two types middleware one for spa/internal app another is user/developer app .

## spa

```php
Route::get('','')->middleware('kapix');
```
* `spa api works when equal to  config spa and your request http header data`

## developer api

```php
Route::get('','')->middleware('kapi');
```

* `developer api works when app is approved, not deactive or not block`

# methods

## developer

* create($authUserID,$appImage)
* oauth() `oauth app create`
  * `Kapi::oauth()->create($authUserID,$appImage)`
* update($appID,$authUserID,$image)
* showAuthUserApps($authUserID)
* showAuthUserOauth($authUserID)
* getAppInfo($appID,$authUserID)
* destroyApp($appID,$authUserID)
* refreshSecret($appID,$authUserID)
* activeApp($appID,$authUserID)
* deactiveApp($appID,$authUserID)

## site admin

~ admin/super-admin/owner

* apiAppApproval()
* apiOauthApproval()
* apiInfo($appID)
* apiAllApps() `only api apps`
* apiAllOauth() `oauth lists`
* apiApprove($appID)
* apiBlock($appID)
* apiUnblock($appID)
* apiBlockAppLists()` api app`
* apiBlockOauthLists() `oauth`
* apiDestroy($appID)
* apiAppLive() `api app`
* apiAppDeactivated()
* apiOauthLive() `oauth`
* apiOauthDeactivated()

## Koauth method

* checkApp()
* appInfo()
* checkOauth($appID,$authUserID)
* acceptApp($appID,$authUserID)
* sendEncrypToken($authUserID)
* decrypToken($token)
* authUserOauth($authUserID)
* revoke($oauthID,$authUserID)
* revokeAll($authUserID)

## extra method

* paginate($intenger)
* orderAsc()
*
