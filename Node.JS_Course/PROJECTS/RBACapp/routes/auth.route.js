const router = require('express').Router();

router.get('/login', (req, res, next) => {
    res.render("login");
})

router.get('/register', (req, res, next) => {
    res.render("register");
})

router.post('/login', (req, res, next) => {
    res.send("login");
})

router.post('/register', (req, res, next) => {
    res.send("register post");
})

router.post('/logout', (req, res, next) => {
    res.send("logout post");
})


module.exports = router;