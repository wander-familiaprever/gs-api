var express = require('express');
var router = express.Router();
const db = require('../database/db');
const { verificaToken } = require('../auth/auth');


router.get('/', verificaToken, async function(req, res, next) {
  const usuarios = await  db.sql.query('select top 10 * from Usuarios order by Nome');
  
  res.json(usuarios);
});

module.exports = router;
