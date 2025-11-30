var database = require("../database/config");

// Lista propriedades + nível de alerta baseado na média das últimas leituras
function listarPorEmpresa(idEmpresa) {
    var instrucao = `
        SELECT 
            p.id_propriedade,
            p.nome_propriedade,

            -- MÉDIA das últimas 5 leituras de todos os sensores dos talhões da propriedade
            ROUND(AVG(l.valor_umidade), 2) AS media_umidade,

            CASE
                WHEN AVG(l.valor_umidade) < 60 THEN 'amarelo'
                WHEN AVG(l.valor_umidade) BETWEEN 60 AND 75 THEN 'verde'
                WHEN AVG(l.valor_umidade) BETWEEN 75 AND 80 THEN 'laranja'
                WHEN AVG(l.valor_umidade) > 80 THEN 'vermelho'
                ELSE 'verde'
            END AS nivel_alerta

        FROM propriedade p
        LEFT JOIN talhao t ON t.fk_propriedade = p.id_propriedade
        LEFT JOIN sensor s ON s.fk_talhao = t.id_talhao
        LEFT JOIN leitura l ON l.fk_sensor = s.id_sensor
        WHERE p.fk_empresa = ${idEmpresa}
        GROUP BY p.id_propriedade;
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
