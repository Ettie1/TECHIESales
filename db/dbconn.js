//const { query } = require('mssql');
const mysql = require('mysql')
require('dotenv').config();

const config = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port,
    charset: process.env.charset
}
const conn = mysql.createConnection(config)
conn.connect((err)=>{
    if(err) throw err;
    
    console.log("Database connected successfully.");
})

module.exports = conn;