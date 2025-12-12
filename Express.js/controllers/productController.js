const pool = require("../config/db")

const getProduct = async function(req,res){
    try {
        const response = await pool.query("SELECT * FROM products")
        console.log(response)

        res.send(response)
    } catch (error) {
        res.json(error)
    }
}

const updateProduct = function(req,res){
    res.send("Update Product API is working")
}

const deleteProduct = function(req,res){
    res.send("Delete Product API is working")
}

const createProduct = async function(req,res){
    const {id,name,price} = req.body
    // console.log(id,name,price)
    try {
       const response = await pool.query("INSERT INTO products VALUES (?,?,?)",[id,name,price]);
       
        // console.log("Req Obj:",req.body)
        
    res.send(response)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {createProduct,updateProduct,getProduct,deleteProduct};
