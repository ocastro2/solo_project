const jwt = require('jsonwebtoken');
const secret = process.env.FIRST_SECRET_KEY;
const User = require('../models/user.model')
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) =>{
      // console.log(process.env)
    if(err) {
        res.status(401).json({verified: false});
    } else{
        req.Token = payload
        next();
    }
});
},

module.exports.isLoggedIn = (req, res) => {
    console.log(req.cookies)
    jwt.verify(req.cookies.usertoken, secret, async (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        const user = await User.findOne({_id:payload.id})
        const {_id,firstName} = user
        return res.json({user:{id:_id,name:firstName}})
        
      }
    })
    }