var assert = require('chai').assert;
var QuantityConversion = require('../main/QuantityMeasurement');

// Test cases for the Length Conversions
describe('Tests for Length Conversions:\n', () => {
    //U.C 1: Compare Lengths to Inches and Feet 
    describe('Tests for Feet to Inch Conversions:', () => {
        // T.C 1.1: Test case to check when given 0 Feet and 0 Feet should return equal
        it('should return equal when given 0 Feet and 0 Feet', () => {
            var quantityObject = new QuantityConversion(0);
            assert.equal(quantityObject.getFeetToInchConversion(), 0);
        });

        // T.C 1.2: Null Check (Feet To Inch)
         it('should return null when given null', () => {
            var quantityObject = new QuantityConversion(null);
            if (quantityObject.getFeetToInchConversion() == ""
                || quantityObject.getFeetToInchConversion() == null) {
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
    });

    // Test Cases for Inch To Feet Conversions
    describe('\nTests for Inch To Feet Conversions:', () => {
        // T.C 1.6: Null Check (Inch To Feet)
        it('should return null when given null', () => {
            var quantityObject = new QuantityConversion(null);
            if (quantityObject.getInchToFeetConversion() == ""
                || quantityObject.getInchToFeetConversion() == null) {
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
        it('should return equal when given 1 Inches', () => {
            var quantityObject = new QuantityConversion(1);
            assert.equal(quantityObject.getInchToFeetConversion(),
                        quantityObject.getInchToFeetConversion());
        });
    });

    // U.C 2: Compare Lengths to Yard
    describe('\nTests for Feet To Yard Conversions:', () => {
        // T.C 2.1: Test case to check 3 Feet equals 1 Yard
         it('should return equal when given 3 feet and 1 yard', () => {
            var threeFeet = new QuantityConversion(3);
            var oneYard = new QuantityConversion(1);
            assert.equal(threeFeet.getFeetToInchConversion(), oneYard.getFeetToYardConversion());
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
            assert.equal(oneYard.getFeetToYardConversion(), thirtySixInches.getInchToFeetConversion());
        });

        // T.C 2.5: Test case to check 36 Inches equals 1 Yard
        it('should return equal when given 36 inches and 1 yard', () => {
            var thirtySixInches = new QuantityConversion(36);
            var oneYard = new QuantityConversion(1)
            assert.equal(thirtySixInches.getInchToFeetConversion(), oneYard.getFeetToYardConversion());
        });

      
        // T.C 2.6: Test case to check 1 Yard equals 3 Feet
        it('should return equal when given 1 yard and 3 feet', () => {
            var oneYard = new QuantityConversion(1);
            var threeFeet = new QuantityConversion(3);
            assert.equal(oneYard.getFeetToYardConversion(), threeFeet.getFeetToInchConversion());
        });
    });

    // U.C 3: Compare Inch to Centimeter
    describe('\nTest for Inch To Centimeter Conversion:', () => {
        // T.C 3: Test case to check 2 Inches equals 5 Centimeters
         it('should return equal when given 2 inches and 5 centimeters', () => {
            var twoInches = new QuantityConversion(2);
            var fiveCentimeters = new QuantityConversion(5);
            assert.equal(twoInches.getInchToFeetConversion(), fiveCentimeters.getInchToCmConversion());
        });
    });

    // U.C 4: Adding 2 lengths in Inches
    describe('\nTests for Adding 2 lengths in Inches:', () => {
        // T.C 4.1: Test case to add 2 inches and 2 inches
         it('should return 4 inches when added 2 inches and 2 inches', () => {
            var twoInches = new QuantityConversion(2);
            var sumOf2TwoInches = twoInches.getInchToFeetConversion()
                                + twoInches.getInchToFeetConversion();
            assert.equal(sumOf2TwoInches, 4);
        });

        // T.C 4.2: Test case to add 1 foot and 2 inches
        it('should return 14 inches when added 1 foot and 2 inches', () => {
            var oneFoot = new QuantityConversion(1);
            var twoInches = new QuantityConversion(2);
            var sumOfOneFootAndTwoInches = oneFoot.getFeetToInchConversion()
                                        + twoInches.getInchToFeetConversion();
            assert.equal(sumOfOneFootAndTwoInches, 14);
        });

        // T.C 4.3: Test case to add 1 foot and 1 foot
        it('should return 24 inches when added 1 foot and 1 foot', () => {
            var oneFoot = new QuantityConversion(1);
            var sumOf2OneFoot = oneFoot.getFeetToInchConversion() + oneFoot.getFeetToInchConversion();
            assert.equal(sumOf2OneFoot, 24);
        });

        // T.C 4.4: Test case to add 2 inches and 2.5 centimeters
        it('should return 3 inches when added 2 inches and 2.5 centimeters', () => {
            var twoInches = new QuantityConversion(2);
            var twoDotFiveCms = new QuantityConversion(2.5);
            var sumOf2InAnd2Dot5Cms = twoInches.getInchToFeetConversion()
                                    + twoDotFiveCms.getInchToCmConversion();
            assert.equal(sumOf2InAnd2Dot5Cms, 3);
        });
    });
});

// Test cases for the Volume Conversions
describe('Tests for Volume Conversions:\n', () => {
    // U.C 5: Adding Volumes in Litre and Gallon
    describe('Tests for Volumes to Litres and Milli-Litres Conversions:', () => {
        // T.C 5.1: Test case to check 1 gallon equals 3.78 litres
        it('should return equal when given 1 gallon and 3.78 litres', () => {
            var oneGallon = new QuantityConversion(1);
            var threeDot78Litres = new QuantityConversion(3.78);
            assert.equal(oneGallon.getGallonToLitreConversion(), threeDot78Litres.getLitreConversion());
        });

        // T.C 5.2: Test case to check 1 litre equals 1000 milli-litres
        it('should return equal when given 1 litre and 1000 millilitres', () => {
            var oneLitre = new QuantityConversion(1);
            var thousandMillilitre = new QuantityConversion(1000);
            assert.equal(oneLitre.getLitreConversion(), thousandMillilitre.getMilliLitreConversion());
        });
    });
});

// Test cases for adding Volumes
describe('Tests for adding Volumes:\n', () => {
    // U.C 6: Adding Volumes in Litre and Gallon
    describe('Tests for Volumes in Litres:', () => {
        // T.C 6.1: Test case to add 1 gallon and 3.78 litres
        it('should return 7.56 litres when given 1 gallon and 3.78 litres', () => {
            var oneGallon = new QuantityConversion(1);
            var threeDot78Litres = new QuantityConversion(3.78);
            var sumOf1GallonAnd3Dot78Litres = oneGallon.getGallonToLitreConversion()
                                            + threeDot78Litres.getLitreConversion();
            assert.equal(sumOf1GallonAnd3Dot78Litres, 7.56);
        });

        // T.C 6.2: Test case to add 1 litre and 1000 milli-litres
        it('should return 2 litres when given 1 litre and 1000 millilitres', () => {
            var oneLitre = new QuantityConversion(1);
            var thousandMillilitre = new QuantityConversion(1000);
            var sumOf1LAnd1000ml = oneLitre.getLitreConversion()
                                + thousandMillilitre.getMilliLitreConversion();
            assert.equal(sumOf1LAnd1000ml, 2);
        });
    });
});

// Test cases for to compare and add Weights
describe('Tests to compare and add weights:\n', () => {
    // U.C 7: Comparing and Adding Weights in gram and kilogram
    describe('Tests to compare weights:', () => {
        // T.C 7.1: Test case to check 1 kilogram equals 1000 grams
        it('should return 1000 grams when given 1 kilogram', () => {
            var oneKilogram = new QuantityConversion(1);
            var thousandGrams = new QuantityConversion(1000);
            assert.equal(oneKilogram.getKilogramConversion(),
                        thousandGrams.getKilogramToGramConversion());
        });

        // T.C 7.2: Test case to check 1 tonne equals 1000 kilograms
        it('should return 1000 kilograms when given 1 tonne', () => {
            var oneTonne = new QuantityConversion(1);
            var thousandKilogram = new QuantityConversion(1000);
            assert.equal(oneTonne.getTonneInGrams(), thousandKilogram.getKilogramConversion());
        });
    });

    describe('\n\tTest to add weights:', () => {
    // T.C 7.3: Test case to add 1 tonne and 1000 grams
        it('should return 1001 kilograms when given 1 tonne and 1000 grams', () => {
            var oneTonne = new QuantityConversion(1);
            var thousandGrams = new QuantityConversion(1000);
            var sumOf1TonneAnd1000g = oneTonne.getTonneInGrams()
                                    + thousandGrams.getKilogramToGramConversion();
            assert.equal(sumOf1TonneAnd1000g, 1001);
        });
    });
});

// U.C 8: Equate temperature in Fahrenheit and Celsius
describe('Test to equate Temperature in Fahrenheit and Celsius:\n', () => {
    // T.C 8.1: Test case to check 1 kilogram equals 1000 grams
    it('should return 100 celsius when given 212 fahrenheit', () => {
        var hundredCelsius = new QuantityConversion(100);
        var twoOneTwoFahrenheit = new QuantityConversion(212);
        assert.equal(hundredCelsius.getCelsiusToFahrenheitConversion(),
                    twoOneTwoFahrenheit.getFahrenheitToCelsiusConversion());
    });
});