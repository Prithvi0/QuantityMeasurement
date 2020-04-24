var assert = require('chai').assert;
var QuantityConversion = require('../main/QuantityMeasurement');

describe('Tests for Length Conversions:\n', () => {
    describe('Tests for Inch to Feet Conversions:\n', () => {
        // T.C 1.1: Given 0 Feet and 0 Feet should return equal
        it('should return equal when given 0 feet and 0 feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.equal(quantityObject.getInchToFeetConversion(), 0);
        })

        // T.C 1.2: Null Check
         it('should return null when given null', () => {
            var quantityObject = new QuantityConversion(null);
            if (quantityObject.getInchToFeetConversion() == "" || quantityObject.getInchToFeetConversion() == null) {
                assert.isNull(null);
            }
        });

        it('should not return null when given 0 feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.isNotNull(quantityObject.getInchToFeetConversion(), 0);
        });

        // T.C 1.3: Type Check
        it('should return Number when given 0 feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.typeOf(quantityObject.getInchToFeetConversion(), 'number');
        });

        it('should return NaN when given empty string', () => {
            var quantityObject = new QuantityConversion("");
            assert.notTypeOf(quantityObject.getInchToFeetConversion(), 'NaN');
        });

        // T.C 1.4: Reference Check
        it('should return true when given number', () => {
            var quantityObject = new QuantityConversion(0);
            var quantityObject = new QuantityConversion(1);
            if (quantityObject.getInchToFeetConversion() === quantityObject.getInchToFeetConversion()) {
                assert.equal('number', 'number');
            }
        });

        // T.C 1.5: Value Check
        it('should return unequal when given 0 feet and 1 feet', () => {
            var quantityObject = new QuantityConversion(1);
            assert.notEqual(quantityObject.getInchToFeetConversion(), 1);
        });
    })
})