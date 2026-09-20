const { StatusCodes } = require("http-status-codes");
const Category = require("../../schema/catrgorySchema");

async function getAllCategory(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)

    try{
        const allCategory = await Category.find({})
        if(!allCategory){
           res.status(StatusCodes.NOT_FOUND).json({
            message:"No any category found"
           }) 
        }
        res.status(StatusCodes.OK).json({
            message:"Success",
            allCategory:allCategory
        })
    }
    catch(err){
        console.log(err.message);
        res.status(StatusCodes.NOT_FOUND).json({
            message:"getting error while fetching all category "
        })
    }
}

module.exports = getAllCategory