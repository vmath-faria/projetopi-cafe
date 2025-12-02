const express = require("express");
const router = express.Router();
const kpiController = require("../controllers/kpiController");

// KPI – Sensores ativos vs inativos
router.get("/sensores-status/:id_talhao", kpiController.sensoresStatusPorTalhao);



// KPI 2
router.get("/talhoes-sem-leitura", kpiController.talhoesSemLeitura);

module.exports = router;
