var propriedadeModel = require("../models/propriedadesModel");

function listarPorEmpresa(req, res) {
    var idEmpresa = req.params.idEmpresa;

    propriedadeModel.listarPorEmpresa(idEmpresa)
        .then(function(resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma propriedade encontrada!");
            }
        })
        .catch(function(erro) {
            console.log("Erro ao buscar propriedades:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPorId(req, res) {
    var idPropriedade = req.params.idPropriedade;

    propriedadeModel.buscarPorId(idPropriedade)
        .then(function(resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(404).send("Propriedade não encontrada!");
            }
        })
        .catch(function(erro) {
            console.log("Erro ao buscar propriedade:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPorEmpresa,
    buscarPorId
};
