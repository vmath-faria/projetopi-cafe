const kpiModel = require("../models/kpiModel");

// KPI 1 - Propriedades em risco
async function propriedadesEmRisco(req, res) {
    try {
        const resultado = await kpiModel.propriedadesEmRisco();
        res.status(200).json(resultado[0]);
    } catch (erro) {
        console.log("Erro ao buscar propriedades em risco:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI." });
    }
}

// KPI 2 - Talhões sem leitura recente
async function talhoesSemLeitura(req, res) {
    try {
        const resultado = await kpiModel.talhoesSemLeitura();
        res.status(200).json(resultado[0]);
    } catch (erro) {
        console.log("Erro ao buscar talhões sem leitura:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI." });
    }
}

module.exports = {
    propriedadesEmRisco,
    talhoesSemLeitura
};
