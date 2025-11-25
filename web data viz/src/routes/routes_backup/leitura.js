var express = require("express");
var router = express.Router();
var leituraController = require("../controllers/leituraController");

router.get("/listar/:idUsuario", leituraController.listar);
router.post("/salvar", leituraController.salvar);
router.get("/kpiMensal/:idUsuario", leituraController.kpiMensal);

module.exports = router;
