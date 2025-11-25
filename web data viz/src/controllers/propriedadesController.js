const propriedadesModel = require('../models/propriedadesModel');

const listar = async (req, res) => {
  try {
    const fk_empresa = req.query.fk_empresa; // receber do front
    const rows = await propriedadesModel.listarPropriedadesComMedia(fk_empresa);

    const withAlert = rows.map(r => {
      let nivel = 'verde';

      if (r.media_umidade <= 25) nivel = 'vermelho';
      else if (r.media_umidade <= 40) nivel = 'amarelo';

      return { ...r, nivel_alerta: nivel };
    });

    return res.json(withAlert);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao listar propriedades' });
  }
};



const dashboard = async (req, res) => {
  try {
    const id = req.params.id;
    const alertThreshold = req.query.threshold ? Number(req.query.threshold) : 30;

    const data = await propriedadesModel.dashboardpropriedades(id, alertThreshold);
    return res.json(data);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao buscar dashboard' });
  }
};

module.exports = {
  listar,
  dashboard
};
