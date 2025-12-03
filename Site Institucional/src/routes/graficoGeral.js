var express = require("express");
var router = express.Router();

var graficoGeralController = require("../controllers/graficoGeralController");

router.get("/exibir/:id_propriedade", function (req, res) {
  graficoGeralController.exibir(req, res);
});

module.exports = router;