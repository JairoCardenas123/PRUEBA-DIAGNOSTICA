const Pacientes = require('../models/Pacientes.js')
const obtainPacientes = async (req,res)=>{
    try {
        const pacientes= await Pacientes.find();
        res.json(pacientes)

    } catch (error) {
        console.log("error");
    }
}

module.exports = obtainPacientes
