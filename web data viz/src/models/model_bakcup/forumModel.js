var database = require("../database/config");

function contarPostagens(idUsuario) {
    var instrucao = `
        SELECT COUNT(*) AS total
        FROM forum
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}


function contarCurtidasRecebidas(idUsuario) {
    var instrucao = `
        SELECT COUNT(*) AS total
        FROM curtida 
        JOIN forum ON curtida.fkForum = forum.idForum
        WHERE forum.fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function contarVisualizacoesRecebidas(idUsuario) {
    var instrucao = `
        SELECT COUNT(*) AS total
        FROM visualizacao 
        JOIN forum ON visualizacao.fkForum = forum.idForum
        WHERE forum.fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function criarPostagem(titulo, descricao, idUsuario) {
    var instrucao = `
        INSERT INTO forum (titulo, descricao, fkUsuario)
        VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    return database.executar(instrucao);
}


function registrarCurtida(idUsuario, idForum) {
    var instrucao = `
        INSERT INTO curtida (fkUsuario, fkForum)
        VALUES (${idUsuario}, ${idForum});
    `;
    return database.executar(instrucao);
}


function registrarVisualizacao(idUsuario, idForum) {
    var instrucao = `
        INSERT INTO visualizacao (idVisualizacao, fkUsuario, fkForum)
        VALUES (FLOOR(RAND() * 999999), ${idUsuario}, ${idForum});
    `;
    return database.executar(instrucao);
}

function listar() {
    var instrucao = `
            SELECT f.idForum, 
                f.titulo, 
                f.descricao, 
                f.dtPostagem, 
                u.nome AS autor
                    FROM forum f
                        JOIN usuario u 
                            ON f.fkUsuario = u.idUsuario
                    ORDER BY f.dtPostagem DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    contarPostagens,
    contarCurtidasRecebidas,
    contarVisualizacoesRecebidas,
    criarPostagem,
    registrarCurtida,
    registrarVisualizacao,
    listar
};
