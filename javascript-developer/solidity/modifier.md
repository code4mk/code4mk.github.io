# modifier

* modifier change the function behaviour. it woeks as like middleware also.

```sol
modifier onlyOwner {
        require(
            msg.sender == owner,
            "Only owner can call this function."
        );
        _;
    }
// use modifier
function human() view public onlyOwner {
    //
}
```

* [video coursestro](https://coursetro.com/posts/code/101/Solidity-Modifier-Tutorial---Control-Functions-with-Modifiers)

* [modifier official](https://solidity.readthedocs.io/en/latest/contracts.html#function-modifiers)
* [video](https://youtu.be/qkBAwyJWjLA?list=PLL5pYVd8AWtQJ3Ne1nkBbrQpD7L8C36SF&t=397)
