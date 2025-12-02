var express = require("express");
var router = express.Router();

var kpiRiscoController = require("../controllers/kpiRiscoController");

router.get("/exibir/:idPropriedade", function (req, res) {
  kpiRiscoController.exibir(req, res);
});

module.exports = router;