const express = require("express");
const router = express.Router();
const propriedadeController = require("../controllers/propriedadesController");

// Lista todas as propriedades da empresa
router.get("/empresa/:idEmpresa", propriedadeController.listarPorEmpresa);

// Retorna uma propriedade específica, talvez seja necessário para a dash de talhão
router.get("/:idPropriedade", propriedadeController.buscarPorId);

module.exports = router;
