const Joi = require("joi")

const userValidations = Joi.object({
    fullName: Joi.string().max(50).allow(''),
    username: Joi.string().max(20).required(),
    email: Joi.string().email().required()
})

function validateUser(data) {
    return userValidations.validate(data);
}

module.exports = { validateUser };