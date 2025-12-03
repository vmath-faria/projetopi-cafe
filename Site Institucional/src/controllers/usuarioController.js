const usuarioModel = require('../models/usuarioModel');
const propriedadesModel = require('../models/propriedadesModel');
const tokenModel = require('../models/tokenModel');

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cpf = req.body.cpfServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var dataNascimento = req.body.dataNascimentoServer;
    var idEmpresa = req.body.idEmpresaVincularServer;
    var idPropriedade = req.body.idPropriedadeServer;

    if (!nome) return res.status(400).send("Nome indefinido");
    if (!email) return res.status(400).send("Email indefinido");
    if (!senha) return res.status(400).send("Senha indefinida");
    if (!telefone) return res.status(400).send("Telefone indefinido");
    if (!cpf) return res.status(400).send("CPF indefinido");
    if (!nomeUsuario) return res.status(400).send("Usuário indefinido");
    if (!dataNascimento) return res.status(400).send("Nascimento indefinido");
    if (!idPropriedade) return res.status(400).send("Propriedade indefinida");

  usuarioModel.cadastrar(
    nome,
    email,
    senha,
    telefone,
    cpf,
    nomeUsuario,
    dataNascimento,
    idEmpresa,
    idPropriedade
  )
    .then(r => res.json(r))
    .catch(err => {
      console.log(err);
      res.status(500).send("Erro no cadastro");
    });
}


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email) return res.status(400).send("Email indefinido");
    if (!senha) return res.status(400).send("Senha indefinida");

    usuarioModel.autenticar(email, senha)
        .then(resultado => {

            if (resultado.length === 1) {

                var user = resultado[0];

                propriedadesModel.listarPorEmpresa(user.id_empresa)
                    .then(propriedades => {

                        res.json({
                            id_usuario: user.id_usuario,
                            nome_usuario: user.nome_usuario,
                            email: user.email,
                            nivel_acesso: user.nivel_acesso,
                            id_empresa: user.id_empresa,
                            propriedades: propriedades,
                            id_propriedade: user.fk_token_propriedade
                        });

                    })
                    .catch(err => {
                        console.log("Erro ao buscar propriedades:", err);
                        res.json({
                            id_usuario: user.id_usuario,
                            nome_usuario: user.nome_usuario,
                            email: user.email,
                            nivel_acesso: user.nivel_acesso,
                            id_empresa: user.id_empresa,
                            propriedades: [],
                            id_propriedade: user.fk_token_propriedade

                        });
                    });

            } else if (resultado.length === 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login.");
            }

        })
        .catch(err => {
            console.log("Erro ao autenticar:", err);
            res.status(500).json(err.sqlMessage);
        });
}

function marcarTokenUsado(req, res) {
    var token = req.body.token;
    var id_usuario = req.body.id_usuario;

    if (!token) {
        return res.status(400).send("Token não enviado.");
    }

    tokenModel.marcarTokenUsado(id_usuario, token)
        .then(result => {
            res.status(200).json({ mensagem: "Token atualizado para 'Usado'." });
        })
        .catch(erro => {
            console.log("Erro ao atualizar token:", erro);
            res.status(500).send("Erro ao atualizar token.");
        });
}

function gerarToken(req, res) {
    var { token, id_usuario, id_empresa, id_propriedade } = req.body;

    if (!token) return res.status(400).send("Token não enviado.");
    if (!id_usuario) return res.status(400).send("ID do usuário não enviado.");
    if (!id_empresa) return res.status(400).send("ID da empresa não enviado.");
    if (!id_propriedade) return res.status(400).send("ID da propriedade não enviado.");

    var data_criacao = new Date();
    var data_expiracao = new Date();
    data_expiracao.setHours(data_expiracao.getHours() + 24);

    tokenModel.salvarToken(token, id_usuario, id_empresa, data_criacao, data_expiracao, id_propriedade)
        .then(() => {
            res.status(200).json({ mensagem: "Token armazenado com sucesso.", token });
        })
        .catch(err => {
            console.log("ERRO SQL AO SALVAR TOKEN >>>", err);
            res.status(500).json({ erro: err });
        });
}

module.exports = { 
  cadastrar,
  autenticar,
  marcarTokenUsado,
  gerarToken
};
