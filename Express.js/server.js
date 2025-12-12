// MVC architecture 
// Model , View, Controller 

const express = require("express")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const db = require("./config/db")
const app = express()

// console.log("Express:",express())

app.use(express.json())

// console.log(db)
db

app.get("/",(req,res)=>{
    res.send("Backend is working properly on port")
})

app.use("/product",productRoutes)
app.use("/user",userRoutes)

let PORT = 3003

app.listen(PORT,()=>{
    console.log(`Server has been started on ${PORT}` )
})