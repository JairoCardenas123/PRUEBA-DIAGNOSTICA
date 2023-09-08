
const express = require("express");
const cors = require("cors");

const routerCompras = require('../routes/compras.routes.js')
const routerEmpleados = require('../routes/empleados.routes.js')
const routerMedicamentos = require('../routes/medicamentos.routes.js')
const routerPacientes = require('../routes/pacientes.routes.js')
const routerProveedores = require('../routes/proveedores.routes.js')
const routerVentas = require('../routes/ventas.routes.js')
const routerStock = require('../routes/50Stock.routes.js')
const routerExpiracionAntes = require('../routes/ExpiracionAntes.routes.js')
const routerEmitidasDespues = require('../routes/EmitidasDespues.routes.js')
const routerParacetamol = require('../routes/paracetamol.routes.js')





class Server{


    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.comprasGet = '/api/Compras'
        this.empleadosGet = '/api/Empleados'
        this.medicamentosGet = '/api/Medicamentos'
        this.pacientesGet = '/api/Pacientes'
        this.proveedoresGet = '/api/Proveedores'
        this.ventasGet = '/api/Ventas'
        this.stockGet = '/api/Medicamentos'
        this.expiracionAntes = '/api/Medicamentos'
        this.emitidasDespues = '/api/Ventas'
        this.paracetamol = '/api/Ventas'


        // ! Middleware
        this.middlewares();


        //! Routes
        this.routes();

 
    }

    middlewares(){

        //! Cors
        this.app.use(cors());

        // ? PUBLIC DIRECTORY
        this.app.use(express.static('public'));

        //! EXPRESS JSON
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.comprasGet, routerCompras)
        this.app.use(this.empleadosGet, routerEmpleados)
        this.app.use(this.medicamentosGet, routerMedicamentos)
        this.app.use(this.pacientesGet, routerPacientes)
        this.app.use(this.proveedoresGet, routerProveedores)
        this.app.use(this.ventasGet, routerVentas)
        this.app.use(this.stockGet, routerStock)
        this.app.use(this.expiracionAntes, routerExpiracionAntes)
        this.app.use(this.emitidasDespues, routerEmitidasDespues)
        this.app.use(this.paracetamol, routerParacetamol)
    }





    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}

module.exports = Server