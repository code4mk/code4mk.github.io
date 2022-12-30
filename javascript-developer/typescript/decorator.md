---
description: A decorator is a function that takes in a target object.
keywords: node.js, js, typescript, ts
title: typescript decorator
toc_max: 4
---

## decorator

In TypeScript, a decorator is a function that takes in a target object (such as a class, method, or property) and returns a new object with the same structure, but possibly enhanced with additional features. Decorators are a language feature that allows you to annotate and modify classes and class members at design time.



`@` represent decorator `@test`

# method decorator

```ts
function auth(){
    return function (target: any, key: any, descriptor: PropertyDescriptor){
        let fn = descriptor.value
        let isAuth: boolean = false
        if (isAuth){
            descriptor.value = (...args: any) => {
                let f = fn(...args)
                return f
            }
        } else {
            descriptor.value = () => {
                return "login required"
            }
        }
    }
}

class User{
    @auth()
    profile(name: string){
        return("profile: " + name)
    }
}

let user: any = new User()
console.log(user.profile('kamal'))
```

# resources 

* [decorator official](https://www.typescriptlang.org/docs/handbook/decorators.html)
* [gist remojansen](https://gist.github.com/remojansen/16c661a7afd68e22ac6e)
* [class decorator](https://dev.to/danywalls/decorators-in-typescript-with-example-part-1-m0f)
* [decorator youtube - Ben Awad ***
](https://www.youtube.com/watch?v=bRAcWk9S-6g)
* [decorator codeburst ***](https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4)