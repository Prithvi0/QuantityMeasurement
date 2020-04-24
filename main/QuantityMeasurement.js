var QuantityMeasurement = function(length) {
    this.length = length;
  };
  
  QuantityMeasurement.prototype.getInchToFeetConversion = function() {
        return this.length * 12;
  };
  
  module.exports = QuantityMeasurement;