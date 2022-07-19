// Create three different fruits as objects with properties name, color and reviews
const fruit = {
    name: 'apple',
    color: 'red',
    reviews: ["the most awesome apples i ever bought", "great apples", "awesome apples"]
}

const fruit2 = {
    name: 'strawberry',
    color: 'red',
    reviews: ["the most awesome strawberries i ever bought"]
}

fruit2.amount = 20; // add new property
fruit2.dimensions = {}; // add new property
fruit2.popular = false; // add new property

// Conditional statement
// if(fruit2.popular){
//     console.log('this fruit is popular');
// }
// else {
//     fruit2.popular = true;
//     console.log('this fruit is not popular');
// }

// Access the property amount
// fruit['amount'] = 6;

// Loop through property reviews
// for(let i =0; i < fruit.reviews.length; i++){
//     if(i === 0 || i === fruit.reviews.length - 1){
//         console.log('reviews',fruit.reviews[i]);
//     }
// }

const fruit3 = {
    name: 'mango',
    color: 'green',
    reviews: ["the most delicious fruit in this shop"],
    dimensions: {
        width: 7,
        height: 8
    }
}

// for(let keys in fruit3) { 
//     // console.log(key); // this will output all the keys in the object
//     // console.log(fruit3[key]); // fruit['name'] this will output all the values
// }

// for(let i = 0; i < fruit3.reviews.length; i++){
//     console.log(keys)
// }
 
// console.log(typeof "keyList");
// console.log(typeof 12);
// console.log(fruit3.reviews[fruit3.reviews.length - 1])
// console.log(Object.keys(fruit3));
// console.log(Object.values(fruit3));


// const mangoVolume = fruit3.dimensions.width * fruit3.dimensions.height;
// const mangoVolume2 = fruit3.dimensions['width'] * fruit3.dimensions['height'];

// console.log(fruit['name']); // access the value of property with key 'name'
// console.log(fruit3.name); // access the value of property with key 'name'
// console.log(mangoVolume2);
// console.log(fruit.reviews[0], fruit.reviews[2]);
// console.log(fruit);
// console.log(fruit2);

// let myCar = {
//     make: 'Honda',
//     model: 'Accord',
//     year: 1998
//   };

// 'model' in myCar; // returns true

// Add them to an array fruits
// Add a property dimensions that will represent the width and height of the fruit
// Practice accessing the values
// Loop through the keys and values

// Create an object "student" that represents you
// Give it for properties firstName, lastName, age, city, drinkCoffee, likeCats, favoriteFood, favoriteBook
const student1 = {
    firstName : 'Clark',
    lastname : 'McEvoy',
    age : 28,
    city : 'Frankfurt',
    drinkCoffee : true,
    likeCats : true,
    favoriteFood : ['Pizza'],
    favouriteBook : ['Cracking the Code interview']
}

student1.firstName = 'Mr Clark';

const student2 = {
    firstName: 'Adam',
    lastName: 'Amatavivadhana',
    age: 22,
    city: 'Amsterdam',
    drinkCoffee: true,
    likeCats: true,
    favoriteFood: 'Pasta',
    favoriteBook: 'The Lord of the Rings'
}

// const name = "Lloyd"
// name = "LloydC"
// const age = 37;
// console.log(name)

let price = 20 // changeable variable
const VAT = 0.21; // immutable variable
delete student1.favouriteBook;
console.log(student1)

// function maxOfTwoNumbers that takes two numbers as arguments and --> function name, number of parameters
// returns the bigger number. --> end result

// the function findLongestWord that takes as an argument an array of words  --> function name, number of parameters
//  returns the longest one. --> end result
// If there are 2 with the same length, it should return the first occurrence --> Tip/Hint

// the function named sumNumbers that takes an array of numbers as an argument --> function name, number of parameters
//  and returns the sum of all of the numbers in the array.
// [2,4,5,6] ---> 17
// [12,32] --> 44