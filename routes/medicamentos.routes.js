const Router = require('router');
const obtenerPersonasCompraronProveedorA = require('../controllers/medicamentos.controllers.js');

const router = Router();

// Ruta para obtener las personas que compraron al 'Proveedor A'
router.get("/all", obtenerPersonasCompraronProveedorA);

module.exports = router;
