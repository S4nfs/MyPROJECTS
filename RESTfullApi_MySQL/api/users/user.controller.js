const { create, getUserByUserId, getUsers, updateUser, deleteUser } = require("./user.service");
const { genSaltSync, hashSync } = require("bcrypt");
const { get } = require("./user.router");

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
    }, getUsers:(req,res)=> {
        getUsers((err,results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:results
            });
        });
    }, updateUser:(req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password  = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if(err){
                console.log(err);
                return false;
            }if(!results){
                return res.json({
                    success:0,
                    message:"Failed to Update User"
                })
            }
            return res.json({
                success:1,
                message: "Database Updated"
            });
        });
    }, deleteUser:(req, res)=> {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Record not found"
                })
            }return res.json({
                success:1,
                message:"User Deleted Successfully"
            });
        });
    }
}