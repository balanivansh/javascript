// array

const myArr = [0, 1, 2, 3, 4, 5]   //0 based indexing
// array in js.. mixed datatypes, resizable
// array -> shallow copy - share same reference point (Heap)
// deep copy - changes are done in a created copy (stack)

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)   //no []
console.log(myArr[2]);   //one based indexing

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)  //insert value at zero'th index, shift all value, => ineffective
myArr.shift()  //remove zero'th index

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()  //bind and convert in string

//console.log(myArr);
console.log( newArr);


// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr); //original array after slice do not change


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  //splice manipulates original array
console.log(myn2);