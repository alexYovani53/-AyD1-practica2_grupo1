const express = require('express');
const connection = require('../bd/conexion');

const router = express.Router();


router.post('/registro/crear', (req, res) => {

    const sql = 'INSERT INTO USUARIO SET ?';
    var usuObj;
    if(req.body.foto != null){
        usuObj = {
            nombre: req.body.nombre,
            contrasena: req.body.contrasena,
            foto: req.body.foto,
            usuario: req.body.usuario,
        };
    }else{
        usuObj = {
            nombre: req.body.nombre,
            contrasena: req.body.contrasena,
            foto: "",
            usuario: req.body.usuario,
        };
    }
   
    connection.query(sql, usuObj, error => {
        if (error)
        {
            res.send({
                status: 0, //no exitoso
                msg: 'Ocurrio error al crear usuario',
                error: error
            });
            
        }else{
            res.send({
                status: 1, //exitoso
                msg: 'Usuario creado!'
            });
        }
    });
   });


   router.get('/registro/:usuario', (req, res) => {
    const { usuario } = req.params; 

    const sql = `SELECT * FROM USUARIO  where usuario = '${ usuario }';`;
    

    connection.query(sql, (error, results) => {
        if (error)
        {
            res.send({
                status: 0, //no exitoso
                msg: 'Ocurrio error al buscar el usuario',
                error: error
            });
            
        }else{
            if (results != null && results.length > 0) {

                res.send({
                  status: 1, //exitoso
                  msg: 'encontro usuario!',
                  resultado: results
                });
        
              }else{
                res.send({
                  status: 0, //no exitoso
                  msg: 'No encontro usuario!'
                });
              }
        }


    });
   });



module.exports = router;