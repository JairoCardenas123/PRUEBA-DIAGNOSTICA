const Router = require('router')

const obtainEmpleados = require('../controllers/empleados.controllers.js')

const router = Router();

router.get("/all",obtainEmpleados);



module.exports = router