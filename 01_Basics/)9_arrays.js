// Arrays


const myArr = [0,1,2,3,4,5,true,"hiths"]
// arrays in js are resizable

const myArr1 = [0,1,2,3,4,5] // 0 based indexing
// Arrays copy fun -> makes shallow copy(on changes original array will be effected )
console.log(myArr1[1]);

const arr = new Array(1,2,4,5,5,6)

// Arrays methods

myArr.push(111)
console.log(myArr);
myArr.pop()
//console.log(myArr);

myArr.unshift(10) // add element at front by shifting
//console.log(myArr);

myArr.shift() // remove ele from front
//console.log(myArr);

//console.log(myArr.includes(9)); 
//console.log(myArr.indexOf(9));

const newArr = myArr.join() //add all ele of an array into string
//console.log(newArr);
//console.log(typeof newArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);


// in splice the last range do not include
// and that part delete from original array
const myn2 = myArr.splice(1,3) 
console.log(myn2);


  

