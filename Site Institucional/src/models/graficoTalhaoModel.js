var database = require("../database/config");

function exibir(idTalhao) {
  var instrucaoSql = `
  SELECT 
    ROUND(AVG(l.valor_umidade), 2) AS umidade_media
FROM leitura l
JOIN sensor s ON l.fk_sensor = s.id_sensor
WHERE s.fk_talhao = ${idTalhao};
`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  exibir 
};
