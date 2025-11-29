var empresaModel = require("../models/empresaModel");

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}


module.exports = {
  listar,
};


// Necessário corrigir o caminho para que o token seja inserido na lista do cadastro