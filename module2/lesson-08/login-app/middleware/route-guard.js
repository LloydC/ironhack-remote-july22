

// checks if the user is logged in when trying to access a specific page
// const isLoggedIn = (req, res, next) => {
//     if (!req.session.user) {
//       return res.redirect("/auth/login");
//     }
//     next();
//   };

  const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
      next();
    }
    else {
      res.redirect("/auth/login");
    }
    
  };
  
  // if an already logged in user tries to access the login page it
  // redirects the user to the home page
  // const isLoggedOut = (req, res, next) => {
  //   if (req.session.user) {
  //     return res.redirect("/");
  //   }
  //   next();
  // };

  const isLoggedOut = (req, res, next) => {
    if (!req.session.user) {
      next();
    }

    else {
      res.redirect("/");
    }
    
  };

  const isAdmin = (req, res, next) => {
    if(req.session.user.admin) {
      next();
    }
    else {
      res.redirect('/auth/login');
    }
  }
  
  // export the functions to make them available to be used wherever we need them
  // (we just need to import them to be able to use them)
  
  module.exports = {
    isLoggedIn,
    isLoggedOut
  };