const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt")
const getUserByEmail = require("../helper/getUserByEmail");
const generateToken = require("../helper/generateToken");

async function userLogin(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)
    try{
        //? find user
        const user = await getUserByEmail(req.body.email);

        //? compare hash
        const result = await bcrypt.compare(req.body.password, user.password);
        if(!result){
            return res.status(StatusCodes.BAD_REQUEST).json({
                message:"Credential not matched"
            })
        }
        const token = generateToken(user)
        res.status(StatusCodes.OK).json({
            id: user._id,
            token: token,
            email: user.email,
            name: user.name,
            role: user.role,
            address: user.address
        })
    }catch(error){
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"Unable to process your requset, try after sometime"
        })
    }
}

module.exports= userLogin;