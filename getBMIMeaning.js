const {template} = require('@babel/core')

function calculateBMI(weight, height) {
    //code here
    return  weight / (height * height);
}

function getBMIMeaning(weight, height) {
    //code here
    if (calculateBMI(weight, height) <= 18.5) {
        return "Underweight"
    } else if (calculateBMI(weight, height) >= 18.5 && calculateBMI(weight, height) <= 24.9) {
        return "Normal weight"
    } else if (calculateBMI(weight, height) > 25.0) {
        return "Overweight"
    }
}

module.exports = getBMIMeaning
