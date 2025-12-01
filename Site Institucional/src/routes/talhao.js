var express = require("express");
var router = express.Router();

var talhaoController = require("../controllers/talhaoController");

router.get("/exibir/:idTalhao", function (req, res) {
  talhaoController.exibir(req, res);
});

module.exports = router;