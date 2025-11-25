var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/usuarioController');

router.post('/register', authCtrl.registrar);
router.post('/login', authCtrl.login);

module.exports = router;