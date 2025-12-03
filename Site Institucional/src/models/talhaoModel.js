var database = require("../database/config");

function listar(idPropriedade) {
  var instrucaoSql = `SELECT id_talhao, nome_talhao
        FROM talhao
        WHERE fk_propriedade = ${idPropriedade};
`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  listar 
};
