const express = require("express");
const router = express.Router();
const kpiController = require("../controllers/kpiController");

// KPI 1
router.get("/propriedades-risco", kpiController.propriedadesEmRisco);

// KPI 2
router.get("/talhoes-sem-leitura", kpiController.talhoesSemLeitura);

module.exports = router;
