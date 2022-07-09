const router = require('express').Router();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');
const passport = require('passport');
const connectEnsure = require('connect-ensure-login');

router.get('/login', connectEnsure.ensureLoggedOut({redirectTo: '/'}), async (req, res, next) => {
    res.render("login");
})

router.get('/register', connectEnsure.ensureLoggedOut({redirectTo: '/'}), async (req, res, next) => {
    // req.flash('error', "Some error")
    // req.flash('error', "Some error2")
    // req.flash('key', 'some value')
    // const messages = req.flash() //object
    // res.render("register", {messages});
    res.render("register");
})

router.post('/login', connectEnsure.ensureLoggedOut({redirectTo: '/'}), passport.authenticate('local', {
    // successRedirect: "/",
    successReturnToOrRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true
}));

router.post('/register', connectEnsure.ensureLoggedOut({redirectTo: '/'}), [
    body('email').trim().isEmail().withMessage('Email must be a valid email').normalizeEmail().toLowerCase(),
    body('password').trim().isLength(4).withMessage('Password must be of 4 characters and above'),
    body('confirmpassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password do not match')
        }
        return true //return success of this validator
    }) //validation & sanitization
], async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            errors.array().forEach(error => {
                req.flash('error', error.msg)
            })
            res.render('register', { email: req.body.email, messages: req.flash() })
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
        req.flash('success', `${user.email} registered successfully, you can now login.`)
        res.redirect('./auth/login')
        // res.send(user); //sending user object to frontend
    } catch (error) {
        next(error)
    }
})

router.post('/logout', connectEnsure.ensureLoggedIn({redirectTo: '/'}), async(req, res, next) => {
    req.logout();
    res.redirect('/auth/login');
})

module.exports = router;

// //my custom function to avoid user to unauthorised sessions routes [replaced with connectEnsure plugin]
// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         next();
//     } else {
//         res.redirect('/auth/login');
//     }
// };
// function ensureNotAuthenticated(req, res, next) { //custom function to avoid user to unauthorised sessions routes
//     if (req.isAuthenticated()) {
//         res.redirect('back');
//     } else {
//         next();
//     }
// };