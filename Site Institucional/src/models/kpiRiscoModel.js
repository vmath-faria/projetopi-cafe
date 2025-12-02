var database = require("../database/config");

function exibir(idPropriedade) {
  var instrucaoSql = `SELECT 
    COUNT(*) AS qtd_talhoes_fora
FROM (
    SELECT 
        t.id_talhao,
        AVG(l.valor_umidade) AS umidade_media
    FROM leitura l
    JOIN sensor s ON s.id_sensor = l.fk_sensor
    JOIN talhao t ON t.id_talhao = s.fk_talhao
    WHERE t.fk_propriedade = ${idPropriedade}
    GROUP BY t.id_talhao
    HAVING AVG(l.valor_umidade) < 60
        OR AVG(l.valor_umidade) > 80
) AS talhoes_fora;

`;

  return database.executar(instrucaoSql);
}

module.exports = {  
  exibir 
};
