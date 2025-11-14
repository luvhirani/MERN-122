// function checkPallindrone(str){
//     // let reverse = str.split().str.join().reverse()
//     let reverse = str.split("").reverse().join("")
//     console.log(reverse)
//     // if(str==reverse){
        
//     // }
// }

// checkPallindrone("hello")
// checkPallindrone("naman")

const obj = { 

    name: "John", 

    greet: function() { 

        setTimeout(()=> {

            console.log(this); 

        }, 1000); 

    }
}

obj.greet()

// "use strict"

// console.log(this) 

// function test (){
//     console.log(this) 
// }
// test()

// let test1= ()=>{
//     console.log(this)
// }

// test1()