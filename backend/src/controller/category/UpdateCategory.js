const { StatusCodes } = require("http-status-codes");
const slugify = require("slugify")
const Category = require("../../schema/catrgorySchema");

async function UpdateCategory(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)

    try{
        const findCategory = await Category.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            slug:slugify(req.body.name)
        },{
            new:true
        })

        if(!findCategory){
            return res.status(StatusCodes.NOT_FOUND).json({
                message:"Category not found"
            })
        }
        res.status(StatusCodes.OK).json({
            message:"success",
            findCategory:findCategory
        })
    }
    catch(err){
        console.log(err)
        res.status(StatusCodes.BAD_REQUEST).json({
            message:"Update not Happen"
        })
    }
}

module.exports = UpdateCategory