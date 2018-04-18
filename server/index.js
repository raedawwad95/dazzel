var express = require('express');
var bodyParser = require('body-parser');
 var items = require('../database-mongo');

var app = express();

 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var doctors = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/doctors', function (req, res) {
  doctors.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });

});

app.post('/doctors',function(req,res){

var newDoc={
 name:req.body.name,
 specialization:req.body.specialization,
 address:req.body.address,
 tel:req.body.tel,
 email:req.body.email,
 rate:req.body.rate
 };

 
 doctors.Doctor.save(newDoc,function(err,doc){
 	if(err){
 		console.log("error in saving a new doctor");

 	}
 	else{
 		console.log("successful saving doctor");
 	}

 })


})



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

