// class instantiation
class QuantityMeasurement {
    constructor(unit) {
        this.unit = unit;
    }
    // Lengths Conversion
    // Method to get feet to inch conversion
    getFeetToInchConversion() {
        return this.unit * 12; // inch(es)
    }
    // Method to get inch to feet conversion
    getInchToFeetConversion() {
        return this.unit; // feet(s)
    }
    // Method to get feet to yard conversion
    getFeetToYardConversion() {
        return this.unit * 36; // yard(s)
    }
    // Method to get inch to centimeter conversion
    getInchToCmConversion() {
        return Math.round(this.unit / 2.54); // centimeter(s)
    }
    // Method to get gallon to litre conversion
    getGallonToLitreConversion() {
        return this.unit * 3.78;    // gallon(s)
    }

    // Volumes Conversion
    // Method to get litre conversion
    getLitreConversion() {
        return this.unit;    // litre(s)
    }
    // Method to get milli-litre conversion
    getMilliLitreConversion() {
        return this.unit / 1000;    // litre(s)
    }
}

module.exports = QuantityMeasurement;