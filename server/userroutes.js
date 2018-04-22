var express=require('express');
var router=express.Router();
var passport=require('passport');
var dataModels = require('../database-mongo');


router.get('/admin',function(req,res){
  res.render('admin');

})

router.get('/admin/signup',function(req,res){
  res.render('signup');
})


router.post('/admin/signup',passport.authenticate('local.signup',{
  successRedirect:'/profile',
  failureRedirct:'signup',
  failureFlash:true 
}));

router.get('/profile',function(req,res){
    res.render('profile',{user:req.user,loginError:req.flash('loginError')});

})

router.get('/profile',function(req,res){
  req.logout();
  res.redirect('/');
})


// router.post('/admin/login',function(req,res){
  
//   // check if the user exists and correct password
//   // render the doctorform template
//   var username=req.body.username;
//   var password=req.body.password;
  
//   dataModels.User.findOne({username:username},function(err,user){
//     if(err)   console.log("the user is not exist");
            
//       if(user===null)  
//         res.redirect('/admin/login');

//       else  {
//       console.log("user");
//       res.redirect('/admin/doctorform');
//       res.render('doctorform');
//     }
       
//   })

// })


// router.get('/admin/login',function(req,res){
//   res.render('login');
  

// })





// router.get('/admin/doctorform',function(req,res){
//   res.render('doctorform');
  
//   });



// router.post('/admin/doctorform',function(req,res){
  
//  // save to the database

//  var newDoc=new dataModels.Doctor(req.body);

 
//  newDoc.save(function(err,doc){
//   if(err){
//     console.log("error in saving a new doctor");

//   }
//   else{
//     console.log("successful saving doctor");
//     res.redirect('/admin/doctorform');
//   }

//  })

// })

module.exports=router;