var app=require('../server/index');
var chai = require('chai');
var expect=chai.expect;
var request = require('supertest');
var agent = request.agent(app);
const should = chai.should();
const chaiHttp = require('chai-http');



describe('Must check all routes', function() {
  it('should return 200 status code', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
    it('should get all doctors', function(done) { 
      request(app) .get('/doctors') .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.body).to.be.an('Object'); 
        done(); 
      }); 
    }); 
 })
 
 
 