var express = require('express');
var router = express.Router();

const config = require('../config.json');
const jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) {
  res.status(200).json({message: "vc esta na home..."});
});

router.post('/token', function(req, res, next) {
  
  if(req.body.user === 'uniprev' && req.body.password === '123'){
    const id = 19041980;
    const token = jwt.sign({ id }, config.secret);
    
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login inválido!'});
  
});


module.exports = router;
