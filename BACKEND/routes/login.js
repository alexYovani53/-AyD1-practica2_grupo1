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

module.exports = router;