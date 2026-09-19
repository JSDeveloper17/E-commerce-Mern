const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const authenticateToken = require('../middleware/authenticateToken');
const addCategory = require('../controller/category');
const categoryRouter = express.Router()

categoryRouter.post("/category", authenticateToken, addCategory)

module.exports =categoryRouter        