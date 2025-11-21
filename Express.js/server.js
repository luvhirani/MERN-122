// MVC architecture 
// Model , View, Controller 

const express = require("express")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const app = express()

app.get("/",(req,res)=>{
    res.send("Backend is working properly on port")
})

app.use("/product",productRoutes)
app.use("/user",userRoutes)

app.listen(3002,()=>{
    console.log("Server has been started")
})
