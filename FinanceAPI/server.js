require('dotenv').config()
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

app.get('/', (req, res) => {
    return console.log('Whats good!')
})


app.listen(5000, () => console.log('Server started on 5000!'));