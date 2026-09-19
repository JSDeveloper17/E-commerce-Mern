const { StatusCodes } = require("http-status-codes");
const slugify = require("slugify")
const Category = require("../schema/catrgorySchema");

async function addCategory(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)
    try{
        const {name} = req.body || {};
        if(typeof name !== "string" || !name.trim()){
            return res.status(StatusCodes.BAD_REQUEST).json({
                message:"category name is required"
            })
        }
        const existCategory = await Category.findOne({name:name})
        if(existCategory){
            return res.status(StatusCodes.CONFLICT).json({
                message:"Category already exist"
            })
        }
        const newCategory = await new Category({name:name, slug:slugify(name)})

        await newCategory.save()
        res.status(StatusCodes.CREATED).json({
            message:"Category Created",
            category: newCategory
        })
    }
    catch(err){
        console.log(err)
        res.status(StatusCodes.BAD_REQUEST).json({
            message:"category not created, Something went wrong"
        })
    }
}

module.exports = addCategory