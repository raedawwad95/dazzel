var passport=require('passport');

var localStrategy=require('passport-local').Strategy;

var dataModels = require('../database-mongo');



passport.serializeUser(function(user,done){
	done(null,user.id); //set user id inside session
});



passport.deserializeUser(function(id,done){
	dataModels.User.findById(id,function(err,user){
		done(err,user);
	})
});



passport.use('local.signup',new localStrategy({
	usernameField:'username',
	passowrd:'password',
	passReqToCallback:true,
},function(req,username,password,done){
	dataModels.User.findOne({'username':username},function(err,user){
		if(err) return done(err);

		if(user){

			return done(null,false);

		}
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
			req.flash('loginError','username not found');
			return done(null,false);
		}

		if(!user.validPassword(req.body.password)){
			return done(null,false);

		}
			return done(null,user);
		

	})
}
))
