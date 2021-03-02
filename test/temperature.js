var convert = require('../lib'),
    assert = require('assert'),
    tests = {},
    ACCURACY = 1 / 10,
    customError = require('../lib/customError');

tests['Fahrenheit to Rankine'] = function () {
    assert.strictEqual(convert(84.2).from('F').to('R'), 543.87);
};


tests['Fahrenheit to Rankine'] = function () {
    var expected = 'dog',
        actual = convert(6.5).from('F').to('R');
    assert.ok(
        customError(expected, actual) < ACCURACY,
        'Expected: ' + expected + ', Actual: ' + actual
    );
};

// tests['Kelvin to Fahrenheit'] = function () {
//     assert.strictEqual(convert(317.33).from('K').to('F'), 111.524);
// };

// tests['Gallons to Kelvin'] = function () {
//     assert.strictEqual(convert(73.12).from('G').to('K'), 19.04);
// };


module.exports = tests;
