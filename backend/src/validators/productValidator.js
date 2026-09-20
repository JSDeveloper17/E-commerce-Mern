const { check } = require("express-validator");

const productValidator = [

    check("name")
        .custom((value, { req }) => {
            const name = req.fields?.name;

            if (!name || typeof name !== "string" || !name.trim()) {
                throw new Error("Product name is required in string format");
            }

            return true;
        }),

    check("description")
        .custom((value, { req }) => {
            const description = req.fields?.description;

            if (!description || typeof description !== "string") {
                throw new Error("Description is required");
            }

            if (description.trim().length > 1000) {
                throw new Error("Description must not exceed 1000 characters");
            }

            return true;
        }),

    check("price")
        .custom((value, { req }) => {
            const price = req.fields?.price;

            if (price === undefined || price === "") {
                throw new Error("Price is required");
            }

            if (isNaN(price) || Number(price) < 0) {
                throw new Error("Price must be a non-negative number");
            }

            return true;
        }),

    check("category")
        .custom((value, { req }) => {
            const category = req.fields?.category;

            if (!category) {
                throw new Error("Category is required with valid mongoId");
            }

            // You can use mongoose.Types.ObjectId.isValid()
            const mongoose = require("mongoose");

            if (!mongoose.Types.ObjectId.isValid(category)) {
                throw new Error("Category is required with valid mongoId");
            }

            return true;
        }),

    check("quantity")
        .custom((value, { req }) => {
            const quantity = req.fields?.quantity;

            if (quantity === undefined || quantity === "") {
                throw new Error("Quantity is required");
            }

            if (!Number.isInteger(Number(quantity)) || Number(quantity) < 0) {
                throw new Error(
                    "Quantity must be a non-negative integer"
                );
            }

            return true;
        }),

    check("shipping")
        .custom((value, { req }) => {
            const shipping = req.fields?.shipping;

            if (
                shipping === undefined ||
                !["true", "false", true, false].includes(shipping)
            ) {
                throw new Error("Shipping must be true or false");
            }

            return true;
        })
];

module.exports = productValidator;