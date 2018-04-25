var bcrypt=require('bcrypt-nodejs');
var mongoose = require('mongoose');

if (process.env.NODE_ENV==="production"){
  mongoose.connect('mongodb://localhost/doctors');

}
else{
  mongoose.connect('mongodb://dazzel:dazzel123456@ds255329.mlab.com:55329/doctorsdb');
}
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//add unique and required to some data in Schema
var doctorsSchema = mongoose.Schema({
  name: {
    type:String,
    required:true,
    unique:true
  },
  specialization: {
    type:String,
    required:true
  },
  address: {
    type:Object,
    required:true
  },
  tel: {
    type:Number,
    unique:true
  },
  //email:String,
  rate: Number
});

var Doctor = mongoose.model('Doctor', doctorsSchema);

// to retrive all doctors
var selectAll = function(callback) {
  Doctor.find({}, function(err, doctor) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, Doctor);
    }
  });
};


var userSchema = mongoose.Schema({
  username: {
	type:String,
	unique:true},
  password: String
});

var User = mongoose.model('User',userSchema);

// user password encryption
userSchema.methods.encryptPassword=function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}

// compare the user password and the encrypted one
userSchema.methods.validPassword=function(password){
  return bcrypt.compareSync(password,this.password);
}

module.exports.selectAll = selectAll;
module.exports.Doctor=Doctor;
module.exports.User = User;
