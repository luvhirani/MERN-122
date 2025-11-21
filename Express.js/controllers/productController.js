const getProduct = function(req,res){
    res.send("Get Product API is working")
}

const updateProduct = function(req,res){
    res.send("Update Product API is working")
}
const deleteProduct = function(req,res){
    res.send("Delete Product API is working")
}
const createProduct = function(req,res){
    res.send("Create Product API is working")
}

module.exports = {createProduct,updateProduct,getProduct,deleteProduct};