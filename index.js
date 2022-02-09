
const express = require('express');
const path = require('path');
require('dotenv').config();

// * aqui ya puedo empezar a pedir peticiones
// ? app de experess
const app = express();

// ? NODE SERVER
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket.js');

// ? path publico
const publicPath = path.resolve( __dirname, 'public');

// * cuando se haga una peticion qeu muestre esto
app.use( express.static( publicPath ));

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