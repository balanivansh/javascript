let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2024, 2, 26)
console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// comparing dates
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());

//milisec to sec
console.log(Math.floor(Date.now()/1000));

let newDate = new Date() // current date
console.log(newDate.getMonth() + 1)

// `${newDate.getDay()}  and the time`

newDate.toLocaleString('default', {
    weekday:"long",
})
console.log(newDate);