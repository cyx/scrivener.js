var scrivener = require("./scrivener")
var assert = require("assert");

// create a sample filter for the typical signup flow
var signup = scrivener(function() {
    this.assert_email('email');
    this.assert_present('lname');
    this.assert_present('fname');
})

// case 1: valid
var res = signup({
    email: "cyx@cyx.is",
    fname: "Cyril",
    lname: "David"
})

assert(res.ok);

// case 2: all errors present
var res = signup({})

assert(! res.ok)
assert(res.errors.length == 3)
assert(res.errors[0][0] == "email")
assert(res.errors[0][1] == "not_email")
assert(res.errors[1][0] == "lname")
assert(res.errors[1][1] == "not_present")
assert(res.errors[2][0] == "fname")
assert(res.errors[2][1] == "not_present")

// case 3: some errors present
var res = signup({email: "cyx@cyx.is"})

assert(! res.ok)
assert(res.errors.length == 2)
assert(res.errors[0][0] == "lname")
assert(res.errors[0][1] == "not_present")
assert(res.errors[1][0] == "fname")
assert(res.errors[1][1] == "not_present")

// we've won ;-)
console.log("All tests passed.")
