const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
require('./db/conn');

const static_path = path.join(__dirname, '../public')

app.use(express.static(static_path));

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});