/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/obtenerDistancia
*/

const { Router } = require('express');

const { getDistancia } = require('../controllers/obtenerDistancia')
// const { check } = require('express-validator');
// const { crearHorario } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');

// ! se valida el jwt pero yo no tengo implemetado tal toca, podria hacerlo con el uid

const router = Router();

// * configuracion de la primera ruta
router.get('/:_id', getDistancia);


module.exports = router;