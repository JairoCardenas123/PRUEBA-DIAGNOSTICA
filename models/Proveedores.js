const {Schema, model} = require('mongoose')
const proveedoresSchema = Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim:true,
        },
        contacto:{
            type: String,
            required: true,
            trim:true,
        },
        direccion:{
            type: String,
            required: true,
            trim:true,
        },
    },
    {
        timestamps:true
    }
)

const Proveedores = model("Proveedores", proveedoresSchema, "Proveedores");

module.exports = Proveedores
