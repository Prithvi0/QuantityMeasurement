// class instantiation
var QuantityMeasurement = function(length) {
    this.length = length;
  };
  
// Method to get feet to inch conversion
QuantityMeasurement.prototype.getFeetToInchConversion = function() {
    return this.length * 12;    // inch(es)
};

// Method to get inch to feet conversion
QuantityMeasurement.prototype.getInchToFeetConversion = function() {
    return this.length; // feet(s)
}

// Method to get feet to yard conversion
QuantityMeasurement.prototype.getFeetToYardConversion = function() {
    return this.length * 36;    // yard(s)
}

// Method to get inch to centimeter conversion
QuantityMeasurement.prototype.getInchToCmConversion = function() {
    return Math.round(this.length / 2.54);  // centimeter(s)
}

module.exports = QuantityMeasurement;