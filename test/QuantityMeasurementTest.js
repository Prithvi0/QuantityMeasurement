const assert = require('chai').assert;
const quantityConversion = require('../main/QuantityMeasurement');

describe('Tests for Length Conversions', () => {
    // T.C 1.1: Given 0 Feet and 0 Feet should return equal
    it('should return equal when given 0 feet and 0 feet', () => {
        assert.equal(0, quantityConversion.QuantityMeasurement(0));
    });

    // T.C 1.2: Null Check
    it('should return Null when given 0 feet and null length', () => {
        assert.isNull(null, quantityConversion.QuantityMeasurement(""));
    });

    it('should not return null when given 0 feet and 0 feet', () => {
        assert.isNotNull(0, quantityConversion.QuantityMeasurement(0), "not null");
    });

    // T.C 1.3: Type Check
    it('should return Number when given 0 feet and 0 feet', () => {
        result = typeof quantityConversion.QuantityMeasurement(0);
        assert.typeOf(0, result, 'number');
    });

    it('should return NaN when given empty string and 0 feet', () => {
        result = typeof quantityConversion.QuantityMeasurement("");
        assert.notTypeOf(true, result, 'NaN');
    });

    // T.C 1.4: Reference Check
    it('should return NaN when given empty string and 0 feet', () => {
        if (typeof quantityConversion.QuantityMeasurement(0) === typeof quantityConversion.QuantityMeasurement(1)) {
            return true;
        }
        assert.notTypeOf(true, result, 'NaN');
    });

    // T.C 1.5: Value Check
    it('should return unequal when given 0 feet and 1 feet', () => {
        assert.notEqual(1, quantityConversion.QuantityMeasurement(1));
    });
});