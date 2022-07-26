const addCatPicture = function () {
    // this function should generate a Random cat picture inside the 'cat-container'
    // the name of the cat should be passed along with the input
    // You should use the following link to generate a picture of a cat  http://placekitten.com/RandomNumber/RandomNumber

    // User actions 

    // User enters input --> Done
    // User presses Add cat Button --> Done
    // Cat image is generated --> Done
    // Cat name is added above cat image

    // Pauline/Ece/Clark/Michael Pseudo code

    // Grab the text in the input 
    const catName = document.getElementById('cat-name').value;
    // Create the image element 
    const divElement = document.createElement('div'); // --> <div> </div>
    divElement.setAttribute('class', 'cat-card');
    const imgElement = document.createElement('img');
    const headingElement = document.createElement('h2');
    headingElement.innerText = catName;
    console.log('headingElement', headingElement);
    // Generate a random number and add it to the url
    // Christian ---> write a function to generate a randomNumber
    const randomNumberOne = generateRandomNumber();
    const randomNumberTwo = generateRandomNumber();
    const catUrl = `http://placekitten.com/${randomNumberOne}/${randomNumberTwo}`;
    // console.log('randomNumberOne:', randomNumberOne);
    // console.log('randomNumberTwo:', randomNumberTwo);
    // console.log('catUrl: ', catUrl);
    // console.log(typeof catUrl);
    // Add an image src which would point to http://placekitten.com/RandomNumber/RandomNumber
    imgElement.setAttribute('src', catUrl); // same as imgElement.src = catUrl;
    imgElement.setAttribute('alt', `cat_name_${catName}`);
    divElement.appendChild(imgElement); // --> <div> <h2> <img /> </div>
    divElement.appendChild(headingElement); // --> <div> <h2> </div>
    
    const catContainer = document.getElementById('cat-container'); // <div id="cat-container"> </div>
    catContainer.appendChild(divElement); // <div id="cat-container"> <div> <img /> </div> <div> <img /> </div></div>
    
    const catContainers = document.getElementsByClassName('cat-card');
    for(let i = 0; i < catContainers.length; i++){
        catContainers[i].addEventListener('click',function(event){
            return event.currentTarget.remove();
        })
    }
    // const catContainers = document.querySelectorAll('.cat-card');
    // catContainers.forEach(catContainer => {
    //     catContainer.addEventListener('click', function(event){
    //         return event.currentTarget.remove();
    //     })
    // })

    // const catCards = document.getElementsByClassName('cat-card');
    // const catCards = document.querySelectorAll('.cat-card #cat-container');
    // console.log('catContainers', catContainers);
    
    
   document.getElementById('cat-name').value = "";
    
}

const removeCat = function(e) {
    // this function should remove the picture of a cat when the cat gets clicked
    
    // Muhammed pseudo code

    // Set up a click event for the div containing the image 
   
    // use the event.currentTarget to point to the image clicked
    // Select the node containing the image 
    // Remove the node containing the image from the parent 
}

function generateRandomNumber(){ // Generate a random number
    return Math.floor(Math.random()*200);
}
// Add an event listener for when the Add cat button is clicked
const addCatButton = document.getElementById('add-cat');
addCatButton.addEventListener('click', addCatPicture);
// addCatButton.onclick = addCatPicture;


// const diceNumber = 1 + Math.floor(Math.random()*6);  // 0.9 * 7 = 6.3 --> 6
// window.addEventListener('load', function(){

// })