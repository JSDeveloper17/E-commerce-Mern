const {Schema, model} = require("mongoose")

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
        unique:true,
        trim:true,
        maxLength:32
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true
    }
})

const Category = new model("Category", categorySchema)

module.exports = Category;