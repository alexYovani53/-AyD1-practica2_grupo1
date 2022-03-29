process.env.NODE_ENV = 'test';

var chai = require('chai');
let chaiHttp = require('chai-http');
var server = require("../index");
const expect = require('chai').expect;


chai.use(chaiHttp);


describe("POST/sendSolicitude",()=>{

    it("Enviar solicitud a persona",(done)=>{

        let logUser = 3;
        let toUser = 2;

        chai.request(server)
        .post("/sendSolicitude")
        .send({
            logUser,
            toUser
        })
        .end( function(err,res) {
            expect(res).to.have.status(200)
            done();
        })
    })

})