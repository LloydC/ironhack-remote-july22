const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = require("express").Router();

const User = require('../models/User.model');

const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard')
/* GET Signup page */
router.get("/signup", isLoggedOut, (req, res) => {
  console.log('req session', req.session);
  res.render("auth/signup");
});

router.post("/signup", isLoggedOut, (req, res) => {
  const { username, email, password } = req.body;
 
  bcrypt
    .genSalt(saltRounds)
    .then(salt => bcrypt.hash(password, salt))
    .then(passwordHash => {
      return User.create({
        username,
        email,
        passwordHash,
      });
    })
    .then( () => {
      res.redirect('/auth/login');
    })
    .catch(error => console.log(error));
  //Authentication logic goes here
  
})

/* GET Profile page */
router.get("/profile", isLoggedIn, (req, res) => {
    const { username } = req.session.currentUser;
    res.render("auth/profile", {username});
});

router.get("/login", isLoggedOut, (req, res) => {
  console.log('req session', req.session);
  res.render("auth/login");
});

router.post("/login", isLoggedOut, (req, res) => {
  const { email, password } = req.body;

 // Check for empty fields
  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }
// 1.  if the user is registered ==> meaning did user with provided email/username already exist in our app,

  User.findOne({ email })
      .then(user => {
        if (!user) {
          // 3. send an error message to the user if any of above is not valid,
          res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
          return;
          // 2. if the password provided by the user is valid,
        } else if (bcrypt.compareSync(password, user.passwordHash)) {
          // 4. if both are correct, let the user in the app.
          req.session.currentUser = user;
          res.redirect('/auth/profile');
        } else {
          // 3. send an error message to the user if any of above is not valid,
          res.render('auth/login', { errorMessage: 'Incorrect password.' });
        }
      })
      .catch(err => console.log(err))
})

router.post('/logout', isLoggedIn, (req, res) => {
  res.clearCookie('connect.sid');
  req.session.destroy(()=>{
    res.redirect('/auth/login')
  })
})

module.exports = router;