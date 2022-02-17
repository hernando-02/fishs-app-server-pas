const { response, request } = require("express");

const Horario = require('../models/horario');


const getHoraios = async (req, res = response) => {
    const horarios = await Horario.find().sort('hora');

    res.json({
        ok: true,
        horarios
    });


};

const getOnlyOneHoraio = async (req = request, res = response) => {

    const id = req.params._id;
    // console.log(id);

    const horario = await Horario.findById(id);
    // console.log(horario);

    res.json({
        ok: false,
        horario
    });


};

module.exports = {
    getHoraios,
    getOnlyOneHoraio
}