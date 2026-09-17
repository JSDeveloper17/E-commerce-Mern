const {StatusCodes} = require("http-status-codes")
const Users = require("../schema/userSchema");
const { hashedPassword } = require("../helper/hashPassword");


async function userRegister(req,res){
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)

    try{
        const existingUser = await Users.findOne({email: req.body.email})
        if(existingUser){
            res.status(StatusCodes.BAD_REQUEST).json({
                message:"User already exist with given email address"
            })
        }
        const hashUserPassword = await hashedPassword(req.body.password)
        const newUser = new Users({
            name:req.body.name,
            email:req.body.email,
            password:hashUserPassword
        })

        await newUser.save()

        return res.status(StatusCodes.CREATED).json(newUser)
    }
    catch(error){
        console.log(error);
        res.status(StatusCodes.GATEWAY_TIMEOUT).json({
            message:"unable to process your request, plz try after sometime"
        })
    }
}

module.exports = userRegister