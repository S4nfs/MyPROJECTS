const { create, getUserByUserId, getUsers, updateUser, deleteUser, getUserByUserEmail } = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt"); //compareSync compare passwords to match
const { get } = require("./user.router");
const { sign } = require("jsonwebtoken");
//access auth key from env
const authKey = process.env.AUTH_KEY;


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }, getUserByUserId: (req, res) => {
        const id = req.params.id; //get id from URL 
        getUserByUserId(id, (err, results) => {  //err and resukts are passed as callback from previous
            if (err) {
                console.log(err);
                return;
            } if (!results) {
                return res.json({
                    success: 0,
                    message: "Record Not Found"
                });
            } return res.json({
                success: 1,
                data: results
            });
        });
    }, getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: results
            });
        });
    }, updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Database Updated"
            });
        });
    }, deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                })
            }
 
            return res.json({
                success: 1,
                message: "User Deleted Successfully"
            });
        });
    },

    //login controller
    login: (req, res) => {
        const body = req.body; //user pass email and password
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "User Not Found"
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                //need authkey from pool
                const jsontoken = sign({ result: results }, authKey, { expiresIn: "1h" });
                return res.json({
                    success: 1,
                    message: "Login Successfully",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    message: "Invalid Email or Password"

                });
            }
        })
    }
}