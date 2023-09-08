const Router = require('router')

const obtainVentas = require('../controllers/ventas.controllers.js')

const router = Router();

router.get("/all",obtainVentas);



module.exports = router