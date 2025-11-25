const database = require('../database/config');

// Lista propriedades de uma empresa com média de umidade
const listarPropriedadesPorEmpresa = async (fk_empresa) => {
  const sql = `
    SELECT 
      p.id_propriedade,
      p.nome_propriedade,
      p.logradouro,
      p.estado,
      p.cidade,
      p.bairro,
      p.cep,
      p.numero,
      COALESCE(ROUND(avgLeit.media_umidade,2), 0) AS media_umidade
    FROM propriedade p
    LEFT JOIN (
      SELECT pr.id_propriedade, AVG(l.valor_umidade) AS media_umidade
      FROM leitura l
      JOIN sensor s ON l.fk_sensor = s.id_sensor
      JOIN talhao t ON s.fk_talhao = t.id_talhao
      JOIN propriedade pr ON t.fk_propriedade = pr.id_propriedade
      GROUP BY pr.id_propriedade
    ) AS avgLeit ON avgLeit.id_propriedade = p.id_propriedade
    WHERE p.fk_empresa = ?
    ORDER BY media_umidade DESC;
  `;
  return database.executar(sql, [fk_empresa]);
};

// Dashboard de uma propriedade específica
const dashboardpropriedades = async (id_propriedade, alert_threshold = 30) => {
  const sqlPico = `
    SELECT l.data_hora_leitura, l.valor_umidade
    FROM leitura l
    JOIN sensor s ON l.fk_sensor = s.id_sensor
    JOIN talhao t ON s.fk_talhao = t.id_talhao
    WHERE t.fk_propriedade = ?
    ORDER BY l.valor_umidade DESC
    LIMIT 1;
  `;

  const sqlAlertas = `
    SELECT COUNT(*) AS total_alertas
    FROM leitura l
    JOIN sensor s ON l.fk_sensor = s.id_sensor
    JOIN talhao t ON s.fk_talhao = t.id_talhao
    WHERE t.fk_propriedade = ? 
      AND l.valor_umidade < ?;
  `;

  const sqlMediaTalhao = `
    SELECT t.id_talhao, t.nome_talhao, ROUND(AVG(l.valor_umidade),2) AS media_umidade
    FROM talhao t
    LEFT JOIN sensor s ON s.fk_talhao = t.id_talhao
    LEFT JOIN leitura l ON l.fk_sensor = s.id_sensor
    WHERE t.fk_propriedade = ?
    GROUP BY t.id_talhao;
  `;

  const picoRows = await database.executar(sqlPico, [id_propriedade]);
  const alertaRows = await database.executar(sqlAlertas, [id_propriedade, alert_threshold]);
  const mediaTalhaoRows = await database.executar(sqlMediaTalhao, [id_propriedade]);

  return {
    pico: picoRows[0] || null,
    total_alertas: alertaRows[0]?.total_alertas || 0,
    medias_talhoes: mediaTalhaoRows
  };
};


module.exports = {
  listarPropriedadesPorEmpresa,
  dashboardpropriedades
};
