

const { Schema, model} = require('mongoose');


const HorarioSchema = Schema({ 
    hora:{
        type: String,
        required: true,
        unique: true
    },
    cantidadComida:{
        type: Number,
        required: true,
    },

})

HorarioSchema.method('toJSON', function(){
    const { __v, _id, ...object} = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('Horario',HorarioSchema);



