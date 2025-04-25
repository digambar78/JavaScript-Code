
let fruits = ["apple", "banana", "mango", "orange"];

let colors = ["red", "blue", "green", "yellow"];

//fruits.push(colors)
// arrays inside arrys take, take new array as element
//console.log(fruits);


const a = fruits.concat(colors)
//console.log(a); // returns new array

const n = [...fruits, ...colors] // spread operator
console.log(n);

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const flatArray = arr.flat(Infinity)
console.log(flatArray);

console.log(Array.isArray("hitesh"));

console.log(Array.from("Hitesh")); //converts in chars arr

// return [] as we have to define ki we wants array fro key or vals
console.log(Array.from({name:"hietsh"})); 

let score1 = 100;
let score2 = 200;
let score3 = 300;

// converts to arrays [ 100, 200, 300 ]
console.log(Array.of(score1,score2,score3));
