// object as singletone/ constructor

// const tinderUser = new Object()  // M1  as singletone
const tinderUser = {}  //M2  non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nested objects...
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vansh",
            lastname: "balani"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);
// ? is used here, if that value do not exist then, while API calling this protect from error

//combining objects...
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2 }   // similar to array, make obj inside obj

const obj4 = {5: "a", 6: "b"}


// const obj3 = Object.assign({}, obj1, obj2, obj4)  // empty {} is also given -> it act as a target and rest all act as source


// best way, spread method
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// for database values....   many obj insode an array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // all keys are stored inside array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  // every key value as a diff array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vansh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "vansh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]