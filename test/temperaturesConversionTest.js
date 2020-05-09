var assert = require('chai').assert;
var TemperaturesConversion = require('../main/temperaturesConversion');

// U.C 8: Equate temperature in Fahrenheit and Celsius
describe('Test to equate Temperature in Fahrenheit and Celsius:\n', () => {

    // T.C 8.1: Test case to check 100 celsius equals 212 fahrenheit
    it('given temperature when 100 celsius should return 212 fahrenheit', () => {
        assert.equal(TemperaturesConversion.getCelsiusToFahrenheitConversion(100),
                    TemperaturesConversion.getFahrenheitToCelsiusConversion(212));
    });

    // T.C 8.2: Test case to check 5 fahrenheit and -15 celsius
    it('given temperature when 5 fahrenheit should return -15 celsius', () => {
        assert.equal(TemperaturesConversion.getFahrenheitToCelsiusConversion(5),
                     TemperaturesConversion.getCelsiusToFahrenheitConversion(-15));
    });
});