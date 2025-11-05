CREATE DATABASE coffech;

USE coffech;

CREATE TABLE empresa (
	id_empresa INT PRIMARY KEY AUTO_INCREMENT,
	nome_empresa VARCHAR(100) NOT NULL, 
    cnpj CHAR(14) UNIQUE,
    telefone_celular VARCHAR(15)
);

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    data_nascimento DATE,
    cpf VARCHAR (11),
    nome_completo VARCHAR (100),
    nome_usuario VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    nivel_acesso VARCHAR(20),
		CONSTRAINT chk_nivel_acesso 
			CHECK (nivel_acesso IN ('Proprietario', 'Funcionario')),
	fk_empresa INT,
    fk_gerente INT,
			FOREIGN KEY (fk_empresa)
				REFERENCES empresa (id_empresa),
			FOREIGN KEY(fk_gerente) 
				REFERENCES usuario (id_usuario)
);

CREATE TABLE token (
    id_token INT AUTO_INCREMENT,
    token VARCHAR(64) UNIQUE NOT NULL, 
    fk_empresa INT NOT NULL,
    fk_usuario INT UNIQUE NOT NULL,
    status_token VARCHAR(20) DEFAULT 'Pendente', 
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_expiracao DATETIME,        
    CONSTRAINT chk_status_token
        CHECK (status_token IN ('Pendente', 'Usado', 'Expirado')),
    PRIMARY KEY(id_token, fk_empresa),
    FOREIGN KEY(fk_empresa) REFERENCES empresa(id_empresa),
    FOREIGN KEY(fK_usuario) REFERENCES usuario(id_usuario)
);
                
CREATE TABLE mensagemContato (
    id_mensagem INT PRIMARY KEY AUTO_INCREMENT,
    email_remetente VARCHAR(100) NOT NULL,
    assunto VARCHAR(100),
    mensagem TEXT,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    status_mensagem VARCHAR(20) DEFAULT 'Novo', 
        CONSTRAINT chk_statusMensagem
            CHECK (status_mensagem IN ('Novo', 'Lido', 'Respondido'))
);
			
CREATE TABLE propriedade (
	id_propriedade INT PRIMARY KEY AUTO_INCREMENT,
    nome_propriedade VARCHAR(100),
    logradouro VARCHAR(150),
    estado VARCHAR(45),
    cidade VARCHAR(45),
    bairro VARCHAR(100),
    cep CHAR(9),
    numero VARCHAR(10),
	fk_empresa INT,
        CONSTRAINT fk_propriedade_empresa
            FOREIGN KEY (fk_empresa)
                REFERENCES empresa (id_empresa)
);

CREATE TABLE talhao(
    id_talhao INT PRIMARY KEY AUTO_INCREMENT,
    nome_talhao VARCHAR(45),
    variedade_cafe VARCHAR(45),
	fk_propriedade INT,
        CONSTRAINT fk_talhao_propriedade
            FOREIGN KEY (fk_propriedade)
                REFERENCES propriedade (id_propriedade)
);
    
CREATE TABLE sensor(
	id_sensor INT PRIMARY KEY AUTO_INCREMENT,
    data_instalacao DATE,
    status_sensor VARCHAR(20),
        CONSTRAINT chk_status_sensor
            CHECK (status_sensor IN ('Ativo', 'Inativo', 'Manutenção')),
    fk_talhao INT,
        CONSTRAINT fk_sensor_talhao
            FOREIGN KEY (fk_talhao)
                REFERENCES talhao (id_talhao)
);

CREATE TABLE leitura(
	id_leitura INT PRIMARY KEY AUTO_INCREMENT,
    valor_umidade DECIMAL(5,2),
    data_hora_leitura DATETIME DEFAULT CURRENT_TIMESTAMP(),
    fk_sensor INT,
		CONSTRAINT fk_leitura_sensor
			FOREIGN KEY (fk_sensor)
				REFERENCES sensor(id_sensor)
);

-- INSERTS EMPRESA
INSERT INTO empresa (nome_empresa, cnpj, telefone_celular)VALUES 
('Cafezes Ltda', '11111111111111', '11123456789'),
('Grãos de Ouro', '22222222222222', '35987654321');

-- INSERTS DE USUÁRIOS (3 por empresa)
INSERT INTO usuario (data_nascimento, cpf, nome_completo, nome_usuario, email, senha, nivel_acesso, fk_empresa, fk_gerente)VALUES
('1980-05-10', '12345678911', 'João Medeiros', 'joaom', 'joao@cafezes.com', '123senha', 'Proprietario', 1, NULL),
('1990-03-22', '12345678922', 'Mariana Siva', 'marianas', 'mariana@cafezes.com', 'abc123', 'Funcionario', 1, 1),
('1995-09-18', '12345678933', 'Lucas Nogueira', 'lucasn', 'carlos@cafezes.com', 'senha456', 'Funcionario', 1, 1),
('1985-07-12', '12345678944', 'Renato Souza', 'renatos', 'renato@graosouro.com', '321senha', 'Proprietario', 2, NULL),
('1992-04-25', '12345678955', 'Fernanda Lopes', 'fernandal', 'fernanda@graosouro.com', 'xyz789', 'Funcionario', 2, 4),
('1998-11-30', '12345678966', 'Paulo Nogueira', 'paulon', 'paulo@graosouro.com', 'pass987', 'Funcionario', 2, 4);

