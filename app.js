const conectarDB = require("./config/config.js");
const Server = require('./models/Server.js')
const dotenv = require('dotenv')


dotenv.config()
const server = new Server()

conectarDB()

server.listen()