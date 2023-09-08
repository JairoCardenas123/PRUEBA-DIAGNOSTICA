const Router = require('router')

const obtainPacientes = require('../controllers/pacientes.controllers.js')

const router = Router();

router.get("/all",obtainPacientes);



module.exports = router