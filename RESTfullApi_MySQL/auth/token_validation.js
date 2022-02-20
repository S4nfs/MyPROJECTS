const { json } = require('express');
const { verify } = require('jsonwebtoken');
module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, "hardcodedtokenSECRETKEY", (err, decoded) => {
                if(err){
                    res.json({
                        success:0,
                        messaage: "Invalid Token"
                    })
                }else{
                    next();
                }
            })
        } else {
            res.json({
                success: 0,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
}