const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
      return res.redirect("/auth/login");
    }
    next();
};
  
const isLoggedOut = (req, res, next) => {
    if (req.session.currentUser) {
      return res.redirect("/");
    }
    next();
};

const isOwner = (req, res, next) => {
    if(!req.session.currentUser._id === req.params.roomId){
     res.redirect('/')
    }
    next()
}
  
  // export the functions to make them available to be used wherever we need them
  // (we just need to import them to be able to use them)
  
  module.exports = {
    isLoggedIn,
    isLoggedOut,
    isOwner
  };