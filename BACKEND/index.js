
const express = require('express');
var cors = require('cors');
const routesLogin = require('./routes/login');
const routesRegistro = require('./routes/registro');

const PORT = process.env.PORT || 1337;

const app = express();

app.use(cors())
app.use(express.json({extended: true}));

app.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
});

app.use(routesLogin);  
app.use(routesRegistro);  

var server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;