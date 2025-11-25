var database = require("../database/config");


function listar(idUsuario) {
    const instrucao = `
            SELECT fkCapitulo AS capitulo,
                dtLeitura
            FROM leitura
                WHERE fkUsuario = ${idUsuario}
                ORDER BY dtLeitura;
    `;
    return database.executar(instrucao);
}

function salvar(idUsuario, capitulos) {
    if (capitulos.length === 0) return Promise.resolve();

    const values = capitulos.map(c => `(${idUsuario}, ${c})`).join(",");

    const inserir = `
        INSERT IGNORE INTO leitura (fkUsuario, fkCapitulo)
        VALUES ${values};
    `;

    return database.executar(inserir);
}

function kpiMensal(idUsuario) {
    const instrucao = `
        SELECT 
            MONTH(dtLeitura) AS mes,
            COUNT(*) AS quantidade
        FROM leitura
        WHERE fkUsuario = ${idUsuario}
        GROUP BY MONTH(dtLeitura)
        ORDER BY mes;
    `;
    return database.executar(instrucao);
}


module.exports = {
    listar,
    salvar,
    kpiMensal
};
