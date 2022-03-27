process.env.NODE_ENV = 'test';

var chai = require('chai');
let chaiHttp = require('chai-http');
var server = require("../index");
const expect = require('chai').expect;

chai.use(chaiHttp);


describe('/POST/login',()=>{
    it('should consult', (done) => {
    chai.request(server)
    .post(`/login`)
    .send({user_name: "matixs", password : "mati"})
    .end( function(err,res){
        res.should.have.status(200);
        res.body.should.have.property('status');
        res.body.should.have.property('message').eql("Successfully");
        done();
    });
    });
});
   