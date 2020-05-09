var assert = require('chai').assert;
var VolumesConversion = require('../main/volumesConversion');

// U.C 5: Adding Volumes in Litre and Gallon
describe('Tests for Volume Conversions:\n', () => {

    describe('Tests for Volumes to Litres and Milli-Litres Conversions:', () => {

        // T.C 5.1: Test case to check 1 gallon equals 3.78 litres
        it('given volumes when 1 gallon and 3.78 litres should return equal', () => {
            assert.equal(VolumesConversion.getGallonToLitreConversion(1),
                         VolumesConversion.getLitreConversion(3.78));
        });

        // T.C 5.2: Test case to check 1 litre equals 1000 milli-litres
        it('given volumes when 1 litre and 1000 millilitres should return equal', () => {
            assert.equal(VolumesConversion.getLitreConversion(1),
                         VolumesConversion.getMilliLitreConversion(1000));
        });
    });
});

// U.C 6: Adding Volumes in Litre and Gallon
describe('Tests for adding Volumes:\n', () => {

    describe('Tests for Volumes in Litres:', () => {

        // T.C 6.1: Test case to add 1 gallon and 3.78 litres
        it('given volumes when 1 gallon and 3.78 litres should return 7.56 litres', () => {
            var sumOf1GallonAnd3Dot78Litres = VolumesConversion.getAddition(
                VolumesConversion.getGallonToLitreConversion(1),
                VolumesConversion.getLitreConversion(3.78));
            assert.equal(sumOf1GallonAnd3Dot78Litres, 7.56);
        });

        // T.C 6.2: Test case to add 1 litre and 1000 milli-litres
        it('given volumes when 1 litre and 1000 millilitres should return 2 litres', () => {
            var sumOf1LAnd1000ml = VolumesConversion.getAddition(
                VolumesConversion.getLitreConversion(1),
                VolumesConversion.getMilliLitreConversion(1000));
            assert.equal(sumOf1LAnd1000ml, 2);
        });
    });
});