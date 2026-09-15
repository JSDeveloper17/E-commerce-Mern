const express = require('express');
const userRegister = require('../controller/register');
const authRouter = express.Router()

authRouter.get("/register", userRegister)

module.exports = authRouter