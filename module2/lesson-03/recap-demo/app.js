require('dotenv').config(); // --> process.env = {}
const { PORT } = process.env; // ---> const PORT = process.env.PORT;

const axios = require('axios');
const hbs = require('hbs');
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(path.join(__dirname, "/views/partials"), (err) => console.log(err));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
   const randomDogFact = axios
                            .get('http://dog-api.kinduff.com/api/facts')
                            .then((response) => {
                                return response.data.facts[0];
                            })
                            .catch(err => console.log(err));
   const randomCatFact = axios
                            .get('https://meowfacts.herokuapp.com')
                            .then((response) => {
                               return response.data.data[0];
                                // const { data } = response; // response is an object, extract property data from this object, create variable data equal to value received 
                            }) // .then(({ data }) => console.log(data))
                            .catch(err => console.log(err))

Promise.all([randomCatFact, randomDogFact])
        .then((randomFacts) => {
            console.log(randomFacts);
            // extract the strings from the arrays ['', '']
            res.render('index', {data: randomFacts})
        })
        .catch(err => console.log(err))
    
})

app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`));