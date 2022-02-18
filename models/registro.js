

const { Schema, model } = require('mongoose');


const RegistroSchema = Schema({

    hora: {
        type: String,
        required: true,
    },
    cantidadComida: {
        type: String,
        required: true,
    },
    dispenso: {
        type: Number,
        required: true
    }

})

RegistroSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('Registro', RegistroSchema);



