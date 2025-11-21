const express = require("express")
const{createProduct,updateProduct,deleteProduct,getProduct} = require("../controllers/productController")

const router = express.Router()

router.get("/getProduct",getProduct)
router.post("/createProduct",createProduct)
router.put("/updateProduct",updateProduct)
router.delete("/deleteProduct",deleteProduct)


module.exports = router;