const { StatusCodes } = require("http-status-codes");
const slugify = require("slugify");
const fs = require("fs");
const Product = require("../../schema/productSchema");

async function updateProduct(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);

    try{
        const {name, description, quantity, price, shipping, category} = req.fields;
        const {image} = req.files || {};

        if(image && image.size > 2000000){
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Image must be less than 2MB"
            });
        }

        const productData = {
            name,
            description,
            quantity,
            price,
            shipping,
            category,
            slug: slugify(name)
        };

        if(image){
            productData.image = {
                data: fs.readFileSync(image.path),
                contentType: image.type
            };
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            productData,
            {new: true, runValidators: true}
        ).select("-image");

        if(!updatedProduct){
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Product not found"
            });
        }

        res.status(StatusCodes.OK).json({
            message: "Product updated successfully",
            updatedProduct
        });
    }
    catch(err){
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"Unable to update the product detail"
        });
    }
}

module.exports = updateProduct;