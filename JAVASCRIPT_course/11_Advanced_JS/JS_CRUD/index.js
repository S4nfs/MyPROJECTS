const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'js_crud'
});

//create connection
mysqlConnection.connect((err) => {
    if(!err){
        console.log('DB connection succeded.');
    }else{
            console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
        }
});

//Get all employee details
app.listen(3000, () => console.log('Express server is running at port no : 3000'));
app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields)=>{
        if(!err){
            // console.log(rows[0].EmpID);
            res.send(rows);
        }else{
            console.log(err);
        }
    })
});