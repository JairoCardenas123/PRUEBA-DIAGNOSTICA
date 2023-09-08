const {Schema, model} = require('mongoose')
const pacientesSchema = Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim:true,
        },
        direccion:{
            type: String,
            required: true,
            trim:true,
        },
        telefono:{
            type: String,
            required: true,
            trim:true,
        },
    },
    {
        timestamps:true
    }
)

const Pacientes = model("Pacientes", pacientesSchema, "Pacientes");

module.exports = Pacientes
