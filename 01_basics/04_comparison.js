// comparision btw diff datatypes

// console.log("2" > 1)
// console.log("01" > 1); 

console.log(null > 0); // F
console.log(null == 0); // F
console.log(null >= 0); // T
// comparision operator(> >=) convert null as 0
// equality operator works differently

console.log(undefined == 0); // all will be false

// strict check ===
console.log("2" === 2); // F, bcz datatypes are diff
