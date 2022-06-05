const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        throw new CustomAPIError('Please provide email or password', 400);
    }
        const id = new Date().getDate(); //dummy id
        const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'});

    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello, Sagar`, secret: `Here is your authorised data and your lucky number is ${luckyNumber}` })
}

module.exports = {login, dashboard};