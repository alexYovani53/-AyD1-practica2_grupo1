const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

router.post('/addPost/:id_user', (req, res) => {

    const {publication, image} = req.body;
    const id_user = req.params.id_user;

    connection.query(`INSERT INTO publicacion (publicacion, imagen, id_usuario, fecha)
    VALUES ('${publication}', '${image}', ${id_user}, DATE_SUB(NOW(), interval 6 hour));`, (err, rows) => {
        try {

            if (err) {
                res.send({status: 400, message: "Error in DataBase, can possibility id_user is incorrect"});
            } else {
                console.log(rows);
                res.send({status: 200, message: "Post Add successfully"});
            } 
        } catch(e) {
            console.log(e);
        }
    });
});


router.get('/verPost/:id_user', (req, res) => {

    const id_user = req.params.id_user;
    
    console.log(id_user);

    connection.query(`select p.publicacion, p.imagen, p.id_usuario, p.fecha, u.nombre, u.foto, u.usuario 
    from publicacion as p, USUARIO as u where p.id_usuario =  ${id_user} and p.id_usuario = u.id_usuario
    union select p.publicacion, p.imagen, p.id_usuario, p.fecha, u.nombre, u.foto, u.usuario 
    from publicacion as p, USUARIO as u where p.id_usuario in ( select id_usuario2 from amistad where id_usuario1 = ${id_user})  and p.id_usuario = u.id_usuario;`, (err, rows) => {
        try {

            if (err) {
                res.send({status: 400, message: "Error in DataBase, can possibility id_user is incorrect"});
            } else {
                res.send({status: 200, message: "Post Add successfully",rows});
            } 
        } catch(e) {
            console.log(e);
        }
    });
});
module.exports = router;