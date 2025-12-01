// src/routes/talhaoRoutes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/talhaoController');

router.get('/:id/leituras/realtime', ctrl.leiturasRealtime);
router.get('/:id/leituras/historico', ctrl.mediaHistorica);

module.exports = router;
