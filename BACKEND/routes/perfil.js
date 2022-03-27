const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

router.put('/updatePerfil/:id_user', (req, res) => {

    const id_user = req.params.id_user;
    const { newName, newUsername, photo, pass } = req.body;

    const sql = `UPDATE USUARIO
    SET nombre = '${newName}',
        usuario = '${newUsername}',
        foto = '${photo}',
        contrasena = '${pass}'
    WHERE id_usuario = ${id_user};`;

    connection.query(sql, (err, rows) => {
        try {

            if (err) {
                res.send({status: 400, message: "Error in DataBase, can possibility id_user is incorrect"});
            } else {
                console.log(rows);
                res.send({status: 200, message: "Update successfully :3"});
            }
        } catch (e) {
            console.error(e);
        }
    });

});

module.exports = router