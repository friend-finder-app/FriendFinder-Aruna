const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

module.exports = (req,res,next) => {
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token,secrets.jwtSecret, (err,decodedToken) => {
            if(err){
                res.status(401).json({message:'error from restricted middleware:invalid credentials'})

            }
            else {
                req.user = {
                    username:decodedToken.username,
                    interests:decodedToken.interests,
                    distance:decodedToken.distance,
                    email:decodedToken.email
                };

                console.log(`restricted req.user data ${req.user}`)
                next();
            }
        })
    }
    else {
        res.status(400).json({message:'restricted token error:no token provided'})
    }
}