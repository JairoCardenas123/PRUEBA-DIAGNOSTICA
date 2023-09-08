const {Schema, model} = require('mongoose')
const medicamentosSchema = Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim:true,
        },
        precio:{
            type: Number,
            required: true,
            trim:true,
        },
        stock:{
            type: Number,
            required: true,
            trim:true,
        },
        fechaExpiracion:{
            type: String,
            required: true,
            trim:true,
        },
        proveedor:{
            type: Array,
            required: true,
            trim:true,
        },
    },
    {
        timestamps:true
    }
)

const Medicamentos = model("Medicamentos", medicamentosSchema, "Medicamentos");

module.exports = Medicamentos
