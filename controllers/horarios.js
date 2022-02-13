const { response } = require("express");

const Horario = require('../models/horario');


const getHoraios = async ( req, res = response)=> {    
    const horarios = await Horario.find().sort('hora');

    res.json({
        ok: true,
        horarios
    });


};

module.exports = {
    getHoraios
}