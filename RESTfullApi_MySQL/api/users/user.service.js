const pool = require("../../config/database");
module.exports = {
    //CREATE
    create: (data, callback) => {
        pool.query(
            `INSERT into registration(firstName,lastName,gender,email,password,number) values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ], (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        );
    },
    //GET
    getUsers: callback => {
        pool.query(
            `SELECT id,firstName,lastName,gender,email,password,number FROM registration`
            , [],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        );
    },
    getUserByUserId: (id, callback) => {
        pool.query(
            `SELECT id,firstName,lastName,gender,email,password,number FROM registration WHERE id = ?`
            , [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        );
    },

    //UPDATE
    updateUser: (data, callback) => {
        pool.query(
            `UPDATE registration set firstName=?,lastName=?,gender=?,email=?,password=?,number=? WHERE id = ?`,
             [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        );
    },

    //DELETE
    deleteUser: (data, callback) => { 
        pool.query(
            `DELETE FROM registration WHERE id = ?`
            , [data.id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        );
    }
};