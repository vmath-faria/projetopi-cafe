const express = require("express");
const router = express.Router();
const kpiController = require("../controllers/kpiController");

// KPI – Sensores ativos vs inativos
router.get("/sensores-status/:id_talhao", kpiController.sensoresStatusPorTalhao);
router.get("/sensores-status-geral/:id_propriedade", kpiController.sensoresStatusGeral);

// KPI 2
router.get("/talhoes-sem-leitura", kpiController.talhoesSemLeitura);

// KPI talhões em risco
router.get("/talhoes-em-risco/:id_propriedade", kpiController.talhoesEmRisco);


module.exports = router;
