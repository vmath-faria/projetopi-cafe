var express = require("express");
var router = express.Router();

var visualizacaoController = require("../controllers/visualizacaoController");

router.post("/registrar", visualizacaoController.registrar);
router.get("/contar/:idForum", visualizacaoController.contar);

module.exports = router;
