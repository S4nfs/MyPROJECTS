const router = require('express').Router();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');
const { ResultWithContext } = require('express-validator/src/chain');

router.get('/login', async (req, res, next) => {
    res.render("login");
})

router.get('/register', async (req, res, next) => {
    // req.flash('error', "Some error")
    // req.flash('error', "Some error2")
    // req.flash('key', 'some value')
    // const messages = req.flash() //object
    // res.render("register", {messages});
    res.render("register");
})

router.post('/login', async (req, res, next) => {
    res.send(req.body);
})

router.post('/register', [
    body('email').trim().isEmail().withMessage('Email must be a valid email').normalizeEmail().toLowerCase(),
    body('password').trim().isLength(4).withMessage('Password must be of 4 characters and above'),
    body('confirmpassword').custom((value, {req}) => {
        if(value !== req.body.password){
            throw new Error('Password do not match')
        }
        return true //return success of this validator
    }) //validation & sanitization
], async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            errors.array().forEach(error => {
                req.flash('error', error.msg)
            })
            res.render('register', {messages: req.flash()})
            return
        }
        const { email } = req.body;
        const doesExists = await User.findOne({ email: email })
        if (doesExists) {
            res.redirect('auth/login')
            return;
        }
        const user = new User(req.body);
        await user.save()
        res.send(user); //sending user object to frontend
    } catch (error) {
        next(error)
    }
})

router.post('/logout', async (req, res, next) => {
    res.send("logout post");
})


module.exports = router;