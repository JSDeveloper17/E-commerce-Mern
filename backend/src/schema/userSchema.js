const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name:{
        type:String,
        required:[true, "name is required"],
        trim:true,
    },
    email:{
        type: String,
        required:[true, "name is required"],
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true, "password is required"],
        trim:true,
        min: 6,
        max:64
    },
    address:{
        type:String,
        trim:true,
    },
    role:{
        type:Number,
        default:0
    }
}, {timestamps:true, versionKey:false})

const Users = new model("Users", userSchema);

module.exports = Users;