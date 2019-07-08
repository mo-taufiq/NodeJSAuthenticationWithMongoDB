// validation
const Joi = require('@hapi/joi');

// register validation
const registerValidation = (requestBody) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    return Joi.validate(requestBody, schema);
};

// login validation
const loginValidation = (requestBody) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    return Joi.validate(requestBody, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;