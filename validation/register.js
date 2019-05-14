const Validator = require("validator");
const validText = require("./valid-text");


module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.displayName = validText(data.displayName) ? data.displayName : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if (!Validator.isLength(data.name, {min: 1, max: 30})){
        errors.name = "Name must between 1 and 30 chars";
    }
    if (Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }
    if (!Validator.isLength(data.displayName, {min: 1, max: 30})){
        errors.displayName = "Display Name must between 1 and 30 chars";
    }
    if (Validator.isEmpty(data.displayName)){
        errors.displayName = "Display Name field is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
        errors.password = "Password must between 2 and 30 chars";
    }
    if (!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }

    return{
        errors, 
        isValid: Object.keys(errors).length === 0 
    };
};