const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
require('./db/conn');

const static_path = path.join(__dirname, '../public')
const template_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')


app.use(express.static(static_path));
app.set("view engine", 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req,res) => {
    res.render('register')
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});