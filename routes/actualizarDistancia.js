/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/actualizarDistancia
*/

const { Router } = require('express');

const { actualizarDistancia } = require('../controllers/actualizarDistancia')


// ! se valida el jwt pero yo no tengo implemetado tal toca, podria hacerlo con el uid

const router = Router();

// * ruta a actualizar distancia
router.put('/:_id', actualizarDistancia);


module.exports = router;