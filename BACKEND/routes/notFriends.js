const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

connection.connect(err => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('Conexion a BD AWS exitosa');
});

router.get('/notFriends/:usuario', (req, res) => {
    const { usuario } = req.params; 

    const sql = `SELECT * FROM USUARIO
                  LEFT JOIN (
                      SELECT id_usuario2
                      FROM USUARIO
                      LEFT JOIN amistad a on USUARIO.id_usuario = a.id_usuario1
                      WHERE id_usuario1 = 4
                  ) U
                  ON USUARIO.id_usuario = U.id_usuario2
                  WHERE U.id_usuario2 is null AND USUARIO.usuario != '${usuario}';`;
    

    connection.query(sql, (error, results) => {
        if (error)
        {
            res.send({
                status: 0, //no exitoso
                msg: 'Ocurrio error al buscar las no amistades',
                error: error
            });
            
        }else{
            if (results != null && results.length > 0) {

                res.send({
                  status: 1, //exitoso
                  msg: 'no amigos encontrados :)!',
                  resultado: results
                });
        
              }else{
                res.send({
                  status: 0, //no exitoso
                  msg: 'No amigos no encontrados :(!'
                });
              }
        }


    });
});


module.exports = router;