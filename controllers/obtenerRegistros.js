const { response, request } = require("express");


const Registro = require('../models/registro');


const getRegistros = async (req, resp = response) => {

    try {
        const registros = await Registro.find().sort('hora');

        resp.json({
            ok: true,
            registros
        })
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getRegistros,
}