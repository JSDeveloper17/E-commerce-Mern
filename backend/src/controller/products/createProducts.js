const { StatusCodes } = require("http-status-codes");
const slugify = require('slugify')
const fs = require("fs")
const Product = require("../../schema/productSchema");

async function createProducts(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.fields)
    console.log(req.files)
    
    try{
     const {name, description, quantity, price, shipping, category} = req.fields;
     const {image} = req.files || {};
     if(image && image.size > 2000000){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Image must be less than 2MB"
        })
     }
     const newProduct = new Product({name,description,quantity,price, shipping,category , slug: slugify(name)})
     if(image){
        newProduct.image = {
            data:fs.readFileSync(image.path),
            contentType: image.type
        }
     }
     await newProduct.save()
     res.status(StatusCodes.CREATED).json({
        message:"Success",
        newProduct: newProduct
     })
    }
    catch(err){
        console.log(err.message)
        res.status(StatusCodes.BAD_REQUEST).json({
            message:"Product not created"
        })
    }
}

module.exports = createProducts