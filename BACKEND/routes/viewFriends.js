const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

router.get('/viewFriends/:usuario', (req, res) => {
    const { usuario } = req.params; 

    const sql = `select * from USUARIO 
                    where id_usuario in
                    (
                    select id_usuario2 from amistad 
                    where id_usuario1 = (select id_usuario from USUARIO
                    where USUARIO.id_usuario = ${usuario}) and aceptar = 1
                    );`;
    

    connection.query(sql, (error, results) => {
        if (error)
        {
            res.send({
                status: 0, 
                msg: 'Error while looking for friends',
                error: error
            });
            
        }else{
            if (results != null && results.length > 0) {

                res.send({
                  status: 1, //funciona
                  msg: 'Success',
                  resultado: results
                });
        
              }else{
                res.send({
                  status: 0, 
                  msg: 'No friends added yet'
                });
              }
        }
    });
});


module.exports = router;