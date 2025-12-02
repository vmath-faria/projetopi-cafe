var graficoGeralModel = require("../models/graficoGeralModels");

function exibir(req, res) {
    var idPropriedade = req.params.id_propriedade;
 console.log("[graficoGeralController] idPropriedade =", idPropriedade);
    graficoGeralModel.exibir(idPropriedade)
        .then(resultado => {
            console.log("[graficoGeralController] resultado:", resultado);
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log("Erro ao buscar umidade média:", erro);
            res.status(500).json("Erro ao buscar dados");
        });
}

module.exports = {
    exibir
};
