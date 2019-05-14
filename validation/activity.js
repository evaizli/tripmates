const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateActivityInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.startTime = validText(data.startTime) ? data.startTime : "";
    data.endDate = validText(data.endDate) ? data.endDate : "";

    if (!Validator.isLength(data.name, { min: 1, max: 50 })) {
        errors.name = "Name must be between 1 and 50 chars";
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if (!Validator.isEmpty(data.startTime)) {
        errors.startTime = "Start date field is required";
    }
    if (!Validator.isEmpty(data.endTime)) {
        errors.endDate = "End date field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};