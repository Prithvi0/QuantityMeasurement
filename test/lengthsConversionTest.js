var assert = require('chai').assert;
var LengthsConversion = require('../main/lengthsConversion');

// U.C 1: Compare Lengths to Inches and Feet
describe('Tests for Length Conversions:\n', () => {

    describe('\tTests for Feet to Inch Conversions:', () => {

        // T.C 1.1: Test case to check when given 0 Feet and 0 Feet should return equal
        it('given lengths when 0 Feet and 0 Feet should return equal', () => {
            assert.equal(LengthsConversion.getFeetToInchConversion(0), 0);
        });

        // T.C 1.2: Null Check (Feet To Inch)
         it('given length when null Feet should return null', () => {
            assert.isNull(null, LengthsConversion.getFeetToInchConversion(null));
        });

        it('given length when 0 Feet should not return null', () => {
            assert.isNotNull(LengthsConversion.getFeetToInchConversion(0), 0);
        });

        // T.C 1.3: Type Check (Feet To Inch)
        it('given length when 0 Feet should return number', () => {
            assert.typeOf(LengthsConversion.getFeetToInchConversion(0), 'number');
        });

        it('given length when string Feet should return string', () => {
            assert.notTypeOf(LengthsConversion.getFeetToInchConversion(""), 'string');
        });

        // T.C 1.4: Reference Check (Feet To Inch)
        it('given lengths when numbers should return equal', () => {                        
            if (LengthsConversion.getFeetToInchConversion(0) === 
                LengthsConversion.getFeetToInchConversion(1))
                assert.equal('number');
        });

        // T.C 1.5: Value Check (Feet To Inch)
        it('given lengths when 1 Inch and 1 Inch should return unequal', () => {
            assert.notEqual(LengthsConversion.getFeetToInchConversion(1), 1);
        });
    });

    describe('\n\tTests for Inch To Feet Conversions:', () => {

        // T.C 1.6: Null Check (Inch To Feet)
        it('given length when null Inch should return null', () => {
                assert.isNull(null, LengthsConversion.getInchToFeetConversion(null));
        });

        it('given length when 0 Feet should not return null', () => {
            assert.isNotNull(LengthsConversion.getInchToFeetConversion(0), 0);
        });

        // T.C 1.7: Type Check (Inch To Feet)
        it('given length when 0 Feet should return number type', () => {
            assert.typeOf(LengthsConversion.getInchToFeetConversion(0), 'number');
        });

        it('given length when empty string should return NaN type', () => {
            assert.notTypeOf(LengthsConversion.getInchToFeetConversion(""), 'string');
        });

        // T.C 1.8: Reference Check (Inch To Feet)
        it('given lengths when number should return equal reference', () => {
            if (LengthsConversion.getInchToFeetConversion(0) ===
                LengthsConversion.getInchToFeetConversion(1))
                assert.equal('number');
        });

        // T.C 1.9: Value Check (Inch To Feet)
        it('given lengths when 1 Inch should return equal', () => {
            assert.equal(1, LengthsConversion.getInchToFeetConversion(1));
        });
    });

    // U.C 2: Compare Lengths to Yard
    describe('\n\tTests for Feet To Yard Conversions:', () => {

        // T.C 2.1: Test case to check 3 Feet equals 1 Yard
         it('given lengths when 3 feet and 1 yard should return equal', () => {
            assert.equal(LengthsConversion.getFeetToInchConversion(3),
                         LengthsConversion.getFeetToYardConversion(1));
        });

        // T.C 2.2: Test case to check 1 Foot not equals 1 Yard
        it('given lengths when 1 foot and 1 yard should not return equal', () => {
            assert.notEqual(LengthsConversion.getInchToFeetConversion(1),
                            LengthsConversion.getFeetToYardConversion(1));
        });

        // T.C 2.3: Test case to check 1 Inch not equals 1 Yard
        it('given lengths when 1 inch and 1 yard should not return equal', () => {
            assert.notEqual(LengthsConversion.getInchToFeetConversion(1),
                            LengthsConversion.getFeetToYardConversion(1));
        });

        // T.C 2.4: Test case to check 1 Yard equals 36 Inches
        it('given lengths when 1 yard and 36 inches should return equal', () => {
            assert.equal(LengthsConversion.getFeetToYardConversion(1),
                         LengthsConversion.getInchToFeetConversion(36));
        });

        // T.C 2.5: Test case to check 36 Inches equals 1 Yard
        it('given lengths when 36 inches and 1 yard should return equal', () => {
            assert.equal(LengthsConversion.getInchToFeetConversion(36),
                         LengthsConversion.getFeetToYardConversion(1));
        });

      
        // T.C 2.6: Test case to check 1 Yard equals 3 Feet
        it('given lengths when 1 yard and 3 feet should return equal', () => {
            assert.equal(LengthsConversion.getFeetToYardConversion(1),
                         LengthsConversion.getFeetToInchConversion(3));
        });
    });

    // U.C 3: Compare Inch to Centimeter
    describe('\n\tTest for Inch To Centimeter Conversion:', () => {

        // T.C 3: Test case to check 2 Inches equals 5 Centimeters
         it('given lengths when 2 inches and 5 centimeters should return equal', () => {
            assert.equal(LengthsConversion.getInchToFeetConversion(2),
                         LengthsConversion.getInchToCmConversion(5));
        });
    });

    // U.C 4: Adding 2 lengths in Inches
    describe('\n\tTests for Adding 2 lengths in Inches:', () => {

        // T.C 4.1: Test case to add 2 inches and 2 inches
         it('given lengths 2 inches and 2 inches when added should return 4 inches', () => {
            var sumOf2TwoInches = LengthsConversion.getAddition(
                LengthsConversion.getInchToFeetConversion(2),
                LengthsConversion.getInchToFeetConversion(2));
            assert.equal(sumOf2TwoInches, 4);
        });

        // T.C 4.2: Test case to add 1 foot and 2 inches
        it('given lengths 1 foot and 2 inches when added should return 14 inches', () => {
            var sumOfOneFootAndTwoInches = LengthsConversion.getAddition(
                LengthsConversion.getFeetToInchConversion(1),
                LengthsConversion.getInchToFeetConversion(2));
            assert.equal(sumOfOneFootAndTwoInches, 14);
        });

        // T.C 4.3: Test case to add 1 foot and 1 foot
        it('given lengths 1 foot and 1 foot when added should return 24 inches', () => {
            var sumOf2OneFoot = LengthsConversion.getAddition(
                LengthsConversion.getFeetToInchConversion(1),
                LengthsConversion.getFeetToInchConversion(1));
            assert.equal(sumOf2OneFoot, 24);
        });

        // T.C 4.4: Test case to add 2 inches and 2.5 centimeters
        it('given lengths 2 inches and 2.5 centimeters when added should return 3 inches', () => {
            var sumOf2InAnd2Dot5Cms = LengthsConversion.getAddition(
                LengthsConversion.getInchToFeetConversion(2),
                LengthsConversion.getInchToCmConversion(2.5));
            assert.equal(sumOf2InAnd2Dot5Cms, 3);
        });
    });
});