process.env.NODE_ENV = 'test';

var chai = require('chai');
let chaiHttp = require('chai-http');
var server = require("../index");
const expect = require('chai').expect;

chai.use(chaiHttp);


describe('/POST/aceptarSolicitud',()=>{
    it('should accept request', (done) => {
    chai.request(server)
    .post(`/aceptarSolicitud`)
    .send({logUser: 4, toUser : 3})
    .end( function(err,res){
        res.should.have.status(200);
        res.body.should.have.property('status');
        res.body.should.have.property('message').eql("Successfully");
        done();
    });
    });
});