const database = require('../database/config');

const criarUsuario = async (usuario) => {
  const {
    data_nascimento, cpf, nome_completo, nome_usuario, email,
    senha, nivel_acesso, fk_empresa, fk_gerente
  } = usuario;

  const sql = `
    INSERT INTO usuario 
      (data_nascimento, cpf, nome_completo, nome_usuario, email, senha, nivel_acesso, fk_empresa, fk_gerente)
    VALUES 
      ('${data_nascimento}', '${cpf}', '${nome_completo}', '${nome_usuario}', 
       '${email}', '${senha}', '${nivel_acesso}', '${fk_empresa}', ${fk_gerente || null});
  `;

  const result = await database.executar(sql);
  return result.insertId;
};

const buscarPorEmail = async (email) => {
  const sql = `SELECT 
    u.*,
    e.nome_empresa
    FROM usuario u
    JOIN empresa e ON u.fk_empresa = e.id_empresa
    WHERE u.email = '${email}';
`;
  const rows = await database.executar(sql);
  return rows[0];
};

module.exports = {
  criarUsuario,
  buscarPorEmail
};
