/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/horarios
*/

const { Router} = require('express');

const { getHoraios } = require('../controllers/horarios')
// const { check } = require('express-validator');
// const { crearHorario } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');

// ! se valida el jwt pero yo no tengo implemetado tal toca, podria hacerlo con el uid

const router = Router();

// * configuracion de la primera ruta
router.get('/', getHoraios);


module.exports = router;