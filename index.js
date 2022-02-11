
const express = require('express');
const path = require('path');
require('dotenv').config();

// * DB config
const { dbConnection } = require('./database/config');
dbConnection();

// * aqui ya puedo empezar a pedir peticiones
// ? app de experess
const app = express();

// * lectura de la informacion que viene en el body de una peticion http
// * lectura y parseo del body
app.use( express.json())

// ? NODE SERVER
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket.js');

// ? path publico
const publicPath = path.resolve( __dirname, 'public');

// * cuando se haga una peticion qeu muestre esto
app.use( express.static( publicPath ));

// * definicion de rutas
// * un midelware es una funcion que se ejecuta cuando el codigo pasa por donde se esta
// * llamando
// ! rutas 
app.use( '/api/creacion', require('./routes/auth'))


// ? en teoria ya se puede escuchar peticiones en el puerto process.env.PORT
server.listen( process.env.PORT, (err)=> {
    // * si ocurre un error, lo vemos por consola
    if(err) throw new Error(err);

    // * si no ocurre un error:
    console.log('Servidor corriendo en el puerto:', process.env.PORT);
});

/* 
    configurarcion del back-end server para que trabaje usando sockets
    y la libreria que usaremos sera socket.io 
*/