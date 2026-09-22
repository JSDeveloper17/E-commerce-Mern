const { StatusCodes } = require("http-status-codes");

function isAdmin(req,res, next){
    if(req.user?.role !== 1){
        return res.status(StatusCodes.FORBIDDEN).json({
            message:"Unauthorized access role, you are not admin"
        })
    }

    next()
}

module.exports = isAdmin