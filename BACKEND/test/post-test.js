process.env.NODE_ENV = 'test';

var chai = require('chai');
let chaiHttp = require('chai-http');
var server = require("../index");
const expect = require('chai').expect;

chai.use(chaiHttp);


describe('/POST/addPost/:id_user ID',()=>{
    it('should insert a post', (done) => {
    let id_user = 2;
    chai.request(server)
    .post(`/addPost/${id_user}`)
    .send({publication: "Se esta comprobando con chai", image : ""})
    .end( function(err,res){
        expect(res).to.have.status(200)
        done();
    });
    });
});
   
describe('/GET/verPost/:id Post', () => {
    it('It should GET post', done => {
        let id = 1;
        chai.request(server)
        .get(`/verPost/${id}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('rows');
            res.body.should.have.property('rows').not.eql([]);
        done();
        })
    });
});
   