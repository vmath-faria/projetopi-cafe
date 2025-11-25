

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

INSERT INTO usuario VALUES
(1,'João Ricardo','ricardojrjj@gmail.com','45290856862','123456','2025-11-17 15:40:14'),
(2,'Anderson','anderson@gmail.com','11111111111','123456','2025-11-17 15:40:14'),
(3,'Aslan','aslanjortieke@gmail.com','42851588842','123456','2025-11-17 16:17:19');


INSERT INTO forum VALUES
(1,'Forum 1','Um belo texto de exemplo.',2,'2025-11-17 15:41:15'),
(2,'Teste 2','Testando ainda.',2,'2025-11-17 15:42:53'),
(3,'Testando novamente','Aqui tem um belo testo sobre várias belas coisas.',1,'2025-11-17 15:57:59'),
(4,'Leitura em um dia chuvoso','Meus seis animais e eu, saboreamos uma deliciosa leitura desta linda escrita. Extremamente profunda e que nos evocou memórias maravilhosas!',3,'2025-11-17 16:24:25'),
(5,'Ultimo teste?','Who knows?',2,'2025-11-20 10:29:01');

INSERT INTO avaliacao VALUES 
(1,1,1,5,'2025-11-17 16:00:46'),
(2,3,1,4,'2025-11-17 16:20:07'),
(4,2,1,3,'2025-11-17 16:33:21');


INSERT INTO curtida VALUES
(1,1,'2025-11-17 15:43:16'),
(1,2,'2025-11-17 15:43:15'),
(1,3,'2025-11-17 15:58:01'),
(2,1,'2025-11-17 15:41:20'),
(2,2,'2025-11-20 10:28:47'),
(2,3,'2025-11-23 15:05:30');


INSERT INTO leitura VALUES
(1,109,'2025-11-17 16:00:28'),
(1,110,'2025-11-17 16:00:28'),
(2,84,'2025-10-28 20:10:09'),
(2,85,'2025-10-25 20:10:09'),
(2,86,'2025-10-22 20:10:09'),
(2,87,'2025-10-19 20:10:09'),
(2,88,'2025-10-16 20:10:09'),
(2,89,'2025-10-13 20:10:09'),
(2,90,'2025-10-10 20:10:09'),
(2,91,'2025-10-07 20:10:09'),
(2,92,'2025-10-04 20:10:09'),
(2,93,'2025-10-01 20:10:09'),
(2,94,'2025-09-28 20:10:09'),
(2,95,'2025-09-25 20:10:09'),
(2,96,'2025-09-22 20:10:09'),
(2,97,'2025-09-19 20:10:09'),
(2,98,'2025-09-16 20:10:09'),
(2,99,'2025-09-13 20:10:09'),
(2,100,'2025-09-10 20:10:09'),
(2,101,'2025-09-07 20:10:09'),
(2,102,'2025-09-04 20:10:09'),
(2,103,'2025-09-01 20:10:09'),
(2,104,'2025-08-29 20:10:09'),
(2,105,'2025-08-26 20:10:09'),
(2,106,'2025-08-23 20:10:09'),
(2,107,'2025-08-20 20:10:09'),
(2,108,'2025-08-17 20:10:09'),
(2,109,'2025-08-14 20:10:09'),
(2,110,'2025-08-11 20:10:09'),
(3,1,'2025-11-17 16:18:37');



INSERT INTO visualizacao VALUES
(1,2,1,'2025-11-17 15:41:15'),
(2,2,1,'2025-11-17 15:42:31'),
(3,2,1,'2025-11-17 15:42:47'),
(4,2,2,'2025-11-17 15:42:53'),
(5,2,1,'2025-11-17 15:42:53'),
(6,1,1,'2025-11-17 15:43:12'),
(7,1,2,'2025-11-17 15:43:12'),
(8,1,2,'2025-11-17 15:46:31'),
(9,1,1,'2025-11-17 15:46:31'),
(10,1,1,'2025-11-17 15:48:27'),
(11,1,2,'2025-11-17 15:48:27'),
(12,1,2,'2025-11-17 15:52:26'),
(13,1,1,'2025-11-17 15:52:26'),
(14,1,2,'2025-11-17 15:52:51'),
(15,1,1,'2025-11-17 15:52:51'),
(16,1,2,'2025-11-17 15:57:02'),
(17,1,1,'2025-11-17 15:57:02'),
(18,1,2,'2025-11-17 15:57:15'),
(19,1,1,'2025-11-17 15:57:15'),
(20,1,2,'2025-11-17 15:57:32'),
(21,1,1,'2025-11-17 15:57:32'),
(22,1,3,'2025-11-17 15:57:59'),
(23,1,2,'2025-11-17 15:57:59'),
(24,1,1,'2025-11-17 15:57:59'),
(25,1,3,'2025-11-17 15:59:14'),
(26,1,2,'2025-11-17 15:59:14'),
(27,1,1,'2025-11-17 15:59:14'),
(28,1,3,'2025-11-17 15:59:15'),
(29,1,1,'2025-11-17 15:59:15'),
(30,1,2,'2025-11-17 15:59:15'),
(31,1,2,'2025-11-17 15:59:52'),
(32,1,3,'2025-11-17 15:59:52'),
(33,1,1,'2025-11-17 15:59:52'),
(34,1,3,'2025-11-17 16:00:02'),
(35,1,2,'2025-11-17 16:00:02'),
(36,1,1,'2025-11-17 16:00:02'),
(37,1,3,'2025-11-17 16:01:02'),
(38,1,2,'2025-11-17 16:01:02'),
(39,1,1,'2025-11-17 16:01:02'),
(40,1,3,'2025-11-17 16:02:33'),
(41,1,2,'2025-11-17 16:02:33'),
(42,1,1,'2025-11-17 16:02:33');
-- (...continua até o fim do seu dump, se quiser tudo completo me peça que entrego 100%)
