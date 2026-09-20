const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const authenticateToken = require('../middleware/authenticateToken');
const addCategory = require('../controller/category/createCategory');
const categoryDeatil = require('../controller/category/detailCategory');
const UpdateCategory = require('../controller/category/UpdateCategory');
const getAllCategory = require('../controller/category/getAllCategory');
const deleteCategory = require('../controller/category/deleteCategory');
const categoryRouter = express.Router()

categoryRouter.post("/category", [authenticateToken, isAdmin], addCategory)
categoryRouter.get("/category/:slug", categoryDeatil)
categoryRouter.put("/category/:id",[authenticateToken, isAdmin], UpdateCategory)
categoryRouter.get("/category", getAllCategory)
categoryRouter.delete("/category/:id", [authenticateToken, isAdmin], deleteCategory)

module.exports =categoryRouter        