var talhaoModel = require("../models/talhaoModel");

function listar(req, res) {
   var idPropriedade = req.params.id_propriedade;

  if (idPropriedade == undefined) {
    return res.status(400).json("idPropriedade não informado");
  }

  talhaoModel.listar(idPropriedade)
    .then(resultado => {
      res.status(200).json(resultado);
    })
    .catch(erro => {
      console.log("Erro ao buscar talhões da propriedade:", erro);
      res.status(500).json("Erro ao buscar dados");
    });
}

module.exports = {
  listar
};
