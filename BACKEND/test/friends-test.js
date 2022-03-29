process.env.NODE_ENV = 'test';

var chai = require('chai');
let chaiHttp = require('chai-http');
var server = require("../index");
var should = chai.should();

chai.use(chaiHttp);

describe('/GET/:viewFriends/:idUser Friends', () => {
    it('It should GET friends of user', done => {
        let id = 4;
        chai.request(server)
        .get(`/viewFriends/${id}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('msg').not.eql("No friends added yet");
        done();
        })
    });
})