const Router = require('router')

const obtainCompras = require('../controllers/compras.controllers.js')

const router = Router();

router.get("/all",obtainCompras);



module.exports = router