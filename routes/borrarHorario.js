/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/borrarHorario
*/

const { Router } = require('express');

const { borrarHoraios } = require('../controllers/borrarHorario')
// const { check } = require('express-validator');
// const { crearHorario } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');

// ! se valida el jwt pero yo no tengo implemetado tal toca, podria hacerlo con el uid

const router = Router();

// * configuracion de la primera ruta
router.delete('/:id', borrarHoraios);


module.exports = router;