const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

router.post('/aceptarSolicitud', (req, res) => {

    const { logUser, toUser } = req.body;

    const sql = `UPDATE amistad SET aceptar = 1 WHERE id_usuario1 = ${logUser} AND id_usuario2 = ${toUser};`;

    connection.query(sql, (err) => {

        try {

            if (err) {
                res.send({status: 400, message: "Error in DataBase, check on users and connection"});
            } else {
                res.send({status:200, message: "Solicitud aceptada"});
            }
        } catch (e) {
            console.error(e);
        }
    });
});

module.exports = router;

