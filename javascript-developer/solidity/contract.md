# contract

as like other oop language solidity has contract that is similar to class.

```sol
contract Code4mk {
    // code will be here
}
```

## visibility

Solidity has 4 types visibility.

1. external
2. internal
3. public
4. private

### external

`external` function can accessable from own contract and other contract too.

```sol
function test() pure external returns(string memory){
    return('external function');
}
```

* access by `this.f()`

### public

`public`  access from any where as like other oop language.

### internal

`internal` only accessable from internally.





# source

* [official contract](https://solidity.readthedocs.io/en/latest/contracts.html)
