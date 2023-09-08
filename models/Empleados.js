const {Schema, model} = require('mongoose')
const empleadosSchema = Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim:true,
        },
        cargo:{
            type: String,
            required: true,
            trim:true,
        },
        fechaContratacion:{
            type: String,
            required: true,
            trim:true,
        },
    },
    {
        timestamps:true
    }
)

const Empleados = model("Empleados", empleadosSchema, "Empleados");

module.exports = Empleados
