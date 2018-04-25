var passport=require('passport'); // used for authentication
var localStrategy=require('passport-local').Strategy; // using username and password for login
var dataModels = require('../database-mongo');

//store user id inside session
passport.serializeUser(function(user,done){
	done(null,user.id); 
});

// get the user account from the db
passport.deserializeUser(function(id,done){
	dataModels.User.findById(id,function(err,user){
		done(err,user);
	})
});

// handle local sign up strategy
passport.use('local.signup',new localStrategy({
	usernameField:'username',
	passowrd:'password',
	passReqToCallback:true,  // to pass the entire req to a callback
},function(req,username,password,done){
	dataModels.User.findOne({'username':username},function(err,user){
		if(err) return done(err);
		if(user){
			return done(null,false);
		}
		// if the user doesn't exist, create a new one
		var newUser=new dataModels.User();
		newUser.username=req.body.username;
		newUser.password=newUser.encryptPassword(req.body.password);
		newUser.save(function(err){
			if(err) return done(err);
			 return done (null,newUser);
		})
	})
}
))

// handle local login strategy
passport.use('local.login',new localStrategy({
	usernameField:'username',
	passowrd:'password',
	passReqToCallback:true,
},function(req,username,password,done){
	dataModels.User.findOne({'username':username},function(err,user){
		if(err){
			return done(err);
		}
		if(!user){
			req.flash('loginError','username not found'); // to send error message
			return done(null,false);
		}
		if(!user.validPassword(req.body.password)){
			return done(null,false);
		}
			return done(null,user);
	})
}
))
