// Class Practice Exercise
// Create an array "class" made of all the students

const student1 = {
    firstName : 'Clark',
    lastname : 'McEvoy',
    age : '28',
    city : 'Frankfurt',
    drinkCoffee : true,
    likeCats : true,
    favoriteFood : 'Pizza',
    favouriteBook : 'Cracking the Code interview'
}

const student2 = {
    firstName: 'Adam',
    lastName: 'Amatavivadhana',
    age: 22,
    city: 'Amsterdam',
    drinkCoffee: true,
    likeCats: true,
    favoriteFood: 'Pasta',
    favoriteBook: 'The Lord of the Rings'
};
const student3 = {
    firstName: "Christian",
    lastName: "Schuermann",
    age: 31,
    city: "Berlin",
    drinkCoffee: false,
    likeCats: true,
    favoriteFood: "Sushi",
    favouriteBook: "Dragon Ball Manga",
};;

const student5 = {
    firstName: "Hsinju",
    lastName: "Yu",
    age: 27,
    city: "Alkmaar",
    drinkCoffe: false,
    likeCats: true,
    favoriteFood: "pasta",
    favouriteBook: "The Geography of Bliss"
  };

const student6 = {
    firstName: "Alejandra",
    lastName: "Rodriguez",
    age: 28,
    city: "Amsterdam",
    drinkCoffee: false,
    likeCats: true,
    favoriteFood: "Chocolate",
    favoriteBook: "El día que sueñes con flores salvajes"
    };

const student7 = {
    firstName: "Eurico",
    lastName: "Moutinho",
    age: 37,
    city: "Lisbon",
    drinkCoffee: false,
    likeCats: true,
    favoriteFood: "chicken",
    favouriteBook: "none"
  };

const student8 = {
    firstName: 'Michael',
    lastName: 'Hodgkins',
    age: 24,
    city: 'London',
    drinkCoffee:  false,
    likeCats: true,
    favouriteFood: 'Burritos',
    favouriteBook: 'Scythe'

};
const student9 = {
    firstName : "Lorena",
    lastName:" Garcia",
    age :29,
    city : "Heidelberg",
    drinkCoffee: true,
    likeCats: false,
    favouriteFood:"Pizza",
    favouriteBook: "La sombra del viento"
  };

const student10 = {
    firstName : 'Leah',
    lastName : 'Douglas',
    age : 25,
    city : 'Paris',
    drinkCoffee : false,
    likeCats : false,
    favoriteFood : 'quiche brocoli et saumon',
    favoriteBook : 'La nuit des temps by Barjavel'
};

const student11 = {
    firstName: "Sunaira",
    lastName: "Syed",
    age: 26,
    city: "Munich",
    drinkCoffee: true,
    likeCats: true,
    favouriteFood: ["Pizza","Biryani"]
};

const student12 = {
    firstName : "Soufiane",
    lastName : "Bdaoui",
    age : 27,
    city : "Cluses",
    drinkCoffee : false,
    likeCats :  true,
    favoriteFood : "pizza",
    favouriteBook : "Zanna Bianca"
};

const student13 = {
    firstName: "Nash",
     lastName: "Zangio",
          age: 29,
          city: "Berlin",
   drinkCoffee: true,
      likeCats: false,
   favoriteFood: "Pizza",
   favouriteBook: "The man who sold his ferrari."
   };

// console.log(Object.values(student13))
// console.log(Object.keys(student13))

const student14 =  {
    firstName: 'Daniela',
    lastName: 'Trinchera',
    age: 28,
    city: 'Valencia',
    drinkCoffee: true,
    likeCats: true,
    favouriteFood: 'fruits',
    favouriteBook: 'El leon. Joseph Kessel',
};
const student15 = {
    firstName : "Lorena",
    lastName:" Garcia",
    age :29,
    city : "Heidelberg",
    drinkCoffee: true,
    likeCats: false,
    favouriteFood:"Pizza",
    favouriteBook: "La sombra del viento"
  };
