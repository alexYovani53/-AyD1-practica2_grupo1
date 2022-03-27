process.env.NODE_ENV = 'test';

var chai = require('chai');
let chaiHttp = require('chai-http');
var server = require("../index");
const expect = require('chai').expect;

chai.use(chaiHttp);

describe("/POST/updatePerfil/:id_user",()=>{

    it('Perfil actualizado',(done)=>{
        let id_user = 1;
        chai.request(server)
        .put(`/updatePerfil/${id_user}`)
        .send({
            newName:"Alex Yovani J.T.",
            newUsername:"yovani53",
            photo :"",
            pass:"configuracion"
        })
        .end(function(err,res){
            expect(res).to.have.status(200)
            done();
        })
    })

});

