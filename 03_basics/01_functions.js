function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    
}
// function reference -> sayMyName,  function execute -> sayMyName()
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, "a")   // 3a  //we have to check function

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){     // or we use   if(username === undefined)  // or we gave "sam", means it will be by-default sam if we do not over-write
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`   // it will not print 
}

console.log(loginUserMessage("vansh"))   //now it will print
// console.log(loginUserMessage())    //undefined just logged in


//++++++++++++++++++++++++ function with objects +++++++++++++

function calculateCartPrice(val1, val2, ...num1){   //here ... is 'rest' operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  // store val 1, val2, rest put all cart items in array as num1

const user = {
    username: "vansh",
    prices: 199  
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   //prices // undefined
}
// handleObject(user)   //passing our created object

handleObject({        // direct object passed
    username: "sam",
    price: 399
})

// passing array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));   // direct passed