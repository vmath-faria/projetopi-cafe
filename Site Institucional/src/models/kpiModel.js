const database = require("../database/config");

// KPI - Talhões sem leituras recentes (últimas 24h)
function talhoesSemLeitura() {
    const query = `
        SELECT COUNT(DISTINCT t.id_talhao) AS talhoes_sem_leitura
        FROM talhao t
        JOIN sensor s ON s.fk_talhao = t.id_talhao
        LEFT JOIN leitura l ON l.fk_sensor = s.id_sensor 
            AND l.data_hora_leitura >= NOW() - INTERVAL 24 HOUR
        WHERE l.id_leitura IS NULL;
    `;
    return database.executar(query);
}

function sensoresStatusPorTalhao(idTalhao) {
    const query = `
        SELECT
            COUNT(CASE WHEN status_sensor = 'Ativo' THEN 1 END) AS sensores_ativos,
            COUNT(CASE WHEN status_sensor <> 'Ativo' OR status_sensor IS NULL THEN 1 END) AS sensores_inativos
        FROM sensor
        WHERE fk_talhao = ${idTalhao};
    `;
    return database.executar(query);
}

function sensoresStatusGeral(idPropriedade) {
    const query = `
        SELECT
            COUNT(CASE WHEN s.status_sensor = 'Ativo' THEN 1 END) AS sensores_ativos,
            COUNT(CASE WHEN s.status_sensor <> 'Ativo' OR s.status_sensor IS NULL THEN 1 END) AS sensores_inativos
        FROM sensor s
        JOIN talhao t ON s.fk_talhao = t.id_talhao
        WHERE t.fk_propriedade = ${idPropriedade};
    `;
    return database.executar(query);
}

function talhoesEmRisco(idPropriedade) {
    const query = `
       SELECT
    t.id_talhao,
    (
        SELECT ROUND(AVG(ultimas.valor_umidade), 2)
        FROM (
            SELECT l.valor_umidade
            FROM leitura l
            JOIN sensor s ON l.fk_sensor = s.id_sensor
            WHERE s.fk_talhao = t.id_talhao
            ORDER BY l.id_leitura DESC
            LIMIT 10
        ) AS ultimas
    ) AS umidade_media
FROM talhao t
WHERE t.fk_propriedade = ${idPropriedade}
HAVING umidade_media < 60 OR umidade_media > 80;`;

    return database.executar(query);
}

module.exports = {
    talhoesSemLeitura,
    sensoresStatusPorTalhao,
    sensoresStatusGeral,
    talhoesEmRisco
};