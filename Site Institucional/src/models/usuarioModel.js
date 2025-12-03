const database = require('../database/config');

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id_usuario, nome_usuario, email, fk_empresa as id_empresa, nivel_acesso FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, telefone, cpf, nomeUsuario, dataNascimento, idEmpresa, idPropriedade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, telefone, cpf, nomeUsuario, dataNascimento, idEmpresa, idPropriedade);
    
    var instrucaoSql = `
        INSERT INTO usuario (data_nascimento, cpf, nome_completo, nome_usuario, email, senha, nivel_acesso, fk_empresa, fk_token_propriedade) VALUES 
        ('${dataNascimento}', '${cpf}', '${nome}', '${nomeUsuario}', '${email}', '${senha}', 'Funcionario', ${idEmpresa}, ${idPropriedade});

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
  cadastrar,
  autenticar
};
