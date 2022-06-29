const express = require('express');
const createHttpError = require('http-errors')
const morgan = require('morgan');
const connectDB = require('./db/connect')
require('dotenv').config();

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.send('working');
})

app.use((req, res, next) => {
    next(createHttpError.NotFound())
})

app.use((error, req, res, next) => {
    error.status = error.status || 500
    res.status(error.status)
    res.send(error);
})
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}
start();
