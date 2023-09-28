var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', async function(req, res) {
  const usuarios = ''; //await prisma.usuario.findMany();
  
  res.json(usuarios);
});

module.exports = router;
