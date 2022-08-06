const http = require('http'); // loading the http package
const port = 4000; // gateway to access your local server

const server = http.createServer((request, response) => { // create a server
    if(request.url === '/') { // if home page url gets a request
        response.write('<h1>this is the home page</h1>');
    }
    else if( request.url === '/about'){ // if about url gets a request
        response.write('<p>this is the about page</p>');
    }
    else{ // for any other page
        response.write('<h1>404 page not found </h1>');
    }
})

server.listen(port, () => console.log(`Server is listening on port ${port}`)); // makes the server listen to incoming requests and displays on which port it is listening