// objects are declared by two by 1.literal  2.constructor
// singleton -> when created using constructor method, has single instance
// constructor method -> Object.create ->  singleton

// object literals -> always has no singleton type


const mySym = Symbol("key1")


const JsUser = {
    name: "Vansh",
    "full name": "Vansh Balani",
    [mySym]: "mykey1",   // interview Q -> using symbol as a key // used as sq_br[]
    age: 18,
    location: "Bengaluru",
    email: "vansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing objects...  generally object.key
// console.log(JsUser.email)     // 1st type
// console.log(JsUser["email"])  // 2nd type -> note: it is to be given as string
// console.log(JsUser["full name"])  // not accessed
// console.log(JsUser[mySym])

JsUser.email = "vansh@chatgpt.com"
// Object.freeze(JsUser)  // if value should not be changed use freeze

JsUser.email = "vansh@microsoft.com"
// console.log(JsUser);

//functions....
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // (this) if we want to refer same object
}

// console.log(JsUser.greeting());   // not executed, given as a reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());