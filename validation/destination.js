const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateDestinationInput(data) {
    let errors = {};

    data.location = validText(data.location) ? data.location : "";
    data.startDate = validText(data.startDate) ? data.startDate : "";
    data.endDate = validText(data.endDate) ? data.endDate : "";

    if (!Validator.isLength(data.location, { min: 1, max: 50 })) {
        errors.location = "Location must be between 1 and 50 chars";
    }
    if (Validator.isEmpty(data.location)) {
        errors.location = "Location field is required";
    }
    if (Validator.isEmpty(data.startDate)) {
        errors.startDate = "Start date field is required";
    }
    if (Validator.isEmpty(data.endDate)) {
        errors.endDate = "End date field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};