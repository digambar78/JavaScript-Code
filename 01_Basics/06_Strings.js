const name = "hitesh"
const repoCount = 5;

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("HiteshCh")
//console.log(gameName[0]);
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(0));
// console.log(gameName.toUpperCase());
// console.log(gameName.split(""));
// console.log(gameName.includes("H"))
// console.log(gameName.startsWith("H"));

console.log(gameName.lastIndexOf("h")); 
console.log(gameName.endsWith("Ch"));
console.log(gameName.slice(0, 5)); // accept negative ind also
console.log(gameName.replace("Hitesh", "Hitesh's"));
console.log(gameName.indexOf("C"));
console.log(gameName.concat(" Game"));
console.log(gameName.trim());
console.log(gameName.valueOf());
console.log(gameName.charCodeAt(0));

const subStr = gameName.substring(1, 5) 
console.log(subStr);

const Myname = "Rohit"
console.log(Myname.slice(-2,-1));
//Myname.slice(4, 0) (since -4 means 8 - 4 = 4)
//If the startIndex is greater than the endIndex, slice returns an empty string.


const Myname1 = "    Rohit  "
console.log(Myname1.trim());


