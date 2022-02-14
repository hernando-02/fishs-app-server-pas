const { response, request } = require("express");

const Distancia = require('../models/distancia');


const getDistancia = async (req = request, res = response) => {

    const id = req.params._id;
    // const distancia = await Distancia.find().sort('hora');
    const distancia = await Distancia.findById(id);


    res.json({
        ok: true,
        distancia
    });


};

module.exports = {
    getDistancia
}