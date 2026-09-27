const { StatusCodes } = require("http-status-codes");
const Users = require("../schema/userSchema");

async function checkAuth(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)

    try{
        const user = await Users.findById(req.body.id).select("-password")
        if(!user){
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message:"User not exist"
            })
        }
        res.status(StatusCodes.OK).json({
            message:"success",
            authentication:true,
            name:user.name,
            email:user.email,
            role:user.role
        })
    }
    catch(err){
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            messageL: "Failed to verify authentication"
        })
    }
}

module.exports = checkAuth;