const listContainer = document.getElementById('list-container'); // retrieve the element with a matching id
const listItems = document.getElementsByClassName('list-item'); // retrieve elements with a matching class
const liTags = document.querySelectorAll('li'); // retrieve elements that match the argument
const inputTag = document.querySelector('input'); // retrieve the first element that match the argument

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(event){ // add an event listener on all list items

        if(event.currentTarget.innerText !== 'change value'){
            event.currentTarget.innerText = 'change value'
        }
        else {
            event.currentTarget.innerText = 'change value again!'
        }

        
        // console.log(event.currentTarget); // visual representation of whichever event has occured 
        // console.log(`list item with a ${event.currentTarget.innerText} value has been clicked`);
    })
}

const secondListContainer = document.getElementById('second-list-container'); // retrieve the div container

const addUl = document.createElement('ul'); // create a ul element
// addUl.appendChild(addLiElement)// ---> can't be done
secondListContainer.appendChild(addUl);

const queryUlElement = document.querySelectorAll('ul')[1]; // retrieving the ul element which im going to use as the parent container
const addLiElement = document.createElement('li'); // create a li element
addLiElement.innerText = 'four'; // defining the content of the li
const addSecondLiElement = document.createElement('li'); // create a li element
addSecondLiElement.innerText = 'five'; // defining the content of the li
const addThirdLiElement = document.createElement('li'); // create a li element
addThirdLiElement.innerText = 'six'; // defining the content of the li

queryUlElement.appendChild(addLiElement); // adding the li to the ul container which is the parent
queryUlElement.appendChild(addSecondLiElement);
queryUlElement.appendChild(addThirdLiElement);
queryUlElement.removeChild(addLiElement);
queryUlElement.removeChild(addSecondLiElement);
// document.body.removeChild(listContainer) // removing the li element with 'four' as its content
// console.log(listContainer.getAttribute('id')); // retrieves the value of the 'id' attribute
// console.log(listItems[0].getAttribute('class')) // retrieves the value of the 'class' attribute
// console.log(inputTag.getAttribute('type')); // retrieves the value of the 'type' attribute

listContainer.setAttribute('style', 'color:red;'); // setting the 'style' attribute value
listItems[1].setAttribute('style', 'color:green;') // setting the 'style' attribute value
listItems[2].setAttribute('class','hide show'); // setting the 'class' attribute value
listContainer.setAttribute('style', ''); // setting the 'style' attribute value

listContainer.removeAttribute('style');
listItems[1].removeAttribute('style');

// console.log(secondListContainer.innerHTML);

const divElement = secondListContainer;
const ulElement = secondListContainer.firstElementChild;
const liElement = secondListContainer.firstElementChild.firstElementChild;
liElement.innerText = 'eight';
liElement.setAttribute('style', 'color:purple;');
liElement.innerText = '';
liElement.innerText = 'nine';

const buttonElement = document.getElementById('add-cat'); // retrieve the button element

// let counter = 0;

// buttonElement.onclick = function(){ // add an event listener of type 'click'
//         if(counter < 5){
//             console.log('button has been clicked!')
//             counter++;
//         }
//         else{
//             console.log("you've clicked this button one time too many!");
//         }
//     };

let counterA = 0;  
document.addEventListener('keypress', function(e){
    console.log('event: ', e);
    if( e.key === 'a'){
        counterA++;
        console.log(`a has been pressed ${counterA} times`)
    }
})

function testEvent(event){
    console.log(event);
};
// document.addEventListener('click', function(event){
//     console.log(event);
// })
// let counter = 0
// buttonElement.addEventListener('click', function(){ // add an event listener of type 'click'
//     if(counter < 5){
//         console.log('button has been clicked!')
//         counter++;
//     }
//     else{
//         console.log("you've clicked this button one time too many!");
//     }
    
   
// })
console.log(buttonElement);

// console.log(liElement); // <div id='second-list-container'> <ul> <li> </li> </ul> </div>
// queryUlElement.innerText = 'seven';
// console.log(secondListContainer.innerHTML);
// console.log(queryUlElement.innerHTML);
// console.log(listContainer);
// console.log(listItems);
// console.log(liTags);
