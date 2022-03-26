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

    const sql = `
    select * from USUARIO 
where  usuario != '${usuario}' and id_usuario not in 
(
select id_usuario2 from amistad 
where id_usuario1 = (select id_usuario from USUARIO
where USUARIO.usuario = '${usuario}')
);`;
    

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