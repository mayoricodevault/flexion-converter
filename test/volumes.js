var convert = require('../lib'),
    assert = require('assert'),
    tests = {},
    ACCURACY = 1 / 10,
    customError = require('../lib/customError');

tests['cups to liters'] = function () {
    var expected = 6.1,
        actual = convert(25.6).from('cup').to('l');
    assert.ok(
        customError(expected, actual) < ACCURACY,
        'Expected: ' + expected + ', Actual: ' + actual
    );
};

tests['gallons to kelvin'] = function () {
    var expected = 19.4,
        actual = convert(73.12).from('gal').to('K');
    assert.ok(
        customError(expected, actual) < ACCURACY,
        'Expected: ' + expected + ', Actual: ' + actual
    );
};


module.exports = tests;
