const express = require('express');
const {body,validationResult} = require("express-validator")
const userRegister = require('../controller/register');
const { StatusCodes } = require('http-status-codes');
const createUserValidator = require('../validators/registerValidator');
const loginValidator = require('../validators/loginValidator');
const authRouter = express.Router()

authRouter.post("/register", createUserValidator, (req,res)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
       return userRegister(req, res)
    }else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array())
    }
} )

authRouter.post("/login", loginValidator, (req, res)=>{
    const result = validationResult(req);
    if(result.isEmpty()){}
    else{
        res.status(StatusCodes.BAD_REQUEST).json(result.array())
    }
})

module.exports = authRouter