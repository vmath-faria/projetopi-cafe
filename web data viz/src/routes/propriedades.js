const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/propriedadesController');


// Dashboard de uma propriedade
router.get('/:id/dashboard', ctrl.dashboard);

module.exports = router;
