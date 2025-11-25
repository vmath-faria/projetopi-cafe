var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/curtir", curtidaController.curtir);
router.post("/remover", curtidaController.removerCurtida);
router.get("/contar/:idForum", curtidaController.contar);
router.get("/verificar/:fkUsuario/:fkForum", curtidaController.verificar);

module.exports = router;
