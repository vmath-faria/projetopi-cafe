var database = require("../database/config");

function exibir(idTalhao) {
  var instrucaoSql = `
  SELECT 
    AVG(valor_umidade) AS umidade_media
FROM (
    SELECT valor_umidade
    FROM leitura l
JOIN sensor s ON l.fk_sensor = s.id_sensor
    WHERE fk_talhao = ${idTalhao}
    ORDER BY id_leitura DESC
    LIMIT 10
) AS ultimas;
`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  exibir 
};
