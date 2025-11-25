var avaliacaoModel = require("../models/avaliacaoModel");

function enviar(req, res) {
    const { idUsuario, idLivro, nota } = req.body;

    if (!idUsuario || !idLivro || !nota) {
        return res.status(400).send("Dados inválidos");
    }

    avaliacaoModel.enviar(idUsuario, idLivro, nota)
        .then(r => res.status(201).json(r))
        .catch(e => {
            console.log("Erro ao inserir avaliação:", e);
            res.status(500).json(e);
        });
}

function media(req, res) {
    avaliacaoModel.media()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(500).json(e));
}

module.exports = { 
    enviar, 
    media };