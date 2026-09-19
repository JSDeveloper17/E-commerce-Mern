const { StatusCodes } = require("http-status-codes");
const Category = require("../../schema/catrgorySchema");

async function UpdateCategory(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)

    try{
        const findCategory = await Category.findById(req.params.id)
        res.json(findCategory)
    }
    catch(err){
        console.log(err)
        res.status(StatusCodes.BAD_REQUEST).json({
            message:"Update not Happen"
        })
    }
}

module.exports = UpdateCategory