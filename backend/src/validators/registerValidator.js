const {body} = require("express-validator")

const createUserValidator = [
    body("name","name is needed").notEmpty().trim().isString(),
    body("email","email is needed").notEmpty().trim().isEmail(),
    body("password","password is needed").notEmpty().trim().isString()
     .isLength({min:6})
];

module.exports = createUserValidator;