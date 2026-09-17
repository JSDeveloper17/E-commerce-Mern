const {body} = require("express-validator")

const loginValidator = [
    body("email", "email is needed")
     .notEmpty().isString().isEmail().trim(),
    body("password", "password is needed")
     .notEmpty().isString().trim()
]

module.exports = loginValidator