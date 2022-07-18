// Create two variables and assign a different number to each one. 
// Add them together and output the result to the console
let a = 25;
let b = 16;
console.log(a+b);
// Do the same using two strings.
let firstName = "Hsinju";
let lastName = "Yu";
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(`${firstName} ${lastName}`);

// Create a variable and assign a number to it. Check if the variable is less than 10 
// if it is output in the console to the userthat their variable is less than 10. 
// If not, let them know as well. 
// Confirm that both use case works by changing values
let number = 10;

if(number < 10){
    console.log("The value is less than 10")
}
else if(number > 10){
    console.log("The value is over 10")
}
else{
    console.log("The value is equal to 10")
}

// Create an array of "pagesRead" with at least 3 values, 
// Use a for loop to make the sum of the array and return it (confirm using console.log)
// Use a conditional statement so that at the end, it prints out the average of pages read
// i.e: [10,8,21] ---> You read 13 pages on average
let pagesRead = [2,3,6];
let sum = 0;

for(let i = 0; i < pagesRead.length; i++){
    sum += pagesRead[i];
    console.log('sum2: ', sum)
    if(i === pagesRead.length - 1){
        console.log('sum1: ', sum)
        console.log( "The average of pages read is ", sum/pagesRead.length)
    }
    
}
// Create an array "fruits" with "apple", "bananas" and "mangoes". 
// Use a for loop to print the array backwards (from the last entry to the first)
// ["apple", "bananas", "mangoes"] ---> "mangoes"
//                                      "bananas"
//                                      "apple"
let fruits = ["apple", "bananas", "mangoes", "grapefruit", "coconut"];

for(let i = fruits.length - 1; i >= 0; i--){
    // console.log(fruits[i].repeat(2).toUpperCase());
    // console.log(fruits[i].charAt(0))
    console.log(`${fruits[i].slice(0, 1).toUpperCase()}${fruits[i].slice(1)}`)
}