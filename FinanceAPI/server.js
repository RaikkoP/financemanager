require('dotenv').config()
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

//Added test account with data
app.get('/test', (req, res) => {
    const sql =
        "INSERT INTO Users (username, password) VALUES ('test5', 'test5')"
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log('Created user');
    })
    const jsonData = JSON.stringify([
        {
            id: 1,
            name: "New Jacket",
            type: "Expense",
            amount: "200$",
            date: "02.02.2023"
        },
        {
            id: 2,
            name: "New Socks",
            type: "Expense",
            amount: "20$",
            date: "02.02.2023"
        },
        {
            id: 3,
            name: "Mom Paid Me",
            type: "Income",
            amount: "200$",
            date: "02.02.2023"
        },
        {
            id: 4,
            name: "Salary",
            type: "Income",
            amount: "900$",
            date: "02.02.2023"
        }
    ]);
    const sql2 =
        `INSERT INTO UserData (userId, data) SELECT id, '${jsonData}' AS data FROM Users WHERE username = 'test5'`
    db.query(sql2, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log('Created data')
    })
})

app.get('/get/finance', (req, res) => {
    const sql = "SELECT data FROM UserData WHERE userId = (SELECT id FROM Users WHERE username = 'test5')";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data.length > 0) {
            res.send(JSON.parse(data[0].data));
        }
    });
})

app.post('/create/finance', (req, res) => {
    const getData = "SELECT data FROM UserData WHERE userId = (SELECT id FROM Users WHERE username = 'test5')";
    db.query(getData, req.body, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "An error occurred: Database error" });
        }
        console.log(data);
        let newData = [];
        let oldData = [];
        if(data[0].data === null || data[0].data === undefined) {
            newData = [req.body];
            console.log(newData);
        } else if (data.length > 0) {
            oldData = JSON.parse(data[0].data);
            console.log(oldData);
            newData = [...oldData, req.body];
            console.log(newData);
        } 
        const updateData = `UPDATE UserData set data = '${JSON.stringify(newData)}' WHERE userId = (SELECT id FROM Users WHERE username = 'test5')`;
        db.query(updateData, newData, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "An error occured while updating data" })
            } 
            console.log("Updated data: " + data)
        })
    });
})

app.get('/', (req, res) => {
    return console.log('Whats good!')
})


app.listen(5000, () => console.log('Server started on 5000!'));