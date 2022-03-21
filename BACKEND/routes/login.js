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

router.post('/login', (req, res) => {

    const {user_name, password} = req.body;

    connection.query(`SELECT * 
    FROM USUARIO
    WHERE usuario = '${user_name}'
    AND contrasena = '${password}';`, (err, rows) => {
        try {
            if (err) {
                res.json({status: 400, data: "", message: "Error in DataBase"})
            }
    
            if (rows.length === 0){
                res.json({status: 400, data: "", message: `The user_name or password is incorrect`});
            } else {
                res.json({status: 200, data: rows[0], message: "Successfully"});
            }
        } catch (err) {
            console.log(err);
        }

    });
});


module.exports = router;