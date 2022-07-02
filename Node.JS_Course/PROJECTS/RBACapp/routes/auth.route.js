const router = require('express').Router();
const User = require('../models/user.model');

router.get('/login', async (req, res, next) => {
    res.render("login");
})

router.get('/register', async (req, res, next) => {
    res.render("register");
})

router.post('/login', async (req, res, next) => {
    res.send(req.body);
})

router.post('/register', async (req, res, next) => {
    try {
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