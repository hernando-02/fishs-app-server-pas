
const { Schema, model } = require('mongoose');


const DistanciaShema = Schema({
    distRecipiente: {
        type: Number,
    },
    distSensor: {
        type: Number,
    }
})

DistanciaShema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Distancia', DistanciaShema);