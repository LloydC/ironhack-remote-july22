const classNames = ['Ali', 'Michael', 'Sunaira', 'Soufiane'];
classNames.push("Pauline");
classNames.unshift("Priscille");
classNames.pop();
classNames.shift();
const firstSplice = classNames.splice(0, 2);
const secondSplice = classNames.splice(1, 1);
// console.log(classNames);

// ES5 Syntax 
// classNames.forEach(function(element, index){
//     if(index === 0){
//         console.log(element, index)
//     }
// }) 

// ES6 Syntax, arrow functions examples
// classNames.forEach((element, index) => console.log(`${element} finished the race in  ${index + 1} position!`)) // ES6 Syntax
// classNames.forEach(element => console.log(element));


let phrase = "This is long enough, for a string, to count it words";
let words = phrase.split(" ");
console.log(words);
// console.log(words[0]);
// console.log(words.length);
