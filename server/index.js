var express = require('express');
var path=require('path');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var bodyParser = require('body-parser');
var passport=require('passport');
var app = express();
var mongoose=require('mongoose');
var dataModels = require('../database-mongo');
var mongoStore=require('connect-mongo')(session);
// var routes=require('./userroutes')
var flash=require('express-flash');

require('../config/passport');

//middleware
app.use(express.static(__dirname + '/../react-client/dist'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cookieParser);

app.use(session({secret:'mysecretsession',resave:true,saveUninitialized: true,

   store:new mongoStore({mongooseConnection: mongoose.connection,collection: 'session',})
 }))

app.use(passport.initialize());
app.use(passport.session());

// app.use(routes);

app.use(flash());

// set template
app.set('view engine','ejs');










app.get('/admin',function(req,res){
  res.render('admin');

})

app.get('/admin/signup',function(req,res){
  res.render('signup');
})


app.get('/admin/doctorform',function(req,res){
  res.render('doctorform');
})


app.post('/admin/doctorform',function(req,res){
  
 // save to the database

 var newDoc=new dataModels.Doctor(req.body);

 
 newDoc.save(function(err,doc){
  if(err){
    console.log("error in saving a new doctor");

  }
  else{
    console.log("successful saving doctor");
    res.redirect('/admin/doctorform');
  }

 })

})



app.post('/admin/signup',passport.authenticate('local.signup',{
  successRedirect:'/admin',
  failureRedirct:'signup',
  failureFlash:true 
}));


app.get('/admin/login',function(req,res){
  res.render('login',{loginError:req.flash('loginError')});
})


app.post('/admin/login',passport.authenticate('local.login',{
  successRedirect:'/admin/doctorform',
  failureRedirct:'login',
  failureFlash:true 
}));

app.get('/profile',function(req,res){
    res.render('profile',{user:req.user,loginError:req.flash('loginError')});

})

app.get('/profile',function(req,res){
  req.logout();
  res.redirect('/');
})






// to get all dooctors from db
app.get('/doctors', function (req, res) {
  //console.log(req.params.id); 
  dataModels.Doctor.find(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      //console.log(data);
      res.send(data);
    }
  });

});



app.listen(process.env.PORT||3000, function() {
  console.log('listening on port 3000!');
});

module.exports=app;
