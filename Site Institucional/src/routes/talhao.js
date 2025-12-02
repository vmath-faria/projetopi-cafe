var express = require("express");
var router = express.Router();

var talhaoController = require("../controllers/talhaoController");

router.get("/listar/:id_propriedade", function (req, res) {
  talhaoController.listar(req, res);
});

module.exports = router;