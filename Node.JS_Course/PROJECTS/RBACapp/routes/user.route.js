const router = require('express').Router();

router.get('/profile', async(req,res,next) => {
    res.send('user profile');
})
module.exports = router;