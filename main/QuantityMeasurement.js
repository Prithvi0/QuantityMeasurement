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
    return this.length / 12;
}

// Method to get 
module.exports = QuantityMeasurement;