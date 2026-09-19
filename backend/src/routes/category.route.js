const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const authenticateToken = require('../middleware/authenticateToken');
const addCategory = require('../controller/category/createCategory');
const categoryDeatil = require('../controller/category/detailCategory');
const UpdateCategory = require('../controller/category/UpdateCategory');
const categoryRouter = express.Router()

categoryRouter.post("/category", [authenticateToken, isAdmin], addCategory)
categoryRouter.get("/category/:slug", categoryDeatil)
categoryRouter.put("/category/:id",[authenticateToken, isAdmin], UpdateCategory)

module.exports =categoryRouter        