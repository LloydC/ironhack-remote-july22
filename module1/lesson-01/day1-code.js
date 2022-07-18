let firstName = "Lloyd"; // string "", ''
let lastName = "Chambrier";
const age = 32; // number
let isMarried = false; //Boolean
let isTeacher = true;
let test; // undefined

let teacher = {
    firstName: 'Lloyd',
    lastName: 'Chambrier',
    age: 32
};

let teachingAssistant1 = {
    firstName: 'Joshua',
    lastName: 'George'
}

let teachingAssistant2 = {
    firstName: "Jaime",
    lastName: "Lauriano"
}

let teachingTeam = [teacher, teachingAssistant1, teachingAssistant2]; //

// console.log(`${firstName} ${lastName}`);
// console.log(lastName.toUpperCase());
// console.log(firstName.repeat(3));
// console.log(hobbies.length)


// IF STATEMENT

// if(hobbies[0].toLowerCase() === "yoga"){
//     // console.log("Namaste");
//     return "Namaste";
// }
// else if(hobbies[1].toLowerCase() === "running"){
//     // console.log("Time for a jog");
//     return "Time for a jog";
// }
// else {
//     // console.log('Time to pick a hobby :)')
//     return "Time to pick a hobby :)";
// }

// let a = 45;
// let b = 98;

// if(a !== b){
//     return a+b;
// }
// else {
//     return "a is equal to b";
// }

// let input = 'a';


// SWITCH STATEMENT

// switch(input){
//     case 'a':
//         console.log('Case a')
//         return;
//     case 'b':
//         console.log('Case b');
//         return;
//     default:
//         console.log('no case')
// }

// TERNARY OPERATOR

// const evaluateHobby = hobbies[0].toLowerCase() === "Yoga" || hobbies[1].toLowerCase() === "running" ? "Nice hobbies" : "Time to pick a hobby";
// console.log(evaluateHobby);

// 4 == 4 --> value
// 4 === "4" --> data type && value

let hobbies = ["Yoga", "Running", "Traveling", "Watching animes", "Reading"];

// FOR LOOP

// for(let i = 0; i < hobbies.length; i++){
//     if(i % 2 === 1){
//         console.log('The best hobby is ', hobbies[i]);
//     }
//     else {
//         console.log('The most fun hobby is ', hobbies[i]);
//     } 
// }

// WHILE LOOP

// let i = hobbies.length - 1;

// while(i >= 0){
//     console.log(hobbies[i])
//     i--;
// }