

const { response, request } = require('express');

const Distancia = require('../models/distancia')

const crarDistancia = async (req = request, res = response) => {

    const distancia = new Distancia(req.body);

    await distancia.save();

    res.json({
        ok: true,
        // body: req.body
        distancia
    })

};

module.exports = {
    crarDistancia
}