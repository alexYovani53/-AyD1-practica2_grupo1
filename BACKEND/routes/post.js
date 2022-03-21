const express = require('express');
const connection = require('../bd/conexion');
const router = express.Router();

router.post('/addPost/:id_user', (req, res) => {

    const {publication, image} = req.body;
    const id_user = req.params.id_user;

    console.log(publication, image, id_user);

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

module.exports = router;