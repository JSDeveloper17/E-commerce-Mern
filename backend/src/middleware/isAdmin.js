const { StatusCodes } = require("http-status-codes");

function isAdmin(req,res, next){
    if(req.user?.role !== 1){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message:"Unauthorized access role"
        })
    }

    next()
}

module.exports = isAdmin