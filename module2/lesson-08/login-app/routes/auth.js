'use strict'

const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt')
const User = require('../models/user');
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard');

/* GET home page */
router.get('/signup', isLoggedOut, (req, res, next) => {
  console.log(req.session)
  res.render('auth/signup')
})

router.post('/signup', isLoggedOut, (req, res, next) => {
  console.log(req.session)
  const { username, password } = req.body

  bcrypt.hash(password, 10)
    .then(hash => {
      return User.create({
        username: username,
        password: hash
      })
      .then(user => {
        res.redirect('/auth/login')
      })
    })
})

router.get('/login', isLoggedOut, (req, res, next) => {
  console.log(req.session)
  res.render('auth/login')
})

router.post('/login', isLoggedOut, (req, res, next) => {
  const { username, password } = req.body

  let theUser

  User.findOne({username: username})
    .then(user => {

      theUser = user
      if (!user) {
        res.send('username not found')
        throw('username not found')
      }
      return bcrypt.compare(password, user.password)
    })
    .then(passwordCorrect => {

      if(!passwordCorrect) {
        res.send('password incorrect')
        return
      }

      req.session.user = theUser
      res.redirect('/auth/profile')

    })
    .catch(e => {
      next(e)
    })
})

router.get('/profile', (req, res) => {
  if(req.session.user){
    const { user } = req.session;
    res.render('auth/profile', user)
  }
  else {
    res.render('auth/profile')
  }
  
})

router.get('/logout', isLoggedIn, (req, res, next) => {
  res.clearCookie('connect.sid');
  req.session.destroy(() =>{
    res.redirect('/auth/login')
  })
})

module.exports = router;
