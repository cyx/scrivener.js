const EMAIL = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function valid() {
    this.validate();

    return {
        ok: this.errors.length === 0,
        errors: this.errors
    };
}

function assert_email(att) {
    var val = this.attributes[att];

    return this.assert_value(
        val && EMAIL.test(val),
        [att, 'not_email']
    );
}

function assert_present(att) {
    var val = this.attributes[att];

    this.assert_value(val, [att, 'not_present']);
}

function assert_value(val, tuple) {
    if (!val) {
        this.errors.push(tuple);
    }
}

var proto = {
    valid: valid,
    assert_present: assert_present,
    assert_email: assert_email,
    assert_value: assert_value
};

module.exports = function(validator) {
    var obj = Object.create(proto);

    obj.validate = validator;

    return function(attributes) {
        obj.attributes = attributes;
        obj.errors = [];

        return obj.valid();
    }
}
