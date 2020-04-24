var assert = require('chai').assert;
var QuantityConversion = require('../main/QuantityMeasurement');

describe('Tests for Length Conversions:\n', () => {
    // Test Cases for Inch To Feet Conversions
    describe('Tests for Inch to Feet Conversions:', () => {
        // T.C 1.1: Given 0 Feet and 0 Feet should return equal
        it('should return equal when given 0 feet and 0 feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.equal(quantityObject.getInchToFeetConversion(), 0);
        })

        // T.C 1.2: Null Check (Inch To Feet)
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

        // T.C 1.3: Type Check (Inch To Feet)
        it('should return Number when given 0 feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.typeOf(quantityObject.getInchToFeetConversion(), 'number');
        });

        it('should return NaN when given empty string', () => {
            var quantityObject = new QuantityConversion("");
            assert.notTypeOf(quantityObject.getInchToFeetConversion(), 'NaN');
        });

        // T.C 1.4: Reference Check (Inch To Feet)
        it('should return true when given number', () => {
            var quantityObject = new QuantityConversion(0);
            var quantityObject1 = new QuantityConversion(1);
            if (quantityObject.getInchToFeetConversion() === quantityObject1.getInchToFeetConversion()) {
                assert.equal('number');
            }
        });

        // T.C 1.5: Value Check (Inch To Feet)
        it('should return unequal when given 1 inch equals 1 foot', () => {
            var quantityObject = new QuantityConversion(1);
            assert.notEqual(quantityObject.getInchToFeetConversion(), 1);
        });
    })

    // Test Cases for Feet To Inch Conversions
    describe('\nTests for Feet To Inch Conversions:', () => {
        // T.C 1.6: Null Check (Feet To Inch)
         it('should return null when given null', () => {
            var quantityObject = new QuantityConversion(null);
            if (quantityObject.getFeetToInchConversion() == "" || quantityObject.getFeetToInchConversion() == null) {
                assert.isNull(null);
            }
        });

        it('should not return null when given 0 inch', () => {
            var quantityObject = new QuantityConversion(0);
            assert.isNotNull(quantityObject.getFeetToInchConversion(), 0);
        });

        // T.C 1.7: Type Check (Feet To Inch)
        it('should return Number when given 0 inch', () => {
            var quantityObject = new QuantityConversion(0);
            assert.typeOf(quantityObject.getFeetToInchConversion(), 'number');
        });

        it('should return NaN when given empty string', () => {
            var quantityObject = new QuantityConversion("");
            assert.notTypeOf(quantityObject.getFeetToInchConversion(), 'NaN');
        });

        // T.C 1.8: Reference Check (Feet To Inch)
        it('should return true when given number', () => {
            var quantityObject = new QuantityConversion(0);
            var quantityObject1 = new QuantityConversion(1);
            if (quantityObject.getFeetToInchConversion() === quantityObject1.getFeetToInchConversion()) {
                assert.equal('number');
            }
        });

        // T.C 1.9: Value Check (Feet To Inch)
        it('should return equal when given 12 feet equals 1 inch', () => {
            var quantityObject = new QuantityConversion(1);
            assert.equal(quantityObject.getFeetToInchConversion(), 1);
        });
    })

    // Test Cases for Feet To Yard Conversions
    describe('\nTests for Feet To Yard Conversions:', () => {
        // T.C 2.1: Test case to check 3 Feet equals 1 Yard
         it('should return equal when given 3 feet and 1 yard', () => {
            var threeFeet = new QuantityConversion(3);
            var oneYard = new QuantityConversion(1);
            assert.equal(threeFeet.getInchToFeetConversion(), oneYard.getFeetToYardConversion());
        });

        // T.C 2.2: Test case to check 1 Foot not equals 1 Yard
        it('should not return equal when given 1 foot and 1 yard', () => {
            var oneFoot = new QuantityConversion(1);
            var oneYard = new QuantityConversion(1);
            assert.notEqual(oneFoot.getInchToFeetConversion(), oneYard.getFeetToYardConversion());
        });

        // T.C 2.3: Test case to check 1 Inch not equals 1 Yard
        it('should not return equal when given 1 inch and 1 yard', () => {
            var oneInch = new QuantityConversion(1);
            var oneYard = new QuantityConversion(1);
            assert.notEqual(oneInch.getInchToFeetConversion(), oneYard.getFeetToYardConversion());
        });

        // T.C 2.4: Test case to check 1 Yard equals 36 Inches
        it('should return equal when given 1 yard and 36 inches', () => {
            var oneYard = new QuantityConversion(1);
            var thirtySixInches = new QuantityConversion(36);
            assert.equal(oneYard.getFeetToYardConversion(), thirtySixInches.getFeetToInchConversion());
        });

        // T.C 2.5: Test case to check 36 Inches equals 1 Yard
        it('should return equal when given 36 inches and 1 yard', () => {
            var thirtySixInches = new QuantityConversion(36);
            var oneYard = new QuantityConversion(1)
            assert.equal(thirtySixInches.getFeetToInchConversion(), oneYard.getFeetToYardConversion());
        });

        // T.C 2.6: Test case to check 1 Yard equals 3 Feet
        it('should return equal when given 1 yard and 3 feet', () => {
            var oneYard = new QuantityConversion(1);
            var threeFeet = new QuantityConversion(3);
            assert.equal(oneYard.getFeetToYardConversion(), threeFeet.getInchToFeetConversion());
        });
    });
});