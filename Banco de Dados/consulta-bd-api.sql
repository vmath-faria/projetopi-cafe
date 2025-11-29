USE coffech2;

SELECT * from usuario;

SELECT * FROM empresa;

SELECT id_usuario, nome_usuario, email, fk_empresa as id_empresa, nivel_acesso FROM usuario WHERE email = '${email}' AND senha = '${senha}'