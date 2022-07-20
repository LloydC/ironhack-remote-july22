function welcomeMessage(message) {
    return `Welcome ${message}`;
}
  
function sayHello(input){
    return `Hello, ${input}`;
}
  // function assigned to a variable
//   const greeting = welcomeMessage('So nice to have you here! Welcome!');
//   console.log(greeting)
//   const sayHi = sayHello(greeting)
//   console.log(sayHi);
  //console.log(greeting); // So nice to have you here! Welcome



//   function checkFuncDeclaration() {
//     console.log('Func declaration CAN be invoked before it is defined.');
//   }


  const checkFuncExpression = input => console.log(input, 'Func expression CAN NOT be invoked before it is defined.');

  

  function execSomething(input, func, func2){
    const firstFunctionCall = func(input);
    const secondFunctionCall = func2(input);
    return `${firstFunctionCall} ${secondFunctionCall}`;
  }

  // console.log(execSomething('Dani', sayHello, welcomeMessage));// ---> sayHello('Dani')
//   console.log(execSomething('Christian', welcomeMessage)); // welcomeMessage('Christian')
//   console.log(execSomething('Alejandra', checkFuncExpression))
  // checkFuncExpression();

  function greeting(studentFirstName, studentLastName, greetingFunction){
    return greetingFunction(studentFirstName, studentLastName )
}
    
    const helloFunction = (firstName, lastName)=> `Hello ${firstName} ${lastName}`;

    const welcomeFunction = function(firstName, lastName){
        return`Welcome ${firstName} ${lastName}`;
    };

    // console.log(greeting('Pauline', 'Thomas', welcomeFunction));
    // console.log(helloFunction('Alejandra', 'Rodriguez'));

    function eatDinner() {
        setTimeout(function () {
          console.log('Eating the dinner!');
        }, 2000);
      }


    function printName(name, anonFunc) {
        anonFunc(name);
    }
      
    function getLength(str, anonFunc) {
        anonFunc(str);
    }

    printName('sandra', function (name) {
        console.log(name[0].toUpperCase() + name.slice(1));
    });

    getLength('aleksandra', function (str) {
        console.log(`${str} has ${str.length} letters.`);
      });



      function notifyUser() {
        console.log('I am anonymous function and I will execute after 1 second.');
      }
      
      setTimeout(notifyUser, 1000);