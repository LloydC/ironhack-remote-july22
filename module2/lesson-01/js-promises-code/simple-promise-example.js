// function makeCoffee(name){
//     setTimeout(()=> console.log('Making coffee', name), 300)
// }
let coffeeStash = 0;

const makeCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(coffeeStash <= 0) throw('no more coffee')
            console.log('making coffee');
            resolve('Americano')
        }, 1000)
    })
}

const addSugar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('adding sugar');
            resolve();
        }, 1000)
    })
}

makeCoffee()
.then(() => addSugar())
.then(coffeeType => {
    console.log(coffeeType);
    coffeeType = "espresso";
    return coffeeType;
})
.catch(err => console.error(err))