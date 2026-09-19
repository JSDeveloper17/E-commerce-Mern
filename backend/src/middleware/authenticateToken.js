const jwt = require("jsonwebtoken")
const {StatusCodes} = require("http-status-codes")

function authenticateToken(req,res,next){
    const authHeader = req.headers.authorization;
    const [scheme, token] = authHeader ? authHeader.split(" ") : [];

    if(scheme !== "Bearer" || !token){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message:"Use a Bearer token for this request"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user)=>{
        if(err){
            return res.status(StatusCodes.FORBIDDEN).json({
                message:"Token is not valid"
            })
        }
        req.user = user;
        next()
    })
}

module.exports = authenticateToken