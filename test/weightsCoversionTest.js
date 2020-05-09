var assert = require('chai').assert;
var WeightsConversion = require('../main/weightsConversion');

// U.C 7: Comparing and Adding Weights in gram and kilogram
describe('Tests to compare and add weights:\n', () => {

    describe('Tests to compare weights:', () => {

        // T.C 7.1: Test case to check 1 kilogram equals 1000 grams
        it('given weight when 1 kilogram should return 1000 grams', () => {
            assert.equal(WeightsConversion.getKilogramConversion(1),
                         WeightsConversion.getKilogramToGramConversion(1000));
        });

        // T.C 7.2: Test case to check 1 tonne equals 1000 kilograms
        it('given weight when 1 tonne should return 1000 kilograms', () => {
            assert.equal(WeightsConversion.getTonneInGrams(1),
                         WeightsConversion.getKilogramConversion(1000));
        });
    });

    describe('\n\tTest to add weights:', () => {

        // T.C 7.3: Test case to add 1 tonne and 1000 grams
        it('given weight when 1 tonne and 1000 grams should return 1001 kilograms', () => {
            var sumOf1TonneAnd1000g = WeightsConversion.getAddition(
                WeightsConversion.getTonneInGrams(1),
                WeightsConversion.getKilogramToGramConversion(1000));
            assert.equal(sumOf1TonneAnd1000g, 1001);
        });
    });
});