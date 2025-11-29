const database = require('../database/config');

const buscarToken = async (tokenCode) => {
  const sql = `SELECT * FROM token WHERE token = '${tokenCode}'`;
  const rows = await database.executar(sql);
  return rows[0];
};

const marcarTokenUsado = async (id_token, fk_empresa) => {
  const sql = `
    UPDATE token 
    SET status_token = 'Usado' 
    WHERE id_token = '${id_token}' AND fk_empresa = '${fk_empresa}'
  `;
  const result = await database.executar(sql);
  return result.affectedRows;
};

module.exports = {
  buscarToken,
  marcarTokenUsado
};
