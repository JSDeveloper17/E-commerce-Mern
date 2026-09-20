const { StatusCodes } = require("http-status-codes");
const Category = require("../../schema/catrgorySchema");

async function deleteCategory(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)

    try{
        const deleteCategory = await Category.findByIdAndDelete(req.params.id)
        if(!deleteCategory){
            res.status(StatusCodes.NOT_FOUND).json({
                message:"Category not found"
            })
        }
        res.status(StatusCodes.OK).json({
            message:"Success",
            deletedCategory: deleteCategory
        })
    }
    catch(err){
        console.log(err.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"Faild to Delete Category"
        })
    }
}

module.exports = deleteCategory