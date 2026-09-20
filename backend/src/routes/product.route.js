const express = require('express');
const createProducts = require('../controller/products/createProducts');
const authenticateToken = require('../middleware/authenticateToken');
const isAdmin = require('../middleware/isAdmin');
const productRouter = express.Router()

productRouter.post("/products",[authenticateToken, isAdmin], createProducts)

module.exports = productRouter