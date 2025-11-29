var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

//Tentando buscar os tokens válidos. Tokens não são buscados, erro 404 e tokens undefined.


router.get("/listar", function (req, res) {
  empresaController.listar(req, res);
});

module.exports = router;