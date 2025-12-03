var kpiModel = require("../models/kpiModel");

async function talhoesSemLeitura(req, res) {

    var idPropriedade = req.params.id_propriedade;
    try {
        var resultado = await kpiModel.talhoesSemLeitura(idPropriedade);
        res.status(200).json(resultado[0]);
    } catch (erro) {
        console.log("Erro ao buscar talhões sem leitura:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI." });
    }
}

async function sensoresStatusPorTalhao(req, res) {
    var idTalhao = req.params.id_talhao;

    if (!idTalhao) {
        return res.status(400).json({ erro: "id_talhao não informado" });
    }

    try {
        var resultado = await kpiModel.sensoresStatusPorTalhao(idTalhao);
        res.status(200).json(resultado[0]);
    } catch (erro) {
        console.log("Erro ao buscar KPI sensores por talhão:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI" });
    }
}

async function sensoresStatusGeral(req, res) {
    var idPropriedade = req.params.id_propriedade;

    try {
        var resultado = await kpiModel.sensoresStatusGeral(idPropriedade);
        res.status(200).json(resultado[0]);
    } catch (erro) {
        console.log("Erro ao buscar KPI geral:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI geral" });
    }
}

async function talhoesEmRisco(req, res) {
    var idPropriedade = req.params.id_propriedade;

    try {
        var resultado = await kpiModel.talhoesEmRisco(idPropriedade);
        res.status(200).json(resultado);
    } catch (erro) {
        console.log("Erro ao buscar talhões em risco:", erro);
        res.status(500).json({ erro: "Erro ao buscar KPI talhões em risco" });
    }
}
module.exports = {
    talhoesSemLeitura,
    sensoresStatusPorTalhao,
    sensoresStatusGeral,
    talhoesEmRisco
};