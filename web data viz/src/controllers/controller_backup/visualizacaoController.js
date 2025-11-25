var visualizacaoModel = require("../models/visualizacaoModel");

function registrar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var fkForum = req.body.fkForum;

    visualizacaoModel.registrar(fkUsuario, fkForum)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
}

function contar(req, res) {
    var fkForum = req.params.idForum;

    visualizacaoModel.contarVisualizacoes(fkForum)
        .then(result => res.status(200).json(result[0]))
        .catch(err => res.status(500).json(err));
}

module.exports = {
    registrar,
    contar
};
