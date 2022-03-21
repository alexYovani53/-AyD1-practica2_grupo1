process.env.NODE_ENV = 'test';

var chai = require('chai');
let chaiHttp = require('chai-http');
var server = require("../index");
var should = chai.should();

chai.use(chaiHttp);

describe('/GET/:user User', () => {
    it('It should GET user', done => {
        let id = "Daniel134";
        chai.request(server)
        .get(`/registro/${id}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('msg').eql("encontro usuario!");
        done();
        })
    });
})