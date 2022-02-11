const { response } = require('express');

const Horario = require('../models/horario')

const crearHorario = async (req, res = response ) => {


    const { hora } = req.body;

    // ahora confirmar si la hora existe en la base de datos
    try {
        const existeHora = await Horario.findOne({hora: hora})
        
        if(existeHora){
            return res.status(400).json({
                ok: false,
                msg: 'esta hora ya se encuentra en el horario'
            });
        }


        const horario = new Horario( req.body);    
        await horario.save();

        res.json({
            ok: true,
            // body: req.body
            horario
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
    crearHorario
}