const Router = require('router');
const obtenerPersonasCompraronProveedorA = require('../controllers/ExpiracionAntes.js');

const router = Router();

// Ruta para obtener las personas que compraron al 'Proveedor A'
router.get("/expiraA", obtenerPersonasCompraronProveedorA);

module.exports = router;
