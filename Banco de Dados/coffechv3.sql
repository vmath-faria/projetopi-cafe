CREATE DATABASE coffech;

USE coffech;

CREATE TABLE empresa (
	id_empresa INT PRIMARY KEY AUTO_INCREMENT,
	nome_empresa VARCHAR(100) NOT NULL, 
    cnpj CHAR(14) UNIQUE,
    telefone VARCHAR(15)
);

/*
CREATE TABLE convite (
    id_convite INT PRIMARY KEY AUTO_INCREMENT,
    token VARCHAR(64) UNIQUE NOT NULL, 
    fk_empresa INT NOT NULL,        
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_expiracao DATETIME,        
    status_convite VARCHAR(20) DEFAULT 'Pendente', 
    CONSTRAINT chk_status_convite
        CHECK (status_convite IN ('Pendente', 'Usado', 'Expirado')),
    CONSTRAINT fk_convite_empresa
        FOREIGN KEY (fk_empresa)
            REFERENCES empresa (id_empresa)
);
*/

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    nivel_acesso VARCHAR(20),
		CONSTRAINT chk_nivel_acesso 
			CHECK (nivel_acesso IN ('Proprietario', 'Funcionario')),
	fk_empresa INT,
		CONSTRAINT fk_usuario_empresa
			FOREIGN KEY (fk_empresa)
				REFERENCES empresa (id_empresa)
);
                
CREATE TABLE mensagemContato (
    id_mensagem INT PRIMARY KEY AUTO_INCREMENT,
    email_remetente VARCHAR(100) NOT NULL,
    assunto VARCHAR(100),
    mensagem TEXT,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    status_mensagem VARCHAR(20) DEFAULT 'Novo', 
        CONSTRAINT chk_statusMensagem
            CHECK (status_mensagem IN ('Novo', 'Lido', 'Respondido')),
    fk_usuario INT, 
    CONSTRAINT fk_Mensagem_Usuario
        FOREIGN KEY (fk_usuario)
			REFERENCES usuario(id_usuario)
);
			
CREATE TABLE propriedade (
	id_propriedade INT PRIMARY KEY AUTO_INCREMENT,
    nome_propriedade VARCHAR(100),
    logradouro VARCHAR(150),
    bairro VARCHAR(100),
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

