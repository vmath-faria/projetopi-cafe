var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.post("/enviar", avaliacaoController.enviar);
router.get("/media", avaliacaoController.media);

module.exports = router;
