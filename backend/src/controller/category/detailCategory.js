const { StatusCodes } = require("http-status-codes");
const Category = require("../../schema/catrgorySchema");

async function categoryDeatil(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)

    try{
        const categoryDetail = await Category.findOne({slug: req.params.slug})
        res.status(StatusCodes.OK).json({
            message:"Success",
            categoryDetail: categoryDetail
        })
    }
    catch(err){
        console.log(err.message)
        res.status(StatusCodes.BAD_REQUEST).json({
            message:"Not finding any Category"
        })
    }
}

module.exports = categoryDeatil