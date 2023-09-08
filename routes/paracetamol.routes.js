const Router = require('router');
const obtenerTotalVentasParacetamol = require('../controllers/ventas.controllers.js');

const router = Router();

// Ruta para obtener el total de ventas de Paracetamol
router.get("/total-ventas-paracetamol", obtenerTotalVentasParacetamol);

module.exports = router;
