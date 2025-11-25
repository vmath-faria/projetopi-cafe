const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/propriedadesController');

// Lista propriedades de uma empresa
router.get('/empresa/:id', ctrl.listarPorEmpresa);

// Dashboard de uma propriedade
router.get('/:id/dashboard', ctrl.dashboard);

module.exports = router;
