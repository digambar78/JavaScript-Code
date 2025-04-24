const score = 400
console.log(score);

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(1)); //100.0

const num = 123.5953
// console.log((num.toPrecision(3))); // 124 take no of digit passed

const hund = 100000
//console.log(hund.toLocaleString('en-IN')); //1,00,000

//**************************** MATHS ******************

console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.pow(3,3));
console.log((Math.random()*10)+1); // val bw 0 and 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)
