CREATE DATABASE euaospedacos;

USE euaospedacos;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    cpf CHAR(11) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    dtCadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE livro(
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) NOT NULL,
    autor VARCHAR(45) NOT NULL,
    dtPublicacao DATE NOT NULL
);

INSERT INTO livro VALUES 
	(DEFAULT, 'Eu, aos pedaços: "Por que você é assim?"', 'João Ricardo Jortieke Junior', '2025-08-10');

CREATE TABLE capitulo(
	idCapitulo INT PRIMARY KEY AUTO_INCREMENT,
    fkLivro INT, 
		CONSTRAINT fkCapituloLivro
			FOREIGN KEY (fkLivro)
				REFERENCES livro(idLivro),
	titulo VARCHAR(45) NOT NULL
);

INSERT INTO capitulo VALUES
	(DEFAULT, 1, 'Capítulo I'),
	(DEFAULT, 1, 'Capítulo II'),
	(DEFAULT, 1, 'Capítulo III'),
	(DEFAULT, 1, 'Capítulo IV'),
	(DEFAULT, 1, 'Capítulo V'),
	(DEFAULT, 1, 'Capítulo VI'),
	(DEFAULT, 1, 'Capítulo VII'),
	(DEFAULT, 1, 'Capítulo VIII'),
	(DEFAULT, 1, 'Capítulo IX'),
	(DEFAULT, 1, 'Capítulo X'),
	(DEFAULT, 1, 'Capítulo XI'),
	(DEFAULT, 1, 'Capítulo XII'),
	(DEFAULT, 1, 'Capítulo XIII'),
	(DEFAULT, 1, 'Capítulo XIV'),
	(DEFAULT, 1, 'Capítulo XV'),
	(DEFAULT, 1, 'Capítulo XVI'),
	(DEFAULT, 1, 'Capítulo XVII'),
	(DEFAULT, 1, 'Capítulo XVIII'),
	(DEFAULT, 1, 'Capítulo XIX'),
	(DEFAULT, 1, 'Capítulo XX'),
	(DEFAULT, 1, 'Capítulo XXI'),
	(DEFAULT, 1, 'Capítulo XXII'),
	(DEFAULT, 1, 'Capítulo XXIII'),
	(DEFAULT, 1, 'Capítulo XXIV'),
	(DEFAULT, 1, 'Capítulo XXV'),
	(DEFAULT, 1, 'Capítulo XXVI'),
	(DEFAULT, 1, 'Capítulo XXVII'),
	(DEFAULT, 1, 'Capítulo XXVIII'),
	(DEFAULT, 1, 'Capítulo XXIX'),
	(DEFAULT, 1, 'Capítulo XXX'),
	(DEFAULT, 1, 'Capítulo XXXI'),
	(DEFAULT, 1, 'Capítulo XXXII'),
	(DEFAULT, 1, 'Capítulo XXXIII'),
	(DEFAULT, 1, 'Capítulo XXXIV'),
	(DEFAULT, 1, 'Capítulo XXXV'),
	(DEFAULT, 1, 'Capítulo XXXVI'),
	(DEFAULT, 1, 'Capítulo XXXVII'),
	(DEFAULT, 1, 'Capítulo XXXVIII'),
	(DEFAULT, 1, 'Capítulo XXXIX'),
	(DEFAULT, 1, 'Capítulo XL'),
	(DEFAULT, 1, 'Capítulo XLI'),
	(DEFAULT, 1, 'Capítulo XLII'),
	(DEFAULT, 1, 'Capítulo XLIII'),
	(DEFAULT, 1, 'Capítulo XLIV'),
	(DEFAULT, 1, 'Capítulo XLV'),
	(DEFAULT, 1, 'Capítulo XLVI'),
	(DEFAULT, 1, 'Capítulo XLVII'),
	(DEFAULT, 1, 'Capítulo XLVIII'),
	(DEFAULT, 1, 'Capítulo XLIX'),
	(DEFAULT, 1, 'Capítulo L'),
	(DEFAULT, 1, 'Capítulo LI'),
	(DEFAULT, 1, 'Capítulo LII'),
	(DEFAULT, 1, 'Capítulo LIII'),
	(DEFAULT, 1, 'Capítulo LIV'),
	(DEFAULT, 1, 'Capítulo LV'),
	(DEFAULT, 1, 'Capítulo LVI'),
	(DEFAULT, 1, 'Capítulo LVII'),
	(DEFAULT, 1, 'Capítulo LVIII'),
	(DEFAULT, 1, 'Capítulo LIX'),
	(DEFAULT, 1, 'Capítulo LX'),
	(DEFAULT, 1, 'Capítulo LXI'),
	(DEFAULT, 1, 'Capítulo LXII'),
	(DEFAULT, 1, 'Capítulo LXIII'),
	(DEFAULT, 1, 'Capítulo LXIV'),
	(DEFAULT, 1, 'Capítulo LXV'),
	(DEFAULT, 1, 'Capítulo LXVI'),
	(DEFAULT, 1, 'Capítulo LXVII'),
	(DEFAULT, 1, 'Capítulo LXVIII'),
	(DEFAULT, 1, 'Capítulo LXIX'),
	(DEFAULT, 1, 'Capítulo LXX'),
	(DEFAULT, 1, 'Capítulo LXXI'),
	(DEFAULT, 1, 'Capítulo LXXII'),
	(DEFAULT, 1, 'Capítulo LXXIII'),
	(DEFAULT, 1, 'Capítulo LXXIV'),
	(DEFAULT, 1, 'Capítulo LXXV'),
	(DEFAULT, 1, 'Capítulo LXXVI'),
	(DEFAULT, 1, 'Capítulo LXXVII'),
	(DEFAULT, 1, 'Capítulo LXXVIII'),
	(DEFAULT, 1, 'Capítulo LXXIX'),
	(DEFAULT, 1, 'Capítulo LXXX'),
	(DEFAULT, 1, 'Capítulo LXXXI'),
	(DEFAULT, 1, 'Capítulo LXXXII'),
	(DEFAULT, 1, 'Capítulo LXXXIII'),
	(DEFAULT, 1, 'Capítulo LXXXIV'),
	(DEFAULT, 1, 'Capítulo LXXXV'),
	(DEFAULT, 1, 'Capítulo LXXXVI'),
	(DEFAULT, 1, 'Capítulo LXXXVII'),
	(DEFAULT, 1, 'Capítulo LXXXVIII'),
	(DEFAULT, 1, 'Capítulo LXXXIX'),
	(DEFAULT, 1, 'Capítulo XC'),
	(DEFAULT, 1, 'Capítulo XCI'),
	(DEFAULT, 1, 'Capítulo XCII'),
	(DEFAULT, 1, 'Capítulo XCIII'),
	(DEFAULT, 1, 'Capítulo XCIV'),
	(DEFAULT, 1, 'Capítulo XCV'),
	(DEFAULT, 1, 'Capítulo XCVI'),
	(DEFAULT, 1, 'Capítulo XCVII'),
	(DEFAULT, 1, 'Capítulo XCVIII'),
	(DEFAULT, 1, 'Capítulo XCIX'),
	(DEFAULT, 1, 'Capítulo C'),
	(DEFAULT, 1, 'Capítulo CI'),
	(DEFAULT, 1, 'Capítulo CII'),
	(DEFAULT, 1, 'Capítulo CIII'),
	(DEFAULT, 1, 'Capítulo CIV'),
	(DEFAULT, 1, 'Capítulo CV'),
	(DEFAULT, 1, 'Capítulo CVI'),
	(DEFAULT, 1, 'Capítulo CVII'),
	(DEFAULT, 1, 'Capítulo CVIII'),
	(DEFAULT, 1, 'Capítulo CIX'),
	(DEFAULT, 1, 'Capítulo CX');
    

