const jwt = require("jsonwebtoken")
const {StatusCodes} = require("http-status-codes")

function authenticateToken(req,res){
    const authHeder = req.headers["authorization"];
    const token = authHeder && authHeder.split(" ")[1];

    if(!token){
        res.status(StatusCodes.UNAUTHORIZED).json({
            message:"You are not authrized for this request"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user)=>{
        if(err){
            res.status(StatusCodes.FORBIDDEN).json({
                message:"Token is not valid"
            })
        }
        req.user = user;
    })
    next()
}

module.exports = authenticateToken