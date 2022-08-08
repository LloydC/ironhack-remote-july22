const port = 4000; // gateway to my express server
const express = require('express'); // loading the express package
const app = express(); // start my express server 

app.use(express.static('public')); // setting the 'public' folder as the folder containing all the static files

app.get('/cats', (req, res) => { // defining a route for a "Get" request at the '/cats' endpoint
    res.sendFile(`${__dirname}/views/cats.html`) // ?
})

app.get('/about', (req, res) => { // defining a route for a "Get" request at the '/about' endpoint
    res.send('<h1>the about page<h1>')
})

app.get('/', (req, res) => { // defining a route for a "Get" request at the '/' home endpoint
    res.send('the index page')
})

app.listen(port, () => console.log(`Server is listening at port ${port}`));