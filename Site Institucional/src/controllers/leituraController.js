const sensorModel = require('../models/sensorModel');

var inserirLeitura = async (req, res) => {
  try {
    var { valor_umidade, fk_sensor } = req.body;

    if (valor_umidade == null || !fk_sensor) {
      return res.status(400).json({ erro: 'Dados incompletos' });
    }

    var id = await sensorModel.criarLeitura({ valor_umidade, fk_sensor });

    return res.status(201).json({ id_leitura: id });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao inserir leitura' });
  }
};

module.exports = { inserirLeitura };
