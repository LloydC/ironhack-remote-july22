// Get the value of the first student’s name
// Get the age of the student named Sarah
const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];
  console.log(students[0].name);
  console.log(students[3].age);

// Get the value Bill to display
// Get the value Thomas to display
  const twoD = [
    ["Bob", "Susy", "Ted"],
    ["Lilly", "Sarah", "Bill"],
    ["Thomas", "Barry", "Alex"]
  ];
  console.log(twoD[1][2]);
  console.log(twoD[2][0]);
  // Student example with multiple classrooms

  // Retrieve the second “classroom” of students
  // Retrieve the first name “Antonette”
  //  Retrieve the age 18
  // Retrieve the last name “Beatty”
  const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];

  // console.log(classes[1]);
  // console.log(classes[4][0].firstName);
  // console.log(classes[1][3].age);
  // console.log(classes[4][4].lastName)

  // for(let i = 0; i < classes.length; i++){ 
  //   for(let j = 0; j < classes[i].length; j++){
  //     console.log(classes[i][j].age);
  //   }
  // }

  // classes.forEach(classRoom => classRoom.forEach(student => {
  //   if(student.firstName === 'Antonette'){
  //     console.log(student);
  //   }
  // }))


// get the city value from classroom
// get back the teacher’s age from classRoom
  const classRoom = {
    teacher:  {
      firstName: 'Greg',
      lastName: 'Dach',
      age: 38,
      address: {
        street: "3085 Kelton Knolls",
        city: "Aldaside",
        state: "Maryland"
      }
    }
  };

  // for(let prop in classRoom){
  //   for(let prop2 in prop){
  //     console.log(prop[prop2]);
  //     for(let prop3 in prop2){
  //       console.log(prop2[prop3])
  //     }
  //    }
  // }

  // console.log(classRoom.teacher.address.city);
  // console.log(classRoom.teacher.age);

  // Classroom System Example

  // Get Teacher's age
  // Get 'Alaina's firstName
  const classRoomSystem = {
    teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
    students: [
      { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
      { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
      { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
      { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
      { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
    ]
  };

  console.log(classRoomSystem.teacher.age);
  console.log(classRoomSystem.students[3].firstName);

  // School with Classroom System Example

  // Get Second's classroom Teacher's age
  // Create a function getAgeAverage that takes in a single parameter "students"
  // It should iterate over the list of students and return the average age of the class
  // i.e: Class average age is 21 years old

  const school = {
    name: "Fake School 1",
    classRooms: [
      {
        teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
        students: [
          { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
          { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
          { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
          { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
          { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
        ]
        },
      {
        teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
        students: [
          { firstName: 'Manley', lastName: 'Doyle', age: 18 },
          { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
          { firstName: 'Sid', lastName: 'Rohan', age: 30 },
          { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
          { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
        ]
      }
    ]
  }

  // console.log(school.classRooms[1].teacher.age);

  // for(let i =0; i < school.classRooms.length; i++){
  //   for(let j = 0; j < school.classRooms[i].students.length; j++){
  //     console.log(school.classRooms[i].students[j].lastName)
  //   }
  // }

// let studentsList = [];
// for(let i =0; i < school.classRooms.length; i++){
//   studentsList = studentsList.concat(school.classRooms[i].students);
// }

// console.log('studentsList: ', studentsList);
const classRoom1 = {
  teacher:  {
    firstName: 'Greg',
    lastName: 'Dach',
    age: 38,
    address: {
      street: "3085 Kelton Knolls",
      city: "Aldaside",
      state: "Maryland"
    }
  }
};

Object.keys(classRoom1).forEach(function(prop) {
  console.log(classRoom1[prop]);
  if(typeof prop === 'object'){
    Object.keys(prop).forEach(function(innerProp){
      //console.log(prop[innerProp]);
    })
  }
 
  // `prop` is the property name
  // `data[prop]` is the property value
});