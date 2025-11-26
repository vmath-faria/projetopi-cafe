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

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, telefone, cpf, nomeUsuario, dataNascimento, idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, telefone, cpf, nomeUsuario, dataNascimento, idEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario VALUES ('DEFAULT' , '${dataNascimento}', '${cpf}''${nome}', $'${nomeUsuario}' '${email}', '${senha}', 'NULL',${fkEmpresa}', NULL);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


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
  cadastrar,
  criarUsuario,
  buscarPorEmail
};
