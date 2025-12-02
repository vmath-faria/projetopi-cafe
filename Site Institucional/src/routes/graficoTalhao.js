var express = require("express");
var router = express.Router();

var graficoTalhaoController = require("../controllers/graficoTalhaoController");

router.get("/exibir/:id_talhao", function (req, res) {
  graficoTalhaoController.exibir(req, res);
});

module.exports = router;