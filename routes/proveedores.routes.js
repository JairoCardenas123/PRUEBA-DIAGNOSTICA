const Router = require('router');
const obtenerProveedores = require('../controllers/proveedores.controllers.js');

const router = Router();

// Ruta para obtener medicamentos del 'Proveedor A'
router.get("/all", obtenerProveedores);

module.exports = router;