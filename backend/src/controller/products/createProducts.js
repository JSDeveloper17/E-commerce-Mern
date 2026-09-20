async function createProducts(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.fields)
    console.log(req.files)
    
    try{
     
    res.send(console.log(req.fields))
    }
    catch(err){}
}

module.exports = createProducts