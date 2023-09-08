const Medicamentos = require('../models/Medicamentos.js');

const mostrarMedicamentosCaducanAntesEnero2024 = async (req, res) => {
  try {
    const fechaLimite = new Date('2024-01-01');    // Definimos la fecha de la cual queremos que filtre antes


    const medicamentosCaducanAntesEnero2024 = await Medicamentos.find({    // Utiliza la función `find` de Mongoose para buscar los medicamentos

      fechaExpiracion: { $lt: fechaLimite },    // que tienen fecha de expiración anterior a la fecha límite.

    });

    res.json(medicamentosCaducanAntesEnero2024);    // Devuelve los medicamentos encontrados en formato JSON.

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar los medicamentos que caducan antes de enero de 2024.' });
  }
};

module.exports = mostrarMedicamentosCaducanAntesEnero2024;