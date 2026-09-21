const { StatusCodes } = require("http-status-codes");
const Product = require("../../schema/productSchema");

async function getproductImage(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    try{
        const productImage = await Product.findById(req.params.id).select("image");
        if(productImage.image.data){
            res.set("Content-Type",productImage.image.contentType)
            return res.status(StatusCodes.OK).send(productImage.image.data)
        }
    }
    catch(err){
        console.log(err.message)
        res.status(StatusCodes.SERVICE_UNAVAILABLE).json({
            message:"Faild to get Product Image"
        })
    }
}
module.exports = getproductImage