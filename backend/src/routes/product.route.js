const express = require('express');
const formidable = require('express-formidable')
const {validationResult} = require("express-validator")
const createProducts = require('../controller/products/createProducts');
const authenticateToken = require('../middleware/authenticateToken');
const isAdmin = require('../middleware/isAdmin');
const { StatusCodes } = require('http-status-codes');
const productValidator = require('../validators/productValidator');
const productRouter = express.Router()

productRouter.post("/products",[authenticateToken, isAdmin,productValidator,formidable()], (req,res)=>{
    const result = validationResult(req)
    if(result.isEmpty()){
        return createProducts(req,res)
    }else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array())
    }
})

module.exports = productRouter