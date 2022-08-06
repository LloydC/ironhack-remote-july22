const express = require('express'); // loading the express package
const port = 4000; // gateway to access the express server

const app = express(); // initializes the express server

app.get('/', (request, response) =>{ // request on the '/' endpoint
    console.log(request.url);
    response.send('Welcome to the home page');
})

app.get('/about', (request, response) =>{ // request on the '/about' endpoint
    console.log(request.url);
    response.send('Welcome to the about page');
})

app.listen(port, () => console.log(`Express server listening on port ${port}`)); // listen to incoming request on a specific port