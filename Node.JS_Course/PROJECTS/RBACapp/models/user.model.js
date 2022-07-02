const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})
UserSchema.pre('save', async function (next) { //cant use arrow function here (becoz of ||this||)
    try {
        if (this.isNew) { //isNew is a property in mongoose which tells if the document is new or not because evertime we hit the user.save() method it will hasshed the password again
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword; //overwriting the password with hased password
        }
        next();
    } catch (err) { 
        next(err)
    }
})
module.exports = mongoose.model('user', UserSchema);
