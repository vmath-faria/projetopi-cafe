var database = require("../database/config");

// Select retorna os tokens e o nome da empresa, mas como são enviados de volta para a lista do front?


function listar() {
  var instrucaoSql = `SELECT token, 
        nome_empresa
        FROM token 
          JOIN empresa
            ON fk_empresa = id_empresa
          WHERE status_token = 'Pendente'
              AND NOW() < data_expiracao;`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  listar 
};
