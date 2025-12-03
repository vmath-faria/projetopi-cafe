var database = require("../database/config");

function exibir(idPropriedade) {
  var instrucaoSql = `SELECT 
    ROUND(AVG(valor_umidade),2) AS umidade_media
FROM (
    SELECT valor_umidade
    FROM leitura l
JOIN sensor s ON l.fk_sensor = s.id_sensor
JOIN talhao t ON s.fk_talhao = t.id_talhao
    WHERE fk_propriedade = ${idPropriedade}
    ORDER BY id_leitura DESC
    LIMIT 10
) AS ultimas;`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  exibir 
};
