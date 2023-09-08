const Compras = require('../models/Compras.js');

const obtenerCompras = async (req, res) => {
  try {
    // Utiliza la función `find` de Mongoose para buscar las compras con el proveedor 'Proveedor A'.
    const medicamentosProveedorA = await Compras.find({ proveedor: 'Proveedor A' });

    // Devuelve los medicamentos comprados al 'Proveedor A' en formato JSON.
    res.json(medicamentosProveedorA);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Menos socio tampoco' });
  }
};  

module.exports = obtenerCompras;

