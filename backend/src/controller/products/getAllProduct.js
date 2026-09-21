const { StatusCodes } = require("http-status-codes");
const Product = require("../../schema/productSchema");

async function getAllProduct(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);

    try{
        const allProduct = await Product.find({})
                              .populate("category")
                              .select("-image").limit(3).sort({createdAt:-1})
        //! .select("-image") - not select image from Products database 
        res.status(StatusCodes.OK).json({
            message:"success",
            allProduct:allProduct
        })
    }
    catch(err){
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Faild to fetch all Product"
        })
    }
}
module.exports = getAllProduct