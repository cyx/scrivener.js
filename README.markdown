# scrivener

Inspired from the ruby version from @soveran/scrivener

## usage

```javascript
var scrivener = require("scrivener")
var assert = require("assert");

-- create a sample filter for the typical signup flow
var signup = scrivener(function () {
    this.assert_email('email');
    this.assert_present('lname');
    this.assert_present('fname');
})

var res = signup({
    email: "cyx@cyx.is",
    fname: "Cyril",
    lname: "David"
})

assert(res.ok);
assert(res.errors.length === 0);
```

## license

MIT
