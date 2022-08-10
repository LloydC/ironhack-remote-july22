const path = require('path')
const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require('body-parser'); // package which can "parse"/"translate" incoming POST requests 

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({ extended: true })); // setting express to parse incoming POST requests

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', (req, res) => {
    console.log(req.body);
     // create a new user in the db
    // redirect the user to a profile page
    const { username } = req.body;
    const redirectUrl = `/users/${username}`
    //console.log(redirectUrl);
    res.redirect(redirectUrl); // redirect ---> sending the user to the endpoint defined
})

app.get('/users/:username', (req, res) =>{
    const { username } = req.params;
    res.render('profile', {username})
})

app.listen(port, ()=> console.log(`Server is running on port ${port}`))