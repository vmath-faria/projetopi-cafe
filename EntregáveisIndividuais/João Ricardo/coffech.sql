CREATE DATABASE coffech;
USE coffech;

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY,
    cnpj CHAR(14),
    cep CHAR(8)    
);

CREATE TABLE propriedade (
	idPropriedade INT PRIMARY KEY,
    cep CHAR(8),
    hectares INT,
    fkEmpresa INT,
		CONSTRAINT fkPropriedadeEmpresa
			FOREIGN KEY (fkEmpresa)
				REFERENCES empresa(idEmpresa)
);

CREATE TABLE sensor (
	idSensor INT PRIMARY KEY,
    sensor VARCHAR(45),
    dtInstalacao DATETIME,
    fkPropriedade INT,
		CONSTRAINT fkSensorPropriedade
			FOREIGN KEY (fkPropriedade)
				REFERENCES propriedade(idPropriedade)
);

CREATE TABLE leitura(
	idLeitura INT PRIMARY KEY,
	umidade_medida DECIMAL(4,2),
    dtMedicao DATETIME DEFAULT CURRENT_TIMESTAMP(),
    fkSensor INT,
		CONSTRAINT fkLeituraSensor
			FOREIGN KEY (fkSensor)
				REFERENCES sensor(idSensor)
);

CREATE TABLE login(
	idLogin INT PRIMARY KEY,
    usuario VARCHAR(45) UNIQUE,
    senha VARCHAR(45)
);

CREATE TABLE usuario (
	idUsuario INT,
    fkLogin INT,
		CONSTRAINT pkCompostaUsuario
			PRIMARY KEY (idUsuario, fkLogin),
	nome VARCHAR(45),
    cpf CHAR(11) UNIQUE,
    telefone CHAR(11),
    email VARCHAR(45) UNIQUE,
    fkEmpresa INT,
		CONSTRAINT fkUsuarioEmpresa
			FOREIGN KEY (fkEmpresa)
				REFERENCES empresa(idEmpresa),
	fkFuncionario INT,
		CONSTRAINT fkUsuarioFuncionario
			FOREIGN KEY (fkFuncionario)
				REFERENCES usuario(idUsuario)
);

ALTER TABLE usuario ADD CONSTRAINT fkUsuarioLogin
			FOREIGN KEY (fkLogin)
				REFERENCES usuario(idUsuario);



