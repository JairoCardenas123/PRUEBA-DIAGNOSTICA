const Medicamentos = require('../models/Medicamentos.js');

const mostrarMedicamentosCaducanAntesEnero2024 = async (req, res) => {
  try {
    const fechaLimite = new Date('2024-01-01'); //

    const medicamentosCaducanAntesEnero2024 = await Medicamentos.find({    // Utiliza la función `find` de Mongoose para buscar los medicamentos

      fechaExpiracion: { $lt: fechaLimite },    // que tienen fecha de expiración anterior a la fecha límite.

    });

    // Devuelve los medicamentos encontrados en formato JSON.
    res.json(medicamentosCaducanAntesEnero2024);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Consulte en otra parte' });
  }
};

module.exports = mostrarMedicamentosCaducanAntesEnero2024;