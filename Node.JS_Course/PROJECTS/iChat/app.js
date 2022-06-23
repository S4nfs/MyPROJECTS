const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));

const server = app.listen(port, () => {
    console.log(`Listening iChat on port ${port}`)
})