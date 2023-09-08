const Ventas = require('../models/Ventas.js');

const obtenerTotalVentasParacetamol = async (req, res) => {
  try {
    // Utiliza la función `aggregate` de Mongoose para realizar una agregación.
    const resultadoAgregacion = await Ventas.aggregate([
      // Descompone la matriz de medicamentosVendidos y crea un documento por cada medicamento.
      { $unwind: "$medicamentosVendidos" },
      // Filtra solo las ventas que incluyen 'Paracetamol'.
      { $match: { "medicamentosVendidos.nombreMedicamento": "Paracetamol" } },
      // Agrupa por 'nombreMedicamento' y suma las cantidades vendidas.
      {
        $group: {
          _id: "$medicamentosVendidos.nombreMedicamento",
          totalVentas: { $sum: "$medicamentosVendidos.cantidadVendida" },
        },
      },
    ]);

    // Devuelve el resultado en formato JSON.
    res.json(resultadoAgregacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar el total de ventas de Paracetamol.' });
  }
};

module.exports = obtenerTotalVentasParacetamol;
