const jwt = require("jsonwebtoken")

function generateToken(user){
    const payload = {
        sub: user["_id"],
        email:user.email,
        role:user.role,
        iat: Math.floor(Date.now()/1000),
        exp: Math.floor(Date.now()/1000) + parseInt(process.env.JWT_EXPIRATION_TTL)
    }
    return  jwt.sign(payload, process.env.JWT_SECRET_KEY);
    
}
module.exports = generateToken