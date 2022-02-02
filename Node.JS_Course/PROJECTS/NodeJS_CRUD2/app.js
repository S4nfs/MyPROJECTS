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




 
// Server Listening
app.listen(3001, () => {
    console.log('Server is running at port 3001');
});
 
