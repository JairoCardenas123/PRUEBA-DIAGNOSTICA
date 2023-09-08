const Router = require('router');
const obtenerMedicamentosMenosDe50Unidades = require('../controllers/50Stock.js');

const router = Router();

// Ruta para obtener los medicamentos con menos de 50 unidades en stock
router.get("/stock", obtenerMedicamentosMenosDe50Unidades);

module.exports = router;
