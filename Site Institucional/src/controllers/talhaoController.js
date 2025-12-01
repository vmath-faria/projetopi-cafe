var talhaoModel = require("../models/talhaoModel");

function exibir(req, res) {
  var idTalhao = req.params.idTalhao;

  if (idTalhao == undefined) {
    return res.status(400).json("idTalhao não informado");
  }

  talhaoModel.exibir(idTalhao)
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
