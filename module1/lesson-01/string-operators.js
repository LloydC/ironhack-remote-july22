let str1 = "Hello";
let str2 = " World!";
 
// console.log(`${str1} ${str2}`); // Prints: Hello World!
 console.log(str1 + str2)
str1 += str2; // ---> str1 = str1 + str2
console.log(str1.length);

let name = "Adam";
let salary = 50000;
let isAMillionaire = false;
 
// console.log(name === "Adam" && salary === 50000); // Prints: true
// console.log(name === "Adam" && salary === '50000'); // Prints: false
// console.log(name === "Adam" || salary === '50000'); // Prints: true

// console.log(!isAMillionaire); 