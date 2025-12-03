var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT id_token,
        token, 
        fk_empresa AS id_empresa,
        nome_empresa,
        fk_propriedade AS id_propriedade
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
