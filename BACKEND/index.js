
const express = require('express');
var cors = require('cors');
const bodyParser = require("body-parser")
const routesLogin = require('./routes/login');
const routesRegistro = require('./routes/registro');
const routesPost = require('./routes/post');
const routesSendSolicitude = require('./routes/sendSolicitude');
const routesViewFriends = require('./routes/viewFriends');

const PORT = process.env.PORT || 1337;

const app = express();

app.use(cors())
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(routesLogin);  
app.use(routesRegistro);  
app.use(routesPost);
app.use(routesSendSolicitude);
app.use(routesViewFriends);

var server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;