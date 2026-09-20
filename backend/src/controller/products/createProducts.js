async function createProducts(req,res) {
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    console.log(req.body)
    try{}
    catch(err){}
}

module.exports = createProducts