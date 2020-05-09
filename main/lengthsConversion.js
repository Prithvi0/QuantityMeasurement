// class instantiation
class LengthConversions {
    
    // Method to get feet to inch conversion
    getFeetToInchConversion(feet) {
        feet *= 12;
        return feet;
    }

    // Method to get inch to feet conversion
    getInchToFeetConversion(inch) {
         inch = this.getFeetToInchConversion(inch) / 12;
         return inch;
    }

    // Method to get feet to yard conversion
    getFeetToYardConversion(feet) {        
        let yard = this.getFeetToInchConversion(feet) * 3;
        return yard;
    }

    // Method to get inch to centimeter conversion
    getInchToCmConversion(inch) {
        let centimeter = Math.round(inch / 2.54);
        return centimeter;
    }

    // Method to add the lengths
    getAddition(...lengths) {
        let sumOfLengths = 0;
        for (let length of lengths) sumOfLengths += length;
            return sumOfLengths;
    }
}

module.exports = new LengthConversions();