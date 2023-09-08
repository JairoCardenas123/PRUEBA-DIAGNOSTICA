const Proveedores = require('../models/Proveedores.js');

const obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedores.find({ proveedor: 'Proveedor A' });
    res.json(proveedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar los proveedores.' });
  }
};

module.exports = obtenerProveedores;










