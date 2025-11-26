const usuarioModel = require('../models/usuarioModel');
const tokenModel = require('../models/tokenModel');

function cadastrar(req, res) {
  var nome = nomeServer;
  var email = emailServer;
  var senha =senhaServer;
  var telefone = telefoneServer;
  var cpf = cpfServer;
  var nomeUsuario = nomeUsuarioServer;
  var dataNascimento = dataNascimentoServer;
  var idEmpresa = idEmpresaVincularServer;
  
  if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (telefone == undefined){
        res.status(400).send("Seu telefone está indefinido!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está indefinido!");
    } else if (nomeUsuario == undefined) {
        res.status(400).send("Seu Nome de Usuário está indefinido!");
    } else if (dataNascimento == undefined) {
      res.status(400).send("Sua Data de Nascimento está indefinida!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("Sua empresa a vincular está indefinida!");
    } else {

     // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            usuarioModel.cadastrar(nome, email, senha, telefone, cpf, nomeUsuario, dataNascimento, idEmpresa)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }

function autenticar (req, res){
 var email = req.body.emailServer;
     var senha = req.body.senhaServer;
 
     if (email == undefined) {
         res.status(400).send("Seu email está undefined!");
     } else if (senha == undefined) {
         res.status(400).send("Sua senha está indefinida!");
     } else {


    usuarioModel.autenticar(email, senha)
              .then(
                  function (resultadoAutenticar) {
                      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
  
                      if (resultadoAutenticar.length == 1) {
                          console.log(resultadoAutenticar);
  
                          aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                              .then((resultadoAquarios) => {
                                  if (resultadoAquarios.length > 0) {
                                      res.json({
                                        id_usuario: user.id_usuario,
                                        email: user.email,
                                        fk_empresa: user.fk_empresa,
                                        nivel_acesso: user.nivel_acesso,
                                        nome_usuario: user.nome_usuario,
                                        nome_empresa: user.nome_empresa
                                    });
                                  } else {
                                      res.status(204).json({ aquarios: [] });
                                  }
                              })
                      } else if (resultadoAutenticar.length == 0) {
                          res.status(403).send("Email e/ou senha inválido(s)");
                      } else {
                          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                      }
                  }
                ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = { 
  cadastrar,
  autenticar
};
