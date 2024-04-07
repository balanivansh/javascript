// {} with func/if-else -> is scope


let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 300   // var defined inside scope is printed outside, which is a problem
    d = 30  // similarly this is also a problem
    // console.log("INNER: ", a);  // block scope or local scope
}
// problem is that when many programmer import code they will get value declared inside scope which value is unknown to them, so var is not used..


console.log(a);
console.log(c);
console.log(d);

// Interview Q-> scope for this node in terminal is diffwerent than scope when we inspect..why?

function one(){
    const username = "vansh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "vansh"
    if (username === "vansh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}