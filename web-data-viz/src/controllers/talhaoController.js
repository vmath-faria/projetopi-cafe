const talhaoModel = require('../models/talhaoModel');

const leiturasRealtime = async (req, res) => {
  try {
    const id = req.params.id;
    const limit = req.query.limit ? parseInt(req.query.limit) : 100;

    const rows = await talhaoModel.leiturasRealtimeDoTalhao(id, limit);
    return res.json(rows);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao buscar leituras realtime' });
  }
};

const mediaHistorica = async (req, res) => {
  try {
    const id = req.params.id;
    const months = req.query.months ? parseInt(req.query.months) : 6;

    const rows = await talhaoModel.mediaHistoricaMensal(id, months);
    return res.json(rows);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao buscar média histórica' });
  }
};

module.exports = {
  leiturasRealtime,
  mediaHistorica
};
