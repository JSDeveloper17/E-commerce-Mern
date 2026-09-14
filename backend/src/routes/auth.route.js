const express = require('express')
const authRouter = express.Router()

authRouter.get("/users",(req,res)=>{
    res.json("Hello express")
})

module.exports = authRouter