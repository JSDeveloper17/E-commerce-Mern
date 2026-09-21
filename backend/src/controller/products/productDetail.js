const { StatusCodes } = require("http-status-codes");
const Product = require("../../schema/productSchema");

async function productDetail(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    try{
        const productDeatil = await Product.findOne({slug: req.params.slug})
                              .select("-image").populate("category");
        res.status(StatusCodes.OK).json({
            message:"success",
            productDeatil:productDeatil
        })
    }
    catch(err){
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"could not get Product Details"
        })
    }
}

module.exports = productDetail