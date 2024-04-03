const name = "vansh"
const repoCount = 50

// console.log(name + repoCount + " value");

//modern way -> String Interpolation
console.log(`Hello my name is ${name.toUpperCase()} amd my repo count is ${repoCount}`);

// other way to declare string
const gameName = new String('Vansh_vb')  // as a object, key:value pair
// in this way we can use in-built functions

console.log(gameName[0])
console.log(gameName.__proto__); //__proto__ is a way to access [[Prototype]] , it is not [[Prototype]] itself.

console.log(gameName.length);
console.log(gameName.toUpperCase()); // original value is not changed
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'));

console.log(gameName.split('_')) // converted to array
// .substring(0,4)  // slicing
// .slice(-8,4)  // -ve index allowed
// .trim()
// plzz try all string using and read mdn

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))