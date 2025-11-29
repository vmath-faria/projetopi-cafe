var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/usuarioController');

router.post('/cadastrar', authCtrl.cadastrar);
router.post('/autenticar', authCtrl.autenticar);

module.exports = router;

// Não alterar essa rota