

# define solidity version

on the top of code you need to assign solidity version with pragma

```sol
pragma solidity "0.5.1";
```

* string must be double quote.


## constructor

solidity constructor simillar other oop langauge.

```sol
contract Code4mk {
    string name;
    constructor(string memory _name) public {
        name = _name;
    }
}
