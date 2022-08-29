const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = require("express").Router();

const User = require('../models/User.model');

const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard')

/* GET Signup page */
router.get("/signup", (req, res) => {
  const loggedInNavigation = req.session.hasOwnProperty('currentUser');
  res.render("auth/signup", {loggedInNavigation});
});

router.post("/signup", (req, res) => {
  const { fullName, email, password } = req.body;
 
  bcrypt
    .genSalt(saltRounds)
    .then(salt => bcrypt.hash(password, salt))
    .then(passwordHash => {
      return User.create({
        fullName,
        email,
        password: passwordHash,
      });
    })
    .then( () => {
      res.redirect('/auth/login');
    })
    .catch(error => console.log(error));  
})

/* GET Profile page */
router.get("/profile", (req, res) => {
    const { fullName } = req.session.currentUser;
    const loggedInNavigation = req.session.hasOwnProperty('currentUser');
    res.render("auth/profile", {fullName, loggedInNavigation});
});

router.get("/login", (req, res) => {
  const loggedInNavigation = req.session.hasOwnProperty('currentUser');
  res.render("auth/login", {loggedInNavigation});
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

 // Check for empty fields
  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }
  User.findOne({ email })
      .then(user => {
        if (!user) {
          res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });   //send an error message to the user if any of above is not valid,
          return;
        } else if (bcrypt.compareSync(password, user.password)) {  // check if the password provided by the user is valid,
          req.session.currentUser = user;
          res.redirect('/auth/profile');
        } else {
          res.render('auth/login', { errorMessage: 'Incorrect password.' }); // send an error message to the user if any of above is not valid,
        }
      })
      .catch(err => console.log(err))
})

router.post('/logout', (req, res) => {
  res.clearCookie('connect.sid');
  req.session.destroy(()=>{
    res.redirect('/auth/login')
  })
})

module.exports = router;