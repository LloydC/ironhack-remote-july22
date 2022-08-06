// use fetch api as demo
const getRandomCatFact = fetch('https://cat-fact.herokuapp.com/facts/random')
                        .then(response => response.json())
                        .then(json => document.getElementById('cat-fact').innerText = json.text)
                        .catch(err => console.error(err))

// TO BE FIXED  
// const getRandomDogFact = fetch('http://dog-api.kinduff.com/api/facts?number=1', {
//                             headers: {
//                                 'Content-Type': 'application/json',
//                                 'Access-Control-Allow-Origin': '*',
//                             }                     
//                         })
//                         .then(response => response.json())
//                         .then(json => console.log('json: ',json))
//                         .catch(err => console.error(err))


// TO BE FIXED                      
// const getCatStatus200Photo = fetch('https://http.cat/200', {
//                                 method: 'GET',
//                                 headers: {
//                                     'Access-Control-Allow-Origin': '*',
//                                     'Content-Type': 'image/jpeg'
//                                 }
//                             })
//                             .then(response => response.json())
//                             .then(json => console.log('json: ', json))
//                             .catch(err => console.error(err));