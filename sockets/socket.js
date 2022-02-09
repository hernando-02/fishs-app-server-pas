const {io} = require('../index');

// * mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');

    client.on('disconnect', ()=> {
        console.log('Perdimos comunicacion con el servidor');
    });
    client.on('mensaje', ( payload )=> {
        console.log('mensaje!!!', payload);

        // ? para que el servidor emita a todos los clientes
        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    });

});
 