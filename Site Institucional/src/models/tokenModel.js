const database = require('../database/config');

const buscarToken = async (tokenCode) => {
  const sql = `SELECT * FROM token WHERE token = '${tokenCode}'`;
  const rows = await database.executar(sql);
  return rows[0];
};

function marcarTokenUsado(id_usuario, token) {
    const sql = `
        UPDATE token
        SET status_token = 'Usado',
            fk_usuario = ${id_usuario}
        WHERE token = '${token}';
    `;
    console.log("Executando SQL:", sql);
    return database.executar(sql);
}

module.exports = {
  buscarToken,
  marcarTokenUsado
};
