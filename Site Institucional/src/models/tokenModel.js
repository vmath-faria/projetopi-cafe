const database = require('../database/config');

var buscarToken = async (tokenCode) => {
  var sql = `SELECT * FROM token WHERE token = '${tokenCode}'`;
  var rows = await database.executar(sql);
  return rows[0];
};

function marcarTokenUsado(id_usuario, token) {
    var sql = `
        UPDATE token
        SET status_token = 'Usado',
            fk_usuario = ${id_usuario}
        WHERE token = '${token}';
    `;
    console.log("Executando SQL:", sql);
    return database.executar(sql);
}

function salvarToken(token, id_usuario, id_empresa, data_criacao, data_expiracao) {

    function formatDateToMySQL(date) {
        return date.toISOString().slice(0, 19).replace('T', ' ');
    }

    var dataCriacaoMySQL = formatDateToMySQL(data_criacao);
    var dataExpiracaoMySQL = formatDateToMySQL(data_expiracao);

    var sql = `
        INSERT INTO token (token, fk_empresa, fk_usuario, data_criacao, data_expiracao)
        VALUES ('${token}', ${id_empresa}, ${id_usuario}, '${dataCriacaoMySQL}', '${dataExpiracaoMySQL}');
    `;

    return database.executar(sql);
}


module.exports = {
  buscarToken,
  marcarTokenUsado,
  salvarToken
};
