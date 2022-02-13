// TODO: toda la cadena de conexion de la base de datos

const mongoose = require('mongoose');

// * funcion encargada de hacer la conexion
const dbConnection = async () => {

    try {
        // * conexion a la base de datos, se le pasa la url para la conexion
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useCreateIndex: true            
        });
        // * conectar el servidor de node con mongo atlas


        console.log('DB online');

    } catch (error) {
        console.log(error);

        throw new Error('Error en la base de datos, hable con el admin');
    }
}

module.exports = {
    dbConnection
}