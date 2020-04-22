const assert = require('chai').assert;
const quantityConversion = require('../main/QuantityMeasurement');

// T.C 1.1: Given 0 Feet and 0 Feet should return equal
describe('Tests for Length Conversions', () => {
    it('should return true when given 0 feet and 0 feet', () => {
        assert.equal(true, quantityConversion.inchToFeetConversion(0,0));
    });
});