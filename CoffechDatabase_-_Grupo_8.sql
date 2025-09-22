CREATE DATABASE coffec;

USE coffec;

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
				REFERENCES propriedade(idPropriedade)
);

CREATE TABLE leitura(
	idLeitura INT AUTO_INCREMENT,
    valor_umidade DECIMAL(5,2),
    data_hora_leitura DATETIME,
    fk_sensor INT,
		CONSTRAINT fkLeituraSensor
			FOREIGN KEY (fk_sensor)
				REFERENCES sensor(idSensor)
);


/*
CREATE TABLE Usuarios (
idUsuario INT PRIMARY KEY auto_increment,
emailContato VARCHAR(50) NOT NULL,
telefoneContato VARCHAR(20),
emailCadastro VARCHAR(50) NOT NULL,
senha VARCHAR(100) NOT NULL,
nomeusuario VARCHAR(50),
dtcadastro timestamp,
CPF VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Empresa(
IdEmpresa INT PRIMARY KEY auto_increment,
NomeEmpresa VARCHAR(50) NOT NULL,
CNPJ VARCHAR(20) NOT NULL UNIQUE,
razaoSocial VARCHAR(100),
nomeFantasia VARCHAR(100) NOT NULL,
SituacaoCadastral VARCHAR(20) CHECK (SituacaoCadastral IN ('Ativo', 'Inativo')),
-- Endereço
logradouro VARCHAR(50),
numero VARCHAR(10),
cep VARCHAR(10),
cidade VARCHAR(100),
bairro VARCHAR(50),
uf CHAR(2)

);

CREATE TABLE Plantacao(
IdSafra INT PRIMARY KEY auto_increment,
Endereco VARCHAR(50),
QtdHectares INT,
Coordenadas VARCHAR(100),
QtdSensor INT,
Bioma VARCHAR(50),
TipoGrao VARCHAR(50)
);

CREATE TABLE Sensores(
IdSensor INT PRIMARY KEY auto_increment,
Coordenada VARCHAR(50),
IntervaloCaptacaoHoras INT
);

CREATE TABLE Captacoes(
IdDado INT PRIMARY KEY auto_increment,
DtCaptacao timestamp,
ValorUmidade INT
);



INSERT INTO Usuarios (emailContato, telefoneContato, emailCadastro, senha, nomeusuario, dtcadastro, CPF) VALUES 
('joao.silva@gmail.com', '11988887777', 'joaosilva@gmail.com', 'senha123', 'Joao Silva', NOW(), '123.456.789-00'),
('maria.oliveira@gmail.com', '21977776666', 'maria.oliveira@gmail.com', 'senha456', 'Maria Oliveira', NOW(), '987.654.321-00'),
('carlos.santos@gmail.com', '31966665555', 'carlos.santos@gmail.com', 'senha789', 'Carlos Santos', NOW(), '111.222.333-44'),
('ana.costa@gmail.com', '41955554444', 'ana.costa@gmail.com', 'senha321', 'Ana Costa', NOW(), '555.666.777-88'),
('lucas.pereira@gmail.com', '51944443333', 'lucas.pereira@gmail.com', 'senha654', 'Lucas Pereira', NOW(), '999.888.777-66');

INSERT INTO Empresa (NomeEmpresa, CNPJ, razaoSocial, nomeFantasia, SituacaoCadastral, logradouro, numero, cep, cidade, bairro, uf) VALUES
('AgroTech LTDA', '12.345.678/0001-99', 'AgroTech Soluções Agrícolas LTDA', 'AgroTech', 'Ativo', 'Rua das Palmeiras', '120', '01010-000', 'São Paulo', 'Centro', 'SP'),
('Café Brasil SA', '98.765.432/0001-11', 'Café Brasil Importadora SA', 'Café Brasil', 'Ativo', 'Av. Paulista', '2000', '01310-200', 'São Paulo', 'Paulista', 'SP'),
('Fazenda do Cerrado', '11.222.333/0001-44', 'Fazenda do Cerrado Ltda', 'Cerrado Café', 'Inativo', 'Estrada Rural', '500', '74000-000', 'Goiânia', 'Zona Rural', 'GO'),
('Grãos Premium', '55.666.777/0001-22', 'Grãos Premium Comércio de Café', 'Premium Café', 'Ativo', 'Rua das Flores', '78', '30123-000', 'Belo Horizonte', 'Savassi', 'MG'),
('VerdeVale Agro', '77.888.999/0001-55', 'VerdeVale Agroindústria Ltda', 'VerdeVale', 'Ativo', 'Av. das Américas', '3200', '22775-000', 'Rio de Janeiro', 'Barra da Tijuca', 'RJ');


INSERT INTO Plantacao (Endereco, QtdHectares, Coordenadas, QtdSensor, Bioma, TipoGrao) VALUES
('Fazenda Boa Vista - SP', 50, '-23.5505, -46.6333', 10, 'Mata Atlântica', 'Arábica'),
('Fazenda Cerrado - GO', 100, '-16.6869, -49.2648', 15, 'Cerrado', 'Robusta'),
('Sítio São José - MG', 30, '-19.9167, -43.9345', 8, 'Mata Atlântica', 'Arábica'),
('Chácara Santa Luzia - PR', 40, '-25.4284, -49.2733', 12, 'Mata Atlântica', 'Gueixa'),
('Fazenda Bela Vista - ES', 70, '-20.3155, -40.3128', 20, 'Mata Atlântica', 'Conilon');

INSERT INTO Sensores (Coordenada, IntervaloCaptacaoHoras) VALUES
('-23.5505, -46.6333', 2),
('-16.6869, -49.2648', 3),
('-19.9167, -43.9345', 1),
('-25.4284, -49.2733', 4),
('-20.3155, -40.3128', 2);


INSERT INTO Captacoes (DtCaptacao, ValorUmidade) VALUES
(NOW(), 45),
(NOW(), 50),
(NOW(), 55),
(NOW(), 60),
(NOW(), 65);

SELECT * FROM Usuarios;
SELECT * FROM Empresa;
SELECT * FROM Usuarios;
SELECT * FROM Sensores;
SELECT * FROM Captacoes;
*/