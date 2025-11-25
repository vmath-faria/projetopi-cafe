var forumModel = require("../models/forumModel");

function kpisForum(req, res) {
    var idUsuario = req.params.idUsuario;

    Promise.all([
        forumModel.contarPostagens(idUsuario),
        forumModel.contarCurtidasRecebidas(idUsuario),
        forumModel.contarVisualizacoesRecebidas(idUsuario)
    ])
        .then(resultado => {
            res.json({
                postagens: resultado[0][0].total,
                curtidas: resultado[1][0].total,
                visualizacoes: resultado[2][0].total
            });
        })
        .catch(erro => {
            res.status(500).json(erro.sqlMessage);
        });
}

function criar(req, res) {
    var { titulo, descricao, idUsuario } = req.body;

    forumModel.criarPostagem(titulo, descricao, idUsuario)
        .then(r => res.json("Post criado"))
        .catch(e => res.status(500).json(e.sqlMessage));
}

function curtir(req, res) {
    var { idUsuario, idForum } = req.body;

    forumModel.registrarCurtida(idUsuario, idForum)
        .then(r => res.json("Curtida registrada"))
        .catch(e => res.status(500).json(e.sqlMessage));
}

function visualizar(req, res) {
    var { idUsuario, idForum } = req.body;

    forumModel.registrarVisualizacao(idUsuario, idForum)
        .then(r => res.json("Visualização registrada"))
        .catch(e => res.status(500).json(e.sqlMessage));
}

function listar(req, res) {
    forumModel.listar()
        .then(r => {
            console.log(r); 
            res.json(r);
        })
        .catch(e => res.status(500).json(e.sqlMessage));
}

module.exports = {
    kpisForum,
    criar,
    curtir,
    visualizar,
    listar
};
