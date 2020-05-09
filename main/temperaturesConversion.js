class TemperaturesConversion {

    // Method to get Celsius to Fahrenheit Conversion
    getCelsiusToFahrenheitConversion(celsius) {
        let fahrenheit = celsius * (9 / 5) + 32;
        return fahrenheit;
    }

    // Method to get Fahrenheit to Celsius Conversion
    getFahrenheitToCelsiusConversion(celsius) {
        return celsius;
    }
}

module.exports = new TemperaturesConversion();
