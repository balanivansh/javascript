const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // not merge properly, create array inside array

console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//using concat, creates new array, so we store in new variable
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread method is more preffered, more values can be added
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   //spread out nested arrays if you want
console.log(real_another_array);


// making array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting  //not mentioned that array for keys or for values..

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//explore little bit about, Array.from,if...and more properties