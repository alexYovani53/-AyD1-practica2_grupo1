const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

router.get('/viewFriends/:idLogueado', (req, res) => {
    const { idLogueado } = req.params; 

    const sql = `select * from USUARIO 
                    where id_usuario in
                    (
                    select id_usuario2 from amistad 
                    where id_usuario1 = ${idLogueado} and aceptar = 1
                    ) or id_usuario in
                    (
                    select id_usuario1 from amistad 
                    where id_usuario2 = ${idLogueado} and aceptar = 1
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



router.get('/verSolicitudes/:idusuario', (req, res) => {
 
  const { idusuario } = req.params; 

  const sql = `select * from USUARIO 
  where id_usuario in
  (
  select id_usuario1 from amistad 
  where id_usuario2 = (select id_usuario from USUARIO
  where USUARIO.id_usuario = ${idusuario}) and aceptar = 0
  );`;
  
 
  connection.query(sql, (error, results) => {
      if (error)
      {
          res.send({
              status: 0, 
              msg: 'Error en buscar solicitudes de amistad',
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
                msg: 'No tienes solicitud de amistad'
              });
            }
      }
  });
});

module.exports = router;