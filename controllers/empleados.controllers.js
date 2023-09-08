const Empleados = require('../models/Empleados.js')
const obtainEmpleados = async (req,res)=>{
    try {
        const empleados= await Empleados.find({stock:{$lt:50}});

        if(empleados.length === 0){
            return res.status(404).json({message:"No se encontraron empleados"})
        }
        res.json(empleados)

    } catch (error) {
        console.log("error");
    }
}

module.exports = obtainEmpleados
