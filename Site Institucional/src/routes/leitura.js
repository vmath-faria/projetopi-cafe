// src/routes/leituraRoutes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/leituraController');

router.post('/', ctrl.inserirLeitura); 

module.exports = router;
