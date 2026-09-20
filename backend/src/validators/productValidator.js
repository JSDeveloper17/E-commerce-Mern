const {body} = require("express-validator")

const productValidator = [
    body("name", "Product name is required in string format")
     .notEmpty().isString().trim(),
    body("description")
     .notEmpty().isString().trim().isLength({max:1000}),
    body("price")
     .notEmpty().trim(),
    body("category")
    .notEmpty()
    .withMessage("Category is required with valid mongoId").isMongoId(),
    body("quantity")
    .isInt({ min: 0 })
    .withMessage("Quantity must be a non-negative integer")
    .toInt(),
    body("shipping")
     .notEmpty().isBoolean()
]

module.exports = productValidator