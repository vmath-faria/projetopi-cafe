const database = require('../database/config');

function buscarPropriedadesPorEmpresa(id_empresa) {

  var instrucaoSql = `SELECT * FROM propriedade WHERE fk_empresa = ${id_empresa}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

//Inserir cadastro de propriedade??

module.exports = {
  buscarPropriedadesPorEmpresa,
}