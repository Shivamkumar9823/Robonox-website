var express = require('express');
var router = express.Router();
const userModel = require("./users"); //importing model of users 

const passport = require('passport');
const localStrategy = require('passport-local');

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', async function(req, res, next){
    res.render('index', {title:'Robonox', nav:true})
   
});



router.get('/login',function(req, res){
     res.render('login');
})

router.get('/signup',function(req, res){
     res.render('signup');
})
router.get('/training',function(req, res){
     res.render('edu', {title:'Robonox', nav:true })
});

// router.get('/profile',isloggedIn,function(req, res){
//      res.render('profile');
// })

router.get('/profile', isloggedIn, async function(req, res, next){
  const user = await userModel
  .findOne({ username: req.session.passport.user});
  res.render('profile' , {user, title:'Robonox', nav:true});
});



router.get('/fail',function(req, res){
     res.render('fail');
})


//render after submitting login.
router.post('/loginN',passport.authenticate("local",{
  failureRedirect:"/login",
  successRedirect:"/"
}), function(req, res, next){});


//render after submitting singup.
router.post('/register',function(req, res){
  var userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
    contact:req.body.contact
  })
  userModel.register(userdata , req.body.password).then(function(){ passport.authenticate("local")(req,res,function(){
                    res.redirect('/')
                  })
              })
})


router.get("/logout", function(req,res,next){
  req.logOut(function(err){
    if(err) return next(err);
    res.redirect('/');
  })
})

function isloggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login")
}





module.exports = router;
