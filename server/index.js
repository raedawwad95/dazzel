var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//middleware
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../react-client/dist'));


// set template
app.set('view engine','ejs');

//......require data models from mongo
var dataModels = require('../database-mongo');
//...............

// require the routed

// use the route middleware


app.get('/doctors/', function (req, res) {
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


// to add new doctor doctorform 
app.post('/doctors',function(req,res){

var newDoc=new dataModels.Doctor(req.body);

 
 newDoc.save(function(err,doc){
  if(err){
    console.log("error in saving a new doctor");

  }
  else{
    console.log("successful saving doctor");
  }

 })
})

app.get('/admin',function(req,res){
  res.render('admin');

})


app.post('/admin/login',function(req,res){
  //res.render('doctorform');
  //console.log(req.body);

  // check if the user exists and correct password
  // render the doctorform template
  var username=req.body.username;
  var password=req.body.password;
  //console.log(username);
  dataModels.User.findOne({username:username},function(err,user){
    if(err)   console.log("the user is not exist");
      //res.redirect('/admin/login');
  

   
      //console.log(user.password)
      
      if(user===null)  res.redirect('/admin/login');

      else   res.render('doctorform');
    

    
  })

})


app.get('/admin/login',function(req,res){
  res.render('login');
  

})

app.get('/admin/signup',function(req,res){
  res.render('signup');
  //console.log(req.body);

})


app.post('/admin/signup',function(req,res){
  //res.render('signup');
   console.log(req.body);
   // save to the database
  var newUser=new dataModels.User(req.body);
   newUser.save(function(err,doc){
    if(err){
      console.log("error in saving a new doctor");

    }
    else{
      console.log("successful saving doctor");
    }

   })

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
  }

 })

})





app.listen(process.env.PORT||3000, function() {
  console.log('listening on port 3000!');
});

module.exports=app;