CREATE DATABASE coffech;

USE coffech;

CREATE TABLE produtor(
	idProdutor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100),
    telefone CHAR(11)
);

CREATE TABLE propriedades (
	idPropriedade INT PRIMARY KEY AUTO_INCREMENT,
    nome_propriedade VARCHAR(100),
    endereco VARCHAR(255),
    -- mudar o atributo endereço
    hectares_cultivados DECIMAL(10,2),
    fk_produtor INT,
		CONSTRAINT fkProdutorProriedade
			FOREIGN KEY (fk_produtor)
				REFERENCES produtor(idProdutor)
);

CREATE TABLE sensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    localizacao VARCHAR(100),
    data_instalacao DATE,
    status_sensor VARCHAR(20),
    fk_propriedade INT,
		CONSTRAINT fkPropriedadeSensor
			FOREIGN KEY (fk_propriedade)
				REFERENCES propriedades (idPropriedade)
);

CREATE TABLE leitura(
	idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    valor_umidade DECIMAL(5,2),
    data_hora_leitura DATETIME DEFAULT CURRENT_TIMESTAMP(),
    fk_sensor INT,
		CONSTRAINT fkLeituraSensor
			FOREIGN KEY (fk_sensor)
				REFERENCES sensor(idSensor)
);

