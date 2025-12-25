const User = require("../models/userSchema")

const login = async function(req,res){
    try {
        
    } catch (error) {
        
    }
}

const signup = async function(req,res){
    try {
        const {userName, email, password} = req.body;
        if(!userName || !email || !password){
            return res.send({message: "All Fields are required"})
        }

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.send({message: "Email alredy exist"})
        }

        const user = await User.insertOne({userName,email,password});

        return res.send({successs:true,message:"Account Created", user})
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
}

module.exports = {login,signup}