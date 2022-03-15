const express = require('express');
const app = express();
const http = require('http'); //Biblioteca para el servidor http
const server = http.createServer(app); //Creación del servidor

const cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Módulo para la conexión a MySQL
const mysql = require('mysql');
const { Console } = require('console');


//Variable para utilizar los servicios de aws
var AWS = require('aws-sdk');
var globalData = "";
 var conexion = mysql.createConnection({
     host: 'db-s1.aaaaa.us-east-1.rds.amazonaws.com',
     database: 'db',
     user: 'aa',
     password: 'Sem'
 });

//Se realiza la conexión
conexion.connect(function (error) {
    if (error) {
        throw error;
    }
    else {
        console.log("db exitosa");
    }
});


app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
    //console.log('Backend levantado');
});

app.get('/data', (req, res, next) => {
    res.json([{ "msj": "prueba" }])
});

app.get('/prueba', (req, res, next) => {
    var consulta = `
        SELECT * FROM users; 
    `;

    var query = conexion.query(consulta, function (error, results, fields) {
        if (error) {
            console.log(error);
            throw (error);
        }
        //console.log(results);
        res.json(results)
    });
    //res.json([{ "msj": "prueba" }])
});

server.listen(9000, () => {
    console.log('server on port ', 9000);
});