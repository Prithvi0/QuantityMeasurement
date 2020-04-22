class QuantityMeasurement {
    inchToFeetConversion(length1, length2) {
        return length1 === length2;     //  return true, if both the lengths are equal
    }
}

module.exports = new QuantityMeasurement;