const database = require('../database/config');

const listarEmpresas = async () => {
  const sql = `SELECT id_empresa, nome_empresa, cnpj, telefone_celular FROM empresa`;
  const rows = await database.executar(sql);
  return rows;
};

module.exports = {
  listarEmpresas
};
