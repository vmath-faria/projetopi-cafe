var database = require("../database/config");

// Lista propriedades + nível de alerta baseado na média das últimas leituras
function listarPorEmpresa(idEmpresa) {
    var instrucao = `
        SELECT * FROM vw_propriedade WHERE fk_empresa = ${idEmpresa};
    `;

    return database.executar(instrucao);
}

function buscarPorId(idPropriedade) {
    var instrucao = `
        SELECT 
            id_propriedade,
            nome_propriedade,
            logradouro,
            cidade,
            estado,
            cep,
            numero
        FROM propriedade
        WHERE id_propriedade = ${idPropriedade};
    `;

    return database.executar(instrucao);
}

module.exports = {
    listarPorEmpresa,
    buscarPorId
};
