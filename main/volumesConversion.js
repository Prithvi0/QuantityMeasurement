class VolumesConversion {

    // Method to get gallon to litre conversion
    getGallonToLitreConversion(gallon) {
        gallon *= 3.78;
        return gallon;
    }

    // Method to get litre conversion
    getLitreConversion(litre) {
        return litre;
    }

    // Method to get milli-litre conversion
    getMilliLitreConversion(milliLitre) {
        milliLitre = this.getLitreConversion(milliLitre) / 1000;
        return milliLitre;
    }

    // Method to add the volumes
    getAddition(...volumes) {
        let sumOfVolumes = 0;
        for (let volume of volumes) sumOfVolumes += volume;
            return sumOfVolumes;
    }
}
module.exports = new VolumesConversion();