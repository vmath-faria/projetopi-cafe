var graficoTalhaoModel = require("../models/graficoTalhaoModel");

function exibir(req, res) {
    var idTalhao = req.params.id_talhao;


    graficoTalhaoModel.exibir(idTalhao)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log("Erro ao buscar umidade média do talhão:", erro);
            res.status(500).json("Erro ao buscar dados");
        });
}

module.exports = {
    exibir
};
