const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  //create random number for cookie value and assign to isLoggedIn key
  const secret = Math.floor(Math.random() * 99);
  res.cookie = ('isLoggedIn', `${secret}`);
  return next();
};

cookieController.verifyUser = (req, res, next) => {
  if (req.cookies.isLoggedIn) {
    return next();
  } else {
    return res.send(`You must be signed in to view this page`);
  }
};

module.exports = cookieController;
