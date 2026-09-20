const {Schema,model} = require("mongoose")

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        lowercase:true
    },
    description:{
        type:String,
        required:true,
        maxlength:1000,
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type: Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    quantity:{
        type:Number,
        min:0,
        required:true
    },
    sold:{
        type:Number,
        default:0
    },
    image:{
        data: Buffer,
        contentType:String
    },
    shipping:{
        required:false,
        type:Boolean
    }
},{timestamps:true, versionKey:false})

const Product = new model("Product", productSchema)

module.exports = Product;