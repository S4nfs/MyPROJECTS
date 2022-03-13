const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
});

//jwt <MIDDLEWARE>
employeeSchema.methods.generateAuthToken = async function () {  //instance method
    try {
        const token = jwt.sign({ _id: this._id.toString()}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token}) //putting user token in my schema databse
        await this.save();
        return token;
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

//<MIDDLEWARE> pre method before saving to database
employeeSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(`the current password is ${this.password}`)
        this.password = await bcrypt.hash(this.password, 10) //stored in same password variable
        this.confirmpassword = await bcrypt.hash(this.password, 10)
    }
    next();
})
//create collection & model
const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;