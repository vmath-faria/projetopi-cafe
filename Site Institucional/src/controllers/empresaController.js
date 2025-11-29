var empresaModel = require("../models/empresaModel");

function listar(req, res) {
  empresaModel.listar()
    .then(resultado => res.status(200).json(resultado))
    .catch(err => {
      console.log(err);
      res.status(500).send("Erro ao listar empresas");
    });
}





module.exports = {
  listar,
 
};

