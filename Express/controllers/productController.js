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
    let id = req.params.id
    let {pname, price} = req.body
    console.log(pname,price)
    try {
       let response = pool.query("UPDATE products SET pname=?, price=? WHERE id=?",[pname,price,id])
       console.log(response)
       res.send(response)
    } catch (error) {
        res.send(error)
    }
}

const deleteProduct = function(req,res){
    res.send("Delete Product API is working")
}

const createProduct = async function(req,res){
    const {id,name,price} = req.body
    // console.log(id,name,price)
    try {
       const response = await pool.query("INSERT INTO products VALUES (?,?,?)",[id,name,price]);
        res.send(response)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {createProduct,updateProduct,getProduct,deleteProduct};
