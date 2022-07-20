const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];

// Soufiane: use Object.values()

let studentAge = students.map(student => {
    if(student.age < 19){
        return student.age
    }
}).reduce((previousV, currentV) => previousV + currentV);

// console.log(studentAge);

// Priscille: use .map and then use .reduce along
const savedAges = students.map(student => student.age).reduce((placeHolder, currentValue) => placeHolder + currentValue);

// Lloyd Test
// let studentsAgeSum = students.reduce((accumulator, student) => accumulator.age + student.age);
// console.log('studentsAgeSum', studentsAgeSum);

const lowercaseNames = students.map(student => student.name.toLowerCase());

const arrayWithCity = students.map(student => {
    if(student.name === "Bob"){
        return {
            name: student.name,
            age: student.age,
            city: 'Amsterdam'
        }
    } 
        return {
            name: student.name,
            age: student.age
        }
  });
 
  // console.log(arrayWithCity);

const array = [1, 2, 3];

const newArray = array.map(function (number) {
  return number * 2;
});

// console.log(newArray);

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capitalizedCities = cities.map(city =>  city[0].toUpperCase() + city.slice(1))

// console.log(capitalizedCities);

const array1 = [1, 2, 3, 4];
const sum = array1.reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(sum)
let reduced = students.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);


const studentsYoungerThanNineteen = students.filter(student => {
    if(student.age > 19){
        return student
    }
})
// console.log(studentsYoungerThanNineteen)

const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

  const placesWithAPool = places.filter(place => place.pool === true).map(place => place.title);

  // console.log(placesWithAPool)

  const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

  const oddNumbers = numbers.filter(number => number%2 !== 0);
  const evenNumbers = numbers.filter(number => number%2 === 0);

//   console.log(oddNumbers);
//   console.log(evenNumbers);


  const numbers2 = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18, 99];
  const ascendingArray = [...numbers2];

  function compare(a, b) {
    if (a > b) return -1; // a is less than b
    if (a < b) return 1; // a is greater than b
    if (a === b) return 0; // a equals b
  }

  const sortArray = ascendingArray.sort(function (a, b) { //ES5
    return a - b;
  });
  console.log(numbers2)
  console.log(ascendingArray);
    // const ascendingSortedArray = numbers2.sort((a, b) => a - b);
  // console.log(ascendingSortedArray);

//   const descendingSortedArray = numbers2.sort(function (a, b) {
//     return b - a;
//   });
// // const descendingSortedArray = numbers2.sort((a, b) => b - a);
//   console.log(descendingSortedArray);

const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];
const copyWords = [...words].map(word => word.toLowerCase()).sort(function(a, b) {
  if (a < b) return 1; //  1 here (instead of -1 for ASC)
  if (a > b) return -1; // -1 here (instead of  1 for ASC)
  if (a === 0) return 0;
});

console.log(copyWords);

const secondCopyWords = [...words].map(word => word.toLowerCase()).sort(function(a, b) {
    if (a > b) return 1; //  1 here (instead of -1 for ASC)
    if (a < b) return -1; // -1 here (instead of  1 for ASC)
    if (a === 0) return 0;
  });

console.log(secondCopyWords);

const arr1 = ['one', 'two', 'three'];
const arr2 = [...arr1].reverse();

console.log(arr1); // ['one', 'two', 'three'] // --> original array is mutated
console.log(arr2); // ['three', 'two', 'one']

 
  
 