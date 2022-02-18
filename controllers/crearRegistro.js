const { response } = require('express');

const Registro = require('../models/registro');

const crearRegistro = async (req, res = response) => {

    try {

        const registro = new Registro(req.body);
        await registro.save();

        res.json({
            ok: true,
            registro
            // body: req.body
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        });
    }

};

module.exports = {
    crearRegistro,
}