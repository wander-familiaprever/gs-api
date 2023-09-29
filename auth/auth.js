var express = require('express');
var router = express.Router();

const { secret } = require('../config.json');
const jwt = require('jsonwebtoken');


function verificaToken(req, res, next){
    const token = req.headers['authorization'];
        
    if (!token) 
      return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, secret, function(err, decoded) {
      if (err) 
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            
      req.userId = decoded.id;
      next();
    });
}

module.exports = auth = { verificaToken };