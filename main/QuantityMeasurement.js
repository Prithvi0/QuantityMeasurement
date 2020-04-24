// class instantiation
var QuantityMeasurement = function(length) {
    this.length = length;
  };
  
// Method to get feet to inch conversion
QuantityMeasurement.prototype.getFeetToInchConversion = function() {
    return this.length * 12;
};

// Method to get inch to feet conversion
QuantityMeasurement.prototype.getInchToFeetConversion = function() {
    return this.length;
}

// Method to get feet to yard conversion
QuantityMeasurement.prototype.getFeetToYardConversion = function() {
    return this.length * 36;
}

module.exports = QuantityMeasurement;