const database = require("../database/config");

// KPI 1 - Quantidade de propriedades em risco
function propriedadesEmRisco() {
    const query = `
        SELECT COUNT(*) AS total_risco
        FROM vw_propriedade
        WHERE nivel_alerta IN ('amarelo', 'laranja', 'vermelho');
    `;
    return database.executar(query);
}

// KPI 2 - Talhões sem leituras recentes (últimas 24h)
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

module.exports = {
    propriedadesEmRisco,
    talhoesSemLeitura
};
