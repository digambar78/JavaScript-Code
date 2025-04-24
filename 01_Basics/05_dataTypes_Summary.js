//Primitive(7) -> call by value
// Primitive data types in JavaScript include:
//string, number, boolean, null, undefined, symbol(kisi bhi val ko uniq bnane k liye), bigint


const id = Symbol('123') 
const anotherId = Symbol('123')
console.log(id === anotherId); // false, as each Symbol is unique

// const bigNum = 2345567890598765;

//********************** (Non-Primitive or Referenced) ***************************
//Non-Primitive data types are stored as references in memory, meaning that when you assign them to a variable, you are assigning a reference to the value rather than the value itself.
// Non-Primitive data types in JavaScript include:
// objects, array, functions, date

const heros = ["saktiman","neeraj", "dga"] //arrays

let myObj = {
    name: "Hitesh",
    age:22,
}

const myFun = function(){
    console.log("hello");
    
}

// The following are examples of Non-Primitive data types in JavaScript:
// return type of non-primitive data types is Object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack -> Prim itive -> get copy
// Heap -> Non-Primitive -> get reference every-time we access it

