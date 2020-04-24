var assert = require('chai').assert;
var QuantityConversion = require('../main/QuantityMeasurement');

describe('Tests for Length Conversions:\n', () => {
    // Test Cases for Feet To Inch Conversions
    describe('Tests for Feet to Inch Conversions:\n', () => {
        // T.C 1.1: Given 0 Inch and 0 Inch should return equal
        it('should return equal when given 0 Feet and 0 Feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.equal(quantityObject.getFeetToInchConversion(), 0);
        })

        // T.C 1.2: Null Check (Feet To Inch)
         it('should return null when given null', () => {
            var quantityObject = new QuantityConversion(null);
            if (quantityObject.getFeetToInchConversion() == "" || quantityObject.getFeetToInchConversion() == null) {
                assert.isNull(null);
            }
        });

        it('should not return null when given 0 Feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.isNotNull(quantityObject.getFeetToInchConversion(), 0);
        });

        // T.C 1.3: Type Check (Feet To Inch)
        it('should return Number when given 0 Feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.typeOf(quantityObject.getFeetToInchConversion(), 'number');
        });

        it('should return NaN when given empty string', () => {
            var quantityObject = new QuantityConversion("");
            assert.notTypeOf(quantityObject.getFeetToInchConversion(), 'NaN');
        });

        // T.C 1.4: Reference Check (Feet To Inch)
        it('should return true when given number', () => {
            var quantityObject = new QuantityConversion(0);
            var quantityObject1 = new QuantityConversion(1);
            if (quantityObject.getFeetToInchConversion() === quantityObject1.getFeetToInchConversion()) {
                assert.equal('number');
            }
        });

        // T.C 1.5: Value Check (Feet To Inch)
        it('should return unequal when given 1 Inch and 1 Inch', () => {
            var quantityObject = new QuantityConversion(1);
            assert.notEqual(quantityObject.getFeetToInchConversion(), 1);
        });
    })

    // Test Cases for Inch To Feet Conversions
    describe('Tests for Inch To Feet Conversions:\n', () => {
        // T.C 1.6: Null Check (Inch To Feet)
         it('should return null when given null', () => {
            var quantityObject = new QuantityConversion(null);
            if (quantityObject.getInchToFeetConversion() == "" || quantityObject.getInchToFeetConversion() == null) {
                assert.isNull(null);
            }
        });

        it('should not return null when given 0 Feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.isNotNull(quantityObject.getInchToFeetConversion(), 0);
        });

        // T.C 1.7: Type Check (Inch To Feet)
        it('should return Number when given 0 Feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.typeOf(quantityObject.getInchToFeetConversion(), 'number');
        });

        it('should return NaN when given empty string', () => {
            var quantityObject = new QuantityConversion("");
            assert.notTypeOf(quantityObject.getInchToFeetConversion(), 'NaN');
        });

        // T.C 1.8: Reference Check (Inch To Feet)
        it('should return true when given number', () => {
            var quantityObject = new QuantityConversion(0);
            var quantityObject1 = new QuantityConversion(1);
            if (quantityObject.getInchToFeetConversion() === quantityObject1.getInchToFeetConversion()) {
                assert.equal('number');
            }
        });

        // T.C 1.9: Value Check (Inch To Feet)
        it('should return equal when given 1 Feet', () => {
            var quantityObject = new QuantityConversion(12);
            assert.equal(quantityObject.getInchToFeetConversion(), 1);
        });
    })
})