const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();	
const mysql = require('mysql');
 
// define a MySQL connection
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud'
});
 
connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

//set views file
app.set('views',path.join(__dirname,'views'));
 
//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    // res.send('Hello World!');
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
            
    res.render('user_index',{
        title: 'User List',
        users: rows
    });
    });
});

app.get('/add',(req, res) => {
    res.render('user_add', {
        title: "CRUD Operation using NodeJS / ExpressJS / MySQL"
    });
})
app.post('/save', (req, res) => {
    let data = {name: req.body.name, email: req.body.email, phone_no: req.body.phone_no}
    let sql = "INSERT INTO users SET ?";
    let query = connection.query(sql, data,(err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/edit/:userID', (req, res) => {
    const userID = req.params.userID;
    let sql = `SELECT * FROM users WHERE id = ${userID}`;
    let query = connection.query(sql,(err, result) => {
        if(err) throw err;
        res.render('user_edit', {
            title: 'CRUD Operation using NodeJS / ExpressJS / MySQL',
            user: result[0]
        });
    });
});

app.post('/update', (req, res) => {
    const userID = req.body.id;
    let sql = "update users SET name='"+req.body.name+"', email='"+req.body.email+"', phone_no='"+req.body.phone_no+"' where id= "+userID; 
    let query = connection.query(sql,(err, results) => {
        if(err) throw err;
        res.redirect('/');
    }) ;
});

app.get('/delete/:userID', (req, res) => {
    const userID = req.params.userID;
    let sql =  `DELETE FROM users WHERE id = ${userID}`;
    let query = connection.query(sql,(err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});
 
// Server Listening
app.listen(3001, () => {
    console.log('Server is running at port 3001');
});
 
