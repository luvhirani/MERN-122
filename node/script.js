// modules
// user-defined 
// inbuilt/internal -> os, fs, path, event, http
// external -> npm 

// cjs, mjs

// cjs
// let fn = require("./functions")
let {sum,sub} = require("./functions")

// console.log(fn.sub(5,2))
// console.log(fn.sum(5,2))
// console.log(sub(5,2))
// console.log(sum(5,2))

// console.log(twoSum(7,8))
// console.log(sum(2,3))

// destructring
let user = {
    fName: "ram",
    age : 20
}
let arr = [1,2,3,4,5]

let num = arr[2] 

// console.log(num)

let {fName} = user
// console.log(fName)
// console.log(user.fName)

// inbuilt/internal -> os, fs, path, events, http

const os = require("os")

// console.log(os.freemem())
// console.log(os.cpus())
// console.log(os.hostname())

const fs = require("fs")

// fs.writeFileSync("names.txt","hello world")
// fs.unlinkSync("names.txt")

// const path = require("path")

// console.log(path.basename("/Users/luvhirani/Desktop/MERN-122/node"))
// console.log(path.dirname("/Users/luvhirani/Desktop/MERN-122/node"))

const http = require("http")

let server = http.createServer((req, res)=>{
    console.log(req)
    if(req.url=="/shoes" && req.method=="GET"){
        res.end("This is shoes page")
    }
    else if(req.url=="/profile" && req.method=="GET"){
        res.end("This is your profile page")
    }
    else( res.end("This is your backend server"))
})

server.listen(3000, "localhost",()=>{
    console.log("Server has started on port 3000")
})