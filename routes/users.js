var express = require('express');
var router = express.Router();
const db = require('../database/db');



router.get('/', async function(req, res) {
  const usuarios = await  db.sql.query('select top 10 * from Usuarios order by Nome');
  
  res.json(usuarios);
});

module.exports = router;