-- TOKENS (1 por usuário, vinculados a empresa e ao usuário)
INSERT INTO token (token, fk_empresa, fk_usuario, status_token, data_expiracao)VALUES
('A1B2C3', 1, 1, 'Pendente', '2025-12-31'),
('X9Y8Z7', 1, 2, 'Pendente', '2025-12-31'),
('Q2W3E4', 1, 3, 'Pendente', '2025-12-31'),
('H7J8K9', 2, 4, 'Pendente', '2025-12-31'),
('L0M1N2', 2, 5, 'Pendente', '2025-12-31'),
('R3T4Y5', 2, 6, 'Pendente', '2025-12-31');


-- PROPRIEDADES (1 por empresa)
INSERT INTO propriedade (nome_propriedade, logradouro, estado, cidade, bairro, cep, numero, fk_empresa)VALUES
('Fazenda Cafés Arábicas Valiosos', 'Estrada Nova KM 5', 'Espírito Santo', 'Vila Velha', 'Zona Rural', '00000000', 'S/N', 1),
('Sítio Cafezais', 'Rodovia ES-123 KM 55', 'Espírito Santo', 'Vitória', 'Zona Rural', '12345678', 'S/N', 2);

-- TALHÕES (1 por propriedade)
INSERT INTO talhao (nome_talhao, variedade_cafe, fk_propriedade)VALUES
('Talhão 1 - Arábica Premium', 'Cafe arabica', 1),
('Talhão 2 - Arábica Clássico', 'Cafe arabica', 2);

-- SENSORES (1 sensor, vinculado ao primeiro talhão)

INSERT INTO sensor (data_instalacao, status_sensor, fk_talhao)VALUES
('2025-10-10', 'Ativo', 1);

-- LEITURA (exemplo de leitura da umidade do solo)

INSERT INTO leitura (valor_umidade, fk_sensor)VALUES
(47.85, 1),
(52.10, 1),
(39.55, 1);

-- CRIAÇÃO DOS USUÁRIOS DA API
CREATE USER escritor@localhost IDENTIFIED BY 'Sptech#2024';
CREATE USER leitor@localhost IDENTIFIED BY 'Sptech#2024';

-- PERMISSÃO DOS USUÁRIOS
GRANT SELECT ON coffech.leitura TO leitor@localhost;
GRANT INSERT ON coffech.leitura TO escritor@localhost;
FLUSH PRIVILEGES;

-- SELECTS COM JOIN
-- VERIFICAR USUÁRIOS E SEU GERENTE
SELECT 
    u.id_usuario AS 'ID do Funcionário',
    u.nome_completo AS 'Nome do Funcionário',
    IFNULL(g.id_usuario, 'Sou Gerente') AS 'ID do Gerente',
    IFNULL(g.nome_completo, 'Sou gerente') AS 'Nome do Gerente'
FROM usuario AS u
LEFT JOIN usuario AS g 
    ON u.fk_gerente = g.id_usuario;

-- USUÁRIOS E SUAS EMPRESAS
SELECT 
    u.id_usuario AS 'ID do Funcionário',
    u.nome_completo AS 'Nome do Funcionário',
    u.nivel_acesso AS 'Nível de Acesso do Usuário',
    e.nome_empresa AS 'Nome da Empresa'
FROM usuario AS u
JOIN empresa AS e 
    ON u.fk_empresa = e.id_empresa;

-- TOKENS, USUÁRIOS E SUAS EMPRESAS
SELECT 
    t.id_token AS 'ID do Token',
    t.token AS 'Código do Token',
    t.status_token AS 'Status do Token',
    u.nome_completo AS 'Nome do Funcionário',
    e.nome_empresa AS 'Nome da Empresa'
FROM token AS t
JOIN usuario AS u ON t.fk_usuario = u.id_usuario
JOIN empresa AS e 
    ON t.fk_empresa = e.id_empresa;

-- PROPRIEDADES E SEUS RESPECTIVOS TALHÕES
SELECT 
    p.nome_propriedade AS 'Nome da Propriedade',
    t.nome_talhao AS 'Nome do Talhão',
    t.variedade_cafe AS 'Variedade do Café'
FROM propriedade AS p
JOIN talhao AS t 
    ON p.id_propriedade = t.fk_propriedade;

-- TALHÕES, SENSORES E SUAS RESPECTIVAS LEITURAS
SELECT 
    t.nome_talhao,
    s.id_sensor,
    s.status_sensor,
    l.valor_umidade,
    l.data_hora_leitura
FROM talhao AS t
JOIN sensor AS s 
    ON t.id_talhao = s.fk_talhao
JOIN leitura AS l 
    ON s.id_sensor = l.fk_sensor;

-- Exibe a empresa, suas propriedades, seus talhões e seus sensores
SELECT 
    e.nome_empresa AS 'Nome da Empresa',
    p.nome_propriedade AS 'Nome da Propriedade',
    t.nome_talhao AS 'Nome do Talhão',
    s.id_sensor AS 'Nome do Sensor',
    s.status_sensor As 'Status do Sensor'
FROM empresa AS e
JOIN propriedade AS p ON p.fk_empresa = e.id_empresa
JOIN talhao AS t ON t.fk_propriedade = p.id_propriedade
JOIN sensor AS s ON s.fk_talhao = t.id_talhao;
