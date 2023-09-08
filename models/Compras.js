const {Schema, model} = require('mongoose')
const comprasSchema = Schema(
    {
        fechaCompra:{
            type: String,
            required: true,
            trim:true,
        },
        proveedor:{
            type: String,
            required: true,
            trim:true,
        },
        medicamentosComprados:{
            type: String,
            required: true,
            trim:true,
        },
    },
    {
        timestamps:true
    }
)

const Compras = model("Compras", comprasSchema, "Compras");

module.exports = Compras
