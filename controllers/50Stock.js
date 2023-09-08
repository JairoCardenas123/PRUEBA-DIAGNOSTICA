const Medicamentos = require('../models/Medicamentos.js'); //llamamos al modelo

const obtenerMedicamentosMenosDe50Unidades = async (req, res) => { // creamos un arrow function async await
  try {
    const medicamentosMenosDe50Unidades = await Medicamentos.find({    // Utiliza la función `find` de Mongoose para buscar los medicamentos

      stock: { $lt: 50 },    // que tienen menos de 50 unidades en stock.

    });

    res.json(medicamentosMenosDe50Unidades);    // Devuelve los medicamentos encontrados en formato JSON.

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar los medicamentos con menos de 50 unidades en stock.' }); //muestra el error
  }
};

module.exports = obtenerMedicamentosMenosDe50Unidades;
