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
    // multipleStatements: true
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

//Get an employee detail
// app.get('/employees/:id', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employee WHERE EmpID = ?',[req.params.id], (err, rows, fields)=>{
//         if(!err){
//             res.send(rows);
//         }else{
//             console.log(err);
//         }
//     })
// });

// //Delete an employee detail
// app.delete('/employees/:id', (req, res) => {
//     mysqlConnection.query('DELETE * FROM employee WHERE EmpID = ?',[req.params.id], (err, rows, fields)=>{
//         if(!err){
//             res.send('Deleted Successfully');
//         }else{
//             console.log(err);
//         }
//     })
// });

// //Insert an employee detail
// mysqlConnection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO employee (Name, EmpCode, Salary) VALUES ?";
//     var values = [
//       ['John', '71', 20000],

//     ];
//     mysqlConnection.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });