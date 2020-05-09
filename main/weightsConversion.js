class WeightsConversion {

    // Method to get kilogram to gram conversion
    getKilogramToGramConversion(kilogram) {
        let gram = kilogram / 1000;
        return gram;
    }

    // Method to get kilogram conversion
    getKilogramConversion(kilogram) {
        return kilogram;
    }

    // Method to get tonne in grams
    getTonneInGrams(tonne) {
        let gram = tonne * 1000;
        return gram;
    }

    // Method to add the weights
    getAddition(...weights) {
        let sumOfWeights = 0;
        for (let weight of weights) sumOfWeights += weight;
            return sumOfWeights;
    }
}

module.exports = new WeightsConversion();