CREATE TABLE forum(
	idForum INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    fkUsuario INT UNIQUE,
		CONSTRAINT fkForumUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES usuario(idUsuario),
	dtPostagem DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE leitura(
	fkUsuario INT,
    fkCapitulo INT,
		CONSTRAINT pkLeitura
			PRIMARY KEY (fkUsuario, fkCapitulo),
	dtLeitura DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		CONSTRAINT fkLeituraUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES usuario(idUsuario),
		CONSTRAINT fkLeituraCapitulo
			FOREIGN KEY (fkCapitulo)
				REFERENCES capitulo(idCapitulo)
);

CREATE TABLE curtida(
	fkUsuario INT,
    fkForum INT,
		CONSTRAINT pkCurtida
			PRIMARY KEY (fkUsuario, fkForum),
	dtCurtida DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		CONSTRAINT fkCurtidaUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES usuario(idUsuario),
		CONSTRAINT fkCurtidaForum
			FOREIGN KEY (fkForum)
				REFERENCES forum(idForum)
);

CREATE TABLE visualizacao(
	idVisualizacao INT,
    fkUsuario INT,
    fkForum INT,
		CONSTRAINT pkVisualizacao
			PRIMARY KEY (idVisualizacao, fkUsuario, fkForum),
	dtVisualizacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		CONSTRAINT fkVisualizacaoUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES usuario(idUsuario),
		CONSTRAINT fkVisualizacaoForum
			FOREIGN KEY (fkForum)
				REFERENCES forum(idForum)
);

CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
		CONSTRAINT fkAvaliacaoUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES usuario(idUsuario),
	fkLivro INT,
		CONSTRAINT fkAvaliacaoLivro
			FOREIGN KEY (fkLivro)
				REFERENCES livro(idLivro),
	nota INT NOT NULL,
    dtAvaliacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
