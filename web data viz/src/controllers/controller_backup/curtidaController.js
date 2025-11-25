var curtidaModel = require("../models/curtidaModel");

function curtir(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var fkForum = req.body.fkForum;

    curtidaModel.curtir(fkUsuario, fkForum)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
}

function removerCurtida(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var fkForum = req.body.fkForum;

    curtidaModel.removerCurtida(fkUsuario, fkForum)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
}

function contar(req, res) {
    var fkForum = req.params.idForum;

    curtidaModel.contarCurtidas(fkForum)
        .then(result => res.status(200).json(result[0]))
        .catch(err => res.status(500).json(err));
}

function verificar(req, res) {
    var fkUsuario = req.params.fkUsuario;
    var fkForum = req.params.fkForum;

    curtidaModel.verificarCurtida(fkUsuario, fkForum)
        .then(result => res.status(200).json({ curtido: result.length > 0 }))
        .catch(err => res.status(500).json(err));
}

module.exports = {
    curtir,
    removerCurtida,
    contar,
    verificar
};
