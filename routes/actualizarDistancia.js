/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/actualizarDistancia
*/

const { Router } = require('express');

const { actualizarDistancia } = require('../controllers/actualizarDistancia')
// const { check } = require('express-validator');
// const { crearHorario } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');

// ! se valida el jwt pero yo no tengo implemetado tal toca, podria hacerlo con el uid

const router = Router();

// * configuracion de la primera ruta
router.put('/:_id', actualizarDistancia);


module.exports = router;