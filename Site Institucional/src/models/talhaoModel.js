var database = require("../database/config");

function exibir(idTalhao) {
  var instrucaoSql = `SELECT 
    AVG(l.valor_umidade) AS media_talhao
FROM leitura l
JOIN sensor s ON s.id_sensor = l.fk_sensor
WHERE s.fk_talhao = ${idTalhao};
`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  exibir 
};
