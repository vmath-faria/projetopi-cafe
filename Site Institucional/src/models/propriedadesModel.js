var database = require("../database/config");

// Lista propriedades + nível de alerta baseado na média das últimas leituras
function listarPorEmpresa(idEmpresa) {
    var instrucao = `
        SELECT * FROM vw_propriedade1 WHERE fk_empresa = ${idEmpresa};
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

function buscarKpis(idEmpresa) {
    var instrucaoSql = `
       SELECT 
            p.id_propriedade,
            (
                SELECT l.valor_umidade 
                FROM leitura l
                JOIN sensor s ON l.fk_sensor = s.id_sensor
                JOIN talhao t ON s.fk_talhao = t.id_talhao
                WHERE t.fk_propriedade = p.id_propriedade
                ORDER BY l.data_hora_leitura DESC 
                LIMIT 1
            ) as umidade
        FROM propriedade p
        WHERE p.fk_empresa = ${idEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPorEmpresa,
    buscarKpis,
    buscarPorId
};
