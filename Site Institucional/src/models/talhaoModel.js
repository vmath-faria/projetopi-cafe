const database = require('../database/config');

const leiturasRealtimeDoTalhao = async (id_talhao, limit = 50) => {
  const sql = `
    SELECT l.id_leitura, l.valor_umidade, l.data_hora_leitura, s.id_sensor
    FROM leitura l
    JOIN sensor s ON l.fk_sensor = s.id_sensor
    WHERE s.fk_talhao = '${id_talhao}'
    ORDER BY l.data_hora_leitura DESC
    LIMIT ${limit};
  `;
  const rows = await database.executar(sql);
  return rows;
};

const mediaHistoricaMensal = async (id_talhao, months = 6) => {
  const sql = `
    SELECT DATE_FORMAT(l.data_hora_leitura, '%Y-%m') AS ano_mes,
           ROUND(AVG(l.valor_umidade),2) AS media_umidade
    FROM leitura l
    JOIN sensor s ON l.fk_sensor = s.id_sensor
    WHERE s.fk_talhao = '${id_talhao}'
      AND l.data_hora_leitura >= DATE_SUB(CURDATE(), INTERVAL ${months} MONTH)
    GROUP BY ano_mes
    ORDER BY ano_mes ASC;
  `;
  const rows = await database.executar(sql);
  return rows;
};

module.exports = {
  leiturasRealtimeDoTalhao,
  mediaHistoricaMensal
};
