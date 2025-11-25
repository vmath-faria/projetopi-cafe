var database = require("../database/config");

function curtir(fkUsuario, fkForum) {
    var instrucao = `
        INSERT INTO curtida (fkUsuario, fkForum)
        VALUES (${fkUsuario}, ${fkForum});
    `;
    return database.executar(instrucao);
}

function removerCurtida(fkUsuario, fkForum) {
    var instrucao = `
        DELETE FROM curtida
        WHERE fkUsuario = ${fkUsuario} AND fkForum = ${fkForum};
    `;
    return database.executar(instrucao);
}

function contarCurtidas(fkForum) {
    var instrucao = `
        SELECT COUNT(*) AS totalCurtidas
        FROM curtida
        WHERE fkForum = ${fkForum};
    `;
    return database.executar(instrucao);
}

function verificarCurtida(fkUsuario, fkForum) {
    var instrucao = `
        SELECT *
        FROM curtida
        WHERE fkUsuario = ${fkUsuario} AND fkForum = ${fkForum};
    `;
    return database.executar(instrucao);
}

module.exports = {
    curtir,
    removerCurtida,
    contarCurtidas,
    verificarCurtida
};
