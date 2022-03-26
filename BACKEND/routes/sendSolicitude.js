const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

router.post('/sendSolicitude', (req, res) => {

    const { logUser, toUser } = req.body;

    const sql = `INSERT INTO amistad (id_usuario1, id_usuario2, aceptar)
    values (${logUser}, ${toUser}, 0);`;

    connection.query(sql, (err) => {

        try {

            if (err) {
                res.send({status: 400, message: "Error in DataBase, can possibility logUser or toUser is incorrect"});
            } else {
                res.send({status:200, message: "Solicitude sent successfully"});
            }
        } catch (e) {
            console.error(e);
        }
    });
});

module.exports = router;