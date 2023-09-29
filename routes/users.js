var express = require('express');
var router = express.Router();
const db = require('../database/db');
const { verificaToken } = require('../auth/auth');


router.get('/', verificaToken, async function(req, res, next) {
  const usuarios = await  db.sql.query('select top 10 * from Usuarios order by Nome');
  
  res.json(usuarios);
});

router.post('/login', verificaToken, async function(req, res, next){
  var login = false
  const { usuario, senha } = req.body;
  
  const retornoUsuario = await db.sql.query(`select codigo from Usuarios where nick = '${usuario}' and senha = '${senha}' `);  
  
  if(retornoUsuario.rowsAffected[0] > 0)
    login = true
  
  res.json({logar: login})
});



module.exports = router;
