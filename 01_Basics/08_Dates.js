let myDate = new Date()
console.log(myDate.toString());//Thu Apr 24 2025 22:49:42 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());//Thu Apr 24 2025

console.log(myDate.toTimeString());//22:49:42 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString());//4/24/2025, 10:49:42 PM

console.log(typeof myDate); // object

let myCreatedDate = new Date(2023,0,23) // "2023-01-14"
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myTimeStamp = Date.now()
//console.log(myTimeStamp); //1745515437872 millisecond

//console.log(myCreatedDate.getTime()); //1674412200000

//console.log(Math.floor(Date.now()/1000)); //converting mili-sec to sec

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());



