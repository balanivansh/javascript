let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //value=NaN

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true/false => 0/1

let isLoggedIn = "vansh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// string => true
// empty string => false
// 1 => true

