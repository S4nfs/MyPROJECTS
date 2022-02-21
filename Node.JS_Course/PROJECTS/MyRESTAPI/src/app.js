const express = require('express');
require('./db/conn');
const Student = require('./models/students');
const studentRouter = require('./routers/user.router')
const app = express();
const port = process.env.PORT || 3000

//express.json is a method inbuilt in express to reconize the incoming request Object as a JSON Object.
app.use(express.json())

//register our router
app.use(studentRouter);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
