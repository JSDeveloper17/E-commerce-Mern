const { StatusCodes } = require("http-status-codes");
const Product = require("../../schema/productSchema");

async function deleteProducts(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);

    try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.id).select("-image");
        res.status(StatusCodes.OK).json({
            message:"success",
            deleteProduct:deleteProduct
        })
    }
    catch(err){
        console.log(err)
        res.status(StatusCodes.SERVICE_UNAVAILABLE).json({
            message:"Product is not Deleted"
        })
    }
}

module.exports = deleteProducts