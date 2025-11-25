var express = require("express");
var router = express.Router();
var forumController = require("../controllers/forumController");

router.get("/kpis/:idUsuario", forumController.kpisForum);
router.post("/criar", forumController.criar);
router.post("/curtir", forumController.curtir);
router.post("/visualizar", forumController.visualizar);
router.get("/listar", forumController.listar);

module.exports = router;
