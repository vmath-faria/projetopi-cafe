var kpiRiscoModel = require("../models/kpiRiscoModel");

function exibir(req, res) {
    var idPropriedade = req.params.idPropriedade;

    if (!idPropriedade) {
    return res.status(400).json("idPropriedade não informado");
  }
  kpiRiscoModel.exibir(idPropriedade)

    .then(resultado => {
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
