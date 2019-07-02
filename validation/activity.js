const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateActivityInput(data) {
    let errors = {};

    data.activityName = validText(data.activityName) ? data.activityName : "";
    data.startTime = validText(data.startTime) ? data.startTime : "";
    data.endDate = validText(data.endTime) ? data.endTime : "";

    if (!Validator.isLength(data.activityName, { min: 1, max: 50 })) {
        errors.activityName = "Activity Name must be between 1 and 50 chars";
    }
    if (Validator.isEmpty(data.activityName)) {
        errors.activityName = "Activity Name field is required";
    }
    if (Validator.isEmpty(data.activityDate)) {
        errors.activityDate = "Activity Date field is required";
    }
    if (Validator.isEmpty(data.startTime)) {
        errors.startTime = "Start Time field is required";
    }
    if (Validator.isEmpty(data.endTime)) {
        errors.endTime = "End Time field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};