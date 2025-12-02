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

module.exports = {
    talhoesSemLeitura,
    sensoresStatusPorTalhao
};