const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 3001;

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));

// ---> [user1, user2]
const users = ['Dani', 'Michael','Sunaira'];

app.get('/', (req, res)=>{
    res.render("index", { layout: false, title: 'Welcome to my Homepage!', paragraph: 'Handlebars is awesome', usersTest:users});
})

app.get('/contact', (req, res)=>{
    res.render("contact", {title: 'Welcome to my Contact page!', navbarBlue: true});
})

app.listen(port, ()=> console.log(`Server is running on port ${port}`))