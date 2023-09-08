const Router = require('router')

const obtainVentas = require('../controllers/ventas.controllers.js')

const router = Router();

router.get("/emitidasD",obtainVentas);



module.exports = router