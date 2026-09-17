const { StatusCodes } = require("http-status-codes");
const Users = require("../schema/userSchema");

async function isAdmin(req,res, next){
    const userAdmin = await Users.findById(req.email);
    try{

        if(!userAdmin.role ===1){
            res.status(StatusCodes.UNAUTHORIZED).json({
                message:"Unauthorization access roles"
            })
        }else{
            next()
        }
    }catch(err){
        console.log(err)
        res.status(StatusCodes.UNAUTHORIZED).json({
                message:"Unauthorization access roles"
            })
    }
}

module.exports = isAdmin