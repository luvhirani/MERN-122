function addToCart(products){
    return total;
}

function payment(addToCart){
    return success;
}

function orderTrack(payment){

}

// function orderTrack (function payment ((function addToCart(products){
//     return total;
// })){

// }){

// }


// Promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation
// container for the future value

// let asyncTask = new Promise ((resolve,reject)=>{
//     console.log("inside promise")
//     return true
// })

// .then()
// .catch()

// console.log(asyncTask)

// let data = fetch("https://jsonplolder.typicode.com/todos")

// .then(response=>console.log(response.json()))
// .then(()=>{console.log("successfully fetched")})
// .catch(error=>console.log(error,"error while fetching the data"))



function addToCart(products){
    return total;
}

// promise chaining
// .then(payment()=>{})
// .then(orderTrack()=>{})
// .then(return()=>{})
// .catch(()=>{})

//async-await

console.log(1)

async function asyncTask (){

    console.log(2)

    let data = await fetch("https://jsonplaceholder.typicode.com/todos")

    console.log(3)

    console.log(data.json())

    // console.log("successfully fetched")

    // console.log(4)
}
asyncTask()

console.log(4)
