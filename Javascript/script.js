let button = document.getElementById("btn")
let city = document.getElementById("city")
city.addEventListener("change",(e)=>{console.log(e.target.value)})
// button.addEventListener("click", ()=>{alert("Logged in successfully")})
// button.addEventListener("dblclick", ()=>{console.log("Logged in successfully")})
button.addEventListener("keyup", (e)=>{console.log(e)})

// "use strict"

// console.log(b)


// var a = 2
// let b = 10
// let c = ++a
// Temporal dead zone


// console.log(c)


// conditional statements
// age = 22;

//Ternary 
// age>18 ? console.log("You can vote") : console.log("You cannot vote")

// if-else
// if(age>18){
//     console.log("You can vote")
// }
// else{
//     console.log('you cannot vote')
// }

// else-if
// marks = 65
// if(marks>90){
//     console.log("1st division")
// }
// else if(marks > 70 && marks<90){
//     console.log("2st division")
// }
// else if(marks>50){
//     console.log("3rd division")
// }

// Logical Operators
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)
// console.log(true && true)

// console.log(1 && 1)
// console.log(0 && 1)
// console.log(1 && 0)
// console.log(0 && 0)

// console.log(true || false)
// console.log(false || false)
// console.log(false || true)
// console.log(true || true)

// Arithmatic Operators
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

//Comparison Operators
// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)
// console.log(a!=b)

// console.log(typeof b)

// console.log(a==b)
// console.log(a===b)

// console.log(++a)
// console.log(--b)

// console.log(a++)
// console.log(a+b)

// console.log()


// console.log(b--)

// console.log(!true)

// console.log(typeof a)

// console.log(c)

// fName = 'luv'

let lName

// isEnrolled = false;

// device = null;

// console.log(lName)

// console.log(typeof device)



// console.log(typeof isEnrolled)

// console.log(typeof fName)


// user = {
//     fName: "raj",
//     lName:"sharma",
//     age:20
// }


// switch-case
// let num = 5;
// switch(num){
//     case 1: {
//         console.log("Monday")
//         break;
//     }
//     case 2: {
//         console.log("Tuesday")
//         break;
//     }
//     case 3: {
//         console.log("Wednesday")
//         break;
//     }
//     case 4: {
//         console.log("Thursday")
//         break;
//     }
//     case 5: {
//         console.log("Friday")
//         break;
//     }
//     case 6: {
//         console.log("Saturday")
//         break;
//     }
//     case 7: {
//         console.log("Sunday")
//         break;
//     }
// }

// Loops

// 1. for 
let i = 0;
// for(i; i<=100; i++){
//     console.log(i)
// }

// 2. while
// while(i<=100){
//     console.log(i);
//     i++;
//     console.log()
// }

// 3. do while
// do{
//     console.log(i)
//     i++;
// }while(i<=100)


// fullName = "Raj sharma"

// declaration 
// initialize 

// let age = 20;
// var city = "Jaipur"
// const country = "India"


// let age ;
// age = 22;
// var city = "Paris";
// const country = "France";

// console.log(fullName)
// console.log(age)
// console.log(city)
// console.log(country)
// console.log(age,city,country)
// console.table([age,city,country])


//               let       var        const 
// redeclare      no       yes         no 
// reassign       yes      yes         no
            //   ES6                   ES6 
// hoisting      no        yes         no
// TDZ           yes        no         yes
// scope         block                 block


let age = 22;
// var city = "Paris";
const country = "France";
{
    // console.log(age)
    // console.log(city)
    // console.log(country)
}

// let a = 10;
// let b = 15;
// let c = a+b;
// console.log(c)

// let d = 20;
// let e = 5;
// let f = d+e;
// console.log(f)

// functions

// function creation/declaration
// a,b-> parameters
function sum (a,b) {
    console.log("inside sum function")
    // console.log(a+b)
    let c = a+b;
    console.log(c)
    return c;
}

function multiply (a,b,c=1) {
    console.log(a*b*c)
}

// function invocation/ call
//2,3,10,15-> arguments
// sum(2,3)
// let sumOfTwo =  sum(2,3)
// console.log(sumOfTwo)
// sum(10,15)
// sum(20,10)

// multiply(1,2,3)

// function expression -> anonymous function
// let fan = function (){
//     console.log("inside fan function")
// }

// fan()

//Arrow functions
// let division = (a,b) => {
//     let c = a/b;
//     return c;
// }

// let division = (a,b) => a/b;
    
// let div = division(2,4)
// console.log(div)

// IIFE
// (function (str){
//     console.log(str,"Inside IIFE")
// }("mahesh"))

//timer function

// console.log("1")
// setTimeout(()=>{console.log("2")},0)
// console.log("3")

// setInterval(()=>{console.log("inside setInterval")},2000)

// setTimeout(function (){

// })



// Array
let arr = [1,2,3,4,5]
let arr1 = ['a','b','c','d']
let arr2 = ['a','b','c','d',1,2,3,4,5]
let arr3
arr3 = [34,22,11,2,4,8,1]
let arr4 = []

let arr5= [1,2,[3,4,[5,6]],[7,8]]
// console.log(arr)
// console.log({...arr})

// console.log(arr4)

// console.log(arr)
// console.log(arr1[1])
// console.log(arr2[8])
// console.log(arr3.push(45))
// console.log(arr3.pop())
// console.log(arr3.shift())
// console.log(arr3.unshift(87))
// console.log(arr3.length)
// console.log(arr3.includes(12))
// console.log(arr3.indexOf(22))
// console.log(arr3.at(0))
// console.log(arr3.sort((a,b) => a-b))

