const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateTripInput(data){
    let errors = {};

    data.tripName = validText(data.tripName) ? data.tripName : "";

    if (!Validator.isLength(data.tripName, { min: 1, max: 50})){
        errors.tripName = "Trip name must be between 1 and 50 chars";
    }
    if (Validator.isEmpty(data.tripName)){
        errors.tripName = "Trip name field is required";
    }

    return{
        errors,
        isValid: Object.keys(errors).length === 0
    };
};