const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  user: process.env.DB_USER, // 'db-user'
  password: process.env.DB_PASS, // 'db-password'
  database: process.env.DB_NAME, // 'database'
  host: process.env.DB_IP, // 'ip'
  port: process.env.DB_PORT, // 'port'
});

module.exports = connection;