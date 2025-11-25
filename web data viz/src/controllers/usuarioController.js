const usuarioModel = require('../models/usuarioModel');
const tokenModel = require('../models/tokenModel');

const registrar = async (req, res) => {
  try {
    const { email, senha, nome_completo, nome_usuario, data_nascimento, cpf, nivel_acesso, token: tokenCode } = req.body;

    if (!tokenCode) return res.status(400).json({ erro: 'Token é obrigatório no cadastro.' });

    const tokenRow = await tokenModel.buscarToken(tokenCode);
    if (!tokenRow) return res.status(400).json({ erro: 'Token inválido.' });
    if (tokenRow.status_token !== 'Pendente') return res.status(400).json({ erro: 'Token já usado ou expirado.' });

    const fk_empresa = tokenRow.fk_empresa;

    // SEM HASH — senha normal
    const novoId = await usuarioModel.criarUsuario({
      data_nascimento,
      cpf,
      nome_completo,
      nome_usuario,
      email,
      senha,
      nivel_acesso,
      fk_empresa,
      fk_gerente: null
    });

    await tokenModel.marcarTokenUsado(tokenRow.id_token, tokenRow.fk_empresa);

    return res.status(201).json({ id_usuario: novoId });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro interno ao registrar.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await usuarioModel.buscarPorEmail(email);

    if (!user) return res.status(401).json({ erro: 'Credenciais inválidas.' });

    // SEM HASH — comparação direta
    if (senha !== user.senha) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' });
    }

    // Retorno atualizado com nome_usuario
    return res.json({
    id_usuario: user.id_usuario,
    email: user.email,
    fk_empresa: user.fk_empresa,
    nivel_acesso: user.nivel_acesso,
    nome_usuario: user.nome_usuario,
    nome_empresa: user.nome_empresa // <- adicionar aqui
    });


  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro interno ao logar.' });
  }
};

module.exports = { registrar, login };
