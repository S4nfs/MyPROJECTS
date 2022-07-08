const express = require('express');
const createHttpError = require('http-errors')
const morgan = require('morgan');
const connectDB = require('./db/connect')
const session = require('express-session');
const connectFlash = require('connect-flash')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const passport = require('passport')

const app = express();

//middlewares
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//init session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        // secure:true, //for only https(secure)
        httpOnly: true
    }
}))

//for passport js authentication
app.use(passport.initialize());
app.use(passport.session());
require('./utils/passport.auth');

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
})

//flash-message
app.use(connectFlash());
app.use((req, res, next) => {
    res.locals.messages = req.flash()
    next()
})

//routes
app.use('/', require('./routes/index.route'));
app.use('/auth', require('./routes/auth.route'));
app.use('/user', ensureAuthenticated, require('./routes/user.route'));

app.use((req, res, next) => {
    next(createHttpError.NotFound())
})

app.use((error, req, res, next) => {
    error.status = error.status || 500
    res.status(error.status)
    res.render('404', { error })
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}
//my custom function to avoid user to unauthorised sessions routes
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/auth/login');
    }
};
start();