// let newArr = arr.slice(1,4)
// console.log(newArr)

// function map(){
//     function innerFn(){

//     }
// }

// innerFn-> callback fn 
// map->hof 

// let spliceArr = arr.splice(1,3,'a','b','c')
// console.log(arr)
// console.log(spliceArr)

let square = arr.map((number)=>{
    return number * number;
})

let increment = arr.map((element)=>{
    let newArr = element + 1;
    return newArr;
})

// console.log(arr)
// console.log(increment)

// console.log(square)

// console.log(arr3)



let evenNo = arr.filter((elements)=>{
    let rem = elements%2
    // console.log(rem)
    // if(rem == 0 ){
    //     console.log(elements,"Even numbers")
    // }
    // else{
    //     console.log(elements, "Odd numbers")
    // }
    return rem == 0
})

// console.log(evenNo)

// reduce 
// let totalSum = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },10)
// let totalSum = arr.reduce((sum,index)=>{
//     return sum+index;
// },10)

// console.log(totalSum)


// Strings
let str = "hello"
// console.log(str.replaceAll(" ",""))
// console.log(str.split(" "))
// let trimStr = str.trim
// console.log(str)
// console.log(trimStr)
// console.log(trimStr.length)

let str1 = 'world'
// let str2 = good
// console.log(typeof str)
// console.log(typeof str1)
// console.log(str2)

let batch = 121;

// template literals
// console.log("Hello, Good afternoon Batch-122")
// console.log(`Hello, Good afternoon Batch ${batch}`)


// console.log(str.length)
// console.log(str.indexOf("l"))
// console.log(str.slice(1,4))
// console.log(str.concat(str1))
// console.log(str + " + "+ str1)
// console.log(str.split("l",2))
// console.log(str.toUpperCase())
// console.log(str.replace("hello","hi"))
// console.log(str.slice(4,0))

// console.log(this)

let user = {
    fName: "raj",
    lName:"sharma",
    isActive: undefined,
    isPresent: null,
    isEnrolled:true,
    // 12: "hello",
    // lName: "hddsj",
    age:20,
    walk: function(){
        // console.log(user.fName)
        // console.log(`${user.fName} is walking`)
        // console.log(`${this.fName} is walking`)

        console.log(this)
    },
    run: function (){
        console.log("user is running")
    },
}

// user.walk()

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(typeof user)


// console.log(user.isActive)
// console.log(user.isEnrolled)
// console.log(user.isPresent)
// console.log(user.isEligible)
// console.log(user.walk())
let deleted = delete user.isActive
let deletedFn = delete user.run
// console.log(deleted)
// console.log(deletedFn)
// console.log(user)
// user.run()

//add
user.isEligible = "yes"

//update
user.fName = "mohan"

const obj1 ={}
obj1.fName="Aman"
obj1.study = function (){
    // console.log("aman is studying")
}
// console.log(obj1.study())




// console.log(user)




//nested objects
let students = {
    stu1:{
        fName: "Mahesh",
        age: 21,

    },
    stu2: {
        fName:"gopal",
        age:21,
        
    }
}

// console.log(students.stu2)

let stu =[ 
    {
        stu1:{
            fName: "Mahesh",
            age: 21,
    
        },
        stu2: {
            fName:"gopal",
            age:21,
            
        },
        stu3:{
            fName:"vansh",
            age:21,
        }
    },
    {
        stu4:{
            fName: "adarsh",
            age: 21,
    
        },
        stu5: {
            fName:"kanishk",
            age:21,
            
        },
        stu6:{
            fName:"mohan",
            age:21,
        }
    }
]

// console.log(students)
// console.log(stu[1].stu4.fName)


let cars = {
    segment : "hachback",
    engine:"1000cc",
    car1: {
        name:"Alto",
        color:"black",
        model:2024
    }
}

// let miniCars = cars; 
// let miniCars = {}
// Object.assign(miniCars, cars)
// let miniCars = {...cars}
// let miniCars = JSON.parse(JSON.stringify(cars))
// miniCars.engine = '500cc'
// miniCars.car1.color='red'
// console.log(cars)
// console.log(miniCars)

// let currDate = new Date()
// console.log(currDate.getDate())
// console.log(currDate.getDay())
// console.log(currDate.getMonth())
// console.log(currDate.getTime())
// console.log(currDate.toString())


// console.log(Math.PI)
// console.log(Math.SQRT2)
// let randomNumber = Math.random()
// let newNumber = Math.ceil(randomNumber)

// console.log(newNumber)
// console.log(Math.ceil(9.1234))
// console.log(Math.floor(6.67834))
// console.log(Math.round(6.67834))
// console.log(Math.round(6.57834))
// console.log(Math.round(6.4999999))

// for-each
// array method, works with array only, does not change orig array, cant break the loop

const fName =["mohan","sunil","gopal","adarsh","dinesh","jogender"] 
let fullName = "hello world"

// let forE=fName.forEach((value ,index)=>{console.log(value,index); return value})
// console.log(forE)

// let mapp = fName.map((value,index)=>{console.log(value,index); return value})
// console.log(mapp)

// for-of
// used for array and string,
// for (const names of fName) {
//     console.log(names)
// }

// for-in



