var database = require("../database/config");

function exibir() {
  var instrucaoSql = `SELECT 
    ROUND(AVG(l.valor_umidade),2) AS umidade_media
FROM leitura l
JOIN sensor s ON l.fk_sensor = s.id_sensor
JOIN talhao t ON s.fk_talhao = t.id_talhao
WHERE t.fk_propriedade = ${id_propriedade};`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  exibir 
};
