var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doctors');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var doctorsSchema = mongoose.Schema({
  name: String,
  specialization: String,
  address:String,
  tel:String,
  email:String,
  rate:Number
});


var Doctor = mongoose.model('Doctor', doctorsSchema);



module.exports.Doctor=Doctor;