const database = require('../database/config');

const criarLeitura = async ({ valor_umidade, fk_sensor }) => {
  const sql = `
    INSERT INTO leitura (valor_umidade, fk_sensor) 
    VALUES ('${valor_umidade}', '${fk_sensor}');
  `;
  const result = await database.executar(sql);
  return result.insertId;
};

module.exports = { criarLeitura };