const student16 = {
    firstName : 'Priscille',
    lastName : 'Louis-Rose',
    age : 28,
    city : 'Paris',
    drinkCoffee : true,
    likeCats: true,
    favoriteFood: 'Feijoada',
    favoriteBook: 'The Supremes',
};
const student17 = {
    firstName: "Ece",
    lastName:"Cakmak",
     age:32,
    city: "Munich",
    drinkCoffee: true,
    likeCats : true,
    favoriteFood: "pasta",
    favoriteBook: "One Hundred Years of Solitude"
};
const student18 =  {
    firstName: 'Marc',
    lastName: 'Logan',
    age: 23,
    city: 'Amsterdam',
    drinkCoffee: true ,
    favoriteFood: 'Italian',
    favouriteBook:'Art of Music',
    likeCats: true
};
const student19 = {
    firstName: "Pauline",
    lastName: "Thomas",
    age: 31,
    city: "Bordeaux",
    drinkCoffee: true,
    likeCats: true,
    favoriteFood: "sushi",
    favoriteBook: "being genuine",
};
const student20 = {
    firstName: 'Muhammed',
    lastName: 'Rahman',
    age: 24,
    city: 'London',
    drinkCoffee: true,
    likeCats: true,
    favoriteFood: 'Lasagna',
    favoriteBook: 'The Hobbit'
};

// for(let keys in student20){
//     console.log(student20[keys]);
// }

const student21 = {
    firstName : "Gabriel",
    lastName:" Gomez",
    age :43,
    city : "Tui",
    drinkCoffee: false,
    likeCats: false,
    favouriteFood:"Fried Baby Squid",
    favouriteBook: "Dune"
  };

  const classArray = [student1, student2, student3, student5, student6, student7, student8, student9, student10, student11, student12, student13, student14, student15, student16, student17,student18,student19,student20,student21];

 // Goal: Print out every firstName inside of classArray

 // Step 1: Use a forEach loop to go through every student
// Step 2: Access the property firstName of every student 
 // Step 3: Display the value of property firstName

 // classArray.forEach(student => console.log(`${student.firstName} ${student.lastName}`))

 // Goal: Print out everyone who likes to drinkCoffee

 function showCoffeeLovers(){
    classArray.forEach((student) => {
        if(!student.drinkCoffee){
            console.log(`${student.firstName} ${student.lastName} does not loves Coffee`);
        }
        else{
            console.log(`${student.firstName} ${student.lastName} loves Coffee`);
        }
     })
 }

 // showCoffeeLovers();
 


 // Goal: Print out everyone who is aged less than 30 

 function showYoungerStudents(){ // function definition
    let counter = 0;

    classArray.forEach((student) => {
        if(student.age <= 30 && student.drinkCoffee){
            counter++;
            console.log(`${student.firstName} ${student.lastName} is younger than 30`);
        }
    })
    console.log(`${counter} people are younger than 30`);
 }

//  showYoungerStudents(); // function call

function showYoungerStudentsAndCoffeeLovers(){
    showYoungerStudents();
    showCoffeeLovers();
}
// showYoungerStudentsAndCoffeeLovers();

// CODE from Ironhack Lectures
// Building simple functions (i.e: sayHello, doMultiplication, printName...etc)


function sayHello(name) {
    console.log(`Hello ${name}!`);
  }
  
  sayHello('Mary');

// function doMultiplication(a, b) {
//     // return a*b;
// }

// console.log(doMultiplication(5, 7));

function printName(name) {
    if (name.length === 0) {
      return 'Please provide a valid name!';
    }
  
    return `Name is ${name}.`;
  }
  
  printName(''); // => Please provide a valid name!
  printName('George');

function getUserInfo(firstName, lastName) {
    const userInfo = {
      firstName: firstName,
      lastName: lastName
    };
  
    return userInfo;
  }
  
  console.log(getUserInfo('ana', 'martinez')); 
  console.log(getUserInfo('Lloyd', 'Chambrier')); 

function getFavorites(fav1, fav2, fav3) {
    const favorites = [fav1, fav2, fav3];
  
   return favorites;
  }

  console.log(getFavorites('javascript', 'python', 'ruby'));

  // Create a function that accepts 3 numbers as parameters, and returns their sum.

  function sumOfNumbers(a, b, c){
    const sum = a + b + c;
    return sum;
  }

  console.log(sumOfNumbers(10,2,4));

//   Create a function named isNameOddOrEven() that accepts a string as a parameter. 
// The function should return whether a received string has an odd or even number of letters. 
// The expected return should be in the following format - string: ’<name> has an even/odd number of letters’.

function isNameOddOrEven(string){
    const length = string.length;
    if(length % 2 === 0){
        // console.log(` string has ${length} even number of letters`)
        return ` string has ${length} even number of letters`;
    }

        // console.log(` string has ${length} odd number of letters`)
        return ` string has ${length} odd number of letters`

}

// console.log(isNameOddOrEven("hello"));
// console.log(isNameOddOrEven("helloJaime"));

function sum(array) {
    if (!array.length && array.length !== 0) return; // if not an array then return
  
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

  
//   console.log(testArray.length)
  console.log(sum(testArray));