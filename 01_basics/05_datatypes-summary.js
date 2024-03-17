// Primitive    /// {Stack}
// 7 types: String, Number, Boolean, null, undefined, symbol, bigint
let nullEg = null ; //type = object
let undefinedEg;
const bigNum = 388348373678687468n
console.log(typeof bigNum); // undefined

// Non-premitive // Reference type   ///{Heap}
// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"] // array
let myObj = { 
    name:"vansh",
    age : 22
}
const myFunction = function(){
    console.log("Hello World")
}

// JS is dynamically typed

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive)
// copy is created
let myname = "javascript"
let anothername = myname
anothername = "react"

console.log(myname); // copy of myname was given to anothername therefore original value didnot change
console.log(anothername);


// Heap(Non-primitive)
// reference of original type ie changes take place in original value
let user1 = {
    email: "u1@gmail.com",
    upi: "user@ybl"
}
let user2 = user1
user2.email = "user2@gc"
console.log(user1.email)
console.log(user2.email); // both value are updated