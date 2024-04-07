const user = {
    username: "vansh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

// function whatsapp(){
//     let username = "vansh"
//     console.log(this.username);
// }

// whatsapp()

// const whatsapp = function () {
//     let username = "vansh"
//     console.log(this.username);
// }

const whatsapp =  () => {
    let username = "vansh"
    console.log(this);
}


whatsapp()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "vansh"})


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()