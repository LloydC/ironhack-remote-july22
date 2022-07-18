let likeCats = true;
let likeDogs = true;
let drinkCoffee = false;

let test1 = likeCats && likeDogs; 
let test2 = likeCats || likeDogs;
let test3 = likeDogs && !drinkCoffee;
let test4 = likeDogs || drinkCoffee;
console.log(!test3);

if(likeCats && likeDogs){
    console.log("You amazing human ")
}
else if(likeDogs || drinkCoffee){
    console.log("Awesome dog!")
}
else if(likeCats || drinkCoffee){
    console.log("Cool Cat!")
}
else {
    console.log("Lonely human")
}