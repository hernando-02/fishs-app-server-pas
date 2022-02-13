const { response } = require("express");

const Horario = require("../models/horario");

const borrarHoraios = async (req, res = response) => {

    const id = req.params.id;

    // Horario.findById(hora).remove();

    res.json({
        ok: true,
        id
    });

    // TODO: hay que poner la direccion ip de heroku en mongo atlas para poder trabajar bien
};

module.exports = {
    borrarHoraios
};
