const kpiModel = require("../models/kpiModel");

async function talhoesSemLeitura(req, res) {
    try {
        const resultado = await kpiModel.talhoesSemLeitura();
        res.status(200).json(resultado[0]);
    } catch (erro) {
        console.log("Erro ao buscar talhões sem leitura:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI." });
    }
}

async function sensoresStatusPorTalhao(req, res) {
    const idTalhao = req.params.id_talhao;

    if (!idTalhao) {
        return res.status(400).json({ erro: "id_talhao não informado" });
    }

    try {
        const resultado = await kpiModel.sensoresStatusPorTalhao(idTalhao);
        res.status(200).json(resultado[0]);
    } catch (erro) {
        console.log("Erro ao buscar KPI sensores por talhão:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI" });
    }
}

module.exports = {
    talhoesSemLeitura,
    sensoresStatusPorTalhao
};