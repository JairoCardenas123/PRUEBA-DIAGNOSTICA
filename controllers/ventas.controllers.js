
 const Ventas = require('../models/Ventas.js')
const obtainVentas = async (req,res)=>{
    try {
        const ventas= await Ventas.find();
        res.json(ventas)

    } catch (error) {
        console.log("error");
    }
}

module.exports = obtainVentas 

