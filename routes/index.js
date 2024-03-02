var express = require('express');
var router = express.Router();
const userModel = require("./users"); //importing model of users 

const passport = require('passport');
const localStrategy = require('passport-local');

// passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robonox' });
});

// router.get('/login',function(req, res){
//   res.render('login');
// })
// router.get('/signup',function(req, res){
//   res.render('signUp');
// })

module.exports = router;
