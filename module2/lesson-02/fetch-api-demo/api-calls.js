// use fetch api as demo
const getRandomCatFact = fetch('https://meowfacts.herokuapp.com')
                        .then(response => response.json())
                        .then(returnedData => document.getElementById('cat-fact').innerText = returnedData.data[0])
                        .catch(err => console.error(err))

const getRandomDogFact = fetch('http://dog-api.kinduff.com/api/facts?number=1')
                        .then(response => response.json())
                        .then(returnedData => console.log('returnedData: ',returnedData))
                        .catch(err => console.error(err))