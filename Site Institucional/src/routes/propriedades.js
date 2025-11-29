var express = require("express");
var router = express.Router();

var propriedadesController = require("../controllers/propriedadesController");

router.get("/:empresaId", function (req, res) {
  propriedadesController.buscarPropriedadessPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  propriedadesController.cadastrar(req, res);
})

module.exports = router;