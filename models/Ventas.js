const {Schema, model} = require('mongoose')
const ventasSchema = Schema(
    {
        fechaVenta:{
            type: Date,
            required: true,
            trim:true,
        },
        paciente:{
            type: Array,
            required: true,
            trim:true,
        },
        empleado:{
            type: Array,
            required: true,
            trim:true,
        },
        medicamentosVendidos:{
            type:Array,
            required: true,
            trim:true,
        },
    },
    {
        timestamps:true
    }
)

const Ventas = model("Ventas", ventasSchema, "Ventas");

module.exports = Ventas
