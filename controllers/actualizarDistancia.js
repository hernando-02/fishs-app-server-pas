const { response, request } = require("express");

const Distancia = require("../models/distancia");

const actualizarDistancia = async (req = request, res = response) => {

    const { _id } = req.params;
    const { distRecipiente, ...resto } = req.body;

    const dis = await Distancia.findByIdAndUpdate(_id, resto);




    res.json({
        ok: true,
        _id,
        // distSensor,
        dis
    });

    // TODO: hay que poner la direccion ip de heroku en mongo atlas para poder trabajar bien
};

module.exports = {
    actualizarDistancia
};
