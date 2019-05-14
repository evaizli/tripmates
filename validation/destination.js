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
    //start date
    if (Validator.isAfter(data.startDate, Date.now)) {
        errors.startDate = "Start date must be a future date";
    }
    if (Validator.isBefore(data.startDate, data.endDate)) {
        errors.startDate = "Start date must before the end date";
    }
    if (!Validator.isEmpty(data.startDate)) {
        errors.startDate = "Start date field is required";
    }

    //end date 
    if (Validator.isAfter(data.endDate, data.startDate)) {
        errors.endDate = "End date must be a after the start date";
    }
    if (!Validator.isEmpty(data.endDate)) {
        errors.endDate = "End date field is required";
    }

    // need to validate start time is before end time && end time before start time

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};