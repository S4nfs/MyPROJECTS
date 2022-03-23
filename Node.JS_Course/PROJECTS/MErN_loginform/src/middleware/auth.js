const jwt = require('jsonwebtoken');
const Register = require('../models/register');


//comparing login cookie with databse token
const auth = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(`Is user verified ${verifyUser}`);
        const user = await Register.findOne({_id:verifyUser._id});
        console.log(`Hellloooooooooo ${user.firstname}`);

        req.token = token;
        req.user = user;
        next();
    }catch(error){
        res.status(401).send(error);
    }
}

module.exports = auth